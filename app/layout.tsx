import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. IVY｜芳香教育與專業合作平台",
  description: "國際芳香教育、調香師培訓與專業講師職人培育。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
