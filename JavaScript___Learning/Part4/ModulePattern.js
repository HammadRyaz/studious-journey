let ATM = (function () {
    document.querySelector(".body").innerHTML = "<center><h1>Module Pattern</h1></center>"
    let balance = 1000;
    function checkBlance() {
        console.log(balance);
    }
    function setBalance(amount) {
        balance += amount;
    }
    function getBalance(amount) {
        balance -= amount;
    }
    return {
        check: checkBlance,
        get: getBalance,
        set: setBalance
    }
})();
ATM.set(2000);
ATM.get(500)
ATM.check()



