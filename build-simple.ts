// Simple build script
import { copyFileSync, mkdirSync, existsSync, readdirSync, statSync, writeFileSync } from 'fs';
import { join } from 'path';

// Copy directory recursively
function copyDir(src: string, dest: string): void {
  if (!existsSync(dest)) {
    mkdirSync(dest, { recursive: true });
  }

  const entries = readdirSync(src);
  for (const entry of entries) {
    const srcPath = join(src, entry);
    const destPath = join(dest, entry);

    if (statSync(srcPath).isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      copyFileSync(srcPath, destPath);
    }
  }
}

// Create build directory
if (!existsSync('build')) {
  mkdirSync('build', { recursive: true });
}

// Copy public folder
if (existsSync('public')) {
  copyDir('public', 'build');
}

// Copy src assets
if (existsSync('src/assets')) {
  copyDir('src/assets', 'build/assets');
}

// Create simple index.html for local development
const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <link rel="icon" href="favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Portfolio of Sjoerd Vink" />
    <title>Sjoerd Vink Portfolio</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        html { scroll-behavior: smooth; }
    </style>
</head>
<body>
    <div id="root"></div>
    <script src="index.js"></script>
</body>
</html>`;

// Create deployment version for GitHub Pages
const deployHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <link rel="icon" href="/portfolio/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Portfolio of Sjoerd Vink" />
    <title>Sjoerd Vink Portfolio</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        html { scroll-behavior: smooth; }
    </style>
</head>
<body>
    <div id="root"></div>
    <script src="/portfolio/index.js"></script>
</body>
</html>`;

// Use deployment version if we're building for deploy
const isDeploy = process.argv.includes('--deploy');
writeFileSync('build/index.html', isDeploy ? deployHtml : html);
console.log('Build setup complete!');
