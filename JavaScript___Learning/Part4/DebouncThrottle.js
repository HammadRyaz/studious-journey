const body = document.querySelector(".body");

body.innerHTML = `
<center><h3>Debounce & Throttle </h2></center>
Input :  
<input type="text" placeholder="Debounce & Throttle" size=40>
`;

/* ========================
-------Debouncing---------
======================= */

const inp = document.querySelector("input[type='text']");

function debounce(fn, delay) {
    let T_ime;
    return function (...input) {
        clearTimeout(T_ime);
        T_ime = setTimeout(() => {
            fn(...input)
        }, delay)
    }
}

inp.addEventListener("input", debounce(function (e) {
    console.log(e.target.value);
}, 1000))


/* ========================
-------Throttling---------
======================= */
function throttle(fn, delay) {
    let timer = 0
    return function (...input) {
        let now = Date.now();
        if (now - timer >= delay) {
            timer = now;
            fn(...input)
        }
    }

}


inp.addEventListener("input", throttle((e) => {
    console.log(e.target.value);
}, 3000))