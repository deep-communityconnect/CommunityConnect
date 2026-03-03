from rest_framework.viewsets import ViewSet
from rest_framework.response import Response
from authentication.models import AuthUser
from users.models import VolunteerProfile
from .models import OrganizationProfile, Opportunity, Application
from .serializers import OpportunitySerializer, ApplicationStatusSerializer, OrganizationProfileSerializer
from rest_framework.decorators import action
from drf_yasg.utils import swagger_auto_schema
from rest_framework.parsers import MultiPartParser, FormParser
from django.shortcuts import get_object_or_404

def get_user(request):
    uid = request.session.get('user_id')
    return AuthUser.objects.filter(id=uid).first()

class OrganizerViewSet(ViewSet):
    parser_classes = [MultiPartParser, FormParser]

    @swagger_auto_schema(
        method='post',
        request_body=OpportunitySerializer,
        operation_summary="Create Opportunity",
        operation_description="Create a new opportunity under the logged-in organizer."
    )
    @action(detail=False, methods=['post'])
    def create_opportunity(self, request):
        user = get_user(request)
        if not user or user.role != 'organizer':
            return Response({"error": "Unauthorized"}, status=401)

        org = get_object_or_404(OrganizationProfile, user=user)

        serializer = OpportunitySerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(organization=org)

        return Response({"message": "Opportunity created"})

    @swagger_auto_schema(
        method='get',
        operation_summary="View Pending Applications",
        operation_description="Retrieve all pending applications for the organizer's opportunities."
    )
    @action(detail=False, methods=['get'])
    def pending_applications(self, request):

        user = get_user(request)
        if not user or user.role != 'organizer':
            return Response({"error": "Unauthorized"}, status=401)

        org = get_object_or_404(OrganizationProfile, user=user)

        apps = Application.objects.filter(
            opportunity__organization=org,
            status='pending'
        ).order_by('-created_at')

        data = [{
            "id": a.id,
            "volunteer": a.volunteer.name,
            "opportunity": a.opportunity.title,
            "status": a.status
        } for a in apps]

        return Response(data)

    @swagger_auto_schema(
        method='put',
        request_body=ApplicationStatusSerializer,
        operation_summary="Update Application Status",
        operation_description="Update the status of a specific application belonging to the organizer."
    )
    @action(detail=True, methods=['put'])
    def update_application(self, request, pk=None):
        user = get_user(request)
        if not user or user.role != 'organizer':
            return Response({"error": "Unauthorized"}, status=401)

        org = get_object_or_404(OrganizationProfile, user=user)

        app = Application.objects.filter(
            id=pk,
            opportunity__organization=org
        ).first()

        if not app:
            return Response({"error": "Not allowed"}, status=403)

        serializer = ApplicationStatusSerializer(
            app,
            data=request.data,
            partial=True
        )
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response({"message": "Application updated"})

    @swagger_auto_schema(
        method='get',
        operation_summary="Get Organization Profile",
        operation_description="Retrieve the logged-in organizer's profile details."
    )
    @swagger_auto_schema(
        method='put',
        request_body=OrganizationProfileSerializer,
        operation_summary="Update Organization Profile",
        operation_description="Update the logged-in organizer's profile information."
    )
    @action(detail=False, methods=['get', 'put'])
    def profile(self, request):
        user = get_user(request)

        if not user or user.role != 'organizer':
            return Response({"error": "Unauthorized"}, status=401)

        org = get_object_or_404(OrganizationProfile, user=user)

        # GET PROFILE
        if request.method == 'GET':
            return Response({
                "name": org.name,
                "bio": org.bio,
                "image": org.image.url if org.image else None
            })

        serializer = OrganizationProfileSerializer(
            org,
            data=request.data,
            partial=True
        )
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response({"message": "Profile updated"})

    @swagger_auto_schema(
        method='get',
        operation_summary="View Organization Application History",
        operation_description="Retrieve all applications received for the organizer's opportunities, ordered by latest first."
    )
    @action(detail=False, methods=['get'])
    def history(self, request):
        user = get_user(request)
        if not user or user.role != 'organizer':
            return Response({"error": "Unauthorized"}, status=401)

        org = get_object_or_404(OrganizationProfile, user=user)

        applications = Application.objects.filter(
            opportunity__organization=org
        ).order_by('-created_at')

        data = [{
            "id": app.id,
            "volunteer": app.volunteer.name,
            "opportunity": app.opportunity.title,
            "status": app.status,
            "applied_at": app.created_at
        } for app in applications]

        return Response(data)

    @swagger_auto_schema(
        method='get',
        operation_summary="View Volunteer Profile",
        operation_description="Retrieve profile details of any volunteer by ID."
    )
    @action(detail=True, methods=['get'], url_path='view-volunteer')
    def view_volunteer(self, request, pk=None):
        user = get_user(request)
        if not user or user.role != 'organizer':
            return Response({"error": "Unauthorized"}, status=401)

        volunteer = get_object_or_404(VolunteerProfile, id=pk)

        return Response({
            "id": volunteer.id,
            "name": volunteer.name,
            "bio": volunteer.bio,
            "image": volunteer.image.url if volunteer.image else None
        })
