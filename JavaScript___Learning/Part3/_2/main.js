/*  // ==========Execution Context
function abcd(){
var a= 10;
.
.
.
..
}
*/

/* // =========== Lexical & Dynamic Scoping
let a =10;
function abcd(){
    console.log(a)
};
function efg(){
    let a = 20;
    abcd();
}
efg(); // Lexical where define
       // Dynamic where to call */

/* // ========== Clouser
// closures hote hai functions jo ki kisi parent fnc ke andar ho aur andar waala function return ho raha ho, and retyurning fnc youse kare, parent function ka koi varible

function abcd() {
    let a = 1;
    return function () {
        console.log(a)
        a++;
    }
}
let fnc = abcd();
fnc();  // 1
fnc();  // 2
let fnc2 = abcd();
fnc2()  // 1
fnc2()  // 2
fnc2()  // 3


 */

/* //  (this) keyword
console.log(this)
    (function abc() {
        console.log(this)
    })() */

// Practices With (this) Keyword



const form = document.getElementById('userForm');
const userName = document.getElementById('userName');
const userRole = document.getElementById('userRole');
