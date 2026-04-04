const inpt = document.querySelector("input");
const addBtn = document.getElementById("add");
const list = document.querySelector(".list");
let todos = [];

addBtn.addEventListener("click", () => {
    const text = inpt.value.trim()
    todos.push(text);
    printUI();
    inpt.value = "";
});

function printUI() {
    list.innerHTML = ""
    todos.forEach((val, index) => {
        console.log(val);
        const div = document.createElement("div");
        div.classList.add("todo")
        div.innerHTML = `
            <p>${val}</p>
            <button onclick="deleteTodo(${index})" >Delete</button> <button onclick="editTodo(${index})">Update</button>
        `;
        list.appendChild(div)
    });
}

function deleteTodo(index) {
    todos.splice(index, 1);
    printUI()
}

function editTodo(index) {
    todos[index] = prompt("Edit Todo", todos[index]);
    printUI()
}


