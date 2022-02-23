import sys
# import numpy as np
# import pandas as pd
# from sklearn import ...

for line in sys.stdin:
    word = line


number_count = [0] * 10

for char in word: 
    if char == "z":
        number_count[0] += 1
    if char == "w":
        number_count[2] += 1
    if char == "g":
        number_count[8] += 1
    if char == "x":
        number_count[6] += 1
    if char == "f":
        number_count[5] += 1
    if char == "o":
        number_count[1] +=1
    if char == "s":
        number_count[7] += 1
    if char == "u":
        number_count[4] +=1
    if char == "h":
        number_count[3] +=1 
    if char == "i":
        number_count[9] += 1
        
number_count[7] -= number_count[6]
number_count[5] -= number_count[4]
number_count[3] -= number_count[8]
number_count[9] -= (number_count[8] + number_count[5] + number_count[6])
number_count[1] -= (number_count[0] + number_count[2] + number_count[4])


def counter():
    answer = ""
    for i in range(10): 
        for j in range(number_count[i]):
            answer += str(i)
    return answer

counter()
    
