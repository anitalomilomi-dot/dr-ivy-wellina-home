import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Ivy｜WELLINA 芳香教育與專業培訓",
  description: "從一場講座開始，連結芳香教育、講師培訓、國際視野與品牌合作。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
