# Create your models here.
from django.db import models
from django.contrib.auth.hashers import make_password, check_password

class AuthUser(models.Model):
    ROLE_CHOICES = (
        ('volunteer', 'Volunteer'),
        ('organizer', 'Organizer'),
    )

    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)
    role = models.CharField(max_length=20, choices=ROLE_CHOICES)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def set_password(self, raw_password):
        self.password = make_password(raw_password)

    def check_password(self, raw_password):
        return check_password(raw_password, self.password)

    def __str__(self):
        return self.email
