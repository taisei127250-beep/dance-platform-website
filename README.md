# Street Dance Navi - Website

Street Dance Naviの公式Webサイト（App Store / Stripe審査用）

## 📋 プロジェクト概要

このWebサイトは、以下の目的で作成されています：

- **App Store審査**: プライバシーポリシー、利用規約などの法的情報の提供
- **Stripe審査**: 特定商取引法に基づく表記、返金ポリシーの明示
- **ユーザー向け情報提供**: アプリのダウンロードリンク、機能紹介

## 🛠 技術スタック

- **Framework**: Next.js 15.1.0 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Hosting**: Vercel（推奨）
- **Domain**: 独自ドメイン設定可能

## 📄 ページ構成

| ページ | URL | 用途 |
|--------|-----|------|
| トップページ | `/` | アプリ紹介、ダウンロードリンク |
| プライバシーポリシー | `/privacy` | App Store必須、Stripe必須 |
| 利用規約 | `/terms` | App Store必須、Stripe必須 |
| 特定商取引法に基づく表記 | `/commerce` | Stripe必須（日本） |
| 返金ポリシー | `/refund` | Stripe推奨 |
| お問い合わせ | `/contact` | App Store推奨、Stripe必須 |

## 🚀 セットアップ

### 1. 依存関係のインストール

```bash
npm install
# または
yarn install
```

### 2. 開発サーバーの起動

```bash
npm run dev
# または
yarn dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて確認できます。

### 3. ビルド

```bash
npm run build
npm run start
# または
yarn build
yarn start
```

## 📦 Vercelへのデプロイ

### 方法1: Vercel CLIを使用（推奨）

```bash
# Vercel CLIのインストール
npm i -g vercel

# プロジェクトをデプロイ
vercel
```

### 方法2: Vercel Dashboardから

1. [Vercel](https://vercel.com/)にサインアップ/ログイン
2. 「New Project」をクリック
3. GitHubリポジトリを接続（または手動でアップロード）
4. プロジェクトルートを選択
5. 「Deploy」をクリック

デプロイ完了後、Vercelから自動生成されたURLが提供されます。

## 🌐 独自ドメインの設定

### Vercelでドメインを追加

1. Vercel Dashboard > プロジェクト > Settings > Domains
2. 「Add Domain」をクリック
3. 購入したドメイン（例: `streetdancenavi.com`）を入力
4. DNSレコードの設定（Vercelが指示を表示）

### 推奨ドメインレジストラ

- [Google Domains](https://domains.google/)
- [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/)
- [Namecheap](https://www.namecheap.com/)
- [お名前.com](https://www.onamae.com/)

## 📝 審査で必要なURL

App StoreとStripeの審査時に、以下のURLを提出してください：

```
プライバシーポリシー: https://yourdomain.com/privacy
利用規約: https://yourdomain.com/terms
サポートURL: https://yourdomain.com/contact
特定商取引法: https://yourdomain.com/commerce
```

## 🔧 カスタマイズ

### App Store / Google Playのリンクを更新

トップページ（`app/page.tsx`）のダウンロードボタンのリンクを更新してください：

```tsx
// App Store
<a href="https://apps.apple.com/app/your-app-id" ...>

// Google Play
<a href="https://play.google.com/store/apps/details?id=com.yourapp" ...>
```

### カラーテーマの変更

`tailwind.config.ts`でカスタムカラーを定義できます。

### 内容の更新

各ページは`app/`ディレクトリ内にあります：
- `app/page.tsx` - トップページ
- `app/privacy/page.tsx` - プライバシーポリシー
- `app/terms/page.tsx` - 利用規約
- など

## 📞 連絡先情報

現在設定されている連絡先：

- **事業者名**: Street Dance Navi
- **運営責任者**: 森田 大成
- **Email**: streetdancenavi@gmail.com

これらの情報は以下のファイルに記載されています：
- `components/Footer.tsx`
- `app/privacy/page.tsx`
- `app/terms/page.tsx`
- `app/commerce/page.tsx`
- `app/contact/page.tsx`

情報を変更する場合は、上記ファイルを検索して一括置換してください。

## ✅ 審査前のチェックリスト

### App Store審査

- [ ] プライバシーポリシーページが公開されている
- [ ] 利用規約ページが公開されている
- [ ] サポート/お問い合わせページが公開されている
- [ ] 全ページがHTTPSでアクセス可能
- [ ] モバイルでも正しく表示される

### Stripe審査

- [ ] 特定商取引法に基づく表記が公開されている
- [ ] 返金ポリシーが明記されている
- [ ] 事業者名・代表者名が正確
- [ ] 連絡先（Email）が正確
- [ ] 商品内容・価格が明確
- [ ] 決済方法が明記されている

## 🐛 トラブルシューティング

### ビルドエラーが発生する

```bash
# キャッシュをクリア
rm -rf .next
npm run build
```

### Vercelデプロイが失敗する

- Node.jsバージョンを確認（18.x以上推奨）
- `vercel.json`がある場合は、設定を確認

### スタイルが反映されない

```bash
# Tailwind CSSを再ビルド
npm run dev
```

## 📄 ライセンス

このプロジェクトはStreet Dance Naviの公式Webサイトです。

## 🔗 関連リンク

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [App Store Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)
- [Stripe Documentation](https://stripe.com/docs)
