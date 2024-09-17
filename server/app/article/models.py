import uuid

from django.db import models

from accounts.models import User


class Article(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    title = models.TextField(verbose_name="タイトル")
    content = models.TextField(blank=True, null=False, verbose_name="内容")
    auther = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="作成日時")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="更新日時")
