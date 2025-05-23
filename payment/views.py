from django.shortcuts import render
# Create your views here.

def index(request):
    return render(request, 'payment/index.html')

def payment_success(request):
    paid_amount = request.GET.get("paid_amount", '0')
    merchant_uid = request.GET.get("merchant_uid", '0')
    return render(request, 'payment/payment_success.html', {"paid_amount": paid_amount}, {"merchant_uid": merchant_uid})

def payment_failed(request):
    return render(request, 'payment/payment_failed.html')