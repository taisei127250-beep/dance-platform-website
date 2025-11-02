import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'プライバシーポリシー | Street Dance Navi',
  description: 'Street Dance Naviのプライバシーポリシー',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
            プライバシーポリシー
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              最終更新日: 2024年12月31日
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                1. 基本方針
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Street Dance Navi（以下「当サービス」）は、ユーザーの個人情報の重要性を認識し、個人情報を保護することが社会的責務であると考え、個人情報に関する法令を遵守し、当サービスで取扱う個人情報の取得、利用、管理を適正に行います。
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                2. 収集する情報
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                当サービスでは、以下の情報を収集します：
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
                <li>アカウント情報（メールアドレス、ユーザー名、プロフィール写真）</li>
                <li>イベントへのエントリー情報（参加履歴、チケット購入履歴）</li>
                <li>デバイス情報（デバイスID、OSバージョン、アプリバージョン）</li>
                <li>位置情報（イベント検索のため、ユーザーの許可を得た場合のみ）</li>
                <li>利用状況データ（アクセスログ、操作履歴）</li>
                <li>決済情報（Stripeを通じた決済時の情報）</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                3. 情報の利用目的
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                収集した個人情報は、以下の目的で利用します：
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
                <li>当サービスの提供・運営・改善</li>
                <li>イベント主催者とダンサーのマッチング</li>
                <li>ユーザーサポート・問い合わせ対応</li>
                <li>イベント情報・更新通知の配信</li>
                <li>決済処理・チケット発行</li>
                <li>不正利用の防止・セキュリティ対策</li>
                <li>利用規約違反への対応</li>
                <li>サービス改善のための統計データ分析</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                4. 情報の第三者提供
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                当サービスは、以下の場合を除き、ユーザーの同意なく第三者に個人情報を提供しません：
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
                <li>法令に基づく場合</li>
                <li>人の生命、身体または財産の保護のために必要がある場合</li>
                <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合</li>
                <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                5. 外部サービスとの連携
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                当サービスは、以下の外部サービスを利用しています。各サービスは独自のプライバシーポリシーに基づいて情報を取り扱います：
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
                <li>
                  <strong>Supabase</strong> - データベース・認証サービス<br />
                  <a href="https://supabase.com/privacy" className="text-blue-600 dark:text-blue-400 hover:underline">プライバシーポリシー</a>
                </li>
                <li>
                  <strong>Stripe</strong> - 決済サービス<br />
                  <a href="https://stripe.com/jp/privacy" className="text-blue-600 dark:text-blue-400 hover:underline">プライバシーポリシー</a>
                </li>
                <li>
                  <strong>Mapbox</strong> - 地図サービス<br />
                  <a href="https://www.mapbox.com/legal/privacy" className="text-blue-600 dark:text-blue-400 hover:underline">プライバシーポリシー</a>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                6. 情報の保管と管理
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                当サービスは、個人情報への不正アクセス、紛失、破壊、改ざん、漏洩などを防ぐため、適切なセキュリティ対策を講じています。個人情報は、利用目的の達成に必要な期間のみ保管し、不要になった時点で適切に削除します。
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                7. ユーザーの権利
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                ユーザーは、自身の個人情報について、以下の権利を有します：
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
                <li>開示請求 - 自身の個人情報の開示を求める権利</li>
                <li>訂正請求 - 誤った個人情報の訂正を求める権利</li>
                <li>削除請求 - 個人情報の削除を求める権利</li>
                <li>利用停止請求 - 個人情報の利用停止を求める権利</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
                これらの権利を行使される場合は、<a href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">お問い合わせページ</a>よりご連絡ください。
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                8. Cookie（クッキー）の使用
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                当サービスは、ユーザー体験の向上のためにCookieを使用します。Cookieは、ユーザーのブラウザに保存される小さなテキストファイルです。ユーザーはブラウザの設定でCookieを無効にできますが、その場合、一部の機能が利用できなくなる可能性があります。
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                9. 未成年者の個人情報
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                13歳未満の方は、保護者の同意なく当サービスを利用することはできません。13歳未満の方から個人情報を収集したことが判明した場合、速やかに削除します。
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                10. プライバシーポリシーの変更
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                当サービスは、法令の変更や事業内容の変更に応じて、本プライバシーポリシーを変更することがあります。重要な変更がある場合は、アプリ内通知またはメールでお知らせします。
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                11. お問い合わせ
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                プライバシーポリシーに関するご質問・ご意見は、以下までお問い合わせください：
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
