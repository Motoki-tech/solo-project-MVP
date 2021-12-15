# Find your favorite Strings

楽器の弦の視聴ができることで、お気に入りの弦を見つけられるアプリです。

# # スタートアップ

この手順では、開発やテストのために、ローカルマシン上でプロジェクトのコピーを起動して実行することができます。プロジェクトを本番環境にデプロイする方法については、デプロイを参照してください。

### インストール

このアプリケーションをローカルで実行するには、コンピュータに Git と Node.js がインストールされている必要があります。

```bash
# clone this repo
$ git clone git@github.com:Motoki-tech/solo-project-MVP.git

# このリポジトリにディレクトリを変更
cd solo-project-MVP

# 依存関係のインストール
$ npm i
```

また、psql でデータベースを作成する必要があります。

```SQL
# データベースの作成
$ CREATE DATABASE stringmenu
```

データベースの作成が完了したら、React と Knex のサーバーを起動します。

``bash

# データベースの設定

$ node server

# react サーバーの起動

$ npm start

```

これでlocalhost:3000にReactサーバーが起動しているはずです。

<div><img src=""></div>

## テストの実行

ローカルでテストを実行するには、ターミナルでこのスクリプトを実行します。

``bash
# テストの実行
$
```

## Built With

- React](https://reactjs.org/) - ユーザーインターフェイスを構築するための JavaScript ライブラリ
- [Knex](https://knexjs.org/) - SQL クエリビルダー

## 著者

- **Motoki** - [Motoki-tech](https://github.com/Motoki-tech)

## アドバイザー

- Yusuke
- Felipe
