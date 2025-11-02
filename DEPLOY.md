# デプロイガイド - Street Dance Navi Website

このガイドでは、Vercelへのデプロイ手順を詳しく説明します。

---

## 📋 事前準備

### 1. GitHubリポジトリの作成

Vercelは、GitHubリポジトリと連携してデプロイするのが最も簡単です。

```bash
# プロジェクトディレクトリに移動
cd /Users/taisei127250/Dev/dance_platform_website

# Gitリポジトリの初期化
git init

# .gitignoreの確認（既に存在するはず）
cat .gitignore

# 全ファイルをステージング
git add .

# 初回コミット
git commit -m "Initial commit: Street Dance Navi website"

# GitHubで新しいリポジトリを作成後（例: dance-platform-website）
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/dance-platform-website.git
git push -u origin main
```

---

## 🚀 Vercelへのデプロイ

### 方法A: Vercel Dashboard（初心者推奨）

#### Step 1: Vercelアカウントの作成

1. [Vercel](https://vercel.com/)にアクセス
2. 「Sign Up」をクリック
3. GitHubアカウントでサインアップ（推奨）

#### Step 2: プロジェクトのインポート

1. Vercel Dashboardで「Add New...」→「Project」をクリック
2. 「Import Git Repository」から対象リポジトリを選択
3. リポジトリが見つからない場合は「Adjust GitHub App Permissions」で権限を付与

#### Step 3: プロジェクト設定

```
Framework Preset: Next.js
Root Directory: ./
Build Command: npm run build (自動検出)
Output Directory: .next (自動検出)
Install Command: npm install (自動検出)
```

#### Step 4: 環境変数（不要）

このプロジェクトは静的コンテンツのみなので、環境変数は不要です。

#### Step 5: デプロイ

「Deploy」ボタンをクリック → 2〜3分で完了

デプロイ完了後、以下のようなURLが発行されます：
```
https://dance-platform-website.vercel.app
```

---

### 方法B: Vercel CLI（上級者向け）

```bash
# Vercel CLIのインストール
npm i -g vercel

# プロジェクトディレクトリで実行
cd /Users/taisei127250/Dev/dance_platform_website

# ログイン
vercel login

# 初回デプロイ（プレビュー環境）
vercel

# 本番環境へのデプロイ
vercel --prod
```

---

## 🌐 独自ドメインの設定

### Step 1: ドメインの購入

以下のいずれかでドメインを購入します（推奨: `streetdancenavi.com`）

- [Google Domains](https://domains.google/)
- [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/) - 最安値
- [お名前.com](https://www.onamae.com/) - 日本語サポート
- [Namecheap](https://www.namecheap.com/)

### Step 2: Vercelでドメインを追加

1. Vercel Dashboard > プロジェクト > **Settings** > **Domains**
2. 「Add Domain」をクリック
3. 購入したドメイン（例: `streetdancenavi.com`）を入力
4. 「Add」をクリック

### Step 3: DNS設定

Vercelが表示する指示に従ってDNSレコードを設定します。

#### パターンA: Vercel Nameserversを使用（推奨・最も簡単）

ドメインレジストラでネームサーバーを以下に変更：
```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

#### パターンB: CNAMEレコードを追加

ドメインレジストラのDNS設定で以下を追加：
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

ルートドメイン（@）の場合：
```
Type: A
Name: @
Value: 76.76.21.21
```

### Step 4: SSL証明書の発行

DNS設定後、Vercelが自動的にSSL証明書（Let's Encrypt）を発行します。
通常、数分〜数時間で完了します。

---

## ✅ デプロイ後の確認

### 1. 全ページが正しく表示されるか確認

```
https://yourdomain.com/
https://yourdomain.com/privacy
https://yourdomain.com/terms
https://yourdomain.com/commerce
https://yourdomain.com/refund
https://yourdomain.com/contact
```

### 2. HTTPSでアクセスできるか確認

ブラウザのアドレスバーに🔒マークが表示されることを確認。

### 3. モバイルで表示確認

- iOS Safari
- Android Chrome

### 4. リンクの動作確認

- ヘッダーナビゲーション
- フッターリンク
- ページ内のアンカーリンク
- メールアドレスのリンク（`mailto:`）

---

## 🔄 更新とCI/CD

### 自動デプロイの仕組み

VercelとGitHubを連携すると、以下のように自動デプロイされます：

- **`main`ブランチにpush** → 本番環境に自動デプロイ
- **他のブランチにpush** → プレビュー環境に自動デプロイ

### コードを更新してデプロイ

```bash
# ファイルを編集後
git add .
git commit -m "Update privacy policy"
git push origin main

# 自動的にVercelがビルド・デプロイを開始
# Dashboard > Deploymentsで進捗確認可能
```

---

## 📊 App Store / Stripe審査で使用するURL

デプロイ完了後、以下のURLを審査に提出してください：

### App Store Connect

```
アプリ情報 > プライバシーポリシーURL:
https://yourdomain.com/privacy

アプリ情報 > サポートURL:
https://yourdomain.com/contact

アプリ情報 > 利用規約URL:
https://yourdomain.com/terms
```

### Stripe Dashboard

```
ビジネス設定 > 公開ビジネス情報:
https://yourdomain.com

カスタマーポータル > 利用規約:
https://yourdomain.com/terms

カスタマーポータル > プライバシーポリシー:
https://yourdomain.com/privacy

返金ポリシー:
https://yourdomain.com/refund

特定商取引法に基づく表記:
https://yourdomain.com/commerce
```

---

## 🐛 トラブルシューティング

### エラー1: "Build failed"

**原因**: TypeScriptエラーやビルドエラー

**解決方法**:
```bash
# ローカルでビルドして確認
npm run build

# エラーがあれば修正してからpush
```

---

### エラー2: ドメインが反映されない

**原因**: DNS設定の伝播に時間がかかっている

**解決方法**:
- 24〜48時間待つ
- DNS伝播状況を確認: [What's My DNS](https://www.whatsmydns.net/)
- Vercel Dashboard > Domains で設定を再確認

---

### エラー3: SSL証明書エラー

**原因**: DNS設定が正しくない

**解決方法**:
1. Vercel Dashboard > Domains でエラー内容を確認
2. DNS設定を再確認
3. 「Refresh」ボタンをクリック

---

### エラー4: 404 Not Found

**原因**: Next.jsのルーティング設定

**解決方法**:
- Vercelは自動でNext.jsを検出するので、通常は問題なし
- `vercel.json`がある場合は削除してみる

---

## 🔒 セキュリティ

### HTTPS

Vercelは自動的にHTTPSを有効化します。追加設定は不要です。

### セキュリティヘッダー

Next.jsはデフォルトで以下のセキュリティヘッダーを設定します：
- X-DNS-Prefetch-Control
- Strict-Transport-Security
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy

追加でヘッダーを設定したい場合は、`next.config.ts`に記述できます。

---

## 💰 料金

### Vercelの料金プラン

- **Hobby（無料）**: 個人開発・審査用途には十分
  - 100GB帯域幅/月
  - 無制限のデプロイ
  - 無制限のプレビュー環境
  - 自動HTTPS

- **Pro（$20/月）**: 商用利用の場合
  - 1TB帯域幅/月
  - パスワード保護
  - 分析機能

### 審査段階では無料プランで十分

App StoreとStripeの審査には、無料プランで問題ありません。

---

## 📞 サポート

### Vercel公式ドキュメント

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Custom Domains](https://vercel.com/docs/concepts/projects/custom-domains)

### 問題が解決しない場合

1. Vercel Dashboardの「Build Logs」を確認
2. [Vercel Community](https://github.com/vercel/vercel/discussions)で質問
3. Next.jsの[GitHub Issues](https://github.com/vercel/next.js/issues)を検索

---

## ✨ デプロイ完了後のNext Steps

1. ✅ 全ページの表示確認
2. ✅ App Store ConnectにURL登録
3. ✅ Stripe DashboardにURL登録
4. ✅ Google Search Consoleに登録（SEO対策・任意）
5. ✅ Google Analyticsの設定（アクセス解析・任意）

---

以上で、Street Dance Navi WebsiteのVercelへのデプロイは完了です！🎉
