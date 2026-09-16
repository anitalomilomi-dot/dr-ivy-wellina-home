/* eslint-disable @next/next/no-html-link-for-pages, @next/next/no-img-element */
import type { Metadata } from "next";
import { ContentHeader } from "../components/content-shell";

export const metadata: Metadata = {
  title: "國際芳療師認證課程｜Dr. IVY × WELLINA",
  description: "查看2026芳療師雙認證課程69期台北班與高雄班招生 EDM、上課日期、地點與簡章，並認識國際芳香學習方向。",
};

export default function InternationalCertificationsPage() {
  return (
    <main className="certifications-page">
      <ContentHeader />

      <section className="certifications-hero">
        <div>
          <p className="section-kicker">AROMATHERAPY COURSES</p>
          <h1><span className="title-line">國際芳療師認證</span><em className="title-line">課程與招生資訊</em></h1>
          <p>先選擇方便上課的城市，就能查看招生 EDM、上課日期、地點與報名方式。</p>
          <div className="enrollment-quick-links" aria-label="選擇上課班級">
            <a href="#taipei69-enrollment"><small>芳療師雙認證課程</small><strong>69期台北班</strong><p>2026年11月開課 · 假日班／平日班</p><span>查看招生 EDM 與課程資訊 ↓</span></a>
            <a href="#kaohsiung-enrollment"><small>芳療師雙認證課程</small><strong>高雄班</strong><p>2026年10月10日開課</p><span>查看招生 EDM 與課程資訊 ↓</span></a>
          </div>
        </div>
      </section>

      <section className="certification-enrollment" id="taipei69-enrollment" aria-labelledby="enrollment-title">
        <div className="certification-section-heading">
          <p className="section-kicker">2026 COURSE ENROLLMENT</p>
          <h2 id="enrollment-title"><span className="title-line">芳療師雙認證班</span><span className="title-line">69期・台北實體課</span></h2>
          <p>完整招生 EDM、上課安排與課程費用，一起整理在這裡。點選招生圖可以放大閱讀，也可以下載簡章留存。</p>
        </div>
        <div className="certification-enrollment-grid">
          <figure className="certification-edm">
            <a href="/images/taipei-69-certification-edm.jpg" target="_blank" rel="noopener noreferrer" aria-label="放大69期台北班招生 EDM（另開分頁）">
              <img src="/images/taipei-69-certification-edm.jpg" width="1838" height="2600" alt="2026 芳療師雙認證班69期台北實體課招生 EDM，包含課程內容、教材、費用、上課時間與地點。" />
            </a>
            <figcaption>69期台北班招生 EDM · 點圖放大閱讀</figcaption>
          </figure>
          <aside className="certification-enrollment-details" aria-label="69期台北班課程重點">
            <article><h3>上課時間</h3><dl>
              <div><dt>假日班</dt><dd>2026年11月15日（日）、21日（六）、22日（日）、12月6日（日）</dd></div>
              <div><dt>平日班</dt><dd>2026年11月20日（五）、26日（四）、27日（五）、12月10日（四）</dd></div>
              <div><dt>每天時段</dt><dd>10:00–12:30、13:30–17:00</dd></div>
              <div><dt>總複習與考試</dt><dd><strong>2026年12月12日（六）</strong><br />10:00–12:00 總複習<br />13:10–16:10 考試</dd></div>
            </dl></article>
            <article><h3>課程地點</h3><p>台北市萬華區中華路一段10號B1<br />（台北永續影響力扶輪社）</p></article>
            <article><h3>課程費用</h3><p>原課程總價 <strong>NT$49,800</strong><br />符合簡章條件者優惠價 <strong>NT$46,800</strong></p><p className="enrollment-small">優惠適用簡章指定專業人員，或9月20日前早鳥報名；專業人員須出示相關執照，詳細條件請參閱招生 EDM。</p></article>
            <article><h3>教材與課堂實作</h3><p>含課程講義、個案諮詢表、單方精油學習單、25支5mL精油套組與木盒、手作DIY、精油香氛DIY、總複習、考照與認證費。依簡章提供免費一年複訓及跟課實習機會。</p></article>
            <div className="enrollment-actions">
              <a className="button button-deep" href="/brochures/taipei-69-certification-2026.pdf" download>下載69期台北班招生簡章 PDF ↓</a>
              <a className="text-link" href="https://line.me/R/ti/p/%40wellina1965" target="_blank" rel="noopener noreferrer">官方 LINE 報名諮詢 ↗</a>
            </div>
          </aside>
        </div>
      </section>

      <section className="certification-enrollment certification-enrollment-kaohsiung" id="kaohsiung-enrollment" aria-labelledby="kaohsiung-enrollment-title">
        <div className="certification-section-heading">
          <p className="section-kicker">2026 KAOHSIUNG COURSE</p>
          <h2 id="kaohsiung-enrollment-title"><span className="title-line">國際芳療師雙認證課程</span><span className="title-line">高雄班</span></h2>
          <p>在高雄展開芳香學習。招生 EDM 與課程安排如下，點選圖片可放大查看完整內容及報名 QR Code。</p>
        </div>
        <div className="certification-enrollment-grid">
          <figure className="certification-edm">
            <a href="/images/kaohsiung-certification-edm.png" target="_blank" rel="noopener noreferrer" aria-label="放大高雄班招生 EDM（另開分頁）">
              <img src="/images/kaohsiung-certification-edm.png" width="1024" height="1536" alt="2026 國際芳療師雙認證課程高雄班招生 EDM，包含上課日期、光華一路課程地點與官方 LINE 報名資訊。" />
            </a>
            <figcaption>高雄班招生 EDM · 點圖放大閱讀</figcaption>
          </figure>
          <aside className="certification-enrollment-details" aria-label="高雄班課程重點">
            <article><h3>上課時間</h3><dl>
              <div><dt>課程日期</dt><dd>2026年10月10日（六）、11日（日）、25日（日）、26日（一）、11月1日（日）</dd></div>
              <div><dt>每天時段</dt><dd>10:00–12:30、13:30–17:30</dd></div>
              <div><dt>總複習與考試</dt><dd><strong>2026年11月1日（日）</strong></dd></div>
            </dl></article>
            <article><h3>課程地點</h3><p>80253 高雄市苓雅區尚義里<br />光華一路206號14樓</p></article>
            <article><h3>課程學習方向</h3><p>精油學理、實務應用、芳香心理學與專業發展。完整內容請參閱本班招生 EDM。</p></article>
            <article><h3>報名諮詢</h3><p>官方 LINE：<strong>@wellina1965</strong><br />可掃描招生 EDM 下方的 QR Code，詢問高雄班費用及報名安排。</p></article>
            <div className="enrollment-actions">
              <a className="button button-deep" href="/images/kaohsiung-certification-edm.png" download>下載高雄班招生 EDM ↓</a>
              <a className="text-link" href="https://line.me/R/ti/p/%40wellina1965" target="_blank" rel="noopener noreferrer">官方 LINE 報名諮詢 ↗</a>
            </div>
          </aside>
        </div>
      </section>

      <footer className="content-footer certification-contact">
        <div><p className="section-kicker soft">COURSE INQUIRIES</p><h2>想了解課程或報名？<br />直接與我們聯繫。</h2><p>官方 LINE：@wellina1965</p></div>
        <a className="button button-cream" href="https://line.me/R/ti/p/%40wellina1965" target="_blank" rel="noopener noreferrer">官方 LINE 報名諮詢 ↗</a>
        <p><a href="/">← 回到首頁</a> · Dr. IVY × WELLINA</p>
      </footer>
    </main>
  );
}
