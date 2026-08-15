import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";
import { fileURLToPath } from "node:url";

const projectRoot = fileURLToPath(new URL("..", import.meta.url));

test("exports a host-neutral GitHub Pages homepage", async () => {
  const html = await readFile(`${projectRoot}/docs/index.html`, "utf8");
  const css = await readFile(`${projectRoot}/docs/style.css`, "utf8");

  assert.match(html, /讓香氣，成為一種/);
  assert.match(html, /href="\.\/style\.css"/);
  assert.match(html, /src="\.\/images\/ivy-portrait\.jpg"/);
  assert.doesNotMatch(html, /\/_next\/|<script\b/i);
  assert.doesNotMatch(html, /(?:src|href)="\//);
  assert.match(css, /url\('\.\/images\/lab-table\.jpg'\)/);
  assert.doesNotMatch(css, /@import\s+["']tailwindcss/);

  await access(`${projectRoot}/docs/.nojekyll`);
  await access(`${projectRoot}/docs/images/lab-table.jpg`);
});
