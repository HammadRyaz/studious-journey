/* =====================
OOPs JavaScript
===================== */

const container = document.querySelector(".container");

let i = 0;

function user(name, side) {
    this.name = name;
    console.log("User :", ++i, this.name);
    this.type = (msg) => {
        const msgDiv = document.createElement("div");
        msgDiv.classList.add("msg", side);
        msgDiv.textContent = msg;
        container.appendChild(msgDiv);
    }
}
const sasuke = new user("sasuke", "right");
const sakura = new user("sakura", "left");

sakura.type("Sasuke 👉👈 ");
sasuke.type("Yes sakura");
sakura.type("I wanna tell u something..");
sakura.type("dont be mad ok?");
sasuke.type("yesss??")
sakura.type("I Like You")
sasuke.type("WTF?? sakura");






