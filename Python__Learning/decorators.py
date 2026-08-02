import fnc;fnc.clearScreen();

def getName(fnc):
    def wrapper():
        print("Before Running fnc...")
        fnc()
        print("Done with fnc....")
    return wrapper;
    
@getName
def sayName():
    print("My Name is Hasmter")
sayName();