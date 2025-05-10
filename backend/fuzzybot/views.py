from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .utils import find_product_by_name

class ProductSearchView(APIView):
    def post(self, request):
        # Kullanıcıdan gelen mesajı alıyoruz
        user_message = request.data.get('message', '').lower()

        if not user_message:
            return Response({"error": "No message provided"}, status=status.HTTP_400_BAD_REQUEST)
        
        # Ürün ID'sini buluyoruz
        product_id = find_product_by_name(user_message)
        
        if product_id:
            return Response({"product_id": product_id}, status=status.HTTP_200_OK)
        else:
            return Response({"error": "Product not found"}, status=status.HTTP_404_NOT_FOUND)

