from django.urls import path
from threads import views

app_name = 'threads'
urlpatterns = [
    path('', views.ListPosts.as_view(), name='home'),
    path('threads/new/', views.CreatePost.as_view(), name='new'),
    path('threads/<int:pk>/', views.ListPosts.as_view(), name='home'),
    path('threads/<int:pk>/edit', views.EditPost.as_view(), name='edit'),
    path('threads/<int:pk>/delete/', views.DeletePost.as_view(), name='delete'),
    path('home/register/', views.HomeRegister, name='home_register'),
]
