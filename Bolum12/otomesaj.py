import pywhatkit

import datetime

import time

library = [
["Ayşegül", 1984, 1, 16, "+905519433712", 0]
]
def celebrate_birthday(name, year, month, day, phone_number, prev):
    now=datetime.datetime.now()

    if now.month == month and now.day == day and now.year>prev:
        pywhatkit.sendwhatmsg_instantly(phone_number, f"İyi ki doğdun {name}! \n{now.year-year}. yaşın kutlu olsun \n", 15, True, 4,)
        library[0][5] = now.year 
        


while True:
    for item in library:
        celebrate_birthday(item[0], item[1], item[2], item[3], item[4], item[5])       
  

  