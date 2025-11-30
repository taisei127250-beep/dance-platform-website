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
            <p className="text-gray-900 dark:text-white mb-8">
              最終更新日: 2025年11月2日
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                1. 基本方針
              </h2>
              <p className="text-gray-900 dark:text-white leading-relaxed mb-4">
                Street Dance Navi（以下「当サービス」）は、ユーザーの個人情報の重要性を認識し、個人情報を保護することが社会的責務であると考え、個人情報に関する法令を遵守し、当サービスで取扱う個人情報の取得、利用、管理を適正に行います。
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                2. 収集する情報
              </h2>
              <p className="text-gray-900 dark:text-white leading-relaxed mb-4">
                当サービスでは、以下の情報を収集します：
              </p>
              <ul className="list-disc pl-6 text-gray-900 dark:text-white space-y-2">
                <li>アカウント情報（メールアドレス、ユーザー名、プロフィール写真）</li>
                <li>イベントへのエントリー情報（参加履歴、チケット購入履歴）</li>
                <li>QRチケット情報（発行日時、スキャン履歴、利用状況）</li>
                <li>デバイス情報（デバイスID、OSバージョン、アプリバージョン、プッシュ通知トークン）</li>
                <li>位置情報（イベント検索のため、ユーザーの許可を得た場合のみ）</li>
                <li>利用状況データ（アクセスログ、操作履歴）</li>
                <li>決済情報（Stripeを通じた決済時の情報）</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                3. 情報の利用目的
              </h2>
              <p className="text-gray-900 dark:text-white leading-relaxed mb-4">
                収集した個人情報は、以下の目的で利用します：
              </p>
              <ul className="list-disc pl-6 text-gray-900 dark:text-white space-y-2">
                <li>当サービスの提供・運営・改善</li>
                <li>イベント主催者とダンサーのマッチング</li>
                <li>ユーザーサポート・問い合わせ対応</li>
                <li>イベント情報・更新通知の配信（プッシュ通知含む）
                  <ul className="list-circle pl-6 mt-2 space-y-1 text-sm">
                    <li>イベント開催日が近づいた際のリマインダー通知</li>
                    <li>エントリー完了通知</li>
                    <li>イベント主催者からの重要なお知らせ（会場変更、開催時間変更等）</li>
                    <li>主催者が参加者へ送信するメッセージ通知</li>
                    <li>次回イベントのお知らせ、アンケート協力のお願い等</li>
                  </ul>
                </li>
                <li>決済処理・QRチケットの発行</li>
                <li>QRチケットのスキャンによる受付管理</li>
                <li>不正利用の防止・セキュリティ対策（QRコードの不正利用検知含む）</li>
                <li>利用規約違反への対応</li>
                <li>サービス改善のための統計データ分析</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                4. 情報の第三者提供
              </h2>

              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                サービス利用に伴う情報共有
              </h3>
              <p className="text-gray-900 dark:text-white leading-relaxed mb-4">
                当サービスの性質上、以下の情報共有が行われます：
              </p>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl mb-6">
                <h4 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">
                  1. イベント主催者への共有
                </h4>
                <p className="text-gray-900 dark:text-white mb-2">
                  イベントにエントリーした参加者の以下の情報を、イベント主催者と共有します：
                </p>
                <ul className="list-disc pl-6 text-gray-900 dark:text-white space-y-1">
                  <li>氏名（ユーザー名）</li>
                  <li>メールアドレス</li>
                  <li>参加履歴</li>
                  <li>エントリー時に入力された情報（チーム名、ダンスジャンル等）</li>
                </ul>
                <p className="text-gray-900 dark:text-white mt-3 text-sm">
                  ※ 主催者は、これらの情報をイベント運営目的のみに使用することができます。
                </p>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 mt-4">
                  <h5 className="font-bold mb-2 text-gray-900 dark:text-white">参加者情報のエクスポートとアクセス期限</h5>
                  <p className="text-gray-900 dark:text-white text-sm mb-3">
                    主催者は、参加者リストをCSV形式等でエクスポートし、イベント管理に利用することができます。
                  </p>

                  <p className="text-gray-900 dark:text-white font-bold text-sm mb-2">【重要】主催者が遵守すべき事項:</p>
                  <ul className="list-disc pl-6 text-gray-900 dark:text-white text-sm space-y-1 mb-3">
                    <li>エクスポートした参加者情報は、以下の目的以外で使用してはなりません：
                      <ul className="list-circle pl-6 mt-1 space-y-1">
                        <li>イベント受付・運営</li>
                        <li>イベント関連の連絡</li>
                        <li>法令で求められる記録保持</li>
                      </ul>
                    </li>
                    <li>スパムメールの送信、第三者への販売・提供等は厳禁です</li>
                    <li>不正使用が発覚した場合、アカウント停止および法的措置を講じます</li>
                  </ul>

                  <p className="text-gray-900 dark:text-white font-bold text-sm mb-2">【参加者情報のアクセス期限】</p>
                  <ul className="list-disc pl-6 text-gray-900 dark:text-white text-sm space-y-1">
                    <li>主催者は、<strong>イベント終了後3年間</strong>、参加者情報にアクセスできます</li>
                    <li>3年経過後は、個人情報保護のため、参加者の詳細情報（氏名、メールアドレス、電話番号等）は自動的にマスキングされます</li>
                    <li>ただし、統計情報（参加人数、売上金額等）は引き続き閲覧可能です</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl mb-6">
                <h4 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">
                  2. 参加者への共有
                </h4>
                <p className="text-gray-900 dark:text-white mb-2">
                  エントリーしたイベントの主催者の以下の情報を、参加者に開示します：
                </p>
                <ul className="list-disc pl-6 text-gray-900 dark:text-white space-y-1">
                  <li>主催者名</li>
                  <li>連絡先（メールアドレスまたは電話番号）</li>
                  <li>イベント開催場所</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl mb-6">
                <h4 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">
                  3. 決済事業者との共有
                </h4>
                <p className="text-gray-900 dark:text-white mb-2">
                  有料イベントへのエントリー時、決済処理に必要な最小限の情報をStripe社に提供します：
                </p>
                <ul className="list-disc pl-6 text-gray-900 dark:text-white space-y-1">
                  <li>氏名</li>
                  <li>メールアドレス</li>
                  <li>決済金額</li>
                  <li>取引日時</li>
                </ul>
                <p className="text-gray-900 dark:text-white mt-3 text-sm">
                  ※ クレジットカード情報は、当サービスのサーバーを経由せず、Stripeに直接送信されます。
                </p>
              </div>

              <h3 className="text-xl font-bold mb-3 mt-8 text-gray-900 dark:text-white">
                法令に基づく提供
              </h3>
              <p className="text-gray-900 dark:text-white leading-relaxed mb-4">
                上記のほか、以下の場合にはユーザーの同意なく第三者に個人情報を提供することがあります：
              </p>
              <ul className="list-disc pl-6 text-gray-900 dark:text-white space-y-2">
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
              <p className="text-gray-900 dark:text-white leading-relaxed mb-4">
                当サービスは、以下の外部サービスを利用しています。各サービスは独自のプライバシーポリシーに基づいて情報を取り扱います：
              </p>
              <ul className="list-disc pl-6 text-gray-900 dark:text-white space-y-2">
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
              <p className="text-gray-900 dark:text-white leading-relaxed mb-4">
                当サービスは、個人情報への不正アクセス、紛失、破壊、改ざん、漏洩などを防ぐため、適切なセキュリティ対策を講じています。
              </p>

              <h3 className="text-xl font-bold mb-3 mt-6 text-gray-900 dark:text-white">
                データ保持期間
              </h3>
              <p className="text-gray-900 dark:text-white leading-relaxed mb-4">
                収集した個人情報は、以下の期間保持します：
              </p>
              <ul className="list-disc pl-6 text-gray-900 dark:text-white space-y-2 mb-4">
                <li><strong>アカウント情報:</strong> アカウント削除後30日間</li>
                <li><strong>イベント参加履歴:</strong> イベント終了後3年間（税務対応のため）</li>
                <li><strong>決済記録:</strong> 取引完了後7年間（電子帳簿保存法等の法令遵守のため）</li>
                <li><strong>アクセスログ:</strong> 90日間</li>
                <li><strong>その他のデータ:</strong> 最終利用から1年間</li>
              </ul>
              <p className="text-gray-900 dark:text-white leading-relaxed mb-4">
                ユーザーから削除請求があった場合、法令で保管が義務付けられているデータを除き、30日以内に削除します。
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                7. ユーザーの権利
              </h2>
              <p className="text-gray-900 dark:text-white leading-relaxed mb-4">
                ユーザーは、自身の個人情報について、以下の権利を有します：
              </p>

              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-xl">
                  <h4 className="font-bold mb-2 text-gray-900 dark:text-white">1. 開示請求</h4>
                  <p className="text-gray-900 dark:text-white">
                    自身の個人情報の開示を求める権利。当サービスがどのような個人情報を保持しているかを確認できます。
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-xl">
                  <h4 className="font-bold mb-2 text-gray-900 dark:text-white">2. 訂正請求</h4>
                  <p className="text-gray-900 dark:text-white">
                    誤った個人情報の訂正を求める権利。アプリ内の「プロフィール設定」からいつでも修正できます。
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-xl">
                  <h4 className="font-bold mb-2 text-gray-900 dark:text-white">3. 削除請求</h4>
                  <p className="text-gray-900 dark:text-white">
                    個人情報の削除を求める権利。アカウントを削除すると、法令で保管が義務付けられているデータを除き、30日以内に削除されます。
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-xl">
                  <h4 className="font-bold mb-2 text-gray-900 dark:text-white">4. 利用停止請求</h4>
                  <p className="text-gray-900 dark:text-white">
                    個人情報の利用停止を求める権利。特定の目的での利用を停止するよう求めることができます。
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-xl">
                  <h4 className="font-bold mb-2 text-gray-900 dark:text-white">5. データポータビリティ権</h4>
                  <p className="text-gray-900 dark:text-white mb-2">
                    自身のデータを機械可読形式（JSON形式）でエクスポートする権利。
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    ※ アプリ内「設定」→「データのエクスポート」から実行可能です。
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-xl">
                  <h4 className="font-bold mb-2 text-gray-900 dark:text-white">6. 外部連携の取り消し権</h4>
                  <p className="text-gray-900 dark:text-white mb-2">
                    ソーシャルログイン（Google、Apple等）の連携をいつでも取り消すことができます。
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    ※ 取り消し後も、メールアドレスでログイン可能です。アプリ内「設定」→「アカウント連携」から管理できます。
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-xl">
                  <h4 className="font-bold mb-2 text-gray-900 dark:text-white">7. 異議申し立て権</h4>
                  <p className="text-gray-900 dark:text-white">
                    データ処理に異議がある場合、その処理の停止を求めることができます。
                  </p>
                </div>
              </div>

              <p className="text-gray-900 dark:text-white leading-relaxed mt-6">
                これらの権利を行使される場合は、<a href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">お問い合わせページ</a>よりご連絡ください。原則として14日以内に対応いたします。
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                8. Cookie（クッキー）の使用
              </h2>
              <p className="text-gray-900 dark:text-white leading-relaxed mb-4">
                当サービスは、ユーザー体験の向上のためにCookieおよび類似の技術を使用します。Cookieは、ユーザーのブラウザに保存される小さなテキストファイルです。
              </p>

              <h3 className="text-xl font-bold mb-3 mt-6 text-gray-900 dark:text-white">
                使用するCookieの種類
              </h3>

              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-xl">
                  <h4 className="font-bold mb-2 text-gray-900 dark:text-white">1. 必須Cookie（無効化不可）</h4>
                  <p className="text-gray-900 dark:text-white">
                    ログイン状態の維持、セキュリティ対策など、サービスの基本機能に必要なCookieです。これらを無効にすると、サービスが正常に動作しません。
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-xl">
                  <h4 className="font-bold mb-2 text-gray-900 dark:text-white">2. 分析Cookie（無効化可能）</h4>
                  <p className="text-gray-900 dark:text-white mb-2">
                    Google Analyticsを使用し、ユーザーの利用状況を分析してサービス改善に役立てます。
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    オプトアウト（無効化）: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Google Analyticsオプトアウトアドオン</a>
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 mt-6 text-gray-900 dark:text-white">
                トラッキング技術
              </h3>
              <p className="text-gray-900 dark:text-white leading-relaxed mb-4">
                当サービスは、サービスの品質向上のため、以下の技術を使用しています：
              </p>
              <ul className="list-disc pl-6 text-gray-900 dark:text-white space-y-2 mb-4">
                <li><strong>セッション管理:</strong> ログイン状態の維持、セキュリティトークンの管理</li>
                <li><strong>ユーザー行動分析:</strong> アプリ内でのユーザー操作、画面遷移の分析</li>
                <li><strong>エラー追跡:</strong> アプリのクラッシュやエラーの検知と改善</li>
                <li><strong>パフォーマンス測定:</strong> 読み込み速度、レスポンス時間の監視</li>
              </ul>

              <p className="text-gray-900 dark:text-white leading-relaxed">
                ブラウザの設定でCookieを無効にできますが、その場合、一部の機能が利用できなくなる可能性があります。
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                9. 国際的なデータ転送
              </h2>
              <p className="text-gray-900 dark:text-white leading-relaxed mb-4">
                当サービスは、以下のサービスプロバイダーを利用しており、データが日本国外のサーバーに保存される場合があります：
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-xl">
                  <h4 className="font-bold mb-2 text-gray-900 dark:text-white">Supabase（米国）</h4>
                  <p className="text-gray-900 dark:text-white">
                    データベース・認証サービス。ユーザーアカウント情報、イベント情報などを保管します。
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-xl">
                  <h4 className="font-bold mb-2 text-gray-900 dark:text-white">Stripe（米国）</h4>
                  <p className="text-gray-900 dark:text-white">
                    決済処理サービス。決済情報、取引履歴を保管します。
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-xl">
                  <h4 className="font-bold mb-2 text-gray-900 dark:text-white">Mapbox（米国）</h4>
                  <p className="text-gray-900 dark:text-white">
                    地図表示サービス。位置情報検索時のデータ処理を行います。
                  </p>
                </div>
              </div>

              <p className="text-gray-900 dark:text-white leading-relaxed">
                これらのサービスプロバイダーは、適切なセキュリティ対策を講じており、GDPR（EU一般データ保護規則）等の国際基準に準拠しています。日本国外へのデータ転送について懸念がある場合は、<a href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">お問い合わせ</a>ください。
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                10. 未成年者の個人情報
              </h2>

              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                アカウント作成の年齢制限
              </h3>
              <p className="text-gray-900 dark:text-white leading-relaxed mb-6">
                本サービスのアカウント作成は、原則として13歳以上を対象としています。これは、児童オンラインプライバシー保護法（COPPA）等の法令に準拠するためです。
              </p>

              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 mb-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  13歳未満のお子様の参加方法
                </h3>
                <p className="text-gray-900 dark:text-white mb-4">
                  13歳未満のお子様がダンスイベントに参加される場合は、以下の方法をご利用ください：
                </p>

                <div className="bg-white dark:bg-gray-900 p-5 rounded-xl mb-4">
                  <h4 className="font-bold mb-3 text-gray-900 dark:text-white">保護者代理エントリー方式</h4>
                  <ol className="list-decimal pl-6 text-gray-900 dark:text-white space-y-2">
                    <li>保護者の方がアカウントを作成してください</li>
                    <li>保護者の方の名義でイベントにエントリーしてください</li>
                    <li>エントリー時の備考欄またはお子様情報入力欄に、参加されるお子様の情報（名前、年齢、学年等）を記載してください</li>
                    <li>QRチケットは保護者の方が管理し、イベント当日にお子様と一緒にご提示ください</li>
                  </ol>
                </div>

                <p className="text-sm text-gray-500 dark:text-gray-500">
                  ※ 保護者の方1名のアカウントで、複数のお子様の参加登録が可能です。家族間でのQRチケット共有は許可されています。
                </p>
              </div>

              <h3 className="text-xl font-bold mb-3 mt-6 text-gray-900 dark:text-white">
                保護者の同意と責任
              </h3>
              <ul className="list-disc pl-6 text-gray-900 dark:text-white space-y-2 mb-6">
                <li>保護者の方がアカウントを作成・使用することで、お子様の個人情報の取り扱いについて同意したものとみなします</li>
                <li>お子様のイベント参加に関する一切の責任は、保護者の方が負うものとします</li>
                <li>イベント参加中の安全管理は、イベント主催者および保護者の方の責任において行われます</li>
              </ul>

              <h3 className="text-xl font-bold mb-3 mt-6 text-gray-900 dark:text-white">
                13歳未満のお子様による不正なアカウント作成
              </h3>
              <p className="text-gray-900 dark:text-white leading-relaxed mb-4">
                13歳未満のお子様が保護者の同意なく自らアカウントを作成したことが判明した場合、当該アカウントは予告なく削除させていただきます。また、既に決済が完了している場合の返金については、<a href="/refund" className="text-blue-600 dark:text-blue-400 hover:underline">返金ポリシー</a>に従うものとします。
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                11. プライバシーポリシーの変更
              </h2>
              <p className="text-gray-900 dark:text-white leading-relaxed mb-4">
                当サービスは、法令の変更や事業内容の変更に応じて、本プライバシーポリシーを変更することがあります。重要な変更がある場合は、アプリ内通知またはメールでお知らせします。
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                12. お問い合わせ
              </h2>
              <p className="text-gray-900 dark:text-white leading-relaxed mb-4">
                プライバシーポリシーに関するご質問・ご意見は、以下までお問い合わせください：
              </p>
              <p className="text-gray-900 dark:text-white leading-relaxed">
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
