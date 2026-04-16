import os;
os.system("cls");
num  = int(input("Enter Any Number : "));

if num > 0:
    print("Positive");
elif num < 0:
    print("Negative");
else :
    print("is zero");

# match num:
#     case x if x >= 0:
#         print("Positive");
#     case _:
#         print("Negative");