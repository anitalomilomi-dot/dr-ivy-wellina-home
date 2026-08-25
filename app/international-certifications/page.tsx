/* eslint-disable @next/next/no-html-link-for-pages */
import type { Metadata } from "next";
import { ContentFooter, ContentHeader } from "../components/content-shell";

export const metadata: Metadata = {
  title: "國際學習與認證｜Dr. IVY × WELLINA",
  description: "認識國際芳療師與國際調香師的學習方向、課程資訊、評量申請及證書關係。",
};

const informationAreas = [
  ["01", "認證單位與官方來源", "查看單位正式名稱、官方網站，以及課程與該單位之間的關係說明。"],
  ["02", "課程與學習內容", "理解適合對象、學習階段、課程內容、時數與進修銜接方式。"],
  ["03", "評量與申請流程", "分開說明課程評量、申請條件、資料準備及各階段負責單位。"],
  ["04", "證書與資格關係", "清楚區分課程結業、認證申請、證書核發及後續專業發展。"],
];

export default function InternationalCertificationsPage() {
  return (
    <main className="certifications-page">
      <ContentHeader />

      <section className="certifications-hero">
        <div>
          <p className="section-kicker">INTERNATIONAL LEARNING</p>
          <h1><span className="title-line">從學習目標出發，</span><span className="title-line">理解國際認證的</span><em className="title-line">課程與申請路徑。</em></h1>
          <p>這裡整理國際芳療師與國際調香師的學習方向。每一項資訊會分開說明課程、評量、申請與證書關係，幫助你在選擇前看懂差異。</p>
          <div className="certifications-country-line"><small>INTERNATIONAL CONNECTIONS</small><strong>法國・英國・美國・加拿大・澳洲</strong></div>
        </div>
      </section>

      <section className="certification-pathways" aria-labelledby="pathways-title">
        <div className="certification-section-heading">
          <p className="section-kicker">TWO LEARNING PATHWAYS</p>
          <h2 id="pathways-title">先選擇想理解的專業方向。</h2>
        </div>
        <div className="certification-pathway-grid">
          <article>
            <span>01</span><small>AROMATHERAPY PATHWAY</small>
            <h3>國際芳療師認證</h3>
            <p>從芳香基礎、原料知識、實務學習到專業進修，依不同課程理解評量方式、申請條件與證書關係。</p>
            <a href="#certification-information">查看學習資訊 ↓</a>
          </article>
          <article>
            <span>02</span><small>PERFUMERY PATHWAY</small>
            <h3>國際調香師認證</h3>
            <p>從嗅覺訓練、香調結構、原料認識到調香實作，依課程方向理解評量、作品與認證申請流程。</p>
            <a href="#certification-information">查看學習資訊 ↓</a>
          </article>
        </div>
      </section>

      <section className="certification-information" id="certification-information" aria-labelledby="information-title">
        <div className="certification-section-heading">
          <p className="section-kicker soft">CLEAR &amp; TRACEABLE</p>
          <h2 id="information-title">重要資訊，分開說清楚。</h2>
          <p>課程之國際單位、評量方式、申請條件與證書核發流程，依各期正式授權及課程公告逐項說明。</p>
        </div>
        <div className="certification-information-grid">
          {informationAreas.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="certification-next-step">
        <div><p className="section-kicker">CONTINUE LEARNING</p><h2>找到方向後，<br />再選擇適合的課程。</h2></div>
        <a className="button button-deep" href="/course-guide/">進入學習導航 ↗</a>
      </section>

      <ContentFooter />
    </main>
  );
}
