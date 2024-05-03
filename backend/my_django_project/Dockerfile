# ベースイメージを指定
FROM python:3.9

# Pythonの出力バッファリングを無効にするための設定
ENV PYTHONUNBUFFERED=1

# コンテナ内の作業ディレクトリを設定
WORKDIR /code

# ホストのbackendディレクトリにあるすべてのファイルをコンテナの作業ディレクトリにコピー
COPY . .

# Pythonの依存関係をインストール
RUN pip install --no-cache-dir -r requirements.txt

# # マイグレーションを実行
# RUN python manage.py migrate

# ポート番号を公開
EXPOSE 8000

