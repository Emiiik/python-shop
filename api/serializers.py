from rest_framework_json_api import serializers
from api.models import Product, Order, ProductOrder


class ProductSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'


class OrderSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'


class ProductOrderSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = ProductOrder
        fields = '__all__'
