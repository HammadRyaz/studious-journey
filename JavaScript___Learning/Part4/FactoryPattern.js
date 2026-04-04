function Atm(name) {

    document.querySelector(".body").innerHTML = "<center><h1>Factory Pattern</h1></center>"
    let balance = 1000;

    return {
        checkBlance() {
            console.log(`${name} :  Your Balance is : ${balance}`)
        },
        setBalance(amount) {
            balance += amount;
            console.log(`${name} :  Your New Balance is : ` + balance)

        },
        getBalance(amount) {
            balance -= amount;
            console.log(`${name} :  Your New Balance is : ` + balance)
        }
    }
}
let u1 = Atm("Hamster");
let u2 = Atm("Hinata")
u2.checkBlance()
u1.checkBlance();
u1.setBalance(300);
u1.getBalance(900);
u2.checkBlance()
console.log(u2);





