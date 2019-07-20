from rest_framework import generics

from .models import Card
from .serializers import CardSerializer

class ListDeck(generics.ListCreateAPIView):
    queryset = Card.objects.all()
    serializer_class = CardSerializer

class DetailDeck(generics.RetrieveUpdateDestroyAPIView):
    queryset = Card.objects.all()
    serializer_class = CardSerializer
