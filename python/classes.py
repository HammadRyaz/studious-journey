import fnc; fnc.clearScreen();

class Student():
    def __init__(self,name,age):
       self.cName = name;
       self.cAge  =  age;
    def sayName(self):
        print(f"Student : {self.cName} Age : {self.cAge}")
    def change(self,name,age):
        self.cAge = age
        self.cName = name

c =Student("Hamster",21);
c.sayName()
c.change("Rin",20)
c.sayName()