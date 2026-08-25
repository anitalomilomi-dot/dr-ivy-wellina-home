import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";
import { fileURLToPath } from "node:url";

const projectRoot = fileURLToPath(new URL("..", import.meta.url));
const blockedPublicClaims = /治療|治癒|療癒|處方|療程|醫療團隊研發|改善健康|世界第一|全球最佳|五國\s*16\s*項|2,?000\s*位個案/;

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
  assert.doesNotMatch(html, blockedPublicClaims);

  await access(`${projectRoot}/docs/.nojekyll`);
  await access(`${projectRoot}/docs/images/lab-table.jpg`);
  await access(`${projectRoot}/docs/images/wellina-ig-ivy.jpg`);
  await access(`${projectRoot}/docs/team/index.html`);
  await access(`${projectRoot}/docs/images/team/hsin-ju-tang.jpg`);
  await access(`${projectRoot}/docs/images/team/liu-nai-rong.jpg`);
  await access(`${projectRoot}/docs/images/team/chen-hsiao-wen.jpg`);
  await access(`${projectRoot}/docs/images/team/wang-yu-ching.jpg`);
  await access(`${projectRoot}/docs/images/team/yang-hsin-jou.jpg`);
  await assert.rejects(access(`${projectRoot}/docs/images/team/shu-ting-hsu.jpg`));
});

test("exports the course navigator, six search entrances and five oil notes", async () => {
  const slugs = [
    "course-guide",
    "essential-oil-choice",
    "essential-oil-diffusing",
    "essential-oil-perfume",
    "become-aromatherapist",
    "become-perfumer",
    "compare-aromatherapy-courses",
    "lavender-essential-oil",
    "tea-tree-essential-oil",
    "peppermint-essential-oil",
    "rose-essential-oil",
    "eucalyptus-essential-oil",
  ];

  for (const slug of slugs) {
    const html = await readFile(`${projectRoot}/docs/${slug}/index.html`, "utf8");
    assert.match(html, /href="\.\.\/style\.css\?v=[a-f0-9]{10}"/, slug);
    assert.doesNotMatch(html, /\/_next\/|<script\b/i, slug);
    assert.doesNotMatch(html, /(?:src|href)="\//, slug);
    assert.doesNotMatch(html, blockedPublicClaims, slug);
  }

  const homepage = await readFile(`${projectRoot}/docs/index.html`, "utf8");
  assert.match(homepage, /href="\.\/course-guide\/"/);
  assert.match(homepage, /href="\.\/essential-oil-choice\/"/);
  assert.match(homepage, /href="\.\/lavender-essential-oil\/"/);

  const courseGuide = await readFile(`${projectRoot}/docs/course-guide/index.html`, "utf8");
  assert.match(courseGuide, /現在的你，[\s\S]*最接近哪一種/);
  assert.match(courseGuide, /href="\.\.\/essential-oil-choice\/"/);

  const lavender = await readFile(`${projectRoot}/docs/lavender-essential-oil/index.html`, "utf8");
  assert.match(lavender, /Lavandula angustifolia Mill\./);
  assert.match(lavender, /Kew Science/);
});

test("keeps six content types as independent templates", async () => {
  const templates = await readFile(`${projectRoot}/app/templates/independent-content-templates.tsx`, "utf8");
  const oilTemplate = await readFile(`${projectRoot}/app/templates/oil-guide-template.tsx`, "utf8");
  assert.match(templates, /CoursePageTemplate/);
  assert.match(templates, /ArticlePageTemplate/);
  assert.match(oilTemplate, /OilGuideTemplate/);
  assert.match(templates, /StudentStoryPageTemplate/);
  assert.match(templates, /ActivityMediaPageTemplate/);
  assert.match(templates, /TeacherAlumniPageTemplate/);
});
