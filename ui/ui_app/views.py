from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
import requests
from .forms import CameraAdd
from django.http import JsonResponse
# from rest_framework.decorators import api_view

# Create your views here.



def cameraList(request):
    data = requests.get('http://127.0.0.1:8000/api/camera-list/')
    response = data.json()
    return render(request, "index.html", {'response': response})


def createCamera(request):
    form = CameraAdd(request.POST or None)
    if form.is_valid():
        title = form.cleaned_data['title']
        description = form.cleaned_data['description']
        data = {"title": title, "description": description}
        requests.post("http://127.0.0.1:8000/api/camera-create/", json=data)
    else:
        data = form.errors.as_json()
    return render(request, "temp.html", {'form': form})

def deleteCamera(request, pk = None):
    url = f"http://127.0.0.1:8000/api/camera-list/{pk}"
    requests.delete(url)
    data = requests.get('http://127.0.0.1:8000/api/camera-list/')
    response = data.json()
    return render(request, "index.html", {'response': response})
