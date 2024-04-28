from django.urls import path, include
from rest_framework.routers import DefaultRouter
# from .views import 
from .views import *
# router = DefaultRouter()
# router.register(r'posts', PostViewSet)

urlpatterns = [
    # path('', include(router.urls)),
    path('editor/', create_post),
    path('listEditor/', list_post),
    path('upload/', uploadImage),
    path('createProduct/', createProduct),
    path('createBoard/', createBoard),
    path('listBoard/', listBoard),
    path('createBoardd/', createBoardd),
    path('updateBoardd/', updateBoardd),
    path('updateBoarddImage/', updateBoarddImage),
    path('listBoardd/', listBoardd),
    # path('')
]
