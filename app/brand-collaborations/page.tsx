/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import type { Metadata } from "next";
import { ContentFooter, ContentHeader } from "../components/content-shell";

export const metadata: Metadata = {
  title: "品牌與場域合作｜Dr. IVY",
  description: "Dr. IVY 品牌香氣、VIP 調香、企業活動、餐飲與旅宿場域合作。",
};

const collaborations = [
  { number: "01", name: "日月潭涵碧樓", type: "一日沉浸式調香課程" },
  { number: "02", name: "艾恩斯遊艇", type: "遊艇香氛體驗" },
  { number: "03", name: "澄市設計", type: "設計品牌合作" },
  { number: "04", name: "富廣建設", type: "建設品牌合作" },
  { number: "05", name: "金豐集團", type: "企業品牌合作" },
  { number: "06", name: "水灣餐廳", type: "餐飲場域香氛合作" },
];

export default function BrandCollaborationsPage() {
  return (
    <>
      <ContentHeader />
      <main className="brand-collaboration-page">
        <section className="brand-collaboration-hero" aria-labelledby="brand-collaboration-title">
          <div>
            <p className="eyebrow">BRAND &amp; VENUE COLLABORATIONS</p>
            <p className="content-breadcrumb"><a href="/">Dr. IVY 首頁</a><span>/</span>品牌合作</p>
            <h1 id="brand-collaboration-title"><span className="title-line">讓品牌故事，</span><span className="title-line">成為一段可以</span><span className="title-line">被感受的氣味記憶。</span></h1>
            <p>從 VIP 客製、企業活動到餐飲、旅宿與休閒場域，Dr. IVY 依品牌定位、參與對象與現場條件，規劃合適的香氣內容與體驗形式。</p>
          </div>
          <figure><img src="/images/wellina-ig-corporate.jpg" alt="Dr. IVY 帶領品牌與企業調香活動" /></figure>
        </section>

        <section className="featured-collaboration" aria-labelledby="featured-collaboration-title">
          <div className="featured-collaboration-heading">
            <div>
              <p className="section-kicker">FEATURED COURSE · THE LALU</p>
              <h2 id="featured-collaboration-title"><span className="title-line">日月潭涵碧樓，</span><span className="title-line">一日沉浸式調香課程。</span></h2>
            </div>
            <p>在涵碧樓的場域中，Dr. IVY 以主題講授、氣味引導與現場實作，帶領參與者循序進入調香學習。課程也保留團體交流與成果紀錄，讓完整活動成為可以回顧的品牌記憶。</p>
          </div>
          <figure className="featured-collaboration-image">
            <img src="/images/collaborations/the-lalu-immersive-perfumery-course.jpg" alt="日月潭涵碧樓一日沉浸式調香課程，包含團體合照、Dr. IVY、課程講授與學員實作紀錄" />
            <figcaption><span>THE LALU · SUN MOON LAKE</span><strong>主題講授・氣味引導・現場實作・團體交流</strong></figcaption>
          </figure>
        </section>

        <section className="collaboration-index" aria-labelledby="collaboration-index-title">
          <div className="collaboration-index-heading">
            <p className="section-kicker">SELECTED COLLABORATIONS</p>
            <h2 id="collaboration-index-title"><span className="title-line">從不同產業與場域，</span><span className="title-line">發展專屬的香氣體驗。</span></h2>
          </div>
          <div className="collaboration-index-grid">
            {collaborations.map((item) => (
              <article key={item.name}>
                <span>{item.number}</span>
                <small>{item.type}</small>
                <h3>{item.name}</h3>
              </article>
            ))}
            <article className="collaboration-index-wide">
              <span>07</span>
              <small>LEISURE &amp; HOSPITALITY</small>
              <h3>遊樂園・酒店・民宿</h3>
              <p>依活動、空間與旅宿情境，規劃適合現場的香氣互動與品牌體驗。</p>
            </article>
          </div>
        </section>

        <section className="collaboration-methods" aria-labelledby="collaboration-methods-title">
          <div>
            <p className="section-kicker soft">WAYS TO COLLABORATE</p>
            <h2 id="collaboration-methods-title"><span className="title-line">每一場合作，</span><span className="title-line">都從理解需求開始。</span></h2>
          </div>
          <div className="collaboration-method-grid">
            <article><span>01</span><h3>品牌氣味定位</h3><p>從品牌故事、空間感受與希望留下的印象，整理氣味方向。</p></article>
            <article><span>02</span><h3>活動調香體驗</h3><p>依參與對象、人數、時間與場域，規劃清楚而有質感的互動流程。</p></article>
            <article><span>03</span><h3>場域香氣企劃</h3><p>將氣味與餐飲、旅宿、休閒或接待情境連結，形成一致的體驗內容。</p></article>
          </div>
        </section>

        <section className="collaboration-contact">
          <div><p className="section-kicker">TEACHING &amp; COLLABORATION</p><h2>也可以認識 Dr. IVY 的授課與機構合作足跡。</h2></div>
          <div className="collaboration-contact-actions"><a className="button button-outline" href="/teaching-organizations/">查看授課單位 →</a><a className="button button-deep" href="https://tr.ee/HpdgvcwyGW" target="_blank" rel="noreferrer">洽談合作 ↗</a></div>
        </section>
      </main>
      <ContentFooter />
    </>
  );
}
