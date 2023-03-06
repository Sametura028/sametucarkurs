
import pyautogui
import time
time.sleep(0)

def mesaj():
    pyautogui.write("sus lan")
    pyautogui.press('enter')

while True :
  mesaj()
time.sleep(0)

# import pyautogui

# import time

# counter = 0

# def mesaj():
#     global counter
#     counter += 1
#     pyautogui.write("Tamam" + str(counter))
#     pyautogui.press('enter')

# while True:
#     mesaj()
#     time.sleep(0)