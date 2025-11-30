import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Street Dance Navi - ストリートダンスイベント検索プラットフォーム",
  description: "全国のストリートダンスイベント・バトル・ワークショップを簡単に検索・エントリーできるプラットフォーム。マップでイベント発見、QRチケット、事前決済で主催者も参加者もスマートに。",
  keywords: ["ストリートダンス", "ダンスイベント", "ダンスバトル", "ワークショップ", "エントリー", "イベント管理", "QRチケット", "ダンスコミュニティ"],
  authors: [{ name: "Street Dance Navi" }],
  creator: "Street Dance Navi",
  publisher: "Street Dance Navi",
  metadataBase: new URL('https://streetdancenavi.com'),
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://streetdancenavi.com',
    title: 'Street Dance Navi - ストリートダンスイベント検索プラットフォーム',
    description: '全国のストリートダンスイベント・バトル・ワークショップを簡単に検索・エントリーできるプラットフォーム。',
    siteName: 'Street Dance Navi',
    images: [
      {
        url: '/ogp.png',
        width: 1200,
        height: 630,
        alt: 'Street Dance Navi',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Street Dance Navi - ストリートダンスイベント検索プラットフォーム',
    description: '全国のストリートダンスイベント・バトル・ワークショップを簡単に検索・エントリー',
    images: ['/ogp.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
