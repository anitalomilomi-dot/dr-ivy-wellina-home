/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import type { Metadata } from "next";
import { ContentFooter, ContentHeader } from "../components/content-shell";

export const metadata: Metadata = {
  title: "授課與機構合作｜Dr. IVY",
  description: "Dr. IVY 以 28 年專業歷練，累積 3,000 場次演講與授課，足跡涵蓋醫療、學校、企業與社福等多元場域。",
};

const organizationGroups = [
  {
    number: "01",
    eyebrow: "MEDICAL & PROFESSIONAL",
    title: "醫療與專業場域",
    items: ["成大醫院", "高雄醫學大學", "高雄醫學大學附設中和紀念醫院", "若瑟醫院", "聖馬爾定醫院", "嘉義基督教醫院", "大安婦幼醫院"],
  },
  {
    number: "02",
    eyebrow: "HIGHER EDUCATION",
    title: "各級學校與大專校院",
    scope: "大專校院・高中・國中・國小",
    items: ["國立嘉義大學", "國立臺南護理專科學校", "樹德科技大學", "台南應用科技大學", "臺北城市科技大學", "國立臺中科技大學"],
  },
  {
    number: "03",
    eyebrow: "ENTERPRISE & PUBLIC SERVICE",
    title: "企業與公營機構",
    items: ["金豐集團", "唐榮集團", "台灣電力公司", "中華電信"],
  },
  {
    number: "04",
    eyebrow: "FAMILY EDUCATION",
    title: "家庭教育中心",
    items: ["嘉義市家庭教育中心", "嘉義縣家庭教育中心", "臺南市家庭教育中心"],
  },
  {
    number: "05",
    eyebrow: "CHILD & FAMILY SUPPORT",
    title: "家扶與社福單位",
    items: ["臺南家扶中心", "南高雄家扶中心", "嘉義市家扶中心"],
  },
  {
    number: "06",
    eyebrow: "PROFESSIONAL & SOCIAL ASSOCIATIONS",
    title: "專業與公益協會",
    items: ["LOMILOMI 國際芳香保健照護協會", "愛無限協會"],
  },
  {
    number: "07",
    eyebrow: "COMMUNITY & BUSINESS NETWORKS",
    title: "社團與跨業交流",
    items: ["國際獅子會", "國際扶輪社", "青商會", "跨業交流會", "台中二代會"],
  },
];

export default function TeachingOrganizationsPage() {
  return (
    <>
      <ContentHeader />
      <main className="teaching-organizations-page">
        <section className="teaching-organizations-hero" aria-labelledby="teaching-organizations-title">
          <div>
            <p className="eyebrow">TEACHING &amp; INSTITUTIONAL COLLABORATIONS</p>
            <p className="content-breadcrumb"><a href="/">Dr. IVY 首頁</a><span>/</span>授課單位</p>
            <h1 id="teaching-organizations-title"><span className="title-line">讓芳香教育，</span><span className="title-line">走進不同專業</span><span className="title-line">與生活場域。</span></h1>
            <p>Dr. IVY 的授課與活動足跡涵蓋醫療、大專校院、企業、公營機構、家庭教育、家扶社福與專業協會，並依對象與場域規劃合適的內容形式。</p>
            <div className="teaching-experience" aria-label="Dr. IVY 專業與授課經歷">
              <p><strong>28 年</strong><span>專業歷練</span></p>
              <p><strong>3,000 場次</strong><span>演講與授課累積</span></p>
            </div>
          </div>
          <figure><img src="/images/dr-ivy-botanical-hero-v1.png" alt="自然光下的芳香植物研究與教學桌景" /></figure>
        </section>

        <section className="organization-directory" aria-labelledby="organization-directory-title">
          <div className="organization-directory-heading">
            <p className="section-kicker">TEACHING FOOTPRINT</p>
            <h2 id="organization-directory-title"><span className="title-line">跨越專業與產業，</span><span className="title-line">累積真實的授課現場。</span></h2>
          </div>
          <div className="organization-group-list">
            {organizationGroups.map((group) => (
              <section key={group.number} className="organization-group">
                <header><span>{group.number}</span><div><small>{group.eyebrow}</small><h3>{group.title}</h3>{"scope" in group && group.scope ? <p className="organization-scope">{group.scope}</p> : null}</div></header>
                <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </section>
            ))}
          </div>
        </section>

        <section className="organization-contact">
          <div><p className="section-kicker soft">INVITE DR. IVY</p><h2><span className="title-line">依您的對象與場域，</span><span className="title-line">共同規劃合適的芳香內容。</span></h2></div>
          <div className="collaboration-contact-actions"><a className="button button-cream" href="/psychology-scent-partners/">香氣探索據點 →</a><a className="button button-cream" href="/brand-collaborations/">品牌合作案例 →</a><a className="button button-cream" href="https://tr.ee/HpdgvcwyGW" target="_blank" rel="noreferrer">邀請授課 ↗</a></div>
        </section>
      </main>
      <ContentFooter />
    </>
  );
}
