import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section - 鮮やかなカラー */}
        <section
          className="text-white py-20 md:py-32 relative overflow-hidden"
          style={{background: 'linear-gradient(135deg, #FF9500 0%, #0066FF 100%)'}}
        >
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fadeInUp"
              style={{textShadow: '0 2px 20px rgba(0, 0, 0, 0.3)'}}
            >
              全国のダンスイベントを
              <br />
              一つのアプリで
            </h1>
            <p
              className="text-xl md:text-2xl mb-8 text-white/95 animate-fadeInUp"
              style={{animationDelay: '0.2s', textShadow: '0 1px 10px rgba(0, 0, 0, 0.2)'}}
            >
              バトル・ワークショップ・ショーケース<br />
              検索からエントリーまで、すべてをスマートに
            </p>

            {/* Download Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12 animate-fadeInUp"
              style={{animationDelay: '0.4s'}}
            >
              <a
                href="#"
                className="bg-black hover:bg-gray-900 text-white px-6 md:px-8 py-4 rounded-xl font-semibold flex items-center gap-3 transition-all transform hover:scale-105 shadow-lg w-64 md:w-72"
              >
                <svg className="w-7 h-7 md:w-8 md:h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-base md:text-lg font-bold">App Store</div>
                </div>
              </a>

              <a
                href="#"
                className="bg-black hover:bg-gray-900 text-white px-6 md:px-8 py-4 rounded-xl font-semibold flex items-center gap-3 transition-all transform hover:scale-105 shadow-lg w-64 md:w-72"
              >
                <svg className="w-7 h-7 md:w-8 md:h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-base md:text-lg font-bold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* For Dancers Section - オレンジアクセント */}
        <section className="py-16 md:py-24 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6" style={{color: '#FF8904'}}>
                ダンサーの皆さまへ
              </h2>
              <p className="text-lg md:text-xl text-gray-300">
                あなたにぴったりのイベントが見つかる
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <div
                className="bg-zinc-900 p-6 md:p-8 rounded-3xl shadow-xl hover-lift transition-all duration-300 border"
                style={{borderColor: 'rgba(255, 137, 4, 0.5)'}}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-black flex items-center justify-center mb-6 border" style={{borderColor: 'rgba(255, 137, 4, 0.5)'}}>
                  <svg className="w-10 h-10 md:w-12 md:h-12" style={{color: '#FF8904'}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">充実した検索機能</h3>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                  地域・ジャンル・日付・レベルなど、細かい条件でのイベント検索が可能。お気に入りの検索条件を保存すれば、次回から一瞬で理想のイベントが見つかります。
                </p>
              </div>

              <div
                className="bg-zinc-900 p-6 md:p-8 rounded-3xl shadow-xl hover-lift transition-all duration-300 border"
                style={{borderColor: 'rgba(255, 137, 4, 0.5)'}}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-black flex items-center justify-center mb-6 border" style={{borderColor: 'rgba(255, 137, 4, 0.5)'}}>
                  <svg className="w-10 h-10 md:w-12 md:h-12" style={{color: '#FF8904'}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">検索条件を保存</h3>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                  よく使う検索条件を保存しておけば、次回からワンタップで理想のイベントを探せます。毎回同じ条件を入力する手間はもう必要ありません。
                </p>
              </div>

              <div
                className="bg-zinc-900 p-6 md:p-8 rounded-3xl shadow-xl hover-lift transition-all duration-300 border"
                style={{borderColor: 'rgba(255, 137, 4, 0.5)'}}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-black flex items-center justify-center mb-6 border" style={{borderColor: 'rgba(255, 137, 4, 0.5)'}}>
                  <svg className="w-10 h-10 md:w-12 md:h-12" style={{color: '#FF8904'}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">マップで近くのイベント発見</h3>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                  現在地周辺のダンスイベントをマップ上で一目で確認。出先でふらっと参加できるイベントや、旅行先での新しい出会いを簡単に見つけられます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* For Organizers Section - 青アクセント */}
        <section className="py-16 md:py-24 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6" style={{color: '#047AFF'}}>
                イベント主催者の皆さまへ
              </h2>
              <p className="text-lg md:text-xl text-gray-300">
                運営をもっとスムーズに、もっとプロフェッショナルに
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <div
                className="bg-zinc-900 p-6 md:p-8 rounded-3xl shadow-xl hover-lift transition-all duration-300 border"
                style={{borderColor: 'rgba(4, 122, 255, 0.5)'}}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-black flex items-center justify-center mb-6 border" style={{borderColor: 'rgba(4, 122, 255, 0.5)'}}>
                  <svg className="w-10 h-10 md:w-12 md:h-12" style={{color: '#047AFF'}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">エントリー管理を一元化</h3>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                  エントリーフォーム作成から参加者リストの管理まで、このアプリひとつで完結。複数のツールを使い分ける必要はありません。
                </p>
              </div>

              <div
                className="bg-zinc-900 p-6 md:p-8 rounded-3xl shadow-xl hover-lift transition-all duration-300 border"
                style={{borderColor: 'rgba(4, 122, 255, 0.5)'}}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-black flex items-center justify-center mb-6 border" style={{borderColor: 'rgba(4, 122, 255, 0.5)'}}>
                  <svg className="w-10 h-10 md:w-12 md:h-12" style={{color: '#047AFF'}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">QRチケットで受付スムーズ</h3>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                  QRコード式のデジタルチケットで、当日の受付が一瞬で完了。現金管理の手間やミスからも解放されます。
                </p>
              </div>

              <div
                className="bg-zinc-900 p-6 md:p-8 rounded-3xl shadow-xl hover-lift transition-all duration-300 border"
                style={{borderColor: 'rgba(4, 122, 255, 0.5)'}}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-black flex items-center justify-center mb-6 border" style={{borderColor: 'rgba(4, 122, 255, 0.5)'}}>
                  <svg className="w-10 h-10 md:w-12 md:h-12" style={{color: '#047AFF'}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">PUSH通知で即時連絡</h3>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                  イベント当日の急な変更や重要なお知らせを、参加者全員にプッシュ通知で瞬時に届けられます。
                </p>
              </div>
            </div>

            <div className="mt-12 md:mt-16 text-center">
              <Link
                href="/contact"
                className="inline-block px-8 md:px-10 py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg transition-all transform hover:scale-105 shadow-2xl animate-pulse-slow"
                style={{background: 'linear-gradient(135deg, #047AFF 0%, #0A5FCC 100%)', color: 'white'}}
              >
                主催者登録について問い合わせる
              </Link>
            </div>
          </div>
        </section>

        {/* Pricing Section - 料金プラン */}
        <section className="py-16 md:py-24 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-white">
                シンプルで透明性の高い料金体系
              </h2>
              <p className="text-lg md:text-xl text-gray-300">
                すべての機能を無料で、制限なく利用できます
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {/* Main Pricing Card */}
              <div className="bg-zinc-900 rounded-3xl p-8 md:p-12 border-2 border-gray-700">
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    完全無料プラン
                  </h3>
                  <p className="text-gray-400">すべてのユーザーが利用可能</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* For Dancers */}
                  <div>
                    <h4 className="text-xl font-bold mb-4" style={{color: '#FF8904'}}>
                      ダンサー向け
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <svg className="w-6 h-6 flex-shrink-0 mt-0.5" style={{color: '#FF8904'}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300">イベント検索・閲覧: 無制限</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-6 h-6 flex-shrink-0 mt-0.5" style={{color: '#FF8904'}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300">エントリー: 無制限</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-6 h-6 flex-shrink-0 mt-0.5" style={{color: '#FF8904'}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300">検索条件の保存: 無制限</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-6 h-6 flex-shrink-0 mt-0.5" style={{color: '#FF8904'}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300">QRチケット表示</span>
                      </li>
                    </ul>
                  </div>

                  {/* For Organizers */}
                  <div>
                    <h4 className="text-xl font-bold mb-4" style={{color: '#047AFF'}}>
                      主催者向け
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <svg className="w-6 h-6 flex-shrink-0 mt-0.5" style={{color: '#047AFF'}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300">イベント作成: 無制限</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-6 h-6 flex-shrink-0 mt-0.5" style={{color: '#047AFF'}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300">参加者管理: 無制限</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-6 h-6 flex-shrink-0 mt-0.5" style={{color: '#047AFF'}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300">QRコード受付機能</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-6 h-6 flex-shrink-0 mt-0.5" style={{color: '#047AFF'}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300">PUSH通知送信</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Fee Structure */}
                <div className="border-t border-gray-700 pt-8">
                  <h4 className="text-xl font-bold text-white mb-6 text-center">
                    料金について
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-black rounded-2xl p-6 border border-gray-700">
                      <div className="text-sm text-gray-400 mb-2">プラットフォーム手数料</div>
                      <div className="text-3xl font-bold text-white mb-2">1.4%</div>
                      <p className="text-sm text-gray-400">
                        有料イベントの参加費に対して
                      </p>
                    </div>
                    <div className="bg-black rounded-2xl p-6 border border-gray-700">
                      <div className="text-sm text-gray-400 mb-2">決済手数料（Stripe）</div>
                      <div className="text-3xl font-bold text-white mb-2">3.6%</div>
                      <p className="text-sm text-gray-400">
                        クレジットカード決済時のみ
                      </p>
                    </div>
                  </div>
                  <p className="text-center text-gray-400 mt-6 text-sm">
                    ※ 無料イベントの場合、すべての手数料は0円です
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - 黒背景 */}
        <section className="py-16 md:py-24 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              今すぐダウンロード
            </h2>
            <p className="text-lg md:text-2xl text-gray-400 mb-4">
              Street Dance Naviで、次のダンスイベントを見つけよう
            </p>
            <p className="text-base md:text-lg font-semibold mb-10 md:mb-12 text-white">
              無料でダウンロード
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#"
                className="bg-black hover:bg-zinc-900 border border-gray-700 text-white px-6 md:px-8 py-4 rounded-xl font-semibold flex items-center gap-3 transition-all transform hover:scale-105 shadow-lg w-64 md:w-72"
              >
                <svg className="w-7 h-7 md:w-8 md:h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-base md:text-lg font-bold">App Store</div>
                </div>
              </a>

              <a
                href="#"
                className="bg-black hover:bg-zinc-900 border border-gray-700 text-white px-6 md:px-8 py-4 rounded-xl font-semibold flex items-center gap-3 transition-all transform hover:scale-105 shadow-lg w-64 md:w-72"
              >
                <svg className="w-7 h-7 md:w-8 md:h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-base md:text-lg font-bold">Google Play</div>
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
