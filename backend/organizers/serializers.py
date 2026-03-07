from rest_framework import serializers
from .models import OrganizationProfile, Opportunity, Application

class OrganizationProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrganizationProfile
        fields = ['name', 'bio', 'image', 'contact_email', 'contact_phone', 'website', 'address', 'created_at']
        read_only_fields = ['created_at']

class OpportunitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Opportunity
        fields = ['title', 'description', 'location', 'start_date', 'end_date', 'slots_available', 'slots_filled', 'created_at']
        read_only_fields = ['slots_filled', 'created_at']

class ApplicationStatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = ['status']
