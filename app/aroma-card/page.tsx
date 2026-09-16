/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { ContentFooter, ContentHeader } from "../components/content-shell";

export const metadata: Metadata = {
  title: "課堂香氛卡｜Dr. IVY 芳香教育",
  description: "Dr. IVY 課堂學員專用：掃描 QR Code，記錄當天精油、聞香筆記、滴數及個人配方，製作我的香氛卡。",
};
const toolUrl = "https://ivy-aroma-card-9x2k4m.pages.dev/";
const steps = [
  ["01", "今天的聞香筆記", "依老師當天設定的精油名單，留下喜好分數與自己的氣味感受。"],
  ["02", "我的精油滴數與配方", "填入每支精油實際加入的滴數，依課堂設定的總滴數上限，整理自己的配方。"],
  ["03", "製作我的香氛卡", "幫香氛取名字、留下當下心情與卡片風格，依活動開放狀態製作並收藏卡片。"],
];
export default function AromaCardPage() {
  return <main className="classroom-card-page">
    <ContentHeader />
    <section className="classroom-card-feature" aria-labelledby="classroom-page-title">
      <div><p className="section-kicker">DR. IVY CLASSROOM · AROMA CARD</p><h1 id="classroom-page-title"><span className="title-line">今天的聞香筆記，</span><span className="title-line">我的精油配方，</span><span className="title-line">一張帶得走的香氛卡。</span></h1><p>這是 Ivy 老師上課時，給學員使用的調香紀錄與香氛卡製作區。請依老師的引導，記錄當天聞到的精油、每支精油的滴數，以及自己的感受。</p><div className="hero-actions"><a className="button button-deep" href="#classroom-studio">開始製作我的香氛卡 ↓</a><a className="text-link" href={toolUrl} target="_blank" rel="noreferrer">直接開啟製作工具 ↗</a></div><p className="classroom-note">工具依上課場次開放；若顯示「今天沒有場次」或「活動已結束」，請等老師開啟當天活動。</p></div>
      <figure className="classroom-qr" id="classroom-scan"><img src="/images/classroom-aroma-card-qr.png" alt="課堂學員掃描用 QR Code，連到我的香氛卡製作工具" /><figcaption><strong>學生掃描 · 開始課堂紀錄</strong><span>手機掃描可直接進入製作工具</span><a href="/images/classroom-aroma-card-qr.png" download="Dr-IVY-課堂香氛卡-QR.png">下載上課用 QR Code ↓</a></figcaption></figure>
    </section>
    <section className="classroom-card-steps" aria-label="課堂香氛卡使用方式">{steps.map(([n,title,copy])=><article key={n}><span>{n}</span><h2>{title}</h2><p>{copy}</p></article>)}</section>
    <section className="classroom-card-studio" id="classroom-studio" aria-labelledby="classroom-studio-title"><p className="section-kicker">MY AROMA CARD STUDIO</p><h2 id="classroom-studio-title">我的香氛卡製作區</h2><p>先填暱稱，再記錄聞香感受與滴數，最後幫自己的香氛取名字。精油名單、滴數限制與活動狀態，以老師當天設定為準。</p><a className="text-link" href={toolUrl} target="_blank" rel="noreferrer">使用完整手機畫面 · 直接開啟製作工具 ↗</a><div className="classroom-launch"><h3>現在，開始記錄今天的香氣</h3><p>在獨立製作工具中填寫當天的精油筆記、滴數與配方，完成後收藏自己的香氛卡。</p><a className="button button-deep" href={toolUrl}>進入我的香氛卡製作工具 ↗</a></div><p className="classroom-note">上傳照片與生成卡片前，請先閱讀工具中的資料使用說明；不需要人物卡片時，可選擇不傳照片的純香氛風格。</p></section>
    <ContentFooter />
  </main>;
}
