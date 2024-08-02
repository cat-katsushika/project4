# from django.contrib.auth import logout as auth_logout
from django.shortcuts import get_object_or_404
from rest_framework import generics, views
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


class ArticleDetailView(views.APIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

    def get(self, request, uuid, *args, **kwargs):
        article = get_object_or_404(Article, id=uuid)
        serializer = ArticleSerializer(instance=article)
        return Response(serializer.data)
