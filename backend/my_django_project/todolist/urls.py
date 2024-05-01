from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from .views import TaskViewSet

app_name = 'todolist' # アプリケーション名

router = routers.DefaultRouter()
router.register(r'tasks', TaskViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]