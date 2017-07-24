from django.conf.urls import url
from django.views.decorators.csrf import csrf_exempt

from rest_framework_jwt.views import obtain_jwt_token

from . import views

urlpatterns = [
    url(r'^$', csrf_exempt(obtain_jwt_token)),
]
