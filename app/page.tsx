/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "黃敏菁博士 Dr. Ivy｜WELLINA 芳香教育與調香課程",
  description:
    "黃敏菁博士 Dr. Ivy 與 WELLINA 的芳香教育、調香課程、活動影音、講師培訓與品牌合作平台。",
};

const paths = [
  { number: "01", en: "LEARN", title: "探索課程", copy: "從主題體驗到專業進修", href: "#courses" },
  { number: "02", en: "INVITE", title: "邀請講師", copy: "企業、校園與社區講座", href: "#collaboration" },
  { number: "03", en: "CREATE", title: "訂製香氣", copy: "品牌故事與活動記憶", href: "#collaboration" },
  { number: "04", en: "REVIEW", title: "課後延伸", copy: "簡報、文章與學習筆記", href: "#knowledge" },
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
    image: "/images/wellina-ig-product.jpg",
    alt: "WELLINA 香氣產品置於自然草地中的品牌影像",
    eyebrow: "SCENT · DAILY LIFE",
    title: "讓喜歡的香氣陪伴每段旅程",
    href: "https://www.instagram.com/wellina1965/p/DcAZGwxEr71/",
  },
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
          <a href="#ivy">黃敏菁博士</a>
          <a href="#courses">課程學習</a>
          <a href="#media">影音花絮</a>
          <a href="#knowledge">知識資源</a>
          <a href="#collaboration">合作服務</a>
        </nav>

        <div className="header-actions">
          <a href="https://www.instagram.com/wellina1965/" target="_blank" rel="noreferrer">IG</a>
          <a className="bag-link" href="https://dr-wellina.com/cart/" target="_blank" rel="noreferrer">購物袋 <span>0</span></a>
        </div>

        <details className="mobile-nav">
          <summary>選單</summary>
          <div>
            <a href="#ivy">黃敏菁博士</a>
            <a href="#courses">課程學習</a>
            <a href="#media">影音花絮</a>
            <a href="#knowledge">知識資源</a>
            <a href="#collaboration">合作服務</a>
          </div>
        </details>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-copy-panel">
          <p className="eyebrow">WELLINA · FROM THE HEART</p>
          <h1 id="hero-title">讓香氣成為一門<em>能學習、能實作，</em>也能持續分享的專業。</h1>
          <p className="hero-lead">黃敏菁博士 Dr. Ivy 將課程、調香、教學現場與品牌合作，整理成一個有溫度、也能持續延伸的芳香教育平台。</p>
          <div className="hero-actions">
            <a className="button button-deep" href="#courses">開始探索</a>
            <a className="text-link" href="#ivy">認識 Ivy 老師 <span>↗</span></a>
          </div>
          <p className="hero-note">AROMATIC EDUCATION · SCENT DESIGN · COMMUNITY</p>
        </div>

        <div className="hero-visual" aria-label="Ivy 老師在自然庭園中的形象照">
          <img src="/images/ivy-garden.jpg" alt="Ivy 老師在自然庭園中的形象照" />
          <div className="hero-visual-wash" />
          <div className="hero-quote"><small>WELLINA SPIRIT</small><p>由心出發，<br />把關懷放進每一次學習。</p></div>
        </div>
      </section>

      <section className="path-section" id="start" aria-labelledby="path-title">
        <div className="section-title split-title">
          <div><p className="section-kicker">START YOUR JOURNEY</p><h2 id="path-title">今天，想從哪裡開始？</h2></div>
          <p>把不同來訪需求放在首頁第一層，讓學員、合作夥伴與正在搜尋講師的人，都能很快找到下一步。</p>
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
          <img src="/images/wellina-ig-ivy.jpg" alt="黃敏菁博士 Dr. Ivy 的品牌影片畫面" />
          <a href="https://www.instagram.com/wellina1965/reel/Db7Qwb4SiWU/" target="_blank" rel="noreferrer">觀看品牌短片 <span>↗</span></a>
        </div>
        <div className="ivy-content">
          <p className="section-kicker soft">ABOUT DR. IVY</p>
          <p className="name-line">黃敏菁博士 <span>Dr. Ivy</span></p>
          <h2 id="ivy-title">把複雜的知識說清楚，<br />讓學習保有人的溫度。</h2>
          <p className="ivy-lead">WELLINA 品牌主理人與芳香教育工作者，從教育設計、課程帶領到調香實作，持續累積能被理解、被應用，也能被分享的學習內容。</p>
          <div className="profile-grid" aria-label="Ivy 老師的工作方向">
            <article><span>01</span><h3>教育設計</h3><p>依對象與場域，整理清楚的學習路徑。</p></article>
            <article><span>02</span><h3>氣味實作</h3><p>從原料、配方到安全使用，重視可操作性。</p></article>
            <article><span>03</span><h3>人才培訓</h3><p>讓講師與專業學員的能力被持續看見。</p></article>
          </div>
          <p className="verification-note">完整學歷、任職與國際認證資料將在逐項核對來源後，更新於人物專頁。</p>
        </div>
      </section>

      <section className="brand-story" aria-labelledby="brand-title">
        <div className="brand-copy">
          <p className="section-kicker">THE WELLINA WAY</p>
          <h2 id="brand-title">從一縷香氣，<br />延伸出一條學習路徑。</h2>
          <p className="brand-lead">WELLINA 以「由心出發、傳遞關懷」為品牌精神。</p>
          <p>網站把調香、精油知識、課程活動、品牌日常與學員經驗整理在一起，讓一次活動不只停在現場，而能成為下一次學習的起點。</p>
          <div className="brand-links">
            <a href="https://dr-wellina.com/about/" target="_blank" rel="noreferrer">認識 WELLINA <span>↗</span></a>
            <a href="https://wellina1965.com/new-page" target="_blank" rel="noreferrer">閱讀原品牌頁 <span>↗</span></a>
          </div>
        </div>
        <div className="brand-collage">
          <figure className="brand-main-image"><img src="/images/wellina-ig-product.jpg" alt="WELLINA 香氣產品與自然植物" /></figure>
          <figure className="brand-small-image"><img src="/images/wellina-ig-flower.jpg" alt="WELLINA 花藝與生活美學影像" /></figure>
          <p className="vertical-word">SCENT · MEMORY · CARE</p>
        </div>
      </section>

      <section className="course-section" id="courses" aria-labelledby="courses-title">
        <div className="section-title split-title">
          <div><p className="section-kicker">COURSES &amp; LEARNING</p><h2 id="courses-title">從喜歡香氣，走到理解香氣。</h2></div>
          <p>首頁先呈現學習層次；正式課名、梯次、國際認證名稱與發證關係，會在資料完成查證後再公開。</p>
        </div>

        <div className="course-feature">
          <div className="course-image"><img src="/images/lab-table.jpg" alt="明亮自然的 WELLINA 調香學習桌面" /><span>WELLINA LEARNING TABLE</span></div>
          <div className="course-copy">
            <small>01 · OPEN EXPERIENCE</small>
            <h3>主題調香與<br />芳香體驗課程</h3>
            <p>用生活化的方式認識香氣、原料、配方思考與安全觀念，適合初次接觸的學員與團體活動。</p>
            <a className="button button-outline" href="https://dr-wellina.com/class/" target="_blank" rel="noreferrer">查看現有課程 ↗</a>
          </div>
        </div>

        <div className="course-rows">
          <a href="https://dr-wellina.com/class/" target="_blank" rel="noreferrer"><span>02</span><small>PROFESSIONAL</small><h3>專業進修與實務應用</h3><i>↗</i></a>
          <a href="#international"><span>03</span><small>CERTIFICATION</small><h3>國際認證學習路徑</h3><i>→</i></a>
          <a href="#team"><span>04</span><small>TRAIN THE TRAINER</small><h3>講師培訓與教學發展</h3><i>→</i></a>
          <a href="#online"><span>05</span><small>ONLINE · RESERVED</small><h3>線上課程專區</h3><i>→</i></a>
        </div>
      </section>

      <section className="media-section" id="media" aria-labelledby="media-title">
        <div className="media-heading">
          <p className="section-kicker soft">FILM &amp; MOMENTS</p>
          <h2 id="media-title">不只看見成果，<br />也看見真實的教學現場。</h2>
          <p>用活動影片、課程照片與品牌短片，讓第一次來訪的人快速理解 WELLINA 的教學氣氛與合作樣貌。</p>
        </div>

        <div className="media-layout">
          <div className="video-feature">
            <div className="video-frame">
              <a className="video-poster" href="https://www.youtube.com/watch?v=jj30AmpbiKQ" target="_blank" rel="noreferrer" aria-label="在 YouTube 播放民雄日式招待所文創園區－憶起調香趣">
                <img src="/images/wellina-hands.jpg" alt="民雄日式招待所文創園區調香活動影片封面" />
                <span>▶</span>
                <small>PLAY ON YOUTUBE</small>
              </a>
            </div>
            <div className="video-caption"><small>FEATURE FILM · 04:19</small><h3>民雄日式招待所文創園區<br />憶起調香趣</h3></div>
          </div>
          <div className="video-list">
            {videos.slice(1).map((video, index) => (
              <a href={video.href} target="_blank" rel="noreferrer" key={video.href}>
                <span>0{index + 2}</span><div><small>ACTIVITY FILM · {video.duration}</small><h3>{video.title}</h3></div><i>▶</i>
              </a>
            ))}
            <a className="all-media" href="https://dr-wellina.com/%E5%BD%B1%E9%9F%B3%E8%8A%B1%E7%B5%AE/" target="_blank" rel="noreferrer"><span>ALL</span><div><small>WELLINA ARCHIVE</small><h3>前往完整影音花絮</h3></div><i>↗</i></a>
          </div>
        </div>
      </section>

      <section className="social-section" aria-labelledby="social-title">
        <div className="section-title social-title-row">
          <div><p className="section-kicker">LATEST ON INSTAGRAM</p><h2 id="social-title">在影像裡，感受品牌的日常。</h2></div>
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
          <h2 id="knowledge-title">下課之後，<br />學習繼續發生。</h2>
          <p>課前簡報、延伸閱讀、配方筆記、研究導讀與常見問答，會依主題互相連結，讓學員、人類搜尋與 AI 都能理解內容關係。</p>
        </div>
        <div className="knowledge-grid">
          <a href="#slides"><span>01</span><small>CLASS NOTES</small><h3>課程簡報<br />與延伸閱讀</h3><p>像簡報一樣好讀的網頁文章，課前可看、課後可查。</p><i>→</i></a>
          <a href="#formula"><span>02</span><small>FORMULA NOTES</small><h3>配方筆記<br />與安全提醒</h3><p>整理配方脈絡、使用方法與需要留意的安全資訊。</p><i>→</i></a>
          <a href="#research"><span>03</span><small>RESEARCH DIGEST</small><h3>研究導讀<br />與來源連結</h3><p>把有參考價值的研究整理成容易理解的閱讀入口。</p><i>→</i></a>
          <a href="#stories"><span>04</span><small>STUDENT STORIES</small><h3>學員心得<br />與實作分享</h3><p>經同意與審核後，讓學習經驗成為彼此的靈感。</p><i>→</i></a>
        </div>
      </section>

      <section className="people-section" id="team" aria-labelledby="people-title">
        <div className="people-image"><img src="/images/wellina-hands.jpg" alt="WELLINA 課程中的手作調香互動" /></div>
        <div className="people-copy">
          <p className="section-kicker">PEOPLE &amp; COMMUNITY</p>
          <h2 id="people-title">讓專業夥伴，<br />在同一個平台被看見。</h2>
          <p>未來會收錄 WELLINA 講師團隊、具跨域專業背景的校友，以及學員投稿內容；人物資料會先取得同意，再進入公開頁面。</p>
          <div className="people-links">
            <a href="#instructors"><small>01 · INSTRUCTORS</small><strong>講師團隊</strong><span>→</span></a>
            <a href="#alumni"><small>02 · ALUMNI</small><strong>專業校友</strong><span>→</span></a>
            <a href="#stories"><small>03 · STORIES</small><strong>學員分享</strong><span>→</span></a>
          </div>
        </div>
      </section>

      <section className="collaboration-section" id="collaboration" aria-labelledby="collaboration-title">
        <div className="collaboration-intro">
          <p className="section-kicker soft">WORK WITH DR. IVY</p>
          <h2 id="collaboration-title">把品牌、組織與人的需要，<br />轉化成一場有記憶點的香氣體驗。</h2>
          <p>提供企業員工活動、ESG 關懷主題、品牌香氣訂製與跨域專案的合作入口；實際內容會依需求、對象與場域共同規劃。</p>
        </div>
        <div className="collaboration-grid">
          <article>
            <img src="/images/wellina-ig-corporate.jpg" alt="Ivy 老師進行企業調香活動" />
            <div><small>01 · FOR ORGANIZATIONS</small><h3>企業講座與員工活動</h3><p>依參與人數、活動目的與組織情境，規劃主題內容與體驗流程。</p><a href="https://tr.ee/HpdgvcwyGW" target="_blank" rel="noreferrer">洽談合作 ↗</a></div>
          </article>
          <article>
            <img src="/images/product-table.jpg" alt="WELLINA 香氣產品與調香器具" />
            <div><small>02 · BESPOKE SCENT</small><h3>品牌香氣與活動訂製</h3><p>從品牌故事、空間印象到活動記憶，建立具有辨識度的氣味提案。</p><a href="https://tr.ee/HpdgvcwyGW" target="_blank" rel="noreferrer">提出需求 ↗</a></div>
          </article>
        </div>
      </section>

      <section className="international-section" id="international" aria-labelledby="international-title">
        <div><p className="section-kicker">INTERNATIONAL LEARNING</p><h2 id="international-title">讓每一條認證路徑，<br />都有清楚可查的來源。</h2></div>
        <div><p>國際學院、認證單位、證書關係與官方連結會集中呈現。所有名稱、資格與對接方式，會在完成來源核對後正式公開。</p><div className="route"><span>WELLINA<br /><small>學習入口</small></span><i>→</i><span>課程培訓<br /><small>清楚路徑</small></span><i>→</i><span>國際單位<br /><small>來源核對</small></span></div></div>
      </section>

      <section className="shop-section" id="online" aria-labelledby="shop-title">
        <div className="shop-image"><img src="/images/blending-studio.jpg" alt="WELLINA 調香工作情境" /></div>
        <div className="shop-copy">
          <p className="section-kicker">SHOP &amp; ONLINE LEARNING</p>
          <h2 id="shop-title">讓學習與日常，<br />在同一個地方延續。</h2>
          <div className="shop-options">
            <article><small>WELLINA STORE</small><h3>精選產品</h3><p>保留商品、購物車與綠界結帳的串接位置。</p><a href="https://dr-wellina.com/store/" target="_blank" rel="noreferrer">前往現有商店 ↗</a></article>
            <article><small>ONLINE ACADEMY</small><h3>線上課程</h3><p>預留會員、課程觀看、學習進度與下載資料。</p><span>COMING NEXT</span></article>
          </div>
        </div>
      </section>

      <footer className="site-footer" id="contact">
        <div className="footer-main">
          <div className="footer-brand"><span>WELLINA</span><small>DR. IVY · AROMATIC EDUCATION</small></div>
          <h2>一起，讓香氣成為<br />能被理解與分享的專業。</h2>
          <a className="button button-cream" href="https://tr.ee/HpdgvcwyGW" target="_blank" rel="noreferrer">聯絡合作 ↗</a>
        </div>
        <div className="footer-meta">
          <p>© 2026 WELLINA · DR. IVY</p>
          <nav aria-label="頁尾連結">
            <a href="https://www.instagram.com/wellina1965/" target="_blank" rel="noreferrer">INSTAGRAM ↗</a>
            <a href="https://dr-wellina.com/" target="_blank" rel="noreferrer">WELLINA 官網 ↗</a>
            <a href="https://dr-wellina.com/store/" target="_blank" rel="noreferrer">產品商店 ↗</a>
          </nav>
          <p className="footer-note">芳香資訊以教育與生活應用為目的，不取代個別專業建議。</p>
        </div>
      </footer>
    </main>
  );
}
