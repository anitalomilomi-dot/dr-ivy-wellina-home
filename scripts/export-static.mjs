import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { build as viteBuild } from "vite";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputDir = path.join(projectRoot, "docs");
const workerUrl = pathToFileURL(path.join(projectRoot, "dist/server/index.js"));
workerUrl.searchParams.set("static-export", `${Date.now()}`);

const { default: worker } = await import(workerUrl.href);
const contentSlugs = [
  "essential-oil-choice",
  "essential-oil-diffusing",
  "essential-oil-perfume",
  "become-aromatherapist",
  "become-perfumer",
  "compare-aromatherapy-courses",
  "course-guide",
  "lavender-essential-oil",
  "tea-tree-essential-oil",
  "peppermint-essential-oil",
  "rose-essential-oil",
  "eucalyptus-essential-oil",
  "international-certifications",
  "wellina-products",
  "brand-collaborations",
  "teaching-organizations",
  "psychology-scent-partners",
  "scent-quiz",
  "aroma-card",
  "team",
];

const staticRoutes = [
  { requestPath: "/", outputPath: "index.html", relativePrefix: "./" },
  ...contentSlugs.map((slug) => ({
    requestPath: `/${slug}`,
    outputPath: `${slug}/index.html`,
    relativePrefix: "../",
  })),
];

const sourceCss = await readFile(path.join(projectRoot, "app/globals.css"), "utf8");
const portableCss = sourceCss
  .replace(/^@import\s+["']tailwindcss["'];?\s*/m, "")
  .replace(/url\((["'])\/images\//g, "url($1./images/");
const styleVersion = createHash("sha256").update(portableCss).digest("hex").slice(0, 10);

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });
await cp(path.join(projectRoot, "public/images"), path.join(outputDir, "images"), {
  recursive: true,
});
await cp(path.join(projectRoot, "public/brochures"), path.join(outputDir, "brochures"), {
  recursive: true,
});
await cp(
  path.join(projectRoot, "public/presentations"),
  path.join(outputDir, "presentations"),
  { recursive: true },
);
await cp(path.join(projectRoot, "public/favicon.svg"), path.join(outputDir, "favicon.svg"));
await writeFile(path.join(outputDir, "style.css"), portableCss, "utf8");
await writeFile(path.join(outputDir, ".nojekyll"), "", "utf8");

await viteBuild({
  configFile: false,
  root: projectRoot,
  publicDir: false,
  logLevel: "warn",
  define: { "process.env.NODE_ENV": JSON.stringify("production") },
  build: {
    outDir: outputDir,
    emptyOutDir: false,
    minify: "esbuild",
    rollupOptions: {
      input: path.join(projectRoot, "scripts/scent-quiz-static-entry.tsx"),
      output: {
        format: "iife",
        entryFileNames: "scent-quiz.js",
        inlineDynamicImports: true,
      },
    },
  },
});

const scentQuizScript = await readFile(path.join(outputDir, "scent-quiz.js"));
const scentQuizVersion = createHash("sha256").update(scentQuizScript).digest("hex").slice(0, 10);

for (const route of staticRoutes) {
  const response = await worker.fetch(
    new Request(`http://localhost${route.requestPath}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );

  if (!response.ok) {
    throw new Error(`${route.requestPath} render failed with status ${response.status}`);
  }

  // GitHub Pages and future hosts receive dependency-free documents. Native
  // anchors and details elements keep the navigation usable without scripts.
  let html = (await response.text())
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<link\b[^>]*rel=["']modulepreload["'][^>]*\/?\s*>/gi, "")
    .replace(/<link\b[^>]*rel=["']stylesheet["'][^>]*\/?\s*>/gi, "")
    .replace(/<link\b[^>]*data-rsc-css-href[^>]*\/?\s*>/gi, "")
    .replace(/href=["']\/([^"']*)["']/g, `href="${route.relativePrefix}$1"`)
    .replace(/src=["']\/([^"']*)["']/g, `src="${route.relativePrefix}$1"`)
    .replace(
      "</head>",
      `<link rel="icon" href="${route.relativePrefix}favicon.svg"/><link rel="stylesheet" href="${route.relativePrefix}style.css?v=${styleVersion}"/></head>`,
    );

  if (route.requestPath === "/scent-quiz") {
    html = html.replace(
      "</body>",
      `<script defer src="${route.relativePrefix}scent-quiz.js?v=${scentQuizVersion}"></script></body>`,
    );
  }

  const target = path.join(outputDir, route.outputPath);
  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(target, html, "utf8");
}

console.log(`Portable website exported ${staticRoutes.length} pages to ${outputDir}`);
