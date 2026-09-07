/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { ContentFooter, ContentHeader } from "../components/content-shell";
import ScentQuizPreview from "../new-architecture-preview/ScentQuizPreview";

export const metadata: Metadata = {
  title: "專屬香氣測驗｜Dr. IVY × WELLINA",
  description: "從十四個氣味面向探索自己的香氣輪廓，取得專屬香調、香氣圖卡與香氣編號。",
};

const deliverySteps = [
  ["01", "完成測驗", "回答十四個生活化的氣味偏好問題。"],
  ["02", "保存香氣編號", "閱讀香調輪廓與專屬回饋，保存本次香氣編號。"],
  ["03", "填寫寄送資料", "留下收件人、電話及完整收件地址。"],
  ["04", "確認體驗內容", "確認5ml專屬香氣、費用與寄送方式。"],
  ["05", "收到專屬香氣", "完成付款後，依通知確認寄送進度。"],
];

export default function ScentQuizPage() {
  return (
    <main className="scent-journey-page">
      <ContentHeader />
      <section className="scent-journey-hero">
        <div>
          <p className="section-kicker">DISCOVER YOUR SCENT</p>
          <h1><span className="title-line">十四個氣味面向，</span><span className="title-line">找到最接近你的</span><em className="title-line">專屬香氣輪廓。</em></h1>
          <p>不需要認識精油或調香原料，只要依照直覺選擇喜歡的氣味畫面。完成後，你會得到十五種香調之一、專屬文字、收藏圖卡與香氣編號。</p>
          <a className="button button-deep" href="#scent-quiz">開始測驗 ↓</a>
        </div>
        <figure><img src="/images/scent-cards/wellina-master-scent-card-v1.png" alt="Dr. IVY × WELLINA 專屬香氣圖卡" /></figure>
      </section>

      <section className="scent-quiz-preview" id="scent-quiz" aria-labelledby="scent-quiz-title">
        <div className="preview-section-heading">
          <div><p className="section-kicker">YOUR SCENT PORTRAIT</p><h2 id="scent-quiz-title">用你的感受，<br />描繪香氣輪廓。</h2></div>
          <p>測驗從最初印象、香氣轉折、甜度、冷暖、質地、距離與尾韻逐步展開；每次只呈現一個最接近的結果。</p>
        </div>
        <div id="scent-quiz-interactive-root">
          <ScentQuizPreview />
        </div>
      </section>

      <section className="scent-delivery-preview" id="scent-delivery" aria-labelledby="delivery-title">
        <div className="delivery-intro">
          <p className="section-kicker soft">5ML SCENT EXPERIENCE</p>
          <h2 id="delivery-title">把測驗結果，<br />延伸成一份可以收到的香氣。</h2>
          <p>完成測驗後，使用專屬香氣編號填寫收件資料，確認5ml香氣體驗的費用與寄送方式，再完成付款。</p>
        </div>
        <div className="delivery-steps">
          {deliverySteps.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
        <div className="delivery-data-card" aria-labelledby="delivery-data-title">
          <div><small>DELIVERY DETAILS</small><h3 id="delivery-data-title">專屬香氣寄送資料</h3><p>寄送時請確認以下資料正確，讓專屬香氣順利送達。</p></div>
          <dl>
            <div><dt>專屬香氣編號</dt><dd>完成測驗後自動帶入</dd></div>
            <div><dt>收件人</dt><dd>請填寫真實姓名</dd></div>
            <div><dt>收件電話</dt><dd>供配送聯絡使用</dd></div>
            <div><dt>收件地址</dt><dd>郵遞區號、縣市、區域與詳細地址</dd></div>
            <div><dt>配送備註</dt><dd>可留下方便收件的補充說明</dd></div>
          </dl>
        </div>
        <div className="delivery-summary">
          <div><small>PERSONAL SCENT EXPERIENCE</small><strong>NT$200 專屬香氣體驗</strong><p>線上寄送申請開放後，可在這裡確認資料並前往付款。</p></div>
          <a className="button button-cream" href="#scent-quiz">回到測驗 ↑</a>
        </div>
      </section>
      <ContentFooter />
    </main>
  );
}
