export default function ScentCardPreviewPage() {
  return (
    <main className="scent-pilot-page">
      <header className="scent-pilot-header">
        <a href="../new-architecture-preview#scent-quiz">← 回到香氣測驗</a>
        <div><strong>Dr. IVY × WELLINA</strong><span>香氣肖像典藏系列</span></div>
      </header>

      <section className="scent-pilot-layout">
        <figure className="collectible-scent-card" aria-label="晨光柑橘調專屬香氣圖卡">
          <img src="../images/scent-cards/citrus-lumiere-v1.png" alt="晨光、柑橘樹、清透水光與金色薄紗構成的香氣意象" />
          <div className="collectible-card-brand">DR. IVY × WELLINA</div>
          <div className="collectible-card-crest"><small>SCENT PORTRAIT</small><strong>01</strong><span>明亮・清透・柔和</span></div>
          <figcaption>
            <small>LUMIÈRE D’AGRUMES</small>
            <h1>晨光柑橘調</h1>
            <p className="collectible-card-owner">專屬於｜IVY</p>
            <div className="collectible-card-meta"><span>DESIGN C01-01</span><span>2026.08.23</span></div>
            <blockquote>願你在每一次呼吸之間，<br />都為自己留下一點明亮與從容。<cite>Dr. IVY</cite></blockquote>
          </figcaption>
        </figure>

        <article className="scent-pilot-copy">
          <p className="section-kicker">YOUR SCENT PORTRAIT · 01</p>
          <h2>你的香氣，像晨光穿過柑橘樹梢。</h2>
          <p className="scent-pilot-lead">你偏好明亮、乾淨而有呼吸感的香氣。它不需要很濃，也能在靠近時留下清楚、自然又令人愉快的印象。</p>

          <section className="scent-evolution" aria-labelledby="evolution-title">
            <h3 id="evolution-title">這份香氣會怎麼變化？</h3>
            <ol>
              <li><span>剛聞到</span><p>像剛削開柑橘果皮，清亮、多汁，帶一點細緻微苦，不像甜果汁。</p></li>
              <li><span>幾分鐘後</span><p>清新的花草氣息慢慢出現，讓柑橘變得柔和，香氣不尖銳，也不顯單薄。</p></li>
              <li><span>停留之後</span><p>留下淡淡乾淨木香，將明亮感安靜收住，尾韻輕盈、不厚重。</p></li>
            </ol>
          </section>

          <div className="scent-pilot-feedback">
            <strong>給你的專屬回饋</strong>
            <p>這是一份有光、有空氣，也有分寸的香氣。適合你想讓日常變得清爽、精緻，卻不希望氣味過度張揚的時刻。</p>
          </div>

          <p className="scent-pilot-note">這份結果呈現你的氣味偏好，不代表人格或身心狀態。圖卡上的設計編號會連結後台核准配方，配方內容不在消費者頁面公開。</p>
          <div className="result-actions"><a className="button button-deep" href="../new-architecture-preview#scent-delivery">把這份香氣寄給我</a><a className="scent-text-link" href="../new-architecture-preview#scent-quiz">重新測驗</a></div>
        </article>
      </section>
    </main>
  );
}
