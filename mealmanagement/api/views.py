from django.shortcuts import render
from rest_framework.decorators import APIView
from rest_framework.response import Response
from rest_framework import status
# Create your views here.
class Article(APIView):
    def get(self, request):
        print('ddddddddddddd',request)
        return Response({'error':'ok'},status=status.HTTP_201_CREATED)