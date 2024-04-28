from rest_framework import viewsets
from .serializers import TaskSerializer, UserSerializer
from models import task

class TaskViewSet(viewsets.ModelViewSet):
    queryset = task.objects.all()
    serializer_class = TaskSerializer
