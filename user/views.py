from django.shortcuts import render
from rest_framework import viewsets
from user.serializer import UserSerializer
from user.models import User
from django.views import View
from django.http import HttpResponse, HttpResponseNotFound
import os

def index(request):
  return render(request, 'index.html')
  
class UserView(viewsets.ModelViewSet):
  serializer_class = UserSerializer
  queryset = User.objects.all()

class Assets(View):

    def get(self, _request, filename):
        path = os.path.join(os.path.dirname(__file__), 'static', filename)

        if os.path.isfile(path):
            with open(path, 'rb') as file:
                return HttpResponse(file.read(), content_type='application/javascript')
        else:
            return HttpResponseNotFound()