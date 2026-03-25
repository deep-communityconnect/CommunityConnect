from django.contrib import admin
from .models import OrganizationProfile, Opportunity, Application

@admin.register(OrganizationProfile)
class OrganizationProfileAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'user')
    search_fields = ('name',)

@admin.register(Opportunity)
class OpportunityAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'category', 'organization', 'created_at')
    search_fields = ('title', 'category')
    list_filter = ('organization', 'category')

@admin.register(Application)
class ApplicationAdmin(admin.ModelAdmin):
    list_display = ('id', 'volunteer', 'opportunity', 'status')
    list_filter = ('status',)
