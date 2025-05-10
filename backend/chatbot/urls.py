from django.urls import path

from . import views
from .views import get_instruction
from .views import get_instruction_by_name


# chatbot/urls.py
urlpatterns = [
    path("instruction/", get_instruction),
    path("instruction_by_name/", views.get_instruction_by_name),
]

