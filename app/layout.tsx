import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Street Dance Navi - ストリートダンスイベント検索プラットフォーム",
  description: "全国のストリートダンスイベント・バトル・ワークショップを簡単に検索・エントリーできるプラットフォーム",
  keywords: "ストリートダンス,ダンスイベント,ダンスバトル,ワークショップ,エントリー",
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
