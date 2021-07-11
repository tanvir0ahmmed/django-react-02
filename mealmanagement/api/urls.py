from django.urls import path
from . import views

urlpatterns = [
    path('api/articles/',views.Article.as_view())
]