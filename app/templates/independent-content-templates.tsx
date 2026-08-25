/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import type { ContentLink, ContentSection } from "../content-data";
import { RelatedLinks } from "../components/content-shell";

export type IndependentPageData = {
  eyebrow: string;
  title: string;
  summary: string;
  category: string;
  updatedAt: string;
  imageSrc: string;
  imageAlt: string;
  lead: string;
  sections: ContentSection[];
  related: ContentLink[];
};

function EditorialTemplate({ page, template }: { page: IndependentPageData; template: string }) {
  return <div className={`independent-template template-${template}`}><section className="content-hero"><div className="content-hero-copy"><p className="eyebrow">{page.eyebrow}</p><p className="content-breadcrumb"><a href="/">首頁</a><span>/</span>{page.category}</p><h1>{page.title}</h1><p className="content-summary">{page.summary}</p></div><div className="content-hero-image"><img src={page.imageSrc} alt={page.imageAlt} /></div></section><article className="content-article"><header className="content-lead"><p>{page.lead}</p></header><div className="content-step-grid">{page.sections.map((section) => <section key={section.number}><span>{section.number}</span><h2>{section.title}</h2><p>{section.copy}</p>{section.points && <ul>{section.points.map((point) => <li key={point}>{point}</li>)}</ul>}</section>)}</div></article><RelatedLinks links={page.related} /></div>;
}

// 每種內容保留自己的 template class；更新單一內容資料時不會改動其他類型。
export function CoursePageTemplate({ page }: { page: IndependentPageData }) { return <EditorialTemplate page={page} template="course" />; }
export function ArticlePageTemplate({ page }: { page: IndependentPageData }) { return <EditorialTemplate page={page} template="article" />; }
export function StudentStoryPageTemplate({ page }: { page: IndependentPageData }) { return <EditorialTemplate page={page} template="student-story" />; }
export function ActivityMediaPageTemplate({ page }: { page: IndependentPageData }) { return <EditorialTemplate page={page} template="activity-media" />; }
export function TeacherAlumniPageTemplate({ page }: { page: IndependentPageData }) { return <EditorialTemplate page={page} template="teacher-alumni" />; }
