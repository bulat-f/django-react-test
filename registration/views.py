from rest_framework.parsers     import JSONParser
from rest_framework.response    import Response
from rest_framework.views       import APIView
from rest_framework.permissions import AllowAny
from rest_framework             import status
from authentication.serializers import UserSerializer

class RegistrationView(APIView):
    """
    Register a new user
    """
    parser_classes = (JSONParser,)
    permission_classes = (AllowAny,)

    def post(self, request, format=None):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
