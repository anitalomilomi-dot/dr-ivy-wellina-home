/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dr. Ivy｜WELLINA 芳香教育與專業培訓",
  description: "從一場講座開始，連結芳香教育、講師培訓、國際視野與品牌合作。",
};

const entries = [
  { number: "01", en: "LEARN", title: "我想學習", href: "#courses" },
  { number: "02", en: "SPEAKER", title: "我想找講師", href: "#ivy" },
  { number: "03", en: "BUSINESS", title: "企業合作", href: "#collaboration" },
  { number: "04", en: "SCENT", title: "香氛訂製", href: "#collaboration" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="WELLINA 首頁">
          <span>WELLINA</span>
          <small>DR. IVY · AROMATIC EDUCATION</small>
        </a>

        <nav className="desktop-nav" aria-label="主要導覽">
          <a href="#ivy">關於 Ivy</a>
          <a href="#courses">課程與認證</a>
          <a href="#knowledge">學習資源</a>
          <a href="#team">講師團隊</a>
          <a href="#collaboration">合作案例</a>
          <a href="#media">活動紀錄</a>
        </nav>

        <div className="header-actions">
          <a href="#search" aria-label="搜尋網站">搜尋</a>
          <a href="https://dr-wellina.com/cart/" target="_blank" rel="noreferrer">
            購物袋 <span>0</span>
          </a>
        </div>
        <details className="mobile-nav">
          <summary>選單</summary>
          <div>
            <a href="#ivy">關於 Ivy</a>
            <a href="#courses">課程與認證</a>
            <a href="#knowledge">學習資源</a>
            <a href="#team">講師團隊</a>
            <a href="#collaboration">合作案例</a>
            <a href="#media">活動紀錄</a>
          </div>
        </details>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow">WELLINA · DR. IVY</p>
          <h1 id="hero-title">
            讓香氣，成為一種
            <br />
            能被學習、被分享，
            <br />
            也被世界看見的專業。
          </h1>
          <p className="hero-copy">
            從一場講座開始，連結芳香教育、講師培訓、
            <br className="desktop-break" />
            國際視野與品牌合作。
          </p>
          <div className="hero-actions">
            <a className="button button-light" href="#courses">探索課程</a>
            <a className="text-link light" href="#ivy">認識 Ivy 老師 <span>↗</span></a>
          </div>
        </div>
        <a className="scroll-note" href="#start">
          <span>SCROLL TO EXPLORE</span>
          <i />
        </a>
      </section>

      <section className="entry-section" id="start" aria-labelledby="entry-title">
        <div className="section-intro">
          <p className="section-kicker">START FROM HERE</p>
          <h2 id="entry-title">今天，您想從哪裡開始？</h2>
          <p>無論是第一次認識芳香，或正在尋找一位值得信任的專業夥伴，這裡都有清楚的入口。</p>
        </div>
        <div className="entry-grid">
          {entries.map((entry) => (
            <a className="entry-card" href={entry.href} key={entry.number}>
              <span className="entry-number">{entry.number}</span>
              <div>
                <small>{entry.en}</small>
                <h3>{entry.title}</h3>
              </div>
              <span className="entry-arrow">→</span>
            </a>
          ))}
        </div>
      </section>

      <section className="ivy-section" id="ivy" aria-labelledby="ivy-title">
        <div className="ivy-visual">
          <div className="ivy-image-wrap">
            <img src="/images/ivy-portrait.jpg" alt="Ivy 老師形象照" />
          </div>
          <p className="vertical-caption">EDUCATOR · FOUNDER · MENTOR</p>
          <div className="ivy-signature">
            <span>Dr.</span>
            <strong>Ivy</strong>
          </div>
        </div>
        <div className="ivy-content">
          <p className="section-kicker">ABOUT DR. IVY</p>
          <h2 id="ivy-title">把專業說得清楚，<br />也讓學習變得有溫度。</h2>
          <p className="lead">
            這裡不只是一張講師名片，而是一個能持續累積課程、知識、案例與學員經驗的芳香教育平台。
          </p>
          <p>
            Ivy 老師將多年教學現場的觀察，整理成適合不同對象理解與應用的學習內容；也陪伴講師與專業學員，把自己的專長發展成能被看見的影響力。
          </p>
          <div className="ivy-tags" aria-label="專業方向">
            <span>芳香教育</span><span>講師培訓</span><span>企業合作</span><span>品牌調香</span>
          </div>
          <a className="text-link forest" href="#profile">閱讀完整經歷 <span>↗</span></a>
        </div>
      </section>

      <section className="pillar-band" aria-label="網站專業定位">
        <article><span>01</span><small>EDUCATION</small><h3>教育現場</h3><p>從一般講座到專業培訓，讓每一種學習需求都找到適合的路徑。</p></article>
        <article><span>02</span><small>COLLABORATION</small><h3>跨域合作</h3><p>連結企業、醫療照護、社區與品牌，回應不同場域的真實需要。</p></article>
        <article><span>03</span><small>INTERNATIONAL</small><h3>國際視野</h3><p>預留認證與國際單位專區，建立清楚、可查詢的學習資訊。</p></article>
      </section>

      <section className="courses-section" id="courses" aria-labelledby="courses-title">
        <div className="section-heading-row">
          <div>
            <p className="section-kicker">COURSES &amp; PATHWAYS</p>
            <h2 id="courses-title">從興趣，到成為專業。</h2>
          </div>
          <p>依照學習階段與使用情境，快速找到適合自己的課程入口。正式課名與梯次將在內容確認後更新。</p>
        </div>

        <div className="course-feature">
          <div className="course-feature-image">
            <img src="/images/lab-table.jpg" alt="明亮的精油調香與實驗桌面" />
            <span className="image-label">WELLINA LEARNING SPACE</span>
          </div>
          <div className="course-feature-content">
            <span className="course-index">01 — OPEN CLASS</span>
            <h3>芳香入門與<br />主題體驗講座</h3>
            <p>用生活化的方式認識香氣、原料與安全觀念。適合一般學員、社區活動與企業講座。</p>
            <a className="button button-forest" href="#course-list">查看課程方向</a>
          </div>
        </div>

        <div className="course-list" id="course-list">
          <a href="#course-professional"><span>02</span><div><small>PROFESSIONAL</small><h3>專業進修與實務應用</h3></div><i>→</i></a>
          <a href="#course-certificate"><span>03</span><div><small>CERTIFICATE</small><h3>國際認證學習路徑</h3></div><i>→</i></a>
          <a href="#course-speaker"><span>04</span><div><small>TRAIN THE TRAINER</small><h3>講師培訓與教學發展</h3></div><i>→</i></a>
          <a href="#course-online"><span>05</span><div><small>ONLINE · COMING SOON</small><h3>線上課程專區</h3></div><i>→</i></a>
        </div>
      </section>

      <section className="video-section" id="media" aria-labelledby="video-title">
        <img src="/images/blending-studio.jpg" alt="WELLINA 專業調香工作情境" />
        <div className="video-overlay" />
        <div className="video-copy">
          <p className="section-kicker">FILM &amp; MOMENTS</p>
          <h2 id="video-title">看見一堂課，<br />如何從香氣開始。</h2>
          <p>這裡將放入 Ivy 老師形象影片、活動照片與專業課程花絮，讓合作夥伴與學員更快感受真實的教學現場。</p>
        </div>
        <div className="play-placeholder" aria-label="形象影片位置，影片內容待補">
          <span>▶</span><small>IVY BRAND FILM<br />COMING NEXT</small>
        </div>
        <a className="media-archive-link" href="#activity-gallery">觀看活動紀錄 <span>↗</span></a>
      </section>

      <section className="knowledge-section" id="knowledge" aria-labelledby="knowledge-title">
        <div className="knowledge-heading">
          <p className="section-kicker">KNOWLEDGE HUB</p>
          <h2 id="knowledge-title">下課之後，<br />學習才正要延伸。</h2>
          <p>把課前簡報、延伸閱讀、配方筆記與研究導讀整合在同一個地方，讓學員好找、老師好教，搜尋與 AI 也更容易理解。</p>
          <a className="text-link light" href="#knowledge-list">進入學習資源中心 <span>↗</span></a>
        </div>
        <div className="knowledge-grid" id="knowledge-list">
          <a href="#slides"><span>01</span><small>CLASS NOTES</small><h3>課程簡報與<br />延伸閱讀</h3><p>用像簡報一樣清楚的網頁，把課程重點與相關文章接在一起。</p><i>→</i></a>
          <a href="#formula"><span>02</span><small>FORMULA NOTES</small><h3>配方分享與<br />安全提醒</h3><p>記錄課堂配方、應用方式，以及閱讀前需要知道的注意事項。</p><i>→</i></a>
          <a href="#research"><span>03</span><small>RESEARCH DIGEST</small><h3>研究導讀與<br />專業文章</h3><p>以清楚的摘要與來源連結，整理值得延伸閱讀的國際研究。</p><i>→</i></a>
          <a href="#qa"><span>04</span><small>Q&amp;A</small><h3>芳香學習<br />常見問答</h3><p>集中回答課程、使用情境與學習路徑中最常遇到的問題。</p><i>→</i></a>
        </div>
      </section>

      <section className="community-section" id="team" aria-labelledby="community-title">
        <div className="community-photo">
          <img src="/images/ivy-garden.jpg" alt="Ivy 老師在自然庭園中的形象照" />
          <p>GROW TOGETHER</p>
        </div>
        <div className="community-content">
          <p className="section-kicker">PEOPLE &amp; STORIES</p>
          <h2 id="community-title">讓每一位專業夥伴，<br />都有被看見的位置。</h2>
          <p>網站會持續收錄 Ivy 老師培訓的講師、具專業背景的校友，以及學員在課程後留下的配方與學習故事。</p>
          <div className="community-links">
            <a href="#instructors"><small>01 · INSTRUCTORS</small><strong>講師團隊</strong><span>→</span></a>
            <a href="#alumni"><small>02 · ALUMNI</small><strong>專業校友</strong><span>→</span></a>
            <a href="#stories"><small>03 · STORIES</small><strong>學員分享</strong><span>→</span></a>
          </div>
        </div>
      </section>

      <section className="activity-section" id="activity-gallery" aria-labelledby="activity-title">
        <div className="section-heading-row compact">
          <div><p className="section-kicker">LATEST MOMENTS</p><h2 id="activity-title">課程與活動紀錄</h2></div>
          <a className="text-link forest" href="#all-media">查看全部影像 <span>↗</span></a>
        </div>
        <div className="activity-grid">
          <a className="activity-card activity-large" href="#event-one">
            <img src="/images/wellina-hands.jpg" alt="課程中的手作調香體驗" />
            <div><small>WORKSHOP · PHOTO STORY</small><h3>一場從嗅覺開始的共學時光</h3></div>
          </a>
          <a className="activity-card" href="#event-two">
            <img src="/images/product-table.jpg" alt="精油瓶與專業調香桌面" />
            <div><small>PROFESSIONAL CLASS</small><h3>專業課程花絮</h3></div>
          </a>
          <a className="activity-card activity-text" href="#event-three">
            <span>COMING NEXT</span><h3>企業講座、社區課程與認證班影像，將依活動持續上線。</h3><i>→</i>
          </a>
        </div>
      </section>

      <section className="collaboration-section" id="collaboration" aria-labelledby="collaboration-title">
        <div className="collaboration-heading">
          <p className="section-kicker">WORK WITH IVY</p>
          <h2 id="collaboration-title">從人的需要出發，<br />設計一場有感的芳香體驗。</h2>
          <p>提供企業員工活動、ESG 身心平衡主題、品牌香氛訂製與跨域專案的合作入口；實際方案與案例將依資料確認後更新。</p>
        </div>
        <div className="collaboration-cards">
          <a href="#enterprise"><span>01</span><small>FOR ORGANIZATIONS</small><h3>企業講座與員工活動</h3><p>依組織需求、參與人數與活動目的，規劃合適的主題與體驗方式。</p><i>洽談合作 →</i></a>
          <a href="#bespoke"><span>02</span><small>BESPOKE SCENT</small><h3>品牌香氛與氣味訂製</h3><p>從品牌故事、空間印象到活動記憶，建立具有辨識度的香氣提案。</p><i>查看案例 →</i></a>
        </div>
      </section>

      <section className="international-section" id="international" aria-labelledby="international-title">
        <p className="section-kicker">GLOBAL LEARNING NETWORK</p>
        <h2 id="international-title">清楚看見，學習如何與國際接軌。</h2>
        <p>未來將在這裡整理合作學院、認證單位、證書路徑與官方連結。所有名稱與認證資訊會在完成查證後正式公開。</p>
        <div className="international-flow" aria-label="國際學習路徑示意">
          <span>WELLINA<br /><small>學習中心</small></span><i>—</i><span>專業培訓<br /><small>課程路徑</small></span><i>—</i><span>國際單位<br /><small>資料查證中</small></span><i>—</i><span>專業發展<br /><small>持續進修</small></span>
        </div>
        <a className="button button-forest" href="#certificate-info">認識學習路徑</a>
      </section>

      <section className="future-section" aria-labelledby="future-title">
        <div className="future-image"><img src="/images/product-table.jpg" alt="WELLINA 精油產品與調香器具" /></div>
        <div className="future-content">
          <p className="section-kicker">SHOP &amp; ONLINE LEARNING</p>
          <h2 id="future-title">讓學習與日常，<br />在同一個地方延續。</h2>
          <div className="future-options">
            <article>
              <small>WELLINA STORE</small><h3>精選產品</h3><p>官網保留商品、購物車與綠界結帳的完整串接位置。</p>
              <a className="text-link forest" href="https://dr-wellina.com/store/" target="_blank" rel="noreferrer">前往現有商店 <span>↗</span></a>
            </article>
            <article>
              <small>ONLINE ACADEMY</small><h3>線上課程</h3><p>未來可加入會員登入、我的課程、觀看進度與學習資料。</p>
              <span className="coming-pill">COMING SOON</span>
            </article>
          </div>
        </div>
      </section>

      <footer className="site-footer" id="contact">
        <div className="footer-top">
          <div className="footer-wordmark"><span>WELLINA</span><small>DR. IVY · AROMATIC EDUCATION</small></div>
          <h2>一起，讓香氣成為<br />可被理解的專業。</h2>
          <a className="button button-light" href="#contact-form">聯絡合作</a>
        </div>
        <div className="footer-bottom">
          <p>© 2026 WELLINA · DR. IVY</p>
          <nav aria-label="頁尾導覽">
            <a href="https://www.instagram.com/wellina1965/" target="_blank" rel="noreferrer">INSTAGRAM ↗</a>
            <a href="https://dr-wellina.com/" target="_blank" rel="noreferrer">WELLINA STORE ↗</a>
            <a href="#privacy">隱私權與使用說明</a>
          </nav>
          <p className="footer-note">本頁為首頁視覺原型，專業內容與對外資訊待確認。</p>
        </div>
      </footer>
    </main>
  );
}
