// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const PROJECT_PATHS = [
  "/work/kinetik",
  "/work/serenia",
  "/work/launch-mobility",
  "/work/tul",
  "/work/snappr-ai",
  "/work/mercado-pago",
  "/work/claude-figma",
  "/work/ontop",
  "/work/commdesk",
  "/work/angelemus",
];

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const base = isGitHubPages ? "/snap-and-show-tool/" : "/";
const routerBasepath = isGitHubPages ? "/snap-and-show-tool" : undefined;

export default defineConfig({
  // GitHub Pages is static-only. Skip Nitro's Cloudflare worker so TanStack
  // Start can prerender HTML into dist/client.
  nitro: isGitHubPages ? false : undefined,
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    ...(routerBasepath ? { router: { basepath: routerBasepath } } : {}),
    spa: {
      enabled: true,
    },
    prerender: {
      enabled: true,
      crawlLinks: true,
      failOnError: true,
    },
    pages: [{ path: "/" }, ...PROJECT_PATHS.map((path) => ({ path }))],
  },
  vite: {
    base,
  },
});
