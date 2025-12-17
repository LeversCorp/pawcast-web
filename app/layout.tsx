import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pawcast", // 깔끔하게 브랜드명만!
  description: "반려견을 아끼는 진심 반려인의 필수 앱 포캐스트. 강아지 산책 환경 등급 제공(날씨, 온도, 미세먼지).", // 여기에 한글 이름이 있어서 검색 OK
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko"> {/* 영어(en)로 되어있다면 ko로 바꾸는 거 추천 */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
