from rest_framework import serializers

from .models import Article


class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ["id", "title", "auther", "content", "created_at", "updated_at"]
        read_only_fields = ["id", "created_at", "updated_at"]
