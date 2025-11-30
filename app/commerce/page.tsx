import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: '特定商取引法に基づく表記 | Street Dance Navi',
  description: 'Street Dance Naviの特定商取引法に基づく表記',
};

export default function CommercePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
            特定商取引法に基づく表記
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-900 dark:text-white mb-8">
              最終更新日: 2025年11月2日
            </p>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700">
              <table className="w-full">
                <tbody>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-4 pr-4 font-semibold text-gray-900 dark:text-white w-1/3">
                      事業者名
                    </td>
                    <td className="py-4 text-gray-900 dark:text-white">
                      Street Dance Navi
                    </td>
                  </tr>

                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-4 pr-4 font-semibold text-gray-900 dark:text-white">
                      運営責任者
                    </td>
                    <td className="py-4 text-gray-900 dark:text-white">
                      森田 大成
                    </td>
                  </tr>

                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-4 pr-4 font-semibold text-gray-900 dark:text-white">
                      所在地
                    </td>
                    <td className="py-4 text-gray-900 dark:text-white">
                      お問い合わせいただいた方に遅滞なく開示いたします。<br />
                      <a href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">
                        お問い合わせページ
                      </a>よりご連絡ください。
                    </td>
                  </tr>

                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-4 pr-4 font-semibold text-gray-900 dark:text-white">
                      お問い合わせ
                    </td>
                    <td className="py-4 text-gray-900 dark:text-white">
                      Email: <a href="mailto:streetdancenavi@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                        streetdancenavi@gmail.com
                      </a><br />
                      <a href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline mt-2 inline-block">
                        お問い合わせフォーム
                      </a>
                    </td>
                  </tr>

                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-4 pr-4 font-semibold text-gray-900 dark:text-white">
                      販売価格
                    </td>
                    <td className="py-4 text-gray-900 dark:text-white">
                      各イベントの詳細ページに表示される金額<br />
                      ※消費税込みの価格を表示しています
                    </td>
                  </tr>

                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-4 pr-4 font-semibold text-gray-900 dark:text-white">
                      商品代金以外の<br />必要料金
                    </td>
                    <td className="py-4 text-gray-900 dark:text-white">
                      決済手数料: クレジットカード決済時に発生する場合があります（各イベントページに明記）<br />
                      通信料: インターネット接続に伴う通信料はお客様のご負担となります
                    </td>
                  </tr>

                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-4 pr-4 font-semibold text-gray-900 dark:text-white">
                      支払方法
                    </td>
                    <td className="py-4 text-gray-900 dark:text-white">
                      クレジットカード決済（Stripe）<br />
                      対応カード: Visa、Mastercard、American Express、JCB、Diners Club、Discover
                    </td>
                  </tr>

                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-4 pr-4 font-semibold text-gray-900 dark:text-white">
                      支払時期
                    </td>
                    <td className="py-4 text-gray-900 dark:text-white">
                      イベントエントリー完了時に即時決済
                    </td>
                  </tr>

                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-4 pr-4 font-semibold text-gray-900 dark:text-white">
                      商品の引渡時期
                    </td>
                    <td className="py-4 text-gray-900 dark:text-white">
                      デジタルチケット: 決済完了後、即時アプリ内に表示されます<br />
                      イベント参加権: 各イベントの開催日時に準じます
                    </td>
                  </tr>

                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-4 pr-4 font-semibold text-gray-900 dark:text-white">
                      返品・キャンセル<br />について
                    </td>
                    <td className="py-4 text-gray-900 dark:text-white">
                      デジタルコンテンツ（チケット）のため、原則として返品・返金には応じられません。<br />
                      ただし、以下の条件を満たす場合は返金対応いたします：
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>イベント開始の3日前（72時間前）までにキャンセル申請がされた場合<br />
                          <span className="text-sm text-gray-500 dark:text-gray-500">
                            ※ プラットフォーム手数料（2.4%）、決済手数料（3.6%）、返金処理手数料（100円）を差し引いた金額を返金します
                          </span>
                        </li>
                        <li>イベント主催者都合によりイベントが中止された場合<br />
                          <span className="text-sm text-gray-500 dark:text-gray-500">
                            ※ 参加費全額を返金します（手数料は主催者が負担）
                          </span>
                        </li>
                        <li>決済エラーにより二重決済が発生した場合</li>
                      </ul>
                      <span className="block mt-2">
                        詳細は<a href="/refund" className="text-blue-600 dark:text-blue-400 hover:underline">返金ポリシー</a>をご確認ください。
                      </span>
                    </td>
                  </tr>

                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-4 pr-4 font-semibold text-gray-900 dark:text-white">
                      返金方法
                    </td>
                    <td className="py-4 text-gray-900 dark:text-white">
                      決済時に利用されたクレジットカードへの返金（Stripeを通じて処理）<br />
                      返金処理後、5〜10営業日程度でカード会社経由で返金されます
                    </td>
                  </tr>

                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-4 pr-4 font-semibold text-gray-900 dark:text-white">
                      サービス提供環境
                    </td>
                    <td className="py-4 text-gray-900 dark:text-white">
                      <strong>iOS版:</strong> iOS 14.0以降<br />
                      <strong>Android版:</strong> Android 8.0以降<br />
                      インターネット接続が必要です
                    </td>
                  </tr>

                  <tr>
                    <td className="py-4 pr-4 font-semibold text-gray-900 dark:text-white">
                      特記事項
                    </td>
                    <td className="py-4 text-gray-900 dark:text-white">
                      当サービスは、ダンスイベントのエントリープラットフォームです。<br />
                      イベントの開催責任はイベント主催者にあり、当サービスはプラットフォームを提供するのみです。<br />
                      イベント内容の変更・中止等については、イベント主催者にお問い合わせください。
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <section className="mt-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                お問い合わせ
              </h2>
              <p className="text-gray-900 dark:text-white leading-relaxed mb-4">
                特定商取引法に基づく表記についてのご質問は、以下までお問い合わせください。
              </p>
              <p className="text-gray-900 dark:text-white leading-relaxed">
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
