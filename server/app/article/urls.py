from django.urls import include, path

urlpatterns = [
    path("auth/", include("social_django.urls", namespace="social")),
]
