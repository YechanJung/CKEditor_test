from django.urls import path, include
from rest_framework.routers import DefaultRouter
# from .views import 
from .views import create_post, list_post   
# router = DefaultRouter()
# router.register(r'posts', PostViewSet)

urlpatterns = [
    # path('', include(router.urls)),
    path('editor/', create_post),
    path('listEditor/', list_post)
]
