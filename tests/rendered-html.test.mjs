import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const blockedPublicClaims = /治療(?!所)|治癒|療癒|處方|療程|醫療團隊研發|改善健康|世界第一|全球最佳|五國\s*16\s*項|2,?000\s*位個案/;

test("scent results translate internal distance and duration labels into natural public language", async () => {
  const source = await readFile(new URL("../app/new-architecture-preview/ScentQuizPreview.tsx", import.meta.url), "utf8");
  assert.match(source, /在自然靠近時被柔和感受到/);
  assert.match(source, /以從容的節奏陪伴數個小時/);
  assert.doesNotMatch(source, /以\{outcome\.traits\.intensity\}陪伴/);
});

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the Dr. IVY homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Dr\. IVY｜芳香教育與專業合作平台/);
  assert.match(html, /國際芳香教育・調香師培訓・專業講師職人培育/);
  assert.match(html, /讓香氣成為一門/);
  assert.match(html, /課程學習/);
  assert.match(html, /影音花絮/);
  assert.match(html, /知識資源/);
  assert.match(html, /合作服務/);
  assert.match(html, /28 年/);
  assert.match(html, /3,000 場次/);
  assert.match(html, /十四個氣味面向[\s\S]*找到最接近你的[\s\S]*專屬香氣輪廓/);
  assert.match(html, /15種香調結果/);
  assert.match(html, /國際芳療師認證/);
  assert.match(html, /國際調香師認證/);
  assert.match(html, /法國・英國・美國・加拿大・澳洲/);
  assert.match(html, /Dr\. IVY[\s\S]*形象影片/);
  assert.match(html, /youtube\.com\/watch\?v=zB0yH0vCjmE/);
  assert.match(html, /wellina-official-film\.jpg/);
  assert.match(html, /dr-ivy-botanical-hero-v1\.png/);
  assert.doesNotMatch(html, /youtube\.com\/embed\/zB0yH0vCjmE/);
  assert.doesNotMatch(html, /instagram\.com\/reel\/Db7Qwb4SiWU\/embed/);
  assert.doesNotMatch(html, /wellina-ig-product\.jpg|product-table\.jpg/);
  assert.match(html, /\/wellina-products\//);
  assert.doesNotMatch(html, /黃敏菁博士|Dr\. Ivy/);
  assert.doesNotMatch(html, blockedPublicClaims);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});

test("keeps WELLINA story and product imagery on one dedicated page", async () => {
  const response = await render("/wellina-products");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /WELLINA 品牌與產品/);
  assert.match(html, /THE WELLINA STORY/);
  assert.match(html, /wellina-ig-product\.jpg/);
  assert.match(html, /product-table\.jpg/);
  assert.match(html, /瀏覽產品/);
  assert.match(html, /相關產品介紹/);
  assert.doesNotMatch(html, blockedPublicClaims);
});

test("presents Dr. IVY brand and venue collaborations without unsupported claims", async () => {
  const response = await render("/brand-collaborations");
  assert.equal(response.status, 200);
  const html = await response.text();
  for (const name of ["涵碧樓", "艾恩斯遊艇", "澄市設計", "富廣建設", "金豐集團", "水灣餐廳", "遊樂園", "酒店", "民宿"]) {
    assert.match(html, new RegExp(name));
  }
  assert.match(html, /日月潭涵碧樓/);
  assert.match(html, /一日沉浸式調香課程/);
  assert.match(html, /the-lalu-immersive-perfumery-course\.jpg/);
  assert.doesNotMatch(html, blockedPublicClaims);
  assert.doesNotMatch(html, /世界級|頂級唯一|保證|提升業績/);
});

test("presents teaching organizations in clear professional groups", async () => {
  const response = await render("/teaching-organizations");
  assert.equal(response.status, 200);
  const html = await response.text();
  for (const name of [
    "成大醫院", "高雄醫學大學", "高雄醫學大學附設中和紀念醫院", "若瑟醫院", "聖馬爾定醫院", "嘉義基督教醫院", "大安婦幼醫院",
    "國立嘉義大學", "國立臺南護理專科學校", "樹德科技大學", "台南應用科技大學", "臺北城市科技大學", "國立臺中科技大學",
    "金豐集團", "唐榮集團", "台灣電力公司", "中華電信", "嘉義市家庭教育中心", "嘉義縣家庭教育中心", "臺南市家庭教育中心",
    "臺南家扶中心", "南高雄家扶中心", "嘉義市家扶中心", "LOMILOMI 國際芳香保健照護協會", "愛無限協會",
    "國際獅子會", "國際扶輪社", "青商會", "跨業交流會", "台中二代會",
  ]) assert.match(html, new RegExp(name));
  assert.match(html, /大專校院・高中・國中・國小/);
  assert.match(html, /28 年/);
  assert.match(html, /3,000 場次/);
  assert.doesNotMatch(html, blockedPublicClaims);
  assert.doesNotMatch(html, /提升健康|保證成效|醫療效果/);
});

test("presents psychology partners and scent exploration locations", async () => {
  const response = await render("/psychology-scent-partners");
  assert.equal(response.status, 200);
  const html = await response.text();
  for (const name of [
    "心日上心理諮商所", "寬欣心理治療所", "芯寬欣心理治療所", "欣明心理成長中心", "慈恩心理治療所",
    "繪星心理治療所", "禾好心理治療所", "牧陽心理治療所", "啟初心理治療所",
  ]) assert.match(html, new RegExp(name));
  for (const city of ["台北", "台南", "嘉義", "高雄", "屏東"]) assert.match(html, new RegExp(city));
  assert.match(html, /心理專業合作與香氣探索據點/);
  assert.doesNotMatch(html, blockedPublicClaims);
  assert.doesNotMatch(html, /診斷|保證|改善心理|心理效果/);
});

test("presents the nine-member cross-disciplinary lecturer team", async () => {
  const response = await render("/team");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /團隊校長・最高指導/);
  assert.match(html, /Dr\. IVY/);
  for (const name of ["林恩仕", "鄭皓仁", "蔡函潔"]) assert.match(html, new RegExp(name));
  const names = ["唐心如", "鍾佳芬", "馮氏秋芳", "劉鎔瑄", "劉乃榕", "陳曉雯", "王愉晴", "楊心柔", "孫昀彤"];
  for (const name of names) {
    assert.match(html, new RegExp(name));
  }
  const positions = names.map((name) => html.indexOf(`<h3>${name}</h3>`));
  assert.deepEqual([...positions].sort((a, b) => a - b), positions);
  assert.doesNotMatch(html, /許舒婷|Shu-Ting Hsu/);
  assert.match(html, /護理教育/);
  assert.match(html, /社會工作與社區教育/);
  assert.doesNotMatch(html, blockedPublicClaims);
  assert.doesNotMatch(html, /證書號|證照號|RES(PERA|PERA)|全球最佳/);
  const orderedNames = ["Dr. IVY", "林恩仕", "鄭皓仁", "蔡函潔", ...names];
  const hierarchyPositions = orderedNames.map((name) => html.indexOf(name));
  assert.deepEqual(hierarchyPositions, [...hierarchyPositions].sort((a, b) => a - b));
});

test("server-renders the dedicated 14-question scent journey", async () => {
  const response = await render("/scent-quiz");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /專屬香氣測驗/);
  assert.match(html, /測驗進度 1 \/ 14/);
  assert.match(html, /十四個氣味面向/);
  assert.match(html, /十五種香調之一/);
  assert.match(html, /專屬試香尚未開放訂購、付款與寄送/);
  assert.match(html, /本次結果不會自動傳送給 Dr. IVY/);
  assert.doesNotMatch(html, /<form|送出寄送申請|customerName|recipientPhone/);
  assert.doesNotMatch(html, /S09-A|芳樟醇|乙酸沉香酯/);
  assert.doesNotMatch(html, blockedPublicClaims);
});

test("keeps classroom cards separate from the scent quiz", async () => {
  const response = await render("/");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /href="\/aroma-card\/"/);
  assert.match(html, /製作我的香氛卡/);
  const scentSection = html.match(/<section class="home-scent-feature"[\s\S]*?<\/section>/)?.[0];
  assert.ok(scentSection);
  assert.doesNotMatch(scentSection, /製作我的香氛卡|classroom-aroma/);
});

test("keeps one international certification page ready for verified information", async () => {
  const response = await render("/international-certifications");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /國際芳療師認證/);
  assert.match(html, /國際調香師認證/);
  assert.match(html, /認證單位與官方來源/);
  assert.match(html, /課程與學習內容/);
  assert.match(html, /評量與申請流程/);
  assert.match(html, /證書與資格關係/);
  assert.doesNotMatch(html, /可授課、可考評、可發證|VSBAM|NAHA|CFA|AFai/);
  assert.doesNotMatch(html, blockedPublicClaims);
});

test("server-renders the course navigator and searchable knowledge pages", async () => {
  const paths = [
    "/course-guide",
    "/essential-oil-choice",
    "/become-aromatherapist",
    "/lavender-essential-oil",
    "/eucalyptus-essential-oil",
  ];

  for (const pathname of paths) {
    const response = await render(pathname);
    assert.equal(response.status, 200, pathname);
    const html = await response.text();
    assert.match(html, /Dr\. IVY × WELLINA/);
    assert.match(html, /芳香教育與專業合作平台/);
    assert.match(html, /知識資源|幫我選課|學習導航/);
    assert.doesNotMatch(html, blockedPublicClaims);
  }
});

test("each essential-oil page shows a verified botanical image and journal source", async () => {
  const pages = [
    ["/lavender-essential-oil", "lavandula-angustifolia.jpg", "33920647"],
    ["/tea-tree-essential-oil", "melaleuca-alternifolia.jpg", "35214891"],
    ["/peppermint-essential-oil", "mentha-piperita.jpg", "19768994"],
    ["/rose-essential-oil", "rosa-damascena.jpg", "39323629"],
    ["/eucalyptus-essential-oil", "eucalyptus-globulus.jpg", "36903935"],
  ];

  for (const [pathname, image, pmid] of pages) {
    const response = await render(pathname);
    assert.equal(response.status, 200, pathname);
    const html = await response.text();
    assert.match(html, new RegExp(image));
    assert.match(html, /Wikimedia Commons/);
    assert.match(html, /國際期刊延伸閱讀/);
    assert.match(html, new RegExp(`pubmed\\.ncbi\\.nlm\\.nih\\.gov/${pmid}`));
    assert.doesNotMatch(html, blockedPublicClaims);
  }
});


test("renders independent classroom scan and production areas", async () => {
  const response = await render("/aroma-card");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /classroom-aroma-card-qr.png/);
  assert.match(html, /id="classroom-scan"/);
  assert.match(html, /id="classroom-studio"/);
  assert.match(html, /href="https:\/\/ivy-aroma-card-9x2k4m\.pages\.dev\/"/);
  assert.match(html, /進入我的香氛卡製作工具/);
  assert.match(html, /每支精油的滴數/);
  assert.doesNotMatch(html, /十五種香調之一|送出寄送申請/);
});
