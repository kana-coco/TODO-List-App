# ベースイメージを指定
FROM node:18

# コンテナ内の作業ディレクトリを設定
WORKDIR /app

# ホストのtodo-react-appディレクトリにあるすべてのファイルをコンテナの作業ディレクトリにコピー
COPY todo-react-app/ .

# npmの依存関係をインストール
RUN npm install

# ポート番号を公開
EXPOSE 3000

