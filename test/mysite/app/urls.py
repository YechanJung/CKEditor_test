from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PostViewSet, MyModelViewSet

router = DefaultRouter()
router.register(r'posts', PostViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('mymodels/', MyModelViewSet.as_view({'post': 'create'})),
]
