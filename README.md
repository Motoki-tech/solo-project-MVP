# Find your favorite Strings

楽器の弦の視聴ができることで、お気に入りの弦を見つけられるアプリです。
個人での初のプロジェクト。

### 始め方

この手順では、開発やテストのために、ローカルマシン上でプロジェクトのコピーを起動して実行することができます。プロジェクトを本番環境にデプロイする方法については、デプロイを参照してください。

### インストール

1. このレポジトリをクローンして下さい:

```sh
# clone this repo
$ git clone git@github.com:Motoki-tech/solo-project-MVP.git
```

2. このリポジトリにディレクトリを変更

```sh
cd solo-project-MVP
```

3. 依存関係のインストール

```sh
$ npm i
```

また、psql でデータベースを作成する必要があります。

```SQL
# データベースの作成
$ CREATE DATABASE `your_database`
```

データベースの作成が完了したら、React と Knex のサーバーを起動します。

# react & サーバーの起動

```
$ npm run react
$ npm start
```

localhost:3000 に React サーバーが起動しているはずです。

## Built With

- [React](https://reactjs.org/) - ユーザーインターフェイスを構築するための JavaScript ライブラリ
- [Knex](https://knexjs.org/) - SQL クエリビルダー

## 著者

- **Motoki** - [Motoki-tech](https://github.com/Motoki-tech)

## アドバイザー

- Yusuke
- Felipe
