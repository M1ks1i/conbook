from .models import Contact
from django import forms
from  django.forms.widgets import FileInput

class Contact_Form(forms.ModelForm):
    class Meta:
        model = Contact
        fields = ['first_name','last_name', 'phone_num', 'email', 'foto']
        widgets = {
            'foto' : FileInput()
        }
    # def __init__(self, *args, **kwargs):
    #     super().__init__(*args, **kwargs)
    #     self.fields['foto'].widget.clear_checkbox_label = ''
    #     self.fields['foto'].widget.can_clear = False