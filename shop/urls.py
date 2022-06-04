from django.urls import include, path
from rest_framework import routers
from api import views

router = routers.DefaultRouter()
router.register(r'products', views.ProductViewSet)
router.register(r'orders', views.OrderViewSet)
router.register(r'productsOrders', views.ProductOrderViewSet)

urlpatterns = [
    path('', views.index, name='index'),
    path('', include(router.urls)),
]