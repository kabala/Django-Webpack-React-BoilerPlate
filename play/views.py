from django.shortcuts import render
from django.views.generic import ListView
from rest_framework import viewsets
from .serializer import UserSerializer
from .models import Play


class PlayView(ListView):
    template_name = "base.html"
    model = Play

    """
    def get(self, request):
        params = {}
        name = model.objects.get(username)
        address = model.objects.get(address)
        city = model.objects.get(city)

        params['name'] = name
        params['user'] = user
        params['form'] = form

        return render(request,  'base.html', params)
    """


class ViewSet(viewsets.ModelViewSet):
    queryset = Play.objects.all()
    serializer_class = UserSerializer
