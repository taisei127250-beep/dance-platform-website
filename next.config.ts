import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 画像最適化
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // 本番環境でのソースマップ無効化（セキュリティとパフォーマンス向上）
  productionBrowserSourceMaps: false,

  // 圧縮を有効化
  compress: true,

  // 厳格なReact Mode
  reactStrictMode: true,
};

export default nextConfig;
