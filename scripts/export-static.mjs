import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputDir = path.join(projectRoot, "docs");
const workerUrl = pathToFileURL(path.join(projectRoot, "dist/server/index.js"));
workerUrl.searchParams.set("static-export", `${Date.now()}`);

const { default: worker } = await import(workerUrl.href);
const response = await worker.fetch(
  new Request("http://localhost/", { headers: { accept: "text/html" } }),
  { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
  { waitUntil() {}, passThroughOnException() {} },
);

if (!response.ok) {
  throw new Error(`Homepage render failed with status ${response.status}`);
}

let html = await response.text();

const sourceCss = await readFile(path.join(projectRoot, "app/globals.css"), "utf8");
const portableCss = sourceCss
  .replace(/^@import\s+["']tailwindcss["'];?\s*/m, "")
  .replace(/url\((["'])\/images\//g, "url($1./images/");
const styleVersion = createHash("sha256").update(portableCss).digest("hex").slice(0, 10);

// GitHub Pages and future hosts receive a plain, dependency-free document.
// The homepage currently has no JavaScript-only interactions, so native HTML
// behavior remains intact after Vinext runtime scripts are removed.
html = html
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
  .replace(/<link\b[^>]*rel=["']modulepreload["'][^>]*\/?\s*>/gi, "")
  .replace(/<link\b[^>]*rel=["']stylesheet["'][^>]*\/?\s*>/gi, "")
  .replace(/<link\b[^>]*data-rsc-css-href[^>]*\/?\s*>/gi, "")
  .replace(/href=["']\/([^"']*)["']/g, 'href="./$1"')
  .replace(/src=["']\/([^"']*)["']/g, 'src="./$1"')
  .replace(
    "</head>",
    `<link rel="icon" href="./favicon.svg"/><link rel="stylesheet" href="./style.css?v=${styleVersion}"/></head>`,
  );

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });
await cp(path.join(projectRoot, "public/images"), path.join(outputDir, "images"), {
  recursive: true,
});
await cp(path.join(projectRoot, "public/favicon.svg"), path.join(outputDir, "favicon.svg"));
await writeFile(path.join(outputDir, "index.html"), html, "utf8");
await writeFile(path.join(outputDir, "style.css"), portableCss, "utf8");
await writeFile(path.join(outputDir, ".nojekyll"), "", "utf8");

console.log(`Portable website exported to ${outputDir}`);
