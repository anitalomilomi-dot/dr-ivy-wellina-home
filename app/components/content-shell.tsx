/* eslint-disable @next/next/no-html-link-for-pages */
import type { ContentLink } from "../content-data";

export function ContentHeader() {
  return <><a className="home-return" href="/">← 回到首頁</a><header className="content-header"><a className="wordmark" href="/" aria-label="Dr. IVY 首頁"><span>Dr. IVY</span><small>芳香教育與專業合作平台</small></a><nav className="desktop-nav" aria-label="主要導覽"><a href="/#ivy">Dr. IVY</a><a href="/team/">講師團隊</a><a href="/#courses">課程學習</a><a href="/scent-quiz/">香氣測驗</a><a href="/aroma-card/">課堂香氛卡</a><a href="/#knowledge">知識資源</a><a href="/international-certifications/">國際認證</a><a href="/#collaboration">合作服務</a></nav><div className="header-actions"><a href="https://www.instagram.com/wellina1965/" target="_blank" rel="noreferrer">IG</a><a className="bag-link" href="/wellina-products/">WELLINA</a></div><details className="mobile-nav"><summary>選單</summary><div><a href="/">回到首頁</a><a href="/team/">講師團隊</a><a href="/course-guide/">幫我選課</a><a href="/scent-quiz/">香氣測驗</a><a href="/aroma-card/">課堂香氛卡</a><a href="/#knowledge">知識資源</a><a href="/international-certifications/">國際認證</a><a href="/#collaboration">合作服務</a><a href="/wellina-products/">WELLINA 品牌與產品</a></div></details></header></>;
}

export function ContentFooter() {
  return <footer className="content-footer"><div><p className="section-kicker soft">CONTINUE YOUR JOURNEY</p><h2>不確定下一步？<br />讓學習導航幫你整理。</h2></div><a className="button button-cream" href="/course-guide/">幫我選課 ↗</a><p>Dr. IVY 芳香教育與專業合作平台</p></footer>;
}

export function RelatedLinks({ links }: { links: ContentLink[] }) {
  return <section className="content-related" aria-labelledby="related-title"><div><p className="section-kicker">RELATED READING</p><h2 id="related-title">帶著這一頁，繼續往下學。</h2></div><div className="content-related-grid">{links.map((link, index) => { const isExternal = link.href.startsWith("http"); return <a href={link.href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noreferrer" : undefined} key={link.href}><span>0{index + 1}</span><small>{link.label}</small><h3>{link.title}</h3><i>→</i></a>; })}</div></section>;
}
