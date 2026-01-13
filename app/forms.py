from .models import Contact
from django import forms

class Contact_Form(forms.ModelForm):
    class Meta:
        model = Contact
        fields = ['first_name','last_name', 'phone_num', 'email', 'foto']