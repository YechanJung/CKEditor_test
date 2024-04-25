from rest_framework import viewsets, status, 
from .models import Post, MyModel
from .serializers import PostSerializer, MyModelSerializer


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


@api_view(['POST'])
class MyModelViewSet(viewsets.ModelViewSet):
    queryset = MyModel.objects.all()
    serializer_class = MyModelSerializer

