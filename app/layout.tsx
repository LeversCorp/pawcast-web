import type { Metadata } from "next";
import { Inter } from "next/font/google"; // 1. 폰트 불러오기
import "./globals.css";

// 2. inter 변수 정의하기 (이 부분이 빠져서 에러가 났습니다)
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pawcast - 반려견 산책 필수 앱", // 타이틀에 키워드 하나 추가 추천
  description: "반려견을 아끼는 진심 반려인의 필수 앱 포캐스트. 강아지 산책 환경 등급과 맞춤형 날씨 정보를 제공하는 반려견 산책 어플리케이션입니다.", // 어플리케이션 키워드 추가
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
    <html lang="ko">
      {/* 3. 위에서 정의한 inter.className을 사용합니다 */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}