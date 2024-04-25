from rest_framework import viewsets, status
from .models import Post
from .serializers import PostSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response



@api_view(['POST'])
def create_post(request):
    content = request.data['content']
    post= Post.objects.create(title="title", content=content)
    serializer = PostSerializer(post)
    return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET'])
def list_post(request):
    posts = Post.objects.all()
    serializer = PostSerializer(posts, many=True)
    return Response(serializer.data)