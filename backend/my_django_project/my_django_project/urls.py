from django.contrib import admin
from django.urls import path, include

app_name = 'todolist'
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('todolist.urls')),
]
