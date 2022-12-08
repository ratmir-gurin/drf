from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import CameraSerializer
from .models import Camera


# Create your views here.

@api_view(['GET'])
def allView(request):
    api_urls = {
        'List': '/camera-list/',
        'Detail-View': '/camera-detail/<str:pk>/',
        'Create': '/camera-create/'
    }
    return Response(api_urls)

@api_view(['GET'])
def cameraList(request):
    camera = Camera.objects.all()
    serializer = CameraSerializer(camera, many=True)

    return JsonResponse(serializer.data, safe=False)

@api_view(['GET'])
def cameraDetail(request, pk):
    camera = Camera.objects.get(id=pk)
    serializer = CameraSerializer(camera, many=False)

    return Response(serializer.data)

@api_view(['POST'])
def cameraCreate(request):
    data = JSONParser().parse(request)
    serializer = CameraSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return JsonResponse(serializer.data, status=201)
    return JsonResponse(serializer.errors, status=400)

