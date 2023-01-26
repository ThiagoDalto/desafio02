from django.urls import path
from . import views


urlpatterns = [
    path("uploadfile/", views.ArquivoView.as_view()),
    
]
