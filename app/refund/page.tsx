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
                Street Dance Naviは、ユーザーの皆様に安心してサービスをご利用いただくため、明確な返金ポリシーを定めています。本ポリシーは、有料イベントへのエントリー後のキャンセル・返金について規定します。
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                1. 主催者都合によるイベントキャンセル
              </h2>

              <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-6 mb-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  参加費を全額返金します
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  イベント主催者の都合により、イベントが中止・延期となった場合、参加者へ参加費を全額返金いたします。
                </p>
              </div>

              <h3 className="text-xl font-bold mb-3 mt-6 text-gray-900 dark:text-white">
                返金の詳細
              </h3>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2 mb-4">
                <li><strong>返金額:</strong> 参加費全額（決済手数料・プラットフォーム手数料も含む）</li>
                <li><strong>手数料負担:</strong> 主催者が負担します</li>
                <li><strong>返金期間:</strong> 7〜10営業日以内に返金処理を完了します</li>
                <li><strong>返金方法:</strong> 決済時と同じクレジットカードへ自動返金されます</li>
              </ul>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl mb-6">
                <h4 className="font-bold mb-3 text-gray-900 dark:text-white">返金額の計算例</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  参加費5,000円のイベントが主催者都合でキャンセルされた場合:
                </p>
                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg font-mono text-sm">
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">元の参加費:</span>
                      <span className="text-gray-900 dark:text-white">5,000円</span>
                    </div>
                    <div className="border-t border-gray-300 dark:border-gray-700 my-2"></div>
                    <div className="flex justify-between font-bold">
                      <span className="text-gray-900 dark:text-white">参加者への返金額:</span>
                      <span className="text-orange-600 dark:text-orange-400">5,000円（全額）</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-3">
                  ※ 主催者は、参加費5,000円に加え、既に支払った手数料（プラットフォーム手数料70円 + Stripe決済手数料180円 = 250円）も負担します。
                </p>
              </div>

              <h3 className="text-xl font-bold mb-3 mt-6 text-gray-900 dark:text-white">
                イベント延期の場合
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                イベントが延期となった場合、参加者は以下のいずれかを選択できます：
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
                <li>延期後の日程に参加する（チケットはそのまま有効）</li>
                <li>全額返金を受ける</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                2. 参加者都合によるキャンセル
              </h2>

              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                ■ イベント開催日時の72時間前まで
              </h3>

              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 mb-6">
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  参加費から以下の手数料を差し引いた金額を返金いたします。
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
                  <li>Stripe決済手数料（3.6%）</li>
                  <li>プラットフォーム手数料（1.4%）</li>
                  <li>返金処理手数料（100円）</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl mb-6">
                <h4 className="font-bold mb-3 text-gray-900 dark:text-white">返金額の計算例</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  参加費5,000円のイベントを72時間前までにキャンセルした場合:
                </p>
                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg font-mono text-sm">
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">参加費:</span>
                      <span className="text-gray-900 dark:text-white">5,000円</span>
                    </div>
                    <div className="flex justify-between text-red-600 dark:text-red-400">
                      <span>- Stripe決済手数料 (3.6%):</span>
                      <span>-180円</span>
                    </div>
                    <div className="flex justify-between text-red-600 dark:text-red-400">
                      <span>- プラットフォーム手数料 (1.4%):</span>
                      <span>-70円</span>
                    </div>
                    <div className="flex justify-between text-red-600 dark:text-red-400">
                      <span>- 返金処理手数料:</span>
                      <span>-100円</span>
                    </div>
                    <div className="border-t border-gray-300 dark:border-gray-700 my-2"></div>
                    <div className="flex justify-between font-bold">
                      <span className="text-gray-900 dark:text-white">返金額:</span>
                      <span className="text-blue-600 dark:text-blue-400">4,650円</span>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 mt-6 text-gray-900 dark:text-white">
                ■ イベント開催日時の72時間前以降
              </h3>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 mb-6">
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  <strong>返金は原則として対応できません。</strong>
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  ただし、イベント主催者が個別に返金を承認した場合はこの限りではありません。返金の可否については、イベント主催者に直接ご相談ください。
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl mb-6">
                <h4 className="font-bold mb-3 text-gray-900 dark:text-white">72時間前の計算方法</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  「イベント開催日時の72時間前」とは、イベント開始時刻のちょうど72時間前を指します。
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  <strong>例:</strong>
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-1">
                  <li>イベント開催: 12月10日（日）18:00</li>
                  <li>72時間前: 12月7日（木）18:00</li>
                  <li>→ 12月7日（木）18:00までのキャンセルで返金対象</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                3. 主催者が独自の返金ポリシーを設定する場合
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                イベント主催者は、上記のポリシーより参加者に有利な返金ポリシーを設定することができます。
              </p>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl mb-6">
                <h4 className="font-bold mb-3 text-gray-900 dark:text-white">主催者独自のポリシー例</h4>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
                  <li>イベント前日までキャンセル可能</li>
                  <li>いつでも全額返金</li>
                  <li>手数料なしで返金</li>
                </ul>
              </div>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                主催者が独自の返金ポリシーを設定している場合、イベントページに表示されます。<strong>エントリー前に必ず返金ポリシーをご確認ください。</strong>
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                4. 返金不可の例外事項
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                以下の場合、返金は一切行いません：
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
                <li>参加者の都合による当日キャンセル・無断欠席</li>
                <li>虚偽の情報によるエントリー</li>
                <li>利用規約違反によるアカウント停止</li>
                <li>イベント主催者が「返金不可」と明記しているイベント（エントリー前に明示されている場合）</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                5. 返金の申請方法
              </h2>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl mb-6">
                <h4 className="font-bold mb-3 text-gray-900 dark:text-white">手順</h4>
                <ol className="list-decimal pl-6 text-gray-600 dark:text-gray-400 space-y-2">
                  <li>アプリ内の「エントリー履歴」から該当イベントを選択</li>
                  <li>「キャンセル・返金申請」ボタンをタップ</li>
                  <li>キャンセル理由を選択（任意）</li>
                  <li>返金額を確認し、申請を完了</li>
                </ol>
              </div>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                返金申請が承認されると、登録されたメールアドレスに通知が届きます。
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                6. 返金処理の期間と方法
              </h2>

              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                返金方法
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                決済時と同じクレジットカードへ自動的に返金されます。銀行振込やその他の方法での返金は対応しておりません。
              </p>

              <h3 className="text-xl font-bold mb-3 mt-6 text-gray-900 dark:text-white">
                返金完了までの期間
              </h3>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2 mb-4">
                <li><strong>返金申請の承認:</strong> 通常1〜3営業日</li>
                <li><strong>Stripeによる返金処理:</strong> 承認後、即時実行</li>
                <li><strong>カード会社への反映:</strong> 返金処理後、5〜10営業日</li>
              </ul>

              <p className="text-sm text-gray-500 dark:text-gray-500">
                ※ カード会社によって反映までの期間が異なります。10営業日を過ぎても返金が確認できない場合は、カード会社にお問い合わせください。
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                7. 無料イベントのキャンセル
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                無料イベントの場合、イベント開始時刻までいつでもキャンセル可能です。手数料は発生しません。
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                8. お問い合わせ
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                返金ポリシーに関するご質問は、以下までお問い合わせください：
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Street Dance Navi<br />
                代表者: 森田 大成<br />
                Email: <a href="mailto:streetdancenavi@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">streetdancenavi@gmail.com</a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
