from django.shortcuts import render, redirect, get_object_or_404
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

def edit_contact(request, pk):
    contact = get_object_or_404(Contact, pk = pk)
    if request.method == 'POST':
        form = Contact_Form(request.POST, request.FILES, instance = contact)
        if form.is_valid():
            form.save()
            return redirect('home')
    else:
        form = Contact_Form(instance = contact)
    return render(request, 'contact_form.html', {'form': form})

def delete_contact(request, pk):
    contact = get_object_or_404(Contact, pk = pk)
    contact.delete()
    return redirect('home')