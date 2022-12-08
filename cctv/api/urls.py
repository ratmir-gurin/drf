from django.urls import path
from . import views

urlpatterns = [
    path('', views.allView),
    path('camera-list/', views.cameraList),
    path('camera-detail/<str:pk>/', views.cameraDetail),
    path('camera-create/', views.cameraCreate, name = "camera-create"),
]
