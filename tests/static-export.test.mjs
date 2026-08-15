import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";
import { fileURLToPath } from "node:url";

const projectRoot = fileURLToPath(new URL("..", import.meta.url));

test("exports a host-neutral GitHub Pages homepage", async () => {
  const html = await readFile(`${projectRoot}/docs/index.html`, "utf8");
  const css = await readFile(`${projectRoot}/docs/style.css`, "utf8");

  assert.match(html, /讓香氣成為一門/);
  assert.match(html, /href="\.\/style\.css\?v=[a-f0-9]{10}"/);
  assert.match(html, /src="\.\/images\/wellina-ig-ivy\.jpg"/);
  assert.doesNotMatch(html, /\/_next\/|<script\b/i);
  assert.doesNotMatch(html, /(?:src|href)="\//);
  assert.match(css, /--morandi:\s*#93a18f/);
  assert.match(css, /--deep:\s*#283f34/);
  assert.doesNotMatch(css, /@import\s+["']tailwindcss/);
  assert.doesNotMatch(html, /治療/);

  await access(`${projectRoot}/docs/.nojekyll`);
  await access(`${projectRoot}/docs/images/lab-table.jpg`);
  await access(`${projectRoot}/docs/images/wellina-ig-ivy.jpg`);
});
