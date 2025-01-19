# Next.js + Hono

<!-- ![image](/public/images/portfolio/portfolio_top3.png) -->

## 目次

- [システムの特徴](#system-feature)
- [使用技術について](#technology-used)
- [ディレクトリ構成](#directory-structure)
- [ブランチについて](#technology-used)

-[URL](https://to-you-design.vercel.app/)

<h2 id="system-feature">システムの特徴</h2>
 これは、Next.jsとHonoを学ぶために作成したサイトです。

<h2 id="technology-used">使用言語、環境</h2>

### node バージョン

- node v18.18.0
- npm v9.8.1

### フロントエンド

- [Next.js](https://nextjs.org/) 15.1.3
- [React](https://ja.reactjs.org/) 19.2.0
- [typescript](https://www.typescriptlang.org/) 5

### バックエンド

- [Prisma](https://www.prisma.io/)

### データベース

- [Neon](https://console.neon.tech/)
- [PostgreSQL](https://www.postgresql.org/)

### リンター

- [Biome](https://biomejs.dev/ja/)

### テスト

- [Vitest](https://vitejs.dev/guide/features.html) 2.1.1
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) 10.4.0

### ホスティング

- [Vercel](https://vercel.com/)

### その他

- [React Hook Form](https://www.react-hook-form.com/)
- [zod](https://zod.dev/)

<h2 id="technology-used">ディレクトリ構成</h2>

```
.
├── api             #API
├── app
│   ├── components #コンポーネントの記載
│   ├── posts      #post関連のページ
├── public          #画像
├── styles          #cssの設定
├── hooks           #カスタムフック
├── utils           #共通関数
├── types           #型定義
```

<h2 id="technology-used">ブランチについて</h2>

develop ブランチが開発環境で main が本番環境です。

| ブランチ名 | 役割                       | 派生元  | マージ先 |
| ---------- | -------------------------- | ------- | -------- |
| main       | 公開するものを置くブランチ |         |          |
| develop    | 開発中のものを置くブランチ | main    | main     |
| feature-\* | 新機能開発中に使うブランチ | develop | develop  |

# Author

- 作成者 阿部 舜平
- E-mail harrier2070@gmail.com
