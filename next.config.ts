import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  // 정적 사이트 내보내기 설정 (Cloudflare용)
  images: {
    unoptimized: true, // 이미지 최적화 끄기 (서버가 없으므로 필수)
  },
};

export default nextConfig;