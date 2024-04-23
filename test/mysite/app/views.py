from rest_framework import viewsets
from .models import Post
from .serializers import PostSerializer

@csrf_exempt
class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
