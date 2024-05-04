# TODO-List-App
Simple TODO list web application built with Python (Django) for the backend and JavaScript (React) for the frontend
TODOリストアプリは、タスクを管理し、効率的に作業を行うためのシンプルなウェブアプリケーションです。

## 概要
* プロジェクト名：TODOリスト
* プロジェクトの概要：
  このアプリケーションは、ユーザーがToDoリストを作成し、タスクを追加、削除、完了することができます。
  ユーザーは自分のタスクを簡単に管理し、優先順位を設定することができます。


## 使用技術一覧
- バックエンド：Python (Django)
- フロントエンド：JavaScript (React)
- データベース：SQLite

## インストール手順
1. このリポジトリをクローンします。
2. バックエンドのセットアップ：
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

3. フロントエンド（React）のセットアップ:
cd frontend
npm install
npm start


## 使用方法

1. アプリケーションを起動すると、ToDoリストが表示されます。
2. タスクを追加するには、「Add Task」ボタンをクリックし、タスクの内容を入力します。
3. タスクを削除するには、削除したいタスクの横にある「削除」ボタンをクリックします。
4. タスクを完了するには、完了したいタスクの横にあるチェックボックスをクリックします。

## 開発に参加する方法

このプロジェクトに貢献したい場合は、以下の手順に従ってください。

1. このリポジトリをフォークします。
2. フォークしたリポジトリをローカルマシンにクローンします。
3. 新しい機能やバグ修正のブランチを作成します。
4. 変更をコミットし、プッシュします。
5. プルリクエストを作成します。

## ブランチ戦略

1. メインブランチ (main/master):
- 本番環境にデプロイされる安定版のコードを反映するブランチ。
- 主にリリースされたバージョンのコードが保持される。
2. 開発ブランチ (develop):
- 開発中の最新の機能や修正を統合するブランチ。
- 新しい機能の開発やバグ修正などの作業が行われる。
3. フィーチャーブランチ (feature branches):
- 個々の機能や修正を開発するためのブランチ。
- 開発者は各自のフィーチャーブランチで作業し、開発が完了したら develop ブランチにマージする。
4. リリースブランチ (release branches):
- 次のリリースの準備をするためのブランチ。
- develop ブランチから作成され、最終テストやバグ修正が行われる。
- リリース準備が整ったら main ブランチにマージされる。
5. ホットフィックスブランチ (hotfix branches):
- 本番環境で緊急修正が必要な場合に使用されるブランチ。
- main ブランチから作成され、修正が行われる。
- 修正が完了したら main ブランチと develop ブランチにマージされる。

## ライセンス

このプロジェクトは MIT ライセンスの下で公開されています。詳細については、[LICENSE](LICENSE) ファイルを参照してください。

## フォルダ構成

```
.
├── backend
│   └── my_django_project
│       ├── my_django_project
│       └── todolist
│           ├── migrations
│           └── serializers
└── frontend
    └── todo-react-app
        ├── public
        ├── src
        │   ├── assets
        │   │   └── icons
        │   ├── components
        │   │   └── shared
        │   ├── constants
        │   ├── pages
        │   └── styles
        └── tests
            └── unit
```

## 機能要件
※　実装済みの機能はチェック
### Authentication

- [ ] User sign up with email and password
- [ ] User sign in with email and password
- [ ] Password reset functionality
- [ ] Social sign in (Google, Facebook, etc.)

### ToDo List Management

- [x] Create a new todo item
- [ ] Edit an existing todo item
- [ ] Mark a todo item as complete
- [ ] Delete a todo item
- [ ] View all todo items
- [ ] View completed todo items
- [ ] View incomplete todo items

### Filtering and Sorting

- [ ] Filter todo items by status (complete, incomplete)
- [ ] Filter todo items by due date
- [ ] Sort todo items by priority, due date, or creation date

### Reminders and Notifications

- [ ] Set due dates for todo items
- [ ] Receive reminders for upcoming due dates
- [ ] Receive notifications for overdue items

### Collaboration (Optional)

- [ ] Share todo lists with other users
- [ ] Assign todo items to other users
- [ ] Comments on todo items

### User Interface

- [x] Responsive design for mobile and desktop
- [ ] Light and dark mode
- [ ] Drag and drop to reorder todo items

### Data Persistence

- [ ] Store todo data in a database or local storage

### Extras

- [ ] Export todo data to CSV or other formats
- [ ] Import todo data from CSV or other formats
- [ ] Attach files or images to todo items

## コーディング規約、命名規則
### Python (Django)

- Follow [PEP 8](https://www.python.org/dev/peps/pep-0008/) style guide
- Use `snake_case` for function and variable names
- Use `UpperCamelCase` for class names
- Keep line length under 79 characters
- Use 4 spaces for indentation
- Import ordering:
  1. Standard library imports
  2. Third-party imports
  3. Local imports

### JavaScript (React)

- Follow [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- Use `camelCase` for function and variable names
- Use `PascalCase` for component names and file names
- Keep line length under 100 characters
- Use 2 spaces for indentation
- Import ordering:
  1. Standard library imports
  2. Third-party imports
  3. Local imports
  4. Component imports

### CSS/SCSS

- Use `kebab-case` for class names
- Follow [BEM](http://getbem.com/) naming convention
- Prefer component-scoped stylesheets
- Use `rem` units for font sizes, `em` for margins/paddings

## アプリケーションアーキテクチャ
```
todo_project/
├── backend/
│   ├── todo_project/
│   │   ├── __init__.py
│   │   ├── settings.py
│   │   ├── urls.py
│   │   ├── asgi.py
│   │   └── wsgi.py
│   ├── todos/
│   │   ├── __init__.py
│   │   ├── models.py
│   │   ├── views.py
│   │   ├── serializers.py
│   │   ├── permissions.py
│   │   └── urls.py
│   ├── users/
│   │   ├── __init__.py
│   │   ├── models.py
│   │   ├── views.py
│   │   ├── serializers.py
│   │   └── urls.py
│   ├── notifications/
│   │   ├── __init__.py 
│   │   ├── models.py
│   │   ├── views.py
│   │   └── tasks.py
│   └── requirements.txt
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── store/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   ├── package.json
│   └── package-lock.json
└── README.md
```