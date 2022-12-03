from django.views.generic import ListView
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin
from django.urls import reverse_lazy
from django.shortcuts import render, redirect, get_object_or_404

from .models import Post
from users.models import CustomUser
from django.contrib.auth.hashers import make_password
# Create your views here.


class ListPosts(ListView):
    model = Post
    template_name = 'home.html'


class CreatePost(LoginRequiredMixin, CreateView):
    model = Post
    template_name = 'newthread.html'
    fields = ['title', 'body']

    def form_valid(self, form):
        form.instance.user = self.request.user
        return super().form_valid(form)


class EditPost(LoginRequiredMixin, UserPassesTestMixin, UpdateView):
    model = Post
    template_name = 'editthread.html'
    fields = ['title', 'body']

    def test_func(self):
        thread = self.get_object()
        return self.request.user == thread.user


class DeletePost(LoginRequiredMixin, UserPassesTestMixin, DeleteView):
    model = Post
    template_name = 'deletethread.html'
    success_url = reverse_lazy('threads:home')

    def test_func(self):
        thread = self.get_object()
        return self.request.user == thread.user


def HomeRegister(request):

    if len(request.POST['password']) < 8:
        return redirect('threads:home')

    if request.POST['password2'] == request.POST['password']:

        user_model = CustomUser(username=request.POST['name'], password=make_password(
            request.POST['password']))
        user_model.save()
    else:
        print("not match")

    return redirect('threads:home')
