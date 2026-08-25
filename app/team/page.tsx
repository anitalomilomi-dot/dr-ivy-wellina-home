/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import type { Metadata } from "next";
import { ContentFooter, ContentHeader } from "../components/content-shell";

export const metadata: Metadata = {
  title: "講師團隊｜Dr. IVY × WELLINA",
  description: "認識由 Dr. IVY 領導、專業顧問共同支持的 WELLINA 跨域講師團隊。",
};

const lecturers = [
  {
    number: "01",
    name: "唐心如",
    englishName: "Hsin-Ju Tang",
    role: "助理教授／護理教育講師",
    image: "/images/team/hsin-ju-tang.jpg",
    alt: "講師唐心如形象照",
    summary: "具護理臨床與高等教育背景，專長涵蓋急重症、高齡照護、擬真情境、實證護理與設計思考，擅長將專業照護經驗轉化為清楚可理解的教學內容。",
    expertise: ["護理教育", "高齡照護", "實證教學", "設計思考"],
  },
  {
    number: "02",
    name: "鍾佳芬",
    englishName: "Chia-Fen Chung",
    role: "傷口造口護理師／照護教育講師",
    image: "/images/team/chia-fen-chung.jpg",
    alt: "講師鍾佳芬形象照",
    summary: "具內外科、加護照護與生理檢查實務經驗，並投入傷口造口、園藝活動及社區教育，重視把專業照護知識轉化為貼近日常的學習內容。",
    expertise: ["臨床照護", "護理教育", "園藝活動", "社區講座"],
  },
  {
    number: "03",
    name: "馮氏秋芳",
    englishName: "Poly Phung",
    role: "國際貿易與營運管理",
    image: "/images/team/poly-phung.jpg",
    alt: "講師馮氏秋芳形象照",
    summary: "具國際貿易、物流與營運管理經驗，擅長把策略轉化為可執行目標，並連結跨文化溝通、專案協作與供應流程。",
    expertise: ["國際貿易", "物流管理", "營運規劃", "跨文化溝通"],
  },
  {
    number: "04",
    name: "劉鎔瑄",
    englishName: "Jung-Hsuan Liu",
    role: "職業安全衛生護理師／護理教育講師",
    image: "/images/team/jung-hsuan-liu.jpg",
    alt: "講師劉鎔瑄形象照",
    summary: "具婦產科病房與職業安全衛生護理背景，並有教學及芳香學習經驗，關注職場、婦幼與日常生活中的教育支持。",
    expertise: ["職場安全", "護理教育", "婦幼照護", "芳香學習"],
  },
  {
    number: "05",
    name: "劉乃榕",
    englishName: "",
    role: "講師",
    image: "/images/team/liu-nai-rong.jpg",
    alt: "講師劉乃榕形象照",
    summary: "",
    expertise: [],
  },
  {
    number: "06",
    name: "陳曉雯",
    englishName: "",
    role: "講師",
    image: "/images/team/chen-hsiao-wen.jpg",
    alt: "講師陳曉雯形象照",
    summary: "",
    expertise: [],
  },
  {
    number: "07",
    name: "王愉晴",
    englishName: "",
    role: "講師",
    image: "/images/team/wang-yu-ching.jpg",
    alt: "講師王愉晴形象照",
    summary: "",
    expertise: [],
  },
  {
    number: "08",
    name: "楊心柔",
    englishName: "",
    role: "戲劇專業講師",
    image: "/images/team/yang-hsin-jou.jpg",
    alt: "講師楊心柔形象照",
    summary: "",
    expertise: [],
  },
  {
    number: "09",
    name: "孫昀彤",
    englishName: "Daphne Sun",
    role: "社會工作與社區教育",
    image: "/images/team/daphne-sun.jpg",
    alt: "講師孫昀彤形象照",
    summary: "具社會工作、社區方案與跨產業實務經驗，長期參與家庭、社區及團體教育，將關懷、溝通與活動帶領帶進學習現場。",
    expertise: ["社會工作", "社區關懷", "方案執行", "團體帶領"],
  },
];

const advisors = [
  {
    name: "林恩仕",
    role: "教授・美容教育專業顧問",
    image: "/images/team/lin-en-shih.jpg",
    alt: "林恩仕教授形象照",
    summary: "具美容與化妝品應用教育背景，從高等教育、專業培育與實務教學角度，提供團隊跨域發展的專業視野。",
  },
  {
    name: "鄭皓仁",
    role: "顧問・臨床心理師",
    image: "/images/team/cheng-hao-jen.jpg",
    alt: "鄭皓仁顧問形象照",
    summary: "以臨床心理與專業教育經驗，協助團隊在課程溝通、心理專業界線與跨域合作上保持清楚而穩定的方向。",
  },
  {
    name: "蔡函潔",
    role: "臨床心理專業講師",
    image: "/images/team/tsai-han-chieh.jpg",
    alt: "蔡函潔臨床心理專業講師形象照",
    summary: "具臨床心理與團體教育背景，將專業觀察、溝通與學習引導帶入跨域課程與團隊交流。",
  },
];

export default function TeamPage() {
  return (
    <>
      <ContentHeader />
      <main className="team-page">
        <section className="team-hero" aria-labelledby="team-title">
          <div className="team-hero-copy">
            <p className="eyebrow">MEET THE TEAM</p>
            <p className="content-breadcrumb"><a href="/">Dr. IVY 首頁</a><span>/</span>講師團隊</p>
            <h1 id="team-title"><span className="title-line">不同專業背景，</span><span className="title-line">在同一個學習平台</span><span className="title-line">彼此連結。</span></h1>
            <p>團隊成員來自心理醫護等領域，由 Dr. IVY 串聯芳香教育、課程活動與專業合作。</p>
          </div>
        </section>

        <section className="team-principal" aria-labelledby="team-principal-title">
          <figure><img src="/images/ivy-portrait.jpg" alt="Dr. IVY 團隊校長與最高指導" /></figure>
          <div>
            <p className="section-kicker soft">TEAM PRINCIPAL · LEAD MENTOR</p>
            <span className="team-principal-role">團隊校長・最高指導</span>
            <h2 id="team-principal-title">Dr. IVY</h2>
            <p>由 Dr. IVY 統整芳香教育、調香培訓、講師培育與專業合作方向，陪伴團隊把各自的專業背景轉化成清楚、可實踐，也能持續累積的教學內容。</p>
            <div className="team-principal-tags"><span>芳香教育</span><span>調香培訓</span><span>講師培育</span><span>專業合作</span></div>
          </div>
        </section>

        <section className="team-advisors" aria-labelledby="team-advisors-title">
          <div className="team-advisors-heading"><p className="section-kicker">PROFESSIONAL ADVISORS</p><h2 id="team-advisors-title"><span className="title-line">不同領域的專業視角，</span><span className="title-line">共同守護學習品質。</span></h2><p>由教育與心理專業夥伴提供不同視角，協助團隊維持學習品質、專業界線與跨域合作深度。</p></div>
          <div className="team-advisors-grid">{advisors.map((advisor, index) => <article key={advisor.name}><figure><img src={advisor.image} alt={advisor.alt} /></figure><div><span>0{index + 1}</span><h3>{advisor.name}</h3><p className="advisor-role">{advisor.role}</p><p>{advisor.summary}</p></div></article>)}</div>
        </section>

        <section className="team-directory" aria-labelledby="team-directory-title">
          <div className="team-directory-heading">
            <p className="section-kicker">LECTURER TEAM</p>
            <h2 id="team-directory-title"><span className="title-line">專業不只有一種樣子，</span><span className="title-line">每一位講師都帶著真實經驗而來。</span></h2>
            <p>依專業背景與實務經驗整理，讓學員與合作單位更容易理解每位講師可以帶來的視角。</p>
          </div>
          <div className="team-grid">
            {lecturers.map((lecturer) => (
              <article className="lecturer-card" key={lecturer.name}>
                <figure><img src={lecturer.image} alt={lecturer.alt} /></figure>
                <div className="lecturer-card-copy">
                  <div className="lecturer-card-meta"><span>{lecturer.number}</span>{lecturer.englishName && <small>{lecturer.englishName}</small>}</div>
                  <h3>{lecturer.name}</h3>
                  <p className="lecturer-role">{lecturer.role}</p>
                  {lecturer.summary && <p className="lecturer-summary">{lecturer.summary}</p>}
                  {lecturer.expertise.length > 0 && <ul aria-label={`${lecturer.name}專長`}>
                    {lecturer.expertise.map((item) => <li key={item}>{item}</li>)}
                  </ul>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="team-collaboration">
          <div><p className="section-kicker soft">TEACHING &amp; COLLABORATION</p><h2><span className="title-line">想邀請講師，</span><span className="title-line">或規劃一場適合團體的芳香活動？</span></h2><p>提供對象、人數、時間、場域與期待方向，由 WELLINA 協助整理合適的主題與講師合作方式。</p></div>
          <a className="button button-cream" href="https://tr.ee/HpdgvcwyGW" target="_blank" rel="noreferrer">洽談講師合作 ↗</a>
        </section>
      </main>
      <ContentFooter />
    </>
  );
}
