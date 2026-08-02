import os;
os.system("cls");
# =====================
name = "Hamster"
for char in name:
    print(char)
# H
# a
# m
# s
# t
# e
# r
ls = ["apple","mango","banana"]
for e in ls:
    print(e)
# apple
# mango
# banana
st = {1,2,3,4,5,5,6,7,8,9,2}
for i in st:
    if i%2==0:
        print(i)
# 2
# 4
# 6
# 8
em = [e for e in ls ] 
print(em)
# ['apple', 'mango', 'banana']
