import os;
os.system("cls");
# =====================
dikt = {
    "name":"Hamster",
    "age":20
    }
for e in dikt: # for index
    print(e)
for e in dikt.values(): # for values
    print(e)
# for Both
for i, e in dikt.items():
    print(i , "-" ,e)