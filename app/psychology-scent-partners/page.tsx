/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import type { Metadata } from "next";
import { ContentFooter, ContentHeader } from "../components/content-shell";

export const metadata: Metadata = {
  title: "心理專業合作與香氣探索據點｜Dr. IVY",
  description: "認識 Dr. IVY 與心理專業機構合作的香氣探索據點，涵蓋台北、台南、嘉義、高雄與屏東。",
};

const partnerRegions = [
  { city: "台北", en: "TAIPEI", partners: ["心日上心理諮商所"] },
  { city: "台南", en: "TAINAN", partners: ["寬欣心理治療所", "芯寬欣心理治療所", "慈恩心理治療所"] },
  { city: "嘉義", en: "CHIAYI", partners: ["欣明心理成長中心"] },
  { city: "高雄", en: "KAOHSIUNG", partners: ["繪星心理治療所", "禾好心理治療所"] },
  { city: "屏東", en: "PINGTUNG", partners: ["牧陽心理治療所", "啟初心理治療所"] },
];

export default function PsychologyScentPartnersPage() {
  return (
    <>
      <ContentHeader />
      <main className="psychology-partners-page">
        <section className="psychology-partners-hero" aria-labelledby="psychology-partners-title">
          <div>
            <p className="eyebrow">PSYCHOLOGY PARTNERS &amp; SCENT EXPLORATION</p>
            <p className="content-breadcrumb"><a href="/">Dr. IVY 首頁</a><span>/</span>香氣探索據點</p>
            <h1 id="psychology-partners-title"><span className="title-line">讓香氣探索，</span><span className="title-line">走進心理專業場域。</span></h1>
            <p>Dr. IVY 與心理專業機構共同規劃芳香教育與氣味探索內容，讓不同地區的參與者，能在熟悉的專業場域中認識香氣、感受氣味，並延伸更多學習可能。</p>
          </div>
          <figure><img src="/images/dr-ivy-botanical-hero-v1.png" alt="自然光下的植物、香氣素材與學習桌景" /></figure>
        </section>

        <section className="psychology-partners-directory" aria-labelledby="psychology-partners-directory-title">
          <div className="psychology-partners-heading">
            <p className="section-kicker">SCENT EXPLORATION LOCATIONS</p>
            <h2 id="psychology-partners-directory-title"><span className="title-line">從北到南，</span><span className="title-line">找到離你更近的香氣探索據點。</span></h2>
            <p>各據點的活動內容、開放日期與參與方式，請以各機構及 Dr. IVY 的最新公告為準。</p>
          </div>

          <div className="psychology-region-grid">
            {partnerRegions.map((region, index) => (
              <section className="psychology-region-card" key={region.city}>
                <header><span>{String(index + 1).padStart(2, "0")}</span><div><small>{region.en}</small><h3>{region.city}</h3></div></header>
                <ul>{region.partners.map((partner) => <li key={partner}>{partner}</li>)}</ul>
              </section>
            ))}
          </div>
        </section>

        <section className="psychology-partners-contact">
          <div><p className="section-kicker soft">COLLABORATE WITH DR. IVY</p><h2><span className="title-line">讓專業場域與香氣教育，</span><span className="title-line">展開適合彼此的合作。</span></h2></div>
          <div className="collaboration-contact-actions"><a className="button button-cream" href="/teaching-organizations/">查看授課合作 →</a><a className="button button-cream" href="https://tr.ee/HpdgvcwyGW" target="_blank" rel="noreferrer">洽詢合作 ↗</a></div>
        </section>
      </main>
      <ContentFooter />
    </>
  );
}
