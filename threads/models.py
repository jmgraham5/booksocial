from django.db import models
from django.utils import timezone
from django.urls import reverse
from urllib import request
from users.models import CustomUser

# Create your models here.


class Post(models.Model):
    title = models.CharField(max_length=200)
    body = models.TextField(max_length=500)
    user = models.ForeignKey(
        CustomUser, related_name='threads', on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)
    edited = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created']

    def get_absolute_url(self):
        return reverse('threads:home')
