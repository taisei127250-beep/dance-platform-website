import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: '返金ポリシー | Street Dance Navi',
  description: 'Street Dance Naviの返金ポリシー',
};

export default function RefundPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
            返金ポリシー
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              最終更新日: 2024年12月31日
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                基本方針
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Street Dance Navi（以下「当サービス」）では、イベントエントリーに関する返金について、以下のポリシーを定めています。デジタルコンテンツ（チケット）の性質上、原則として返品・返金には応じられませんが、一定の条件下では返金対応を行います。
              </p>
            </section>

            {/* 返金可能なケース */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                返金可能なケース
              </h2>

              <div className="space-y-6">
                {/* Case 1 */}
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-l-4 border-green-500">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white flex items-center gap-2">
                    <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    1. イベント開始の3日前までのキャンセル
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    イベント開始時刻の<strong className="text-gray-900 dark:text-white">72時間（3日）前まで</strong>にキャンセル申請された場合、全額返金いたします。
                  </p>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      <strong className="text-gray-900 dark:text-white">例:</strong> 12月25日 18:00開始のイベントの場合
                    </p>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <li>✅ 12月22日 17:59まで → <span className="text-green-600 dark:text-green-400 font-semibold">全額返金可能</span></li>
                      <li>❌ 12月22日 18:00以降 → <span className="text-red-600 dark:text-red-400 font-semibold">返金不可</span></li>
                    </ul>
                  </div>
                </div>

                {/* Case 2 */}
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-l-4 border-green-500">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white flex items-center gap-2">
                    <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    2. イベント主催者都合による中止
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    イベント主催者の都合により、イベントが中止または延期された場合、全額返金いたします。
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
                    <li>主催者による中止通知後、自動的に返金処理を開始します</li>
                    <li>イベント延期の場合、延期後の日程への振替または返金を選択できます</li>
                    <li>天災・感染症拡大等による不可抗力の中止も含みます</li>
                  </ul>
                </div>

                {/* Case 3 */}
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-l-4 border-green-500">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white flex items-center gap-2">
                    <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    3. 決済エラーによる二重決済
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    システムエラーにより同一イベントへの決済が重複して行われた場合、重複分を全額返金いたします。
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    ※ 決済履歴のスクリーンショットを添えてお問い合わせください
                  </p>
                </div>

                {/* Case 4 */}
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-l-4 border-green-500">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white flex items-center gap-2">
                    <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    4. サービス不具合による問題
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    当サービスのシステム不具合により、エントリーが正常に行われなかった場合や、チケットが表示されない場合など、当サービス側に起因する問題が発生した場合は返金対応いたします。
                  </p>
                </div>
              </div>
            </section>

            {/* 返金不可のケース */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                返金不可のケース
              </h2>

              <div className="space-y-4">
                <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border-l-4 border-red-500">
                  <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>イベント開始の3日前（72時間前）を過ぎてのキャンセル</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>お客様のご都合による返品・返金（期限内のキャンセルを除く）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>イベント当日の体調不良・急用・交通トラブル等による欠席</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>チケットの譲渡・転売後の返金請求</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>イベント内容への不満・期待との相違による返金請求</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>既にイベントが終了した後の返金請求</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 返金方法 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                返金方法
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                返金は、決済時に使用されたクレジットカードに対して行われます。
              </p>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">
                  返金までの流れ
                </h3>
                <ol className="space-y-3 text-gray-600 dark:text-gray-400">
                  <li className="flex gap-3">
                    <span className="font-bold text-blue-600 dark:text-blue-400 flex-shrink-0">1.</span>
                    <span>アプリ内またはお問い合わせから返金申請</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-blue-600 dark:text-blue-400 flex-shrink-0">2.</span>
                    <span>当サービスで内容確認（1〜2営業日）</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-blue-600 dark:text-blue-400 flex-shrink-0">3.</span>
                    <span>承認後、Stripe経由で返金処理開始</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-blue-600 dark:text-blue-400 flex-shrink-0">4.</span>
                    <span>5〜10営業日程度でカード会社経由で返金完了</span>
                  </li>
                </ol>

                <div className="mt-4 pt-4 border-t border-blue-200 dark:border-blue-800">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <strong className="text-gray-900 dark:text-white">注意:</strong> カード会社の処理により、実際の返金反映までに時間がかかる場合があります。カード明細への反映時期は各カード会社によって異なります。
                  </p>
                </div>
              </div>
            </section>

            {/* キャンセル方法 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                キャンセル・返金申請の方法
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {/* App */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    アプリから申請（推奨）
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    アプリの「マイページ」→「チケット」→ 該当イベントを選択 → 「キャンセル」ボタンから申請
                  </p>
                  <p className="text-sm text-green-600 dark:text-green-400">
                    ✓ 最短で処理されます<br />
                    ✓ 自動でエントリーIDが送信されます
                  </p>
                </div>

                {/* Email */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                  <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-pink-600 dark:text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    メールで申請
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    <a href="mailto:streetdancenavi@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">streetdancenavi@gmail.com</a> 宛に以下の情報を記載して送信
                  </p>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>・ エントリーID（注文番号）</li>
                    <li>・ イベント名</li>
                    <li>・ 登録メールアドレス</li>
                    <li>・ 返金理由</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* その他の注意事項 */}
            <section className="mb-12 bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                その他の注意事項
              </h2>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
                <li>返金手数料は当サービスが負担します（お客様の負担はありません）</li>
                <li>返金処理完了後、チケットは無効化され、イベントに参加できなくなります</li>
                <li>一度返金された後、同じイベントへの再エントリーには別途決済が必要です</li>
                <li>主催者都合による中止の場合、決済手数料も含めて全額返金されます</li>
                <li>虚偽の返金申請や不正行為が確認された場合、アカウント停止の措置を取ることがあります</li>
              </ul>
            </section>

            {/* お問い合わせ */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                お問い合わせ
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                返金ポリシーに関するご質問や、返金に関するご相談は、以下までお問い合わせください。
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Email: <a href="mailto:streetdancenavi@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">streetdancenavi@gmail.com</a><br />
                <a href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline mt-2 inline-block">お問い合わせフォーム</a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
