const d1 = document.querySelector(".d1");
const d2 = document.querySelector(".d2");
const d3 = document.querySelector(".d3");
const button = document.querySelector("button");


d1.addEventListener("click", (e) => {
    e.stopPropagation();
    alert("d1")
})
d2.addEventListener("click", (e) => {
    e.stopPropagation();
    alert("d2")
})
d3.addEventListener("click", (e) => {
    e.stopPropagation();
    alert("d3")
})
button.addEventListener("click", (e) => {
    e.stopImmediatePropagation();
    alert("Button Click 3")
})
button.addEventListener("click", (e) => {
    e.stopImmediatePropagation();
    alert("Button Click 2")
})