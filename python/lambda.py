import fnc ; fnc.clearScreen();
fruits = [
    {"name":"mango"},
    {"name":"banana"},
    {"name":"apple"}
]

fruits.sort(key=lambda fruit:fruit['name'])
print(fruits);