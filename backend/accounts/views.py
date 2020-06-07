from django.shortcuts import render
from django.urls import reverse
from django.http import HttpResponse, HttpResponseRedirect
from django.contrib.auth import authenticate, login, logout

from django.contrib.auth.models import User


def login_register_view(request, *args, **kwargs):

    return render(request, 'accounts/login.html')


def login_view(request, *args, **kwargs):
    if not request.method == "POST":
        return login_register_view(request)

    print(request.user)
    username = request.POST["username"]
    password = request.POST["password"]

    user = authenticate(username=username, password=password)
    print(user)
    if user is None:
        return login_register_view(request)
    else:
        login(request, user)
        return HttpResponseRedirect(reverse("index"))


def register_view(request, *args, **kwags):

    name = request.POST["name"]
    username = request.POST["username"]
    password = request.POST["password"]

    try:
        obj = User.objects.get(username=username)

        if not obj is None:
            message = "Alrady a user log in"
            return login_register_view(request, message)
    except Exception as e:
        print("New user")

    user = User.objects.create_user(
        first_name=name, username=username, password=password)
    user.save()

    newUser = authenticate(username=username, password=password)
    if newUser is None:
        return login_register_view(request)

    login(request, user)

    return HttpResponseRedirect(reverse("index"))


def logout_view(request, *args, **kwargs):

    if request.user.is_authenticated:
        logout(request)

    return login_register_view(request)
