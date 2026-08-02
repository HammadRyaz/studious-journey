from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
def index(request):
    return render(request,"hello/index.html")
def hamster(request):
    return HttpResponse("Hamster Syntax")
def sayName(request,name):
    # return HttpResponse(f"Hello {name.capitalize()}")
    return render(request, "hello/name.html",{
        "name" : name.capitalize()
    })
