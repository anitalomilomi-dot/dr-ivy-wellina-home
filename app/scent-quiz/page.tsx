/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { ContentFooter, ContentHeader } from "../components/content-shell";
import ScentQuizPreview from "../new-architecture-preview/ScentQuizPreview";

export const metadata: Metadata = {
  title: "專屬香氣測驗｜Dr. IVY × WELLINA",
  description: "從十四個氣味面向探索自己的香氣輪廓，取得專屬香調、香氣圖卡與香氣編號。",
};

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
          <p className="section-kicker soft">KEEP YOUR SCENT MEMORY</p>
          <h2 id="delivery-title">先收藏你的香氣輪廓，<br />讓探索繼續。</h2>
          <p>目前開放香氣測驗與收藏圖卡，專屬試香尚未開放訂購、付款與寄送。完成測驗後，請保存結果畫面與香氣編號；本次結果不會自動傳送給 Dr. IVY。</p>
        </div>
        <a className="button button-cream" href="#scent-quiz">回到測驗 ↑</a>
      </section>
      <ContentFooter />
    </main>
  );
}
