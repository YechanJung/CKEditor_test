from django.db import models

class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()

    def __str__(self):
        return self.title

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import MyModel

@csrf_exempt
def my_view(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        editor_content = data.get('editor_content')

        instance = MyModel(content=editor_content)
        instance.save()

        return JsonResponse({'status': 'success'})