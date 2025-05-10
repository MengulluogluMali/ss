from django.urls import path
from django.conf.urls.static import static
from django.conf import settings
from .views import UserListView
from . import views
from rest_framework.routers import DefaultRouter




urlpatterns = [
    path("", views.login_page, name="login_page"),
    path("home", views.home, name="home"),
    path("products", views.products, name="products"),
    
    path("about_us", views.about_us, name="about"),
    path("contact_us", views.contact_us, name="contact"),
    #path("product_details", views.product_details, name="monarch-gun"),
    path('product_details/<int:id>/', views.product_details, name='product_details'),
    path("login-page/", views.login_page, name="login_page"),
    path("register-page/", views.register_page, name="register_page"),
   
    path('api/users/', UserListView.as_view(), name='user-list'),
    
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
