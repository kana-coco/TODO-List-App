from django.shortcuts import render

def task_list(request):
    # ToDo一覧を表示するロジック
    return render(request, 'todolist/task_list.html')

def task_create(request):
    # ToDo作成ページを表示するロジック 
    return render(request, 'todolist/task_form.html')
