# models.py
from django.db import models


class CarouselItem(models.Model):
    image = models.ImageField(upload_to='images/')
    title = models.CharField(max_length=255)
    description = models.TextField()

    def __str__(self):
        return self.title


# Create your models here.
