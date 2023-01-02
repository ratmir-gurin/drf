from django.urls import path
from . import views

urlpatterns = [
    path('', views.allView),
    path('camera-list/', views.cameraList, name = "camera-list"),
    path('camera-list/<str:pk>/', views.cameraDetail, name = "camera-list-detail"),
    path('camera-create/', views.cameraCreate, name = "camera-create"),
]
