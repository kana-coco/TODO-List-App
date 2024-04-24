from django.shortcuts import render, HttpResponse

def task_list(request):
    # ToDo一覧を表示するロジック
    return HttpResponse("Task List")

def task_create(request):
    # ToDo作成ページを表示するロジック
    return HttpResponse("New Task")
