from django.http import JsonResponse
from . import instructions
from .instructions import product_instructions
import requests

def get_instruction(request):
    product_id = request.GET.get("product_id")

    if product_id is None:
        return JsonResponse({"error": "No product_id provided."}, status=400)

    try:
        product_id = int(product_id)
    except ValueError:
        return JsonResponse({"error": "Invalid product_id."}, status=400)

    instruction = next((item for item in product_instructions if item["id"] == product_id), None)

    if instruction:
        return JsonResponse(instruction)
    else:
        return JsonResponse({"error": "Instruction not found."}, status=404)



# chatbot/views.py



def get_instruction_by_name(request):
    product_name = request.GET.get("product_name")

    if not product_name:
        return JsonResponse({"error": "No product_name provided."}, status=400)

    try:
        # fuzzybot'a POST isteği gönder
        response = requests.post(
            "http://localhost:8000/fuzzybot/find_product/",
            json={"message": product_name},
            timeout=3  # Hata durumunda takılı kalmasın diye timeout
        )
    except requests.exceptions.RequestException as e:
        return JsonResponse({"error": f"Fuzzybot service error: {str(e)}"}, status=500)

    if response.status_code != 200:
        return JsonResponse({"error": "Fuzzybot did not return a valid response."}, status=500)

    data = response.json()
    product_id = data.get("product_id")

    if not product_id:
        return JsonResponse({"error": "No matching product found."}, status=404)
    print("Fuzzybot response:", data)
    print("Extracted product_id:", product_id)
    # instructions.py'den ID ile instruction al
    instruction = product_instructions.get(product_id)

    if instruction:
        return JsonResponse(instruction)
    else:
        return JsonResponse({"error": "Instruction not found."}, status=404)
