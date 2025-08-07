from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail
from django.urls import reverse
from rest_framework_simplejwt.tokens import RefreshToken
from .models import User
from rest_framework_simplejwt.tokens import AccessToken
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer



class RegisterView(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        if User.objects.filter(email=email).exists():
            return Response({'error': 'Email already exists'}, status=status.HTTP_400_BAD_REQUEST)

        user = User.objects.create_user(email=email, password=password)
        user.is_active = False
        user.save()

        token = RefreshToken.for_user(user).access_token
        link = f"http://localhost:8000/api/verify-email/?token={str(token)}"

        send_mail(
            'Verify your email',
            f'Click the link to verify your account: {link}',
            'your_gmail@gmail.com',
            [email],
        )

        return Response({'message': 'Verification email sent'}, status=status.HTTP_201_CREATED)


class VerifyEmail(APIView):
    def get(self, request):
        token = request.GET.get('token')
        try:
            access_token = AccessToken(token)
            user_id = access_token['user_id']
            user = User.objects.get(id=user_id)
            if not user.is_active:
                user.is_active = True
                user.save()
            return Response({'message': 'Email verified'}, status=status.HTTP_200_OK)
        except:
            return Response({'error': 'Invalid or expired token'}, status=status.HTTP_400_BAD_REQUEST)


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        if not self.user.is_active:
            raise serializers.ValidationError("Account is not activated")
        return data

class LoginView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
