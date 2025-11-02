import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'お問い合わせ | Street Dance Navi',
  description: 'Street Dance Naviへのお問い合わせ',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
            お問い合わせ
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Street Dance Naviに関するご質問・ご意見・不具合報告などは、以下の方法でお問い合わせください。
            </p>

            {/* Contact Methods */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                お問い合わせ方法
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Email */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    メール
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    以下のアドレスまでお問い合わせください
                  </p>
                  <a
                    href="mailto:streetdancenavi@gmail.com"
                    className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                  >
                    streetdancenavi@gmail.com
                  </a>
                </div>

                {/* App */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                  <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-pink-600 dark:text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    アプリ内フォーム
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    アプリの「マイページ」→「お問い合わせ」からもご連絡いただけます
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    ※ログイン不要でご利用いただけます
                  </p>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                よくあるご質問
              </h2>

              <div className="space-y-6">
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                  <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                    Q. アプリは無料で使えますか？
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    A. アプリのダウンロードおよび基本機能（イベント検索・閲覧）は完全無料です。イベントへのエントリーには、主催者が設定した参加費が必要な場合があります。
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                  <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                    Q. エントリーをキャンセルしたいのですが
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    A. イベント開始の3日前（72時間前）までであれば、アプリ内からキャンセルが可能です。詳細は<a href="/refund" className="text-blue-600 dark:text-blue-400 hover:underline">返金ポリシー</a>をご確認ください。
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                  <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                    Q. ログインできなくなりました
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    A. パスワードをお忘れの場合は、ログイン画面の「パスワードを忘れた方」からリセットできます。それでも解決しない場合は、登録メールアドレスを明記の上、上記お問い合わせ先までご連絡ください。
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                  <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                    Q. イベントを主催したいのですが
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    A. イベント主催者としての登録をご希望の方は、上記お問い合わせ先まで「主催者登録希望」と明記してご連絡ください。担当者より詳細をご案内いたします。
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                  <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                    Q. 決済に失敗しました
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    A. クレジットカード情報が正しいかご確認ください。カードの利用限度額や有効期限もご確認をお願いします。それでも解決しない場合は、エラーメッセージのスクリーンショットを添えてお問い合わせください。
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                  <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                    Q. チケットが表示されません
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    A. 決済完了後、数分以内にアプリの「マイページ」→「チケット」に表示されます。表示されない場合は、アプリの再起動をお試しください。それでも解決しない場合は、エントリーID（注文番号）を明記の上、お問い合わせください。
                  </p>
                </div>
              </div>
            </section>

            {/* Response Time */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                対応時間
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                お問い合わせへの返信は、原則として2営業日以内に行います。<br />
                ただし、以下の期間は対応が遅れる場合がございます：
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
                <li>土日祝日</li>
                <li>年末年始（12月29日〜1月3日）</li>
                <li>夏季休業期間（お盆など）</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
                お急ぎの場合は、メールの件名に【至急】とご記載ください。
              </p>
            </section>

            {/* Contact Info */}
            <section className="mb-12 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                運営者情報
              </h2>
              <div className="text-gray-600 dark:text-gray-400 space-y-2">
                <p><strong className="text-gray-900 dark:text-white">サービス名:</strong> Street Dance Navi</p>
                <p><strong className="text-gray-900 dark:text-white">運営責任者:</strong> 森田 大成</p>
                <p><strong className="text-gray-900 dark:text-white">Email:</strong> <a href="mailto:streetdancenavi@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">streetdancenavi@gmail.com</a></p>
              </div>
            </section>

            {/* Disclaimer */}
            <section className="text-sm text-gray-500 dark:text-gray-500 bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <p className="mb-2">
                <strong className="text-gray-700 dark:text-gray-300">注意事項:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>お問い合わせいただいた内容は、サービス改善のために利用させていただく場合があります</li>
                <li>お問い合わせの内容によっては、回答にお時間をいただく場合や、回答できない場合がございます</li>
                <li>営業・勧誘目的のお問い合わせはご遠慮ください</li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
