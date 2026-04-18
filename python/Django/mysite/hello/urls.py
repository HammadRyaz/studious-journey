from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("hamster", views.hamster, name="hamster"),
    path("<str:name>",views.sayName,name="sayName")
]