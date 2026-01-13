from django.shortcuts import render, redirect
from .models import Contact
from .forms import Contact_Form
# Create your views here.

def index (request):
    contacts = Contact.objects.all()
    return render(request , 'index.html', {'contacts': contacts})

def add_contact (request):
    if request.method == 'POST':
        form = Contact_Form(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('home')
    else:
        form = Contact_Form()
        return render(request, 'contact_form.html',{'form': form})