from rest_framework.viewsets import ViewSet
from rest_framework.response import Response
from rest_framework.decorators import action
from django.shortcuts import get_object_or_404
from drf_yasg.utils import swagger_auto_schema
from authentication.models import AuthUser
from organizers.models import OrganizationProfile
from .models import Blog
from .serializers import BlogSerializer, BlogCardSerializer 
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser
from .pagination import BlogPagination

def get_user(request):
    uid = request.session.get('user_id')
    return AuthUser.objects.filter(id=uid).first()

class BlogViewSet(ViewSet):
    parser_classes = [MultiPartParser, FormParser, JSONParser]

    @swagger_auto_schema(
        method='get',
        operation_summary="List Blogs",
        operation_description="Get paginated list of published blogs for blog cards."
    )
    @action(detail=False, methods=['get'])
    def list_blogs(self, request):
        blogs = Blog.objects.filter(is_published=True).order_by("-created_at")
        paginator = BlogPagination()
        result_page = paginator.paginate_queryset(blogs, request)
        serializer = BlogCardSerializer(result_page, many=True)
        return paginator.get_paginated_response(serializer.data)
    
    @swagger_auto_schema(
        method='get',
        operation_summary="Blog Detail",
        operation_description="Get blog details using slug. No login required."
    )
    @action(detail=False, methods=['get'], url_path='detail/(?P<slug>[^/.]+)')
    def blog_detail(self, request, slug=None):
        blog = get_object_or_404(Blog, slug=slug, is_published=True)
        serializer = BlogSerializer(blog)
        return Response(serializer.data)

    @swagger_auto_schema(
        method='post',
        request_body=BlogSerializer,
        operation_summary="Create Blog",
        operation_description="Create blog under logged-in organizer. Slug is optional."
    )
    @action(detail=False, methods=['post'])
    def create_blog(self, request):
        user = get_user(request)
        if not user or user.role != "organizer":
            return Response({"error": "Unauthorized"}, status=401)
        org = get_object_or_404(OrganizationProfile, user=user)
        serializer = BlogSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(organization=org, is_published=True)
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    @swagger_auto_schema(
        method='put',
        request_body=BlogSerializer,
        operation_summary="Update Blog",
        operation_description="Update organizer blog."
    )
    @action(detail=True, methods=['put'])
    def update_blog(self, request, pk=None):
        user = get_user(request)
        if not user or user.role != "organizer":
            return Response({"error": "Unauthorized"}, status=401)
        org = get_object_or_404(OrganizationProfile, user=user)
        blog = get_object_or_404(Blog, pk=pk, organization=org)
        serializer = BlogSerializer(blog, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    @swagger_auto_schema(
        method='delete',
        operation_summary="Delete Blog",
        operation_description="Delete organizer blog."
    )
    @action(detail=True, methods=['delete'])
    def delete_blog(self, request, pk=None):
        user = get_user(request)
        if not user or user.role != "organizer":
            return Response({"error": "Unauthorized"}, status=401)

        org = get_object_or_404(OrganizationProfile, user=user)
        blog = get_object_or_404(Blog, pk=pk, organization=org)
        blog.delete()
        return Response({"message": "Blog deleted"})

    @swagger_auto_schema(
        method='get',
        operation_summary="My Blogs",
        operation_description="Get blogs created by logged-in organizer."
    )
    @action(detail=False, methods=['get'])
    def my_blogs(self, request):
        user = get_user(request)
        if not user or user.role != "organizer":
            return Response({"error": "Unauthorized"}, status=401)
        org = get_object_or_404(OrganizationProfile, user=user)
        blogs = Blog.objects.filter(organization=org, is_published=True).order_by("-created_at")
        serializer = BlogSerializer(blogs, many=True)
        return Response(serializer.data)
