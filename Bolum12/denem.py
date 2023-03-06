import phonenumbers

from phonenumbers import geocoder

phone_number1 = phonenumbers.parse("+905519433712")

phone_number2 = phonenumbers.parse("+905434553827")

phone_number3 = phonenumbers.parse("+905347341328")

# phone_number4 = phonenumbers.parse("+281234567890")

print("\nPhone Numbers Location\n")

print(geocoder.description_for_number(phone_number1, "tr")) 

print(geocoder.description_for_number(phone_number2, "tr"))

print(geocoder.description_for_number(phone_number3, "tr"))

#print(geocoder.description_for_number(phone_number4, "en"))

