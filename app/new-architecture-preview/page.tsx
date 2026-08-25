/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import type { Metadata } from "next";
import ScentQuizPreview from "./ScentQuizPreview";

export const metadata: Metadata = {
  title: "探索香氣｜Dr. IVY × WELLINA",
  description: "認識講師群、國際學習、WELLINA 1965 與專屬香氣體驗。",
};

const certifications = [
  { country: "美國", code: "NAHA", name: "芳香教育學習路徑" },
  { country: "加拿大", code: "VSBAM", name: "芳香與按摩教育路徑" },
  { country: "加拿大", code: "CFA", name: "芳香專業進修路徑" },
  { country: "加拿大", code: "Joyessence", name: "芳香教育培訓路徑" },
  { country: "英國", code: "TAS", name: "芳香專業發展路徑" },
  { country: "法國", code: "AFai", name: "調香專業學習路徑" },
];

const deliverySteps = [
  ["01", "完成測驗", "回答氣味、場景與偏好問題"],
  ["02", "收到香氣輪廓", "閱讀自己的氣味方向與延伸建議"],
  ["03", "選擇專屬試香", "確認 NT$200 體驗內容與寄送說明"],
  ["04", "完成付款", "由綠界安全完成付款流程"],
  ["05", "調製與寄送", "收到通知後等待專屬試香抵達"],
];

export default function NewArchitecturePreview() {
  return (
    <main className="architecture-preview">
      <header className="architecture-preview-header">
        <a className="wordmark" href="#preview-top" aria-label="回到頁面頂端">
          <span>Dr. IVY × WELLINA</span>
          <small>芳香教育與專業合作平台</small>
        </a>
        <nav aria-label="香氣探索導覽">
          <a href="#lecturers">講師群</a>
          <a href="#certifications">國際學習</a>
          <a href="#wellina1965">WELLINA 1965</a>
          <a href="#scent-quiz">香氣測驗</a>
        </nav>
      </header>

      <section className="architecture-preview-hero" id="preview-top">
        <div>
          <p className="section-kicker">NEW JOURNEYS</p>
          <h1><span className="title-line">從一次相遇，</span><span className="title-line">走進更完整的</span><em className="title-line">香氣探索。</em></h1>
          <p>讓訪客看見專業講師、理解國際學習方向、認識 WELLINA 1965，也能透過互動測驗找到自己的香氣入口。</p>
          <a className="button button-deep" href="#scent-quiz">先體驗香氣測驗</a>
        </div>
        <figure><img src="/images/lab-table.jpg" alt="WELLINA 自然明亮的調香學習桌面" /></figure>
      </section>

      <section className="lecturer-preview" id="lecturers" aria-labelledby="lecturer-title">
        <div className="preview-section-heading">
          <div><p className="section-kicker">MEET THE TEAM</p><h2 id="lecturer-title">讓每一位專業講師，<br />都有被看見的位置。</h2></div>
          <p>依講師身分、專業背景與授課方向整理，讓學員與合作單位更容易找到適合的人。</p>
        </div>
        <div className="lecturer-layout">
          <article className="lecturer-feature">
            <img src="/images/ivy-portrait.jpg" alt="Dr. IVY 人物照" />
            <div><small>ACADEMIC DIRECTOR</small><h3>Dr. IVY</h3><p>芳香教育、調香實作、講師培育與專業合作。</p><span>認識 Dr. IVY →</span></div>
          </article>
          <div className="lecturer-categories">
            <article><span>01</span><div><small>CORE FACULTY</small><h3>WELLINA 核心講師</h3><p>呈現教學專長、授課區域與合作方向。</p></div></article>
            <article><span>02</span><div><small>CROSS-DISCIPLINARY</small><h3>跨專業背景講師</h3><p>心理、護理、社工、教育等不同專業背景。</p></div></article>
            <article><span>03</span><div><small>ALUMNI NETWORK</small><h3>培訓講師與專業校友</h3><p>認識不同專業背景、學習歷程與分享主題。</p></div></article>
          </div>
        </div>
      </section>

      <section className="certification-preview" id="certifications" aria-labelledby="certification-title">
        <div className="preview-section-heading light-heading">
          <div><p className="section-kicker soft">INTERNATIONAL LEARNING</p><h2 id="certification-title">從學習目標出發，<br />看懂國際進修方向。</h2></div>
          <p>每一個單位都會獨立說明課程、評量、申請與證書流程，讓學員理解差異後再選擇。</p>
        </div>
        <div className="certification-grid">
          {certifications.map((item, index) => (
            <article key={item.code}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <small>{item.country}</small>
              <h3>{item.code}</h3>
              <p>{item.name}</p>
              <i>了解學習方向 →</i>
            </article>
          ))}
        </div>
        <p className="certification-note">課程內容、評量方式與證書資訊，請以各期課程公告為準。</p>
      </section>

      <section className="wellina1965-preview" id="wellina1965" aria-labelledby="wellina-title">
        <div className="wellina1965-images">
          <img className="wellina-large" src="/images/wellina-ig-flower.jpg" alt="WELLINA 自然花材與生活美感" />
          <img className="wellina-small" src="/images/wellina-hands.jpg" alt="芳香課程中的手作互動" />
        </div>
        <div className="wellina1965-copy">
          <p className="section-kicker">WELLINA 1965</p>
          <h2 id="wellina-title">把香氣知識，<br />帶回日常生活。</h2>
          <p>從品牌故事、香氣理念、日常選品到課程體驗，讓喜歡 WELLINA 的人能繼續閱讀、學習與選購。</p>
          <div className="wellina-paths">
            <a href="https://www.instagram.com/wellina1965/" target="_blank" rel="noreferrer"><span>01</span><strong>品牌故事與日常影像</strong><i>↗</i></a>
            <a href="/wellina-products/"><span>02</span><strong>精選產品與使用說明</strong><i>→</i></a>
            <a href="#scent-quiz"><span>03</span><strong>從測驗找到香氣方向</strong><i>↓</i></a>
          </div>
        </div>
      </section>

      <section className="scent-quiz-preview" id="scent-quiz" aria-labelledby="scent-quiz-title">
        <div className="preview-section-heading">
          <div><p className="section-kicker">DISCOVER YOUR SCENT</p><h2 id="scent-quiz-title">十四個氣味面向，<br />描繪你的香氣輪廓。</h2></div>
          <p>從主調、尾韻、甜度、溫度、質地、擴散距離、停留時間與使用情境，得到清楚、完整的個人香氣建議。</p>
        </div>
        <ScentQuizPreview />
      </section>

      <section className="scent-delivery-preview" id="scent-delivery" aria-labelledby="delivery-title">
        <div className="delivery-intro">
          <p className="section-kicker soft">NT$200 SCENT EXPERIENCE</p>
          <h2 id="delivery-title">把測驗結果，<br />變成一份可以收到的香氣。</h2>
          <p>完成測驗後，可選擇 NT$200 專屬試香體驗；付款前會清楚看見試香形式、運費、製作天數與使用方式。</p>
        </div>
        <div className="delivery-steps">
          {deliverySteps.map(([number, title, copy]) => (
            <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>
          ))}
        </div>
        <div className="delivery-summary">
          <div><small>PERSONAL SCENT EXPERIENCE</small><strong>NT$200</strong><p>香氣偏好測驗＋專屬試香寄送</p></div>
          <a className="button button-cream" href="#scent-quiz">回到測驗確認喜好 ↑</a>
        </div>
      </section>

      <footer className="architecture-preview-footer">
        <div><strong>Dr. IVY × WELLINA</strong><span>芳香教育與專業合作平台</span></div>
        <p>講師群・國際學習・WELLINA 1965・專屬香氣體驗</p>
      </footer>
    </main>
  );
}
