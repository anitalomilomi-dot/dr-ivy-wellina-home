import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentFooter, ContentHeader } from "../components/content-shell";
import { contentPageSlugs, getContentPage } from "../content-data";
import { OilGuideTemplate } from "../templates/oil-guide-template";
import { SearchGuideTemplate } from "../templates/search-guide-template";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return contentPageSlugs.map((slug) => ({ slug })); }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const page = getContentPage((await params).slug);
  return page ? { title: `${page.title}｜Dr. IVY × WELLINA`, description: page.summary } : {};
}

export default async function ContentPage({ params }: PageProps) {
  const page = getContentPage((await params).slug);
  if (!page) notFound();
  return <main className={`content-page template-${page.kind}`}><ContentHeader />{page.kind === "oil" ? <OilGuideTemplate page={page} /> : <SearchGuideTemplate page={page} />}<ContentFooter /></main>;
}
