from fuzzywuzzy import process
from med.products import products_list

def find_product_by_name(query):
    # Fuzzy matching için ürün isimlerini alıyoruz
    product_names = [product["name"] for product in products_list]
    
    # Fuzzy matching ile en iyi eşleşmeyi buluyoruz
    best_match = process.extractOne(query, product_names)
    
    if best_match:
        matched_product_name = best_match[0]
        # En iyi eşleşen ürünü buluyoruz
        matched_product = next(product for product in products_list if product["name"] == matched_product_name)
        return matched_product["id"]
    else:
        return None
