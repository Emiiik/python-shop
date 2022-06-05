from django.db import models


# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=200)
    description = models.CharField(max_length=200)
    img = models.CharField(max_length=200)
    price = models.FloatField()


class ProductOrder(models.Model):
    productId = models.BigIntegerField()
    orderId = models.BigIntegerField()


class Order(models.Model):
    name = models.CharField(max_length=200)
