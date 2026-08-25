/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import type { SearchGuide } from "../content-data";
import { RelatedLinks } from "../components/content-shell";

export function SearchGuideTemplate({ page }: { page: SearchGuide }) {
  return <><section className="content-hero search-content-hero"><div className="content-hero-copy"><p className="eyebrow">{page.eyebrow}</p><p className="content-breadcrumb"><a href="/">首頁</a><span>/</span><a href="/#knowledge">知識資源</a><span>/</span>學習指南</p><h1>{page.title}</h1><p className="content-summary">{page.summary}</p></div><div className="content-hero-image"><img src="/images/lab-table.jpg" alt="WELLINA 明亮自然的調香學習桌面" /></div></section><article className="content-article"><header className="content-lead"><p>{page.lead}</p></header><div className="content-step-grid">{page.sections.map((section) => <section key={section.number}><span>{section.number}</span><h2>{section.title}</h2><p>{section.copy}</p>{section.points && <ul>{section.points.map((point) => <li key={point}>{point}</li>)}</ul>}</section>)}</div><section className="question-panel" aria-labelledby="questions-title"><div><p className="section-kicker soft">QUESTIONS TO ASK</p><h2 id="questions-title">在選擇之前，<br />先問自己這幾題。</h2></div><ol>{page.questions.map((question, index) => <li key={question}><span>0{index + 1}</span>{question}</li>)}</ol></section></article><RelatedLinks links={page.related} /></>;
}
