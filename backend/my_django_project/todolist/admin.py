from django.contrib import admin
from .models import Task

class TaskAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'description', 'completed', 'due_date', 'created_at', 'updated_at')  # 一覧に出したい項目
    list_display_links = ('id', 'title',)  # 修正リンクでクリックできる項目

admin.site.register(Task, TaskAdmin)

