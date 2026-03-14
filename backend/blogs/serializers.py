from rest_framework import serializers
from .models import Blog

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = "__all__"
        read_only_fields = ("organization", "reading_time", "created_at", "updated_at")
    
    def validate(self, data):
        required_fields = ["title", "content"]
        for field in required_fields:
            value = data.get(field)
            if not value or str(value).strip() == "":
                raise serializers.ValidationError({field: "This field cannot be empty."})
        return data

class BlogCardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = [ "id", "title", "slug", "cover_image", "reading_time", "excerpt", "created_at"]
