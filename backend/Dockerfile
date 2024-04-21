# ベースイメージを指定
FROM python:3.9-slim

# コンテナ内の作業ディレクトリを設定
WORKDIR /app

# ホストのbackendディレクトリにあるすべてのファイルをコンテナの作業ディレクトリにコピー
COPY . .

# Pythonの依存関係をインストール
RUN pip install --no-cache-dir -r requirements.txt

# ポート番号を公開
EXPOSE 8000

# Djangoサーバーを実行
CMD ["python", "my_django_project/manage.py", "runserver", "0.0.0.0:8000"]
