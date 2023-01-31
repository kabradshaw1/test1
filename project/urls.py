from django.contrib import admin
from django.urls import path, include, re_path
from rest_framework import routers
from user.views import UserView
from menu.views import MenuView
from django.views.generic import TemplateView

router = routers.DefaultRouter()
router.register(r'users', UserView, 'user')
router.register(r'menu', MenuView, basename='menu')

urlpatterns = [
    # path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/', include((router.urls, 'project'), namespace='project')),
    path('app/', include('user.urls'))

]
