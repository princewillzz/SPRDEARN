
from django.http import HttpResponse
from django.shortcuts import render
from django.urls import reverse
from django.http import HttpRequest, HttpResponseRedirect
from django.contrib.auth import authenticate, login, logout


def index(request, *args, **kwargs):
    if not request.user.is_authenticated:
        print(request.user)
        return render(request, 'accounts/login.html')

    print(request.user)
    return render(request, 'dashboard/index.html')
