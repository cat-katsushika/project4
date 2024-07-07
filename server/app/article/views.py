from django.contrib.auth import logout as auth_logout
from django.shortcuts import redirect  # render


def login(request):
    return redirect("/auth/login/google-oauth2")


def logout(request):
    auth_logout(request)
    return redirect("/")
