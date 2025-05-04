from django.http.response import HttpResponse
from django.shortcuts import render
from .products import products_list  # Ürün verilerini içe aktarın
# views.py
from .models import CarouselItem
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth.models import User
from .serializers import UserSerializer


class UserListView(APIView):
    def get(self, request):
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)
# Create your views here.
def login_page(request):
    return render(request, "login.html")

def register_page(request):
    return render(request, "register.html")

def home(request):
    carousel_items = CarouselItem.objects.all()
    return render(request,"home.html", {'carousel_items': carousel_items})

def products(request):
    return render(request,"products.html")



def product_details(request, id):
    
    product_id = int(id)  # id'yi int'e çevir
    product = next((p for p in products_list if p["id"] == product_id), None) 
    if product:
        return render(request, 'product_details.html', {'product': product})
    else:
        return render(request, '404.html')  # Ürün bulunamazsa



def about_us(request):
    return render(request,"about.html")

def contact_us(request):
    return render(request,"contact.html")



#def product_details(request):
#    return render(request, 'products/product-details.html')


