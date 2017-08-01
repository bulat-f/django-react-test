import jwt
from rest_framework import serializers
from rest_framework_jwt.utils import jwt_payload_handler
from django.contrib.auth.models import User
from legrande_app.settings import SECRET_KEY

class UserSerializer(serializers.ModelSerializer):
    token = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name', 'email', 'password', 'token')

    def create(self, validated_data):
        user = User(
            username=validated_data['username'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
        )
        user.set_password(validated_data['password'])
        user.save()
        return user

    def get_token(self, user):
        payload = jwt_payload_handler(user)
        token = jwt.encode(payload, SECRET_KEY)
        return token.decode('unicode_escape')
