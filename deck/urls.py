from django.urls import path

from . import views

urlpatterns = [
    path('', views.ListDeck.as_view()),
    path('<int:pk>/', views.DetailDeck.as_view()),
]
