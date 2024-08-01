from django.urls import path

from .views import ArticleCreateView

app_name = "article"

urlpatterns = [
    # path("auth/", include("social_django.urls", namespace="social")),
    path("create/", ArticleCreateView.as_view(), name="create"),
]
