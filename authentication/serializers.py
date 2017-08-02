from rest_framework import serializers
from rest_framework_jwt.settings import api_settings as jwt_api
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    token = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name', 'email', 'password', 'token')
        extra_kwargs = {
            'password': { 'write_only': True }
        }

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
        payload = jwt_api.JWT_PAYLOAD_HANDLER(user)
        return jwt_api.JWT_ENCODE_HANDLER(payload)
