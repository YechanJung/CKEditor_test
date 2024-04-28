from django.db import models
from django.contrib.auth.models import User


class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()

    def __str__(self):
        return self.title
    
class Product(models.Model):
    name = models.CharField(max_length=200)
    image = models.ImageField(upload_to='images/')
    description = models.TextField()
    price = models.DecimalField(max_digits=7, decimal_places=2)
    countInStock = models.IntegerField()
    rating = models.DecimalField(max_digits=7, decimal_places=2)
    numReviews = models.IntegerField()
    isFeatured = models.BooleanField(default=False)
    createdAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
    

class Board(models.Model):
    name=models.CharField(max_length=200)
    image=models.ImageField(upload_to='images/')

    def __str__(self):
        return self.title
    
class Boardd(models.Model):
    # 외래키
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)

    product_url = models.CharField(max_length=200)
    title = models.CharField(max_length=100)
    content = models.TextField(blank=True)
    image_url = models.ImageField()
    show = models.IntegerField(default=0)
    like = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)


# from django.http import JsonResponse
# from django.views.decorators.csrf import csrf_exempt
# from .models import MyModel

# @csrf_exempt
# def my_view(request):
#     if request.method == 'POST':
#         data = json.loads(request.body)
#         editor_content = data.get('editor_content')

#         instance = MyModel(content=editor_content)
#         instance.save()

#         return JsonResponse({'status': 'success'})
