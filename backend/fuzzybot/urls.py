from django.urls import path
from .views import ProductSearchView

urlpatterns = [
    path('find_product/', ProductSearchView.as_view(), name='find_product'),
]
