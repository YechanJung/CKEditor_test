from rest_framework import viewsets, status
from .models import *
from .serializers import *
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


@api_view(['POST'])
# @permission_classes([IsAuthenticated])
def uploadImage(response):
    data = response.data

    product_id = data['product_id']
    product = Product.objects.get(id=product_id)

    product.image = response.FILES.get('image')
    product.save()

    return Response('Image was uploaded')


@api_view(['GET'])
def createProduct(request):
    product = Product.objects.create(name="name", image="image", description="description", price=0, countInStock=0, rating=0, numReviews=0, isFeatured=False)
    serializer = ProductSerializer(product)
    return Response(serializer.data, status=status.HTTP_201_CREATED)



@api_view(['POST'])
def createBoard(request):
    name="name"
    image=request.FILES['file']
    board = Board.objects.create(name=name, image=image)
    serializer = BoardSerializer(board)
    return Response(serializer.data, status=status.HTTP_201_CREATED)