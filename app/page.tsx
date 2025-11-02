import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="text-white py-20 md:py-32" style={{background: 'linear-gradient(to bottom right, #FF9F42, #FF9F42, #3B9BFF)'}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              全国のダンスイベントを
              <br />
              一つのアプリで
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              バトル・ワークショップ・ショーケース<br />
              検索からエントリーまで、すべてをスマートに
            </p>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
              <a
                href="#"
                className="bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-3 transition-all transform hover:scale-105 shadow-lg w-64"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-bold">App Store</div>
                </div>
              </a>

              <a
                href="#"
                className="bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-3 transition-all transform hover:scale-105 shadow-lg w-64"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-lg font-bold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
              主な機能
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{backgroundColor: '#FFE8CC'}}>
                  <svg className="w-6 h-6" style={{color: '#FF9F42'}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">イベント検索</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  全国のダンスイベントを地域・ジャンル・日付で簡単検索。マップビューで近くのイベントも一目瞭然。
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{backgroundColor: '#D6EDFF'}}>
                  <svg className="w-6 h-6" style={{color: '#3B9BFF'}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">簡単エントリー</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  アプリ内で完結するエントリーシステム。参加履歴の管理やチケット購入もスムーズに。
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{backgroundColor: '#FFE8CC'}}>
                  <svg className="w-6 h-6" style={{color: '#FF9F42'}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">リアルタイム通知</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  お気に入りイベントの更新情報やエントリー締切のリマインドを通知でお知らせ。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* For Organizers Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl p-12 text-white text-center" style={{background: 'linear-gradient(to right, #3B9BFF, #5BA8FF)'}}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                イベント主催者の方へ
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Street Dance Naviでイベントを掲載して、より多くのダンサーにリーチしましょう
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
                style={{color: '#3B9BFF'}}
              >
                主催者登録について問い合わせる
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              今すぐダウンロード
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Street Dance Naviで、次のダンスイベントを見つけよう
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#"
                className="bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-3 transition-all transform hover:scale-105 shadow-lg w-64"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-bold">App Store</div>
                </div>
              </a>

              <a
                href="#"
                className="bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-3 transition-all transform hover:scale-105 shadow-lg w-64"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-lg font-bold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
