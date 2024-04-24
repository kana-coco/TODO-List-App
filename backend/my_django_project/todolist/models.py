from django.db import models

class Task(models.Model):
    # タスクの一意識別子(主キーid)：Djangoが自動で追加
    # タスクのタイトル
    title = models.CharField(max_length =200)
    # タスクの詳細説明
    description = models.TextField(blank=True, null=True)
    # タスクが完了したかどうかを示すブールフィールド
    completed = models.BooleanField(default=False)
    # タスクの期限日
    due_date = models.DateField(null=True, blank=True)
    # タスクの作成日
    created_at = models.DateTimeField(auto_now_add=True)
    # タスクの更新日
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

    class Meta:
        db_table = 'tasks' # テーブル名
