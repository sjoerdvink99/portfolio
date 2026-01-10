// Simple development server
import { serve } from "bun";
import { readFileSync, existsSync } from "fs";

const server = serve({
  port: 3001,
  async fetch(req) {
    const url = new URL(req.url);
    let path = url.pathname;

    // Default to index.html
    if (path === "/") path = "/index.html";

    // Try to serve from build directory first
    const buildPath = `./build${path}`;
    if (existsSync(buildPath)) {
      const file = readFileSync(buildPath);
      const ext = path.split('.').pop();
      const contentType = {
        'html': 'text/html',
        'js': 'text/javascript',
        'css': 'text/css',
        'png': 'image/png',
        'jpg': 'image/jpeg',
        'jpeg': 'image/jpeg',
        'svg': 'image/svg+xml',
        'ico': 'image/x-icon'
      }[ext] || 'text/plain';

      return new Response(file, {
        headers: { 'Content-Type': contentType }
      });
    }

    return new Response('Not Found', { status: 404 });
  }
});

console.log(`🚀 Development server running at http://localhost:${server.port}`);