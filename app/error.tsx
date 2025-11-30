'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // エラーをログに記録
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center bg-gradient-to-b from-black to-zinc-950">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
          <h1 className="text-9xl font-bold text-white mb-4">エラー</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            問題が発生しました
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            申し訳ございません。予期しないエラーが発生しました。<br />
            もう一度お試しください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => reset()}
              className="bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              もう一度試す
            </button>
            <Link
              href="/"
              className="bg-zinc-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-zinc-700 transition-all transform hover:scale-105 shadow-lg"
            >
              ホームに戻る
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
