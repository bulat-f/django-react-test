from django.conf.urls import url
from registration import views

urlpatterns = [
    url(r'^$', views.RegistrationView.as_view()),
]
