from django.db import models

# Create your models here.
class ContactForm(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.BigIntegerField()
    subject = models.CharField(max_length=255)
    message = models.TextField()
    