from django.shortcuts import render
from .models import ContactForm
from .serializers import ContactSerializers

from rest_framework import generics
# Create your views here.

class ContactView(generics.ListCreateAPIView):
    queryset = ContactForm.objects.all()
    serializer_class = ContactSerializers
