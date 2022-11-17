from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import *
import random

# Create your views here.
def index(request):
    return render(request, 'index.html')

def API(request, inspo):
    #print('inspo is equal to ' + inspo)
    specific_category = Category.objects.get(name=inspo)
    #print('category: ' + str(specific_category))
    random_id = random.randint(0, Inspo.objects.filter(category=specific_category).count() - 1)
    print('random id: ' + str(random_id))
    #print('queryset: ' + str(Inspo.objects.filter(category=specific_category).values()))
    return JsonResponse(Inspo.objects.filter(category=specific_category)[random_id].serialize(), safe=False)
