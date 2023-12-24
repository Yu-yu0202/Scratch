import requests
import random
import json
import sys
import time

def check(num):
  username = None
  USE_LETTER = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890-_"
  LETTER_LEN = len(USE_LETTER) - 1
  already_used = []
  available = []
  while True:
    if len(available) == num :
      echo = "Processing has finished. Available usernames:" + ",".join(available)
      print(echo)
      break
    username = USE_LETTER[random.randint(0,LETTER_LEN)] + USE_LETTER[random.randint(0,LETTER_LEN)] + USE_LETTER[random.randint(0,LETTER_LEN)] + USE_LETTER[random.randint(0,LETTER_LEN)]
    if username in already_used :
      pass
    else:
      url = 'https://scratch.mit.edu/accounts/check_username/' + username
      r = requests.get(url)
      if r.status_code == 200 :
        response_json = r.json()[0]
        print(response_json)
        if response_json["msg"] == "username exists":
          pass
        elif response_json["msg"] == "bad username" :
          pass
        elif response_json["msg"] == "invalid username":
          pass
        elif response_json["msg"] == "valid username":
          available_username = response_json['username']
          available.append(available_username)
          print("Available usernames:" + available_username)
      else:
        pass
  time.sleep(1)

 
check(10)
  