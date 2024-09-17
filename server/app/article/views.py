# from django.contrib.auth import logout as auth_logout
# from django.shortcuts import redirect  # render
from django_filters import rest_framework as filters
from rest_framework import generics, status, views
from rest_framework.response import Response

from .models import Article
from .serializers import ArticleSerializer

# def login(request):
#     return redirect("/auth/login/google-oauth2")
#
#
# def logout(request):
#     auth_logout(request)
#     return redirect("/")


class ArticleCreateView(generics.CreateAPIView):
    serializer_class = ArticleSerializer


class ArticleListView(generics.ListAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    filter_backends = [filters.DjangoFilterBackend]
    filterset_fields = "__all__"


class ArticleDeleteView(views.APIView):
    def delete(self, request, uuid, *args, **kwargs):
        try:
            article = Article.objects.get(id=uuid)
            article.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except Article.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
