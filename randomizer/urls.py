from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('api/<str:inspo>', views.API, name='api')
]