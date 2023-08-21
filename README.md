# molto
moltoのプロトタイプをサクッと作っていきます。


# 開発環境
- プロジェクトルートは`molto`
- バックエンドは`molto/www/laravel`
- フロントエンドは`molto/www/react-molto`
- DataBaseはmysql

開発環境はDockerとローカルサーバになります。
Dockerでwebコンテナとdbコンテナを立てます。
webコンテナではlaravelを稼働させ、APIサーバとして機能させます。
フロントエンドはマシンのlocalhostになります。

### Dockerデスクトップ起動
1. `cd molto`
2. `docker-comopse up`


### フロントエンド用ローカルサーバ起動
1. `cd molto/www/react-molto`
2. `npm start`


