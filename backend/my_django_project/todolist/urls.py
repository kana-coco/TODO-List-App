from django.urls import path
from . import views # viewsモジュールをインポート

app_name = 'todolist' # アプリケーション名

urlpatterns = [
    path('', views.task_list, name='task_list'), # トップページのビューを指定
    path('tasks/create/', views.task_create, name='task_create'), # 新規作成ページのビューを指定
    # 他のURLパターンもここに追加
]