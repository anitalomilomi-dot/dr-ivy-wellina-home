/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import type { Metadata } from "next";
import { oilGuides, searchGuides } from "./content-data";

export const metadata: Metadata = {
  title: "Dr. IVY｜芳香教育與專業合作平台",
  description:
    "以 Dr. IVY 為主軸的芳香教育與專業合作平台，聚焦國際芳香教育、調香師培訓與專業講師職人培育。",
};

const paths = [
  { number: "01", en: "MEET", title: "認識 Dr. IVY", copy: "專業方向與教學理念", href: "#ivy" },
  { number: "02", en: "LEARN", title: "探索學習", copy: "體驗、進修與講師培訓", href: "#courses" },
  { number: "03", en: "REVIEW", title: "課後複習", copy: "簡報、文章與精油知識", href: "#knowledge" },
  { number: "04", en: "SCENT", title: "探索專屬香氣", copy: "十四題描繪個人香氣輪廓", href: "/scent-quiz/" },
  { number: "05", en: "COLLABORATE", title: "邀請合作", copy: "企業活動與品牌香氣訂製", href: "#collaboration" },
  { number: "06", en: "WELLINA", title: "品牌與產品", copy: "認識品牌故事與相關產品", href: "/wellina-products/" },
];

const videos = [
  { title: "民雄日式招待所文創園區－憶起調香趣", duration: "04:19", href: "https://www.youtube.com/watch?v=jj30AmpbiKQ" },
  { title: "嘉義大學－高齡親密 相伴久久", duration: "04:11", href: "https://www.youtube.com/watch?v=PMMtKbdzd-Q" },
  { title: "高雄菸酒公賣局調香課程", duration: "02:29", href: "https://www.youtube.com/watch?v=IYaeyA2EtTY" },
  { title: "涵碧生活美學百業策略活動", duration: "12:50", href: "https://www.youtube.com/watch?v=FufVK1PBJLs" },
];

const socialPosts = [
  {
    image: "/images/wellina-ig-ivy.jpg",
    alt: "Ivy 老師分享 WELLINA 品牌理念的影片畫面",
    eyebrow: "DR. IVY · REEL",
    title: "把愛，調成一種味道",
    href: "https://www.instagram.com/wellina1965/reel/Db7Qwb4SiWU/",
  },
  {
    image: "/images/wellina-ig-corporate.jpg",
    alt: "Ivy 老師在企業調香活動中的影片畫面",
    eyebrow: "CORPORATE · MOMENT",
    title: "企業活動與 DIY 調香體驗",
    href: "https://www.instagram.com/wellina1965/p/DbXdXAdkbAu/",
  },
  {
    image: "/images/wellina-ig-flower.jpg",
    alt: "Dr. IVY 芳香課程中的花材與自然美感",
    eyebrow: "SCENT · AESTHETICS",
    title: "從自然素材延伸氣味美感",
    href: "https://www.instagram.com/wellina1965/",
  },
];

export default function Home() {
  return (
    <main>
      <a className="home-return" href="#top">← 回到首頁</a>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Dr. IVY 首頁">
          <span>Dr. IVY</span>
          <small>芳香教育與專業合作平台</small>
        </a>

        <nav className="desktop-nav" aria-label="主要導覽">
          <a href="#ivy">Dr. IVY</a>
          <a href="/team/">講師團隊</a>
          <a href="#courses">課程學習</a>
          <a href="/scent-quiz/">香氣測驗</a>
          <a href="/aroma-card/">課堂香氛卡</a>
          <a href="#media">影音花絮</a>
          <a href="#knowledge">知識資源</a>
          <a href="/international-certifications/">國際認證</a>
          <a href="#collaboration">合作服務</a>
        </nav>

        <div className="header-actions">
          <a href="https://www.instagram.com/wellina1965/" target="_blank" rel="noreferrer">IG</a>
          <a className="bag-link" href="/wellina-products/">WELLINA</a>
        </div>

        <details className="mobile-nav">
          <summary>選單</summary>
          <div>
            <a href="#ivy">Dr. IVY</a>
            <a href="/team/">講師團隊</a>
            <a href="#courses">課程學習</a>
            <a href="/scent-quiz/">香氣測驗</a>
          <a href="/aroma-card/">課堂香氛卡</a>
            <a href="#media">影音花絮</a>
            <a href="#knowledge">知識資源</a>
            <a href="/international-certifications/">國際認證</a>
            <a href="#collaboration">合作服務</a>
            <a href="/wellina-products/">WELLINA 品牌與產品</a>
          </div>
        </details>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-copy-panel">
          <p className="eyebrow">DR. IVY</p>
          <h1 id="hero-title"><span className="title-line">讓香氣成為一門</span><em className="title-line">能學習、能實作，</em><span className="title-line">也能持續分享的專業。</span></h1>
          <p className="hero-lead">從認識 Dr. IVY、探索課程、課後複習到專業合作，讓每一次接觸香氣，都能自然走向下一步。</p>
          <div className="hero-actions">
            <a className="button button-deep" href="#start">開始探索</a>
            <a className="text-link" href="#ivy">認識 Dr. IVY <span>↓</span></a>
          </div>
          <p className="hero-note">國際芳香教育・調香師培訓・專業講師職人培育</p>
        </div>

        <div className="hero-visual" aria-label="自然明亮的芳香植物研究與氣味創作空間">
          <img src="/images/dr-ivy-botanical-hero-v1.png" alt="自然光下的芳香植物、花材與氣味創作桌景" />
          <div className="hero-visual-wash" />
        </div>
      </section>

      <section className="path-section" id="start" aria-labelledby="path-title">
        <div className="section-title split-title">
          <div><p className="section-kicker">START YOUR JOURNEY</p><h2 id="path-title">今天，想從哪裡開始？</h2></div>
          <p>無論想認識香氣、尋找講師，或規劃企業與品牌合作，都能從這裡找到合適的方向。</p>
        </div>
        <div className="path-grid">
          {paths.map((item) => (
            <a className="path-card" href={item.href} key={item.number}>
              <div className="path-meta"><span>{item.number}</span><small>{item.en}</small></div>
              <div><h3>{item.title}</h3><p>{item.copy}</p></div>
              <i>↗</i>
            </a>
          ))}
        </div>
      </section>

      <section className="ivy-section" id="ivy" aria-labelledby="ivy-title">
        <div className="ivy-portrait">
          <img src="/images/ivy-portrait.jpg" alt="Dr. IVY 芳香教育專業形象" />
        </div>
        <div className="ivy-content">
          <p className="section-kicker soft">ABOUT DR. IVY</p>
          <p className="name-line">Dr. IVY</p>
          <h2 id="ivy-title"><span className="title-line">把複雜的知識<br className="mobile-break" />說清楚，</span><span className="title-line">讓學習保有<br className="mobile-break" />人的溫度。</span></h2>
          <p className="ivy-lead">Dr. IVY 將芳香教育、課程設計、講師培訓與調香實作整理成清楚的學習路徑，持續累積能被理解、被應用，也能被分享的專業內容。</p>
          <p className="ivy-experience"><strong>28 年</strong><span>專業歷練</span><i aria-hidden="true" /><strong>3,000 場次</strong><span>演講與授課累積</span></p>
          <div className="profile-grid" aria-label="Ivy 老師的工作方向">
            <article><span>01</span><h3>教育設計</h3><p>依對象與場域，整理清楚的學習路徑。</p></article>
            <article><span>02</span><h3>氣味實作</h3><p>從原料、配方到安全使用，重視可操作性。</p></article>
            <article><span>03</span><h3>人才培訓</h3><p>讓講師與專業學員的能力被持續看見。</p></article>
          </div>
        </div>
      </section>

      <section className="brand-story" aria-labelledby="brand-title">
        <div className="brand-copy">
          <p className="section-kicker">THE DR. IVY APPROACH</p>
          <h2 id="brand-title"><span className="title-line">從一次認識，</span><span className="title-line">走向可以持續</span><span className="title-line">累積的專業。</span></h2>
          <p className="brand-lead">把知識說清楚，把實作帶進生活，也為每一位學習者保留繼續前進的方向。</p>
          <p>網站將 Dr. IVY 的課程、調香教學、活動紀錄、專業文章與合作經驗整理在一起，讓課堂之外仍能方便閱讀、查找與延伸。</p>
          <div className="brand-links">
            <a href="#courses">探索課程 <span>↓</span></a>
            <a href="/international-certifications/">國際學習路徑 <span>↗</span></a>
          </div>
        </div>
        <div className="brand-collage">
          <figure className="brand-main-image"><img src="/images/ivy-garden.jpg" alt="Dr. IVY 自然明亮的專業形象" /></figure>
          <figure className="brand-small-image"><img src="/images/wellina-hands.jpg" alt="Dr. IVY 芳香課程中的學員實作" /></figure>
          <p className="vertical-word">EDUCATION · SCENT · PRACTICE</p>
        </div>
      </section>

      <section className="home-scent-feature" aria-labelledby="home-scent-title">
        <div className="home-scent-copy">
          <p className="section-kicker">DISCOVER YOUR SCENT</p>
          <h2 id="home-scent-title"><span className="title-line">十四個氣味面向，</span><span className="title-line">找到最接近你的</span><span className="title-line">專屬香氣輪廓。</span></h2>
          <p>依照直覺選擇喜歡的氣味畫面，完成後取得十五種香調之一、專屬文字、收藏圖卡與香氣編號。你不需要先認識精油，也能自然開始探索。</p>
          <div className="home-scent-points"><span>14個氣味面向</span><span>15種香調結果</span><span>專屬收藏圖卡</span></div>
          <div className="hero-actions">
            <a className="button button-deep" href="/scent-quiz/">開始香氣測驗 ↗</a>
          </div>
        </div>
        <figure className="home-scent-card"><img src="/images/scent-cards/wellina-master-scent-card-v1.png" alt="Dr. IVY × WELLINA 專屬香氣圖卡" /><figcaption><small>Dr. IVY × WELLINA</small><strong>YOUR SCENT PORTRAIT</strong><span>一份值得收藏的香氣記憶</span></figcaption></figure>
      </section>

      <section className="course-section" id="courses" aria-labelledby="courses-title">
        <div className="section-title split-title">
          <div><p className="section-kicker">COURSES &amp; LEARNING</p><h2 id="courses-title"><span className="title-line">從喜歡香氣，</span><span className="title-line">走到理解香氣。</span></h2></div>
          <p>依照現在的學習目標，從主題體驗、專業進修、講師培訓到國際學習路徑，找到適合自己的起點。</p>
        </div>

        <div className="course-guide-callout">
          <div><small>NOT SURE WHERE TO START?</small><h3>不確定從哪門課開始？</h3><p>用學習目標導航，找到適合你現在的起點。</p></div>
          <a className="button button-outline" href="/course-guide/">幫我選課 ↗</a>
        </div>

        <div className="course-feature">
          <div className="course-image"><img src="/images/lab-table.jpg" alt="Dr. IVY 明亮自然的調香學習桌面" /><span>DR. IVY LEARNING TABLE</span></div>
          <div className="course-copy">
            <small>01 · OPEN EXPERIENCE</small>
            <h3><span className="title-line">主題調香與</span><span className="title-line">芳香體驗課程</span></h3>
            <p>用生活化的方式認識香氣、原料、配方思考與安全觀念，適合初次接觸的學員與團體活動。</p>
            <a className="button button-outline" href="https://dr-wellina.com/class/" target="_blank" rel="noreferrer">查看現有課程 ↗</a>
          </div>
        </div>

        <div className="course-rows">
          <a href="https://dr-wellina.com/class/" target="_blank" rel="noreferrer"><span>02</span><small>PROFESSIONAL</small><h3>專業進修與實務應用</h3><i>↗</i></a>
          <a href="/international-certifications/"><span>03</span><small>CERTIFICATION</small><h3>國際認證學習路徑</h3><i>→</i></a>
          <a href="/team/"><span>04</span><small>TRAIN THE TRAINER</small><h3>講師培訓與教學發展</h3><i>→</i></a>
          <a href="#online"><span>05</span><small>ONLINE LEARNING</small><h3>線上課程專區</h3><i>→</i></a>
        </div>
      </section>

      <section className="classroom-card-feature" id="classroom-aroma-card" aria-labelledby="classroom-card-title">
        <div>
          <p className="section-kicker">DR. IVY CLASSROOM · AROMA NOTES</p>
          <h2 id="classroom-card-title"><span className="title-line">把今天的聞香筆記，</span><span className="title-line">收藏成我的香氛卡。</span></h2>
          <p>給正在上課的學員：掃描 QR Code，記下當天聞到的精油、喜好與感受，填入每支精油的滴數，留下自己的配方，再製作一張課堂香氛紀念卡。</p>
          <div className="hero-actions"><a className="button button-deep" href="/aroma-card/">製作我的香氛卡 ↗</a><a className="text-link" href="/aroma-card/#classroom-scan">學生掃描入口 →</a></div>
        </div>
        <figure className="classroom-qr"><a href="/aroma-card/" aria-label="進入課堂香氛卡專頁"><img src="/images/classroom-aroma-card-qr.png" alt="學生掃描後進入我的香氛卡，記錄課堂聞香與配方" /></a><figcaption><strong>課堂專用 · 學生掃描</strong><span>聞香筆記・精油滴數・我的配方</span></figcaption></figure>
      </section>

      <section className="media-section" id="media" aria-labelledby="media-title">
        <div className="media-heading">
          <p className="section-kicker soft">FILM &amp; MOMENTS</p>
          <h2 id="media-title"><span className="title-line">先認識 Dr. IVY，</span><span className="title-line">再走進真實的<br className="mobile-break" />教學現場。</span></h2>
          <p>從形象影片開始，再延伸到活動影片與課程照片，快速理解 Dr. IVY 的教學理念、授課氣氛與合作方式。</p>
        </div>

        <div className="media-layout">
          <div className="video-feature">
            <div className="video-frame brand-film-frame">
              <a className="video-poster" href="https://www.youtube.com/watch?v=zB0yH0vCjmE&t=3s" target="_blank" rel="noreferrer" aria-label="在 YouTube 播放 Dr. IVY 形象影片">
                <img src="/images/wellina-official-film.jpg" alt="Dr. IVY 形象影片封面" />
                <span>▶</span>
                <small>PLAY ON YOUTUBE</small>
              </a>
            </div>
            <div className="video-caption brand-film-caption"><small>DR. IVY · OFFICIAL FILM</small><h3><span className="title-line">Dr. IVY</span><span className="title-line">形象影片</span></h3><a href="https://www.youtube.com/watch?v=zB0yH0vCjmE&t=3s" target="_blank" rel="noreferrer">在 YouTube 觀看完整影片 ↗</a></div>
          </div>
          <div className="video-list">
            {videos.slice(0, 3).map((video, index) => (
              <a href={video.href} target="_blank" rel="noreferrer" key={video.href}>
                <span>0{index + 1}</span><div><small>ACTIVITY FILM · {video.duration}</small><h3>{video.title}</h3></div><i>▶</i>
              </a>
            ))}
            <a className="all-media" href="https://dr-wellina.com/%E5%BD%B1%E9%9F%B3%E8%8A%B1%E7%B5%AE/" target="_blank" rel="noreferrer"><span>ALL</span><div><small>DR. IVY ARCHIVE</small><h3>前往完整影音花絮</h3></div><i>↗</i></a>
          </div>
        </div>
      </section>

      <section className="social-section" aria-labelledby="social-title">
        <div className="section-title social-title-row">
          <div><p className="section-kicker">LATEST ON INSTAGRAM</p><h2 id="social-title">在影像裡，看見 Dr. IVY 的教學日常。</h2></div>
          <a className="text-link" href="https://www.instagram.com/wellina1965/" target="_blank" rel="noreferrer">追蹤 @wellina1965 <span>↗</span></a>
        </div>
        <div className="social-grid">
          {socialPosts.map((post, index) => (
            <a className={`social-card social-${index + 1}`} href={post.href} target="_blank" rel="noreferrer" key={post.href}>
              <img src={post.image} alt={post.alt} />
              <div><small>{post.eyebrow}</small><h3>{post.title}</h3><span>VIEW ON IG ↗</span></div>
            </a>
          ))}
        </div>
      </section>

      <section className="knowledge-section" id="knowledge" aria-labelledby="knowledge-title">
        <div className="knowledge-intro">
          <p className="section-kicker soft">KNOWLEDGE AFTER CLASS</p>
          <h2 id="knowledge-title"><span className="title-line">下課之後，</span><span className="title-line">學習繼續發生。</span></h2>
          <p>從學習導航、調香入門到精油知識與研究來源，依主題閱讀，方便課前準備、課後複習與繼續探索。</p>
        </div>
        <div className="knowledge-grid">
          <a href="/course-guide/"><span>01</span><small>LEARNING GUIDE</small><h3>學習導航<br />與延伸閱讀</h3><p>依照學習目標整理方向，找到適合自己的閱讀起點。</p><i>→</i></a>
          <a href="/essential-oil-perfume/"><span>02</span><small>SCENT CREATION</small><h3>調香入門<br />與實作紀錄</h3><p>從嗅聞與氣味描述開始，學習整理自己的調香筆記。</p><i>→</i></a>
          <a href="/lavender-essential-oil/"><span>03</span><small>RESEARCH DIGEST</small><h3>研究導讀<br />與來源連結</h3><p>把有參考價值的研究整理成容易理解的閱讀入口。</p><i>→</i></a>
          <a href="/brand-collaborations/"><span>04</span><small>COLLABORATION STORIES</small><h3>合作案例<br />與活動紀錄</h3><p>從品牌與場域案例，看見芳香教育如何走進不同情境。</p><i>→</i></a>
        </div>
        <div className="knowledge-extension">
          <div className="knowledge-extension-heading">
            <div><p className="section-kicker">SEARCH &amp; LEARN</p><h2>用你會搜尋的問題，<br />開始學習。</h2></div>
            <p>從日常會遇到的問題開始，再透過五個精油知識主題，練習閱讀學名、產品標籤與嗅聞紀錄。</p>
          </div>
          <div className="search-entry-grid">
            {searchGuides.map((guide, index) => (
              <a href={`/${guide.slug}/`} key={guide.slug}>
                <span>0{index + 1}</span><small>{guide.eyebrow}</small><h3>{guide.title}</h3><p>{guide.summary}</p><i>↗</i>
              </a>
            ))}
          </div>
          <div className="oil-entry-heading"><p className="section-kicker">FIVE ESSENTIAL OIL NOTES</p><h3>五個精油知識起點</h3></div>
          <div className="oil-entry-list">
            {oilGuides.map((guide, index) => (
              <a href={`/${guide.slug}/`} key={guide.slug}><span>0{index + 1}</span><div><small>{guide.eyebrow}</small><strong>{guide.title}</strong></div><i>→</i></a>
            ))}
          </div>
        </div>
      </section>

      <section className="people-section" id="team" aria-labelledby="people-title">
        <div className="people-image"><img src="/images/wellina-hands.jpg" alt="WELLINA 課程中的手作調香互動" /></div>
        <div className="people-copy">
          <p className="section-kicker">PEOPLE &amp; COMMUNITY</p>
          <h2 id="people-title"><span className="title-line">讓專業夥伴，</span><span className="title-line">在同一個平台</span><span className="title-line">被看見。</span></h2>
          <p>認識 Dr. IVY、專業顧問與九位講師，從各自的背景與教學方向，看見芳香教育的跨域連結。</p>
          <div className="people-links">
            <a href="/team/"><small>01 · INSTRUCTORS</small><strong>講師團隊</strong><span>→</span></a>
            <a href="/team/#team-advisors-title"><small>02 · ADVISORS</small><strong>專業顧問</strong><span>→</span></a>
            <a href="/brand-collaborations/"><small>03 · COLLABORATIONS</small><strong>合作足跡</strong><span>→</span></a>
          </div>
        </div>
      </section>

      <section className="collaboration-section" id="collaboration" aria-labelledby="collaboration-title">
        <div className="collaboration-intro">
          <p className="section-kicker soft">WORK WITH DR. IVY</p>
          <h2 id="collaboration-title"><span className="title-line">把品牌、組織與<br className="mobile-break" />人的需要，</span><span className="title-line">轉化成一場<br className="mobile-break" />有記憶點的</span><span className="title-line">香氣體驗。</span></h2>
          <p>提供企業員工活動、ESG 關懷主題、品牌香氣訂製與跨域專案的合作入口；實際內容會依需求、對象與場域共同規劃。</p>
        </div>
        <div className="collaboration-grid">
          <article>
            <img src="/images/wellina-ig-corporate.jpg" alt="Ivy 老師進行企業調香活動" />
            <div><small>01 · FOR ORGANIZATIONS</small><h3>企業講座與員工活動</h3><p>依參與人數、活動目的與組織情境，規劃主題內容與體驗流程。</p><a href="https://tr.ee/HpdgvcwyGW" target="_blank" rel="noreferrer">洽談合作 ↗</a></div>
          </article>
          <article>
            <img src="/images/wellina-ig-flower.jpg" alt="品牌香氣設計使用的自然花材意象" />
            <div><small>02 · BESPOKE SCENT</small><h3>品牌香氣與活動訂製</h3><p>從品牌故事、空間印象到活動記憶，建立具有辨識度的氣味提案。</p><a href="/brand-collaborations/">瀏覽合作案例 →</a></div>
          </article>
        </div>
        <div className="collaboration-partners" aria-label="Dr. IVY 品牌合作足跡">
          <div><small>SELECTED COLLABORATIONS</small><h3>品牌與場域合作足跡</h3></div>
          <p>涵碧樓 VIP 調香・艾恩斯遊艇・澄市設計・富廣建設・金豐集團・水灣餐廳・遊樂園・酒店・民宿</p>
          <div className="collaboration-partner-links"><a href="/brand-collaborations/">查看品牌合作 →</a><a href="/teaching-organizations/">查看授課單位 →</a><a href="/psychology-scent-partners/">心理專業合作與香氣探索據點 →</a></div>
        </div>
      </section>

      <section className="international-section" id="international" aria-labelledby="international-title">
        <div className="international-heading"><p className="section-kicker">INTERNATIONAL LEARNING</p><h2 id="international-title"><span className="title-line">國際學習與認證，</span><span className="title-line">在一個區塊清楚理解。</span></h2><p>依學習目標認識芳香與調香的國際進修方向；各期課程、評量、申請及證書資訊，將依正式課程公告說明。</p></div>
        <div className="international-paths">
          <a href="/international-certifications/"><span>01</span><small>AROMATHERAPY PATHWAY</small><h3>國際芳療師認證</h3><p>從基礎學習、專業進修到申請條件，理解不同階段的學習安排。</p><i>查看完整資訊 →</i></a>
          <a href="/international-certifications/"><span>02</span><small>PERFUMERY PATHWAY</small><h3>國際調香師認證</h3><p>從嗅覺訓練、香調結構到調香實作，認識專業培訓的學習方向。</p><i>查看完整資訊 →</i></a>
          <div className="international-countries"><small>INTERNATIONAL CONNECTIONS</small><p>法國・英國・美國・加拿大・澳洲</p></div>
        </div>
      </section>

      <section className="shop-section" id="online" aria-labelledby="shop-title">
        <div className="shop-image"><img src="/images/ivy-garden.jpg" alt="Dr. IVY 自然明亮的芳香教育形象" /></div>
        <div className="shop-copy">
          <p className="section-kicker">SHOP &amp; ONLINE LEARNING</p>
          <h2 id="shop-title"><span className="title-line">讓學習與日常，</span><span className="title-line">在同一個地方延續。</span></h2>
          <div className="shop-options">
            <article className="shop-primary"><small>WELLINA BRAND &amp; PRODUCTS</small><h3>品牌與產品專頁</h3><p>品牌故事、產品影像與相關介紹集中在獨立頁面，主官網維持 Dr. IVY 的專業教育主軸。</p><div className="shop-links"><a href="/wellina-products/">進入 WELLINA 專頁 →</a></div></article>
            <article><small>ONLINE ACADEMY</small><h3>線上課程</h3><p>想了解線上學習的內容與參與方式，歡迎聯絡詢問當期課程安排。</p><a href="https://tr.ee/HpdgvcwyGW" target="_blank" rel="noreferrer">詢問線上課程 ↗</a></article>
          </div>
        </div>
      </section>

      <footer className="site-footer" id="contact">
        <div className="footer-main">
          <div className="footer-brand"><span>Dr. IVY</span><small>芳香教育與專業合作平台</small></div>
          <h2><span className="title-line">一起，讓香氣成為</span><span className="title-line">能被理解與<br className="mobile-break" />分享的專業。</span></h2>
          <a className="button button-cream" href="https://tr.ee/HpdgvcwyGW" target="_blank" rel="noreferrer">聯絡合作 ↗</a>
        </div>
        <div className="footer-meta">
          <p>© 2026 DR. IVY</p>
          <nav aria-label="頁尾連結">
            <a href="https://www.instagram.com/wellina1965/" target="_blank" rel="noreferrer">INSTAGRAM ↗</a>
            <a href="/wellina-products/">WELLINA 品牌與產品 →</a>
          </nav>
          <p className="footer-note">芳香資訊以教育與生活應用為目的，不取代個別專業建議。</p>
        </div>
      </footer>
    </main>
  );
}
