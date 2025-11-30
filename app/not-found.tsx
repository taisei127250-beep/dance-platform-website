import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center bg-gradient-to-b from-black to-zinc-950">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
          <h1 className="text-9xl font-bold text-white mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ページが見つかりません
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            お探しのページは存在しないか、移動または削除された可能性があります。
          </p>
          <Link
            href="/"
            className="inline-block bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
          >
            ホームに戻る
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
