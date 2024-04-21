# ベースイメージを指定
FROM node:14

# コンテナ内の作業ディレクトリを設定
WORKDIR /app

# ホストのfrontendディレクトリにあるすべてのファイルをコンテナの作業ディレクトリにコピー
COPY . .

# npmの依存関係をインストール
RUN npm install

# ポート番号を公開
EXPOSE 3000

# Reactアプリケーションをビルドして実行
CMD ["npm", "start"]
