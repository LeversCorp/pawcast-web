"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Layout, 
  CloudSun, CalendarDays, Dog,
  Mail, Instagram 
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Swiper 관련
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';

// 이미지들
import mainImageDesktop from '../src/assets/images/main/main1.png';
import screenshot1 from '../src/assets/images/main/1.jpeg';
import screenshot2 from '../src/assets/images/main/2.jpeg';
import screenshot3 from '../src/assets/images/main/3.jpeg';
import screenshot4 from '../src/assets/images/main/4.jpeg';
import screenshot5 from '../src/assets/images/main/5.jpeg';

import charPadoogi from '../src/assets/images/character/padoogi.png';
import charBishong from '../src/assets/images/character/bishong.png';
import charChiwawa from '../src/assets/images/character/chiwawa.png';

// [유지] 가로형 와이드 위젯 이미지
import widgetGood from '../src/assets/images/widget/good_wide.png';

import logoImage_orange from '../src/assets/images/logo/orange.png';
import logoImage_white from '../src/assets/images/logo/white.png';

export default function Home() {
  
  const screenshots = [screenshot1, screenshot2, screenshot3, screenshot4, screenshot5];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#F27858] selection:text-white overflow-x-hidden">
      {/* (A) Header - [유지] 배포 버전의 깔끔한 로고 스타일 */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src={logoImage_orange}
                  alt="포캐스트 - 반려견 산책 환경 정보 앱 로고" // 로고 설명 구체화
                  width={140}
                  height={40}
                  className="h-10 w-auto object-contain"
                  priority
                />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-24">
        {/* (B) Hero Section */}
        <section className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              
              {/* 좌측 텍스트 영역 */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center md:text-left z-10 order-1"
              >
                {/* [유지] 배포 버전의 배지 스타일 */}
                <div className="inline-block px-4 py-1.5 bg-orange-50 text-[#EE4A44] rounded-full text-sm font-semibold mb-6">
                  반려견을 아끼는 진심 반려인들을 위한 필수 앱 🐕
                </div>
                
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
                  반려견 산책, <br/> {/* '반려견 산책' 키워드를 제목에 자연스럽게 삽입 */}
                  <span className="text-[#EE4A44]">지금 나가도 될까요?</span>
                </h1>

                {/* [수정] PC에서만 너비를 398px(버튼길이 합)로 고정 */}
                {/* inline-block(모바일 유지) / md:block(PC 블록화) / md:w-[398px](PC 너비 고정) */}
                <p className="inline-block md:block md:w-[398px] text-lg md:text-xl text-gray-700 mb-8 leading-relaxed break-keep font-medium bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <span className="font-bold text-[#EE4A44]">포캐스트</span>가 제공하는<br/>
                  견종별 맞춤형 산책 가이드.<br/>
                  날씨, 온도, 미세먼지, 풍속까지 분석한<br/>
                  <span className="font-bold text-gray-900 underline decoration-orange-200 decoration-4 underline-offset-4">'산책 환경 등급'</span>을 지금 확인하세요.
                </p>

                {/* 앱 다운로드 링크 */}
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start">
                  <Link 
                    href="https://apps.apple.com/kr/app/pawcast-%ED%8F%AC%EC%BA%90%EC%8A%A4%ED%8A%B8-%EB%B0%98%EB%A0%A4%EA%B2%AC-%EC%82%B0%EC%B1%85-%ED%99%98%EA%B2%BD-%EC%A0%95%EB%B3%B4/id6667109435" 
                    target="_blank" 
                    className="transition-transform hover:scale-105 hover:opacity-90"
                  >
                    <Image 
                      src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                      alt="Pawcast 반려견 산책 어플리케이션 앱스토어 다운로드"
                      width={179} 
                      height={60}
                      className="h-[60px] w-auto"
                    />
                  </Link>

                  <Link 
                    href="https://play.google.com/store/apps/details?id=com.thelink.pawcast.android" 
                    target="_blank" 
                    className="transition-transform hover:scale-105 hover:opacity-90"
                  >
                    <Image 
                      src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                      alt="Pawcast 강아지 산책 앱 구글 플레이스토어 다운로드"
                      width={203} 
                      height={60}
                      className="h-[60px] w-auto"
                    />
                  </Link>
                </div>
              </motion.div>

              {/* 우측 이미지 영역 */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative w-full order-2 flex justify-center items-center"
              >
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-to-br from-[#F27858]/20 to-[#EE4A44]/20 rounded-full blur-3xl -z-10" />

                {/* 1. 데스크탑용 이미지 */}
                <div className="hidden md:block w-full max-w-[800px]">
                  <Image 
                    src={mainImageDesktop} 
                    alt="Pawcast Screens Desktop" 
                    className="w-full h-auto object-contain drop-shadow-2xl"
                    priority 
                  />
                </div>

                {/* 2. 모바일용 3D 카드 슬라이드 */}
                <div className="block md:hidden w-[260px]">
                  <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards, Autoplay]}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    cardsEffect={{ perSlideOffset: 10, perSlideRotate: 2, slideShadows: true }}
                    className="mySwiper w-full h-auto rounded-[2rem] shadow-2xl"
                  >
                    {screenshots.map((src, index) => (
                      <SwiperSlide key={index} className="bg-white rounded-[2rem]">
                        <Image src={src} alt={`Screen ${index + 1}`} className="w-full h-auto object-cover rounded-[2rem]" priority={index === 0} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <p className="text-center text-gray-400 text-sm mt-4 animate-pulse">← 옆으로 넘겨보세요 →</p>
                </div>

              </motion.div>
            </div>
          </div>
        </section>

        {/* (C) Features Section - [유지] 개선된 정렬 및 줄바꿈 */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
                반려견을 위한<br className="block md:hidden"/> 완벽한 산책 준비
              </h2>
              <p className="text-gray-600 break-keep">포캐스트가 제공하는 특별한 기능을 만나보세요</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Feature 1: 견종별 맞춤형 산책 등급 */}
              <motion.div {...fadeInUp} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 text-[#EE4A44]">
                  <CloudSun size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">견종별 맞춤형 산책 환경 등급</h3>
                <p className="text-gray-600 leading-relaxed text-left break-keep">
                  <span className="font-semibold text-[#EE4A44]">포캐스트</span>는 반려견 산책 어플리케이션 중 유일하게 견종마다 다른 신체적 특성을 반영합니다.<br/> {/* 어플리케이션 키워드 활용 */}
                  강아지 산책 날씨와 미세먼지 수치를 데이터로 분석하여 가장 정확한 산책 환경 등급을 제공합니다. {/* 강아지 산책 키워드 활용 */}
                </p>
              </motion.div>

              {/* Feature 2: 산책 예보 */}
              <motion.div {...fadeInUp} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 text-[#EE4A44]">
                  <CalendarDays size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">산책 예보 (Forecast)</h3>
                <p className="text-gray-600 leading-relaxed text-left break-keep">
                  "오후에 비가 올까?" 시간별(24h), 일별 예보를 통해 반려견과 함께할 최적의 산책 시간을 미리 계획하세요.
                </p>
              </motion.div>

              {/* Feature 3: 귀여운 캐릭터 */}
              <motion.div {...fadeInUp} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow group overflow-hidden relative">
                <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 text-[#EE4A44]">
                  <Dog size={32} />
                </div>

                {/* 캐릭터 이미지 그룹 */}
                <div className="h-32 relative flex justify-center items-end mb-4">
                    <div className="absolute left-10 bottom-0 z-10 w-20 transform -rotate-12 transition-transform duration-300 group-hover:-translate-y-2">
                        <Image src={charChiwawa} alt="Chiwawa" className="w-full h-auto object-contain drop-shadow-md" />
                    </div>
                    <div className="relative z-20 w-24 mb-0 transition-transform duration-300 group-hover:-translate-y-4">
                        <Image src={charPadoogi} alt="Padoogi" className="w-full h-auto object-contain drop-shadow-lg" />
                    </div>
                    <div className="absolute right-10 bottom-0 z-10 w-20 transform rotate-12 transition-transform duration-300 group-hover:-translate-y-2">
                        <Image src={charBishong} alt="Bishong" className="w-full h-auto object-contain drop-shadow-md" />
                    </div>
                </div>

                <h3 className="text-xl font-bold mb-3">귀여운 캐릭터</h3>
                <p className="text-gray-600 leading-relaxed text-left break-keep">
                  딱딱한 숫자 대신, 귀여운 반려견 캐릭터가 표정과 행동으로 직관적인 날씨 정보를 전달해요.
                </p>
              </motion.div>

              {/* Feature 4: 홈 위젯 (수정됨) */}
              <motion.div 
                {...fadeInUp} 
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden"
              >
                <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 text-[#EE4A44]">
                  <Layout size={32} />
                </div>

                {/* 위젯 이미지 영역: 가로형 이미지 적용 및 너비 확장 */}
                <div className="flex justify-center items-center mb-8">
                    <div className="relative w-full max-w-[300px] h-auto transition-transform duration-300 group-hover:scale-105 group-hover:rotate-1">
                         <Image 
                            src={widgetGood} 
                            alt="Home Widget Wide" 
                            className="w-full h-auto object-contain drop-shadow-xl rounded-2xl" 
                         />
                    </div>
                </div>

                <h3 className="text-xl font-bold mb-3">홈 위젯 (Widget)</h3>
                <p className="text-gray-700 leading-relaxed font-medium text-left break-keep">
                  앱을 켜지 않아도 괜찮아요. 핸드폰 배경화면에서 귀여운 캐릭터와 함께 현재 산책 지수를 바로 확인하세요!
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* (D) Footer - [유지] 인스타그램/이메일 링크 포함 */}
      <footer className="bg-[#EE4A44] text-white py-12 border-t border-[#EE4A44]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="mb-8">
            <Link href="/" className="block hover:opacity-90 transition-opacity">
              <Image
                src={logoImage_white}
                alt="Pawcast White Logo"
                width={140}
                height={40}
                className="h-10 w-auto object-contain brightness-0 invert" 
              />
            </Link>
          </div>
          
          {/* Footer Links: Email & Instagram */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mb-8 text-sm font-medium">
            
            {/* 이메일 링크 */}
            <a 
              href="mailto:support@pawcastapp.com" 
              className="flex items-center gap-2 hover:text-orange-100 transition-colors group"
            >
              <Mail size={18} className="group-hover:scale-110 transition-transform" />
              <span>support@pawcastapp.com</span>
            </a>

            {/* 구분선 (데스크탑에서만 표시) */}
            <div className="hidden md:block w-px h-4 bg-white/30"></div>

            {/* 인스타그램 링크 */}
            <a 
              href="https://www.instagram.com/official_pawcast?igsh=MWJrdjJxbzc2d3FiNA%3D%3D&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-orange-100 transition-colors group"
            >
              <Instagram size={18} className="group-hover:scale-110 transition-transform" />
              <span>포캐스트 공식 인스타그램</span>
            </a>
          </div>

          <div className="text-xs text-white/80 text-center leading-relaxed">
            <p>&copy; 2025 Levers Corp. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}