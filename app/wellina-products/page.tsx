/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import type { Metadata } from "next";
import { ContentFooter, ContentHeader } from "../components/content-shell";

export const metadata: Metadata = {
  title: "WELLINA 品牌與產品｜Dr. IVY",
  description: "認識 WELLINA 品牌故事、瀏覽相關產品介紹，並前往現有商店選購。",
};

export default function WellinaProductsPage() {
  return (
    <>
      <ContentHeader />
      <main className="wellina-product-page">
        <section className="wellina-product-hero" aria-labelledby="wellina-product-title">
          <div>
            <p className="eyebrow">WELLINA · BRAND &amp; PRODUCTS</p>
            <p className="content-breadcrumb"><a href="/">Dr. IVY 首頁</a><span>/</span>WELLINA</p>
            <h1 id="wellina-product-title"><span className="title-line">從 Dr. IVY 的</span><span className="title-line">芳香專業，延伸至</span><span className="title-line">WELLINA 的日常選品。</span></h1>
            <p>這裡集中呈現 WELLINA 的品牌故事、產品影像與購買入口；回到主官網時，仍以 Dr. IVY 的教育、課程與專業合作為閱讀主軸。</p>
          </div>
          <figure><img src="/images/wellina-ig-product.jpg" alt="WELLINA 香氣產品與自然植物" /></figure>
        </section>

        <section className="wellina-brand-section" aria-labelledby="wellina-story-title">
          <div>
            <p className="section-kicker">THE WELLINA STORY</p>
            <h2 id="wellina-story-title"><span className="title-line">由心出發，</span><span className="title-line">讓香氣自然走進日常。</span></h2>
          </div>
          <div className="wellina-story-copy">
            <p>WELLINA 是 Dr. IVY 芳香教育與調香實務的品牌延伸。產品資訊、使用方式與購買流程，集中由品牌頁面及現有商店提供。</p>
            <a className="text-link" href="https://dr-wellina.com/about/" target="_blank" rel="noreferrer">閱讀完整品牌故事 <span>↗</span></a>
          </div>
        </section>

        <section className="wellina-product-gallery" aria-label="WELLINA 產品影像">
          <figure className="wellina-gallery-main"><img src="/images/product-table.jpg" alt="WELLINA 香氣產品與調香器具" /></figure>
          <figure><img src="/images/blending-studio.jpg" alt="WELLINA 芳香產品與調香工作情境" /></figure>
        </section>

        <section className="wellina-product-links" aria-labelledby="wellina-links-title">
          <div className="wellina-product-links-heading">
            <p className="section-kicker">EXPLORE WELLINA</p>
            <h2 id="wellina-links-title"><span className="title-line">認識產品，</span><span className="title-line">找到適合的下一步。</span></h2>
          </div>
          <div className="wellina-product-link-grid">
            <a href="https://dr-wellina.com/store/" target="_blank" rel="noreferrer"><span>01</span><small>PRODUCT COLLECTION</small><h3>瀏覽產品</h3><p>查看現有產品、規格與當期資訊。</p><i>↗</i></a>
            <a href="https://dr-wellina.com/" target="_blank" rel="noreferrer"><span>02</span><small>PRODUCT INFORMATION</small><h3>相關產品介紹</h3><p>閱讀品牌網站提供的產品內容與使用說明。</p><i>↗</i></a>
            <a href="https://dr-wellina.com/cart/" target="_blank" rel="noreferrer"><span>03</span><small>SHOPPING BAG</small><h3>前往購物袋</h3><p>商品確認與結帳在 WELLINA 現有商店完成。</p><i>↗</i></a>
          </div>
        </section>

        <section className="wellina-related-section" aria-labelledby="wellina-related-title">
          <div><p className="section-kicker soft">CONTINUE EXPLORING</p><h2 id="wellina-related-title">也可以從香氣開始認識自己。</h2></div>
          <div className="brand-links">
            <a href="/scent-quiz/">進行香氣測驗 <span>→</span></a>
            <a href="/#courses">探索 Dr. IVY 課程 <span>→</span></a>
          </div>
        </section>
      </main>
      <ContentFooter />
    </>
  );
}
