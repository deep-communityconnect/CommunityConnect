from rest_framework import serializers
from .models import AuthUser

class RegisterSerializer(serializers.ModelSerializer):
    name = serializers.CharField(write_only=True)
    password = serializers.CharField(write_only=True)
    email = serializers.EmailField(
        error_messages={
            "unique": "This email is already registered."
        }
    )

    class Meta:
        model = AuthUser
        fields = ['email', 'password', 'role', 'name', 'created_at', 'updated_at']
        read_only_fields = ['created_at', 'updated_at']

class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)
