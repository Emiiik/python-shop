from django.shortcuts import render

# Create your views here.
from api.models import Product, Order, ProductOrder
from api.serializers import ProductSerializer, OrderSerializer, ProductOrderSerializer
from rest_framework import viewsets


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


class ProductOrderViewSet(viewsets.ModelViewSet):
    queryset = ProductOrder.objects.all()
    serializer_class = ProductOrderSerializer

def index(request):
    return render(request,"shop/index.html",{})
