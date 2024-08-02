from django.urls import path

from .views import ArticleCreateView, ArticleDetailView

app_name = "article"

urlpatterns = [
    # path("auth/", include("social_django.urls", namespace="social")),
    path("create/", ArticleCreateView.as_view(), name="create"),
    path("detail/<uuid:uuid>", ArticleDetailView.as_view(), name="detail"),
]
