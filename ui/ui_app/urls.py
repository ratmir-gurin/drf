from django.urls import path
from . import views

urlpatterns = [
    path('', views.cameraList, name = 'cameraList'),
    path('create-camera/', views.createCamera, name = 'createCamera'),
    path(r'^delete-entry/(?P<pk>\d+)/$', views.deleteCamera, name = "deleteCamera")
]
