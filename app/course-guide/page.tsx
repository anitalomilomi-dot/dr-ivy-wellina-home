/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import type { Metadata } from "next";
import { coursePaths } from "../content-data";
import { ContentHeader } from "../components/content-shell";

export const metadata: Metadata = {
  title: "幫我選課｜Dr. IVY × WELLINA",
  description: "從興趣體驗、日常應用、專業進修、講師培訓、國際認證到團體活動，幫你找到適合的 WELLINA 學習起點。",
};

export default function CourseGuidePage() {
  return (
    <main className="content-page course-guide-page">
      <ContentHeader />

      <section className="content-hero course-guide-hero">
        <div className="content-hero-copy">
          <p className="eyebrow">FIND YOUR LEARNING PATH</p>
          <p className="content-breadcrumb"><a href="/">首頁</a><span>/</span><a href="/#courses">課程學習</a><span>/</span>幫我選課</p>
          <h1>你想從哪一種學習開始？</h1>
          <p className="content-summary">先選擇最接近你現在的目標，我們會帶你前往相關資料、課程或諮詢入口。</p>
        </div>
        <div className="content-hero-image"><img src="/images/lab-table.jpg" alt="WELLINA 明亮自然的調香學習桌面" /></div>
      </section>

      <section className="course-choice-section" aria-labelledby="choice-title">
        <div className="course-choice-intro">
          <p className="section-kicker">CHOOSE ONE FOR NOW</p>
          <h2 id="choice-title">現在的你，<br />最接近哪一種？</h2>
          <p>不需要一次決定很遠的方向。先選一個目標，看完建議後再回來比較。</p>
        </div>
        <div className="course-choice-grid">
          {coursePaths.map((path) => <a href={`#${path.id}`} key={path.id}><span>{path.number}</span><h3>{path.title}</h3><i>↓</i></a>)}
        </div>
      </section>

      <section className="course-result-section" aria-label="學習方向建議">
        {coursePaths.map((path) => {
          const isExternal = path.href.startsWith("http");
          return (
            <article id={path.id} key={path.id}>
              <div className="course-result-number"><span>{path.number}</span><small>LEARNING PATH</small></div>
              <div className="course-result-main"><h2>{path.title}</h2><p>{path.forWhom}</p></div>
              <dl><div><dt>可以從哪裡開始</dt><dd>{path.startWith}</dd></div><div><dt>建議下一步</dt><dd>{path.nextStep}</dd></div></dl>
              <a className="button button-outline" href={path.href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noreferrer" : undefined}>前往這個入口 ↗</a>
            </article>
          );
        })}
      </section>

      <section className="course-guide-contact">
        <div><p className="section-kicker soft">STILL NOT SURE?</p><h2>不確定也沒關係，<br />把你現在的想法告訴我們。</h2><p>請說明你想學什麼、目前經驗與可上課的方式，WELLINA 再回覆可參考的路徑。</p></div>
        <a className="button button-cream" href="https://tr.ee/HpdgvcwyGW" target="_blank" rel="noreferrer">聯絡 WELLINA ↗</a>
      </section>
    </main>
  );
}
