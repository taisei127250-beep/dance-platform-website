import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: '利用規約 | Street Dance Navi',
  description: 'Street Dance Naviの利用規約',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
            利用規約
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              最終更新日: 2024年12月31日
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                第1条（適用）
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                本規約は、Street Dance Navi（以下「当サービス」）が提供するサービスの利用条件を定めるものです。登録ユーザーの皆さま（以下「ユーザー」）には、本規約に従って、当サービスをご利用いただきます。
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                第2条（当サービスの役割）
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                1. 当サービスは、イベント主催者と参加者（ダンサー）をつなぐプラットフォームを提供するものです。当サービス自体がイベントの主催者となることはありません。
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                2. イベントの企画、実施、管理、および内容については、すべてイベント主催者の責任において行われます。当サービスは、イベントの品質、安全性、適法性について、いかなる保証もしません。
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                3. イベント主催者と参加者の間で生じた紛争、損害、トラブルについて、当サービスは当事者ではなく、仲裁者でもありません。当事者間で解決していただくものとし、当サービスは一切の責任を負いません。
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                4. 当サービスは、イベント主催者が提供する情報の正確性、完全性、信頼性について、いかなる保証もしません。
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                第3条（定義）
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                本規約において使用する用語の定義は、以下のとおりとします。
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
                <li>「サービス」とは、当サービスが提供する「Street Dance Navi」という名称のサービスを意味します。</li>
                <li>「ユーザー」とは、当サービスに登録を行い、本規約に同意した個人または法人を意味します。</li>
                <li>「イベント主催者」とは、当サービスを通じてイベント情報を掲載し、参加者を募集する個人または法人を意味します。</li>
                <li>「ダンサー」とは、当サービスを通じてイベント情報を閲覧し、エントリーを行うユーザーを意味します。</li>
                <li>「コンテンツ」とは、文章、画像、動画、音声、その他の情報を意味します。</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                第4条（アカウント登録）
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                1. 当サービスの利用を希望する方は、本規約に同意の上、所定の方法でアカウント登録を申請し、当サービスの承認を得ることで、利用者登録が完了します。
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                2. 登録申請者は、真実、正確かつ最新の情報を提供する必要があります。
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                3. 当サービスは、以下のいずれかに該当する場合、登録を承認しないことがあります。
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
                <li>虚偽の情報を提供した場合</li>
                <li>過去に本規約違反により登録を抹消されたことがある場合</li>
                <li>13歳未満の方からの申請の場合</li>
                <li>その他、当サービスが不適切と判断した場合</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                第5条（アカウント管理）
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                1. ユーザーは、自己の責任において、アカウント情報を管理するものとします。
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                2. ユーザーは、アカウント情報を第三者に利用させたり、譲渡、売買、貸与などをしてはなりません。
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                3. アカウント情報の管理不十分による損害の責任は、ユーザーが負うものとし、当サービスは一切の責任を負いません。
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                第6条（禁止事項）
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                ユーザーは、当サービスの利用にあたり、以下の行為をしてはなりません。
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
                <li>法令または公序良俗に違反する行為</li>
                <li>犯罪行為に関連する行為</li>
                <li>当サービスの運営を妨害するおそれのある行為</li>
                <li>他のユーザーに対する嫌がらせや誹謗中傷</li>
                <li>虚偽の情報を登録・投稿する行為</li>
                <li>無断で他者の個人情報を収集・公開する行為</li>
                <li>当サービスのネットワークまたはシステムに不正にアクセスする行為</li>
                <li>逆コンパイル、リバースエンジニアリング等の行為</li>
                <li>イベントへの不正なエントリーや重複エントリー</li>
                <li>チケットの不正転売や高額転売</li>
                <li>その他、当サービスが不適切と判断する行為</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                第7条（イベントエントリー）
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                1. ダンサーは、当サービスを通じてイベント主催者が主催するイベントにエントリーすることができます。
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                2. エントリーに際して料金が発生する場合、ダンサーは所定の方法で支払いを行う必要があります。
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                3. エントリー後のキャンセルおよび返金については、<a href="/refund" className="text-blue-600 dark:text-blue-400 hover:underline">返金ポリシー</a>に従うものとします。
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                4. イベントの開催可否、内容変更等は、イベント主催者の責任において行われるものとし、当サービスは一切の責任を負いません。
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                第8条（決済）
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                1. 当サービスにおける決済は、Stripe社が提供する決済サービスを利用します。
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                2. 有料イベントの場合、プラットフォーム手数料として参加費の1.4%をイベント主催者から徴収します。また、Stripe社の決済手数料（3.6%）が別途発生します。
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                3. 決済に関する情報は、Stripe社のプライバシーポリシーおよび利用規約に基づいて管理されます。
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                4. 決済に関するトラブルについて、当サービスは合理的な範囲で対応しますが、最終的な責任は決済サービス提供者が負うものとします。
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                第9条（知的財産権）
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                1. 当サービスに関する知的財産権は、当サービスまたはライセンサーに帰属します。
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                2. ユーザーが当サービスに投稿したコンテンツの著作権は、ユーザーに帰属します。ただし、ユーザーは当サービスに対し、投稿コンテンツを無償、無期限、取消不可、世界規模、非独占的に使用する権利（複製、改変、配信、サブライセンス等を含む、サービス運営、プロモーション、提携先への提供等の目的）を許諾するものとします。
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                3. ユーザーは、投稿するコンテンツについて、必要な権利を有していることを保証するものとします。第三者の権利を侵害するコンテンツを投稿してはなりません。
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                第10条（免責事項）
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                1. 当サービスは、サービスの内容変更、中断、終了によって生じたいかなる損害についても、一切の責任を負いません。
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                2. 当サービスは、ユーザー間またはユーザーと第三者との間で生じたトラブルについて、一切の責任を負いません。
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                3. 当サービスは、イベント主催者が提供する情報の正確性、安全性、適法性について、一切保証しません。
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                第11条（サービスの変更・終了）
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                1. 当サービスは、ユーザーへの事前通知なく、サービスの内容を変更、追加、廃止することができるものとします。
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                2. 当サービスを終了する場合は、少なくとも30日前にウェブサイトおよびアプリ内で告知します。
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                3. サービス終了時、ユーザーは自身のデータをエクスポートすることができます。エクスポート期間は終了日から30日間とします。
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                第12条（利用規約の変更）
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                当サービスは、必要に応じて本規約を変更できるものとします。変更後の規約は、当サービス上に掲載された時点で効力を生じます。変更後も当サービスを継続利用する場合、変更後の規約に同意したものとみなします。
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                第13条（準拠法・管轄裁判所・時効）
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                1. 本規約の解釈は日本法に準拠し、当サービスに関する紛争については、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                2. 本規約に関する請求は、請求原因が発生した日から1年以内に行う必要があります。この期間を過ぎた請求は受け付けません。
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                第14条（お問い合わせ）
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                本規約に関するお問い合わせは、以下までご連絡ください。
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
