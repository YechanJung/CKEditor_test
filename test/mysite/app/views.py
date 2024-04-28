from rest_framework import viewsets, status
from .models import *
from .serializers import *
from rest_framework.decorators import api_view
from rest_framework.response import Response
from datetime import datetime




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

@api_view(['GET'])
def listBoard(request):
    boards = Board.objects.all()
    serializer = BoardSerializer(boards, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def createBoardd(request):
    user = User.objects.get(id=1)
    user_id_id = user.id
    product_url = "product_url"
    title = "title"
    content = "content"
    image_url = None
    show = 3
    like = 3
    create_at = datetime.now()
    board = Boardd.objects.create(user_id_id=user_id_id, product_url=product_url, title=title, content=content, image_url=image_url, show=show, like=like, created_at=create_at)
    serializer = BoarddSerializer(board)
    return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['POST'])
def updateBoarddImage(request):
    board = Boardd.objects.get(id=1)
    board.image_url = request.FILES['file']
    board.save()
    serializer = BoarddSerializer(board)
    return Response(serializer.data)

@api_view(['PUT'])
def updateBoardd(request):
    data = request.data
    board = Boardd.objects.get(id=1)
    board.title = "title"
    board.content = data['content']
    board.save()
    serializer = BoarddSerializer(board)
    return Response(serializer.data)

@api_view(['GET'])
def listBoardd(request):
    boards = Boardd.objects.all()
    serializer = BoarddSerializer(boards, many=True)
    return Response(serializer.data)