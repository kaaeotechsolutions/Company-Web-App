from .models import ContactForm
from rest_framework import serializers


class ContactSerializers(serializers.ModelSerializer):
    class Meta():
        model = ContactForm
        fields = '__all__'

