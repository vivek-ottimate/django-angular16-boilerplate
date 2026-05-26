from django.http import JsonResponse
from .models import Ping


def hello(request):
    Ping.objects.create()
    return JsonResponse({
        "message": "Hello from Django!",
        "ping_count": Ping.objects.count(),
    })
