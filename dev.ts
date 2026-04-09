// Development server with hot reload
import { serve } from "bun";
import { readFileSync, existsSync, watch } from "fs";

const reloadClients = new Set<ReadableStreamDefaultController>();

let rebuildTimer: Timer | null = null;

async function rebuild(): Promise<void> {
  console.log("Rebuilding...");
  const setup = Bun.spawn(["bun", "build-simple.ts"], { stdout: "inherit", stderr: "inherit" });
  await setup.exited;
  const bundle = Bun.spawn(
    ["bun", "build", "src/index.tsx", "--outdir", "build", "--target", "browser", "--minify"],
    { stdout: "inherit", stderr: "inherit" }
  );
  await bundle.exited;
  for (const controller of reloadClients) {
    try {
      controller.enqueue("data: reload\n\n");
    } catch {}
  }
}

// Watch src/ for changes, debounce rapid saves
watch("src", { recursive: true }, () => {
  if (rebuildTimer) clearTimeout(rebuildTimer);
  rebuildTimer = setTimeout(rebuild, 100);
});

const contentTypes: Record<string, string> = {
  html: 'text/html',
  js: 'text/javascript',
  css: 'text/css',
  png: 'image/png',
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  svg: 'image/svg+xml',
  ico: 'image/x-icon',
};

const reloadScript = `<script>
  new EventSource('/__reload').onmessage = () => location.reload();
</script>`;

const server = serve({
  port: 3001,
  async fetch(req: Request): Promise<Response> {
    const url = new URL(req.url);
    let path = url.pathname;

    // SSE endpoint for live reload
    if (path === "/__reload") {
      let controller!: ReadableStreamDefaultController;
      const stream = new ReadableStream({
        start(c) { controller = c; reloadClients.add(controller); },
        cancel() { reloadClients.delete(controller); },
      });
      return new Response(stream, {
        headers: {
          "Content-Type": "text/event-stream",
          "Cache-Control": "no-cache",
        },
      });
    }

    if (path === "/") path = "/index.html";

    const buildPath = `./build${path}`;
    if (existsSync(buildPath)) {
      const ext = path.split('.').pop() ?? '';
      const contentType = contentTypes[ext] ?? 'text/plain';

      if (ext === 'html') {
        const html = readFileSync(buildPath, 'utf8').replace('</body>', `${reloadScript}</body>`);
        return new Response(html, { headers: { 'Content-Type': contentType } });
      }

      return new Response(readFileSync(buildPath), { headers: { 'Content-Type': contentType } });
    }

    return new Response('Not Found', { status: 404 });
  },
});

console.log(`Development server running at http://localhost:${server.port}`);
