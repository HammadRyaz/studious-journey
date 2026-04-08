const tasks = document.querySelectorAll(".task");
const todo = document.getElementById("todo");
const progress = document.getElementById("progress");
const done = document.getElementById("done");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-btn");
const modalBtn = document.querySelector("#modal-btn");
const addNewTaskBtn = document.querySelector("#addNewTask");
const taskTitle = document.querySelector("#taskTitle");
const taskDesc = document.querySelector("#taskDesc");
const column = [todo, progress, done];
let dragElement;

//  Button Events
addNewTaskBtn.addEventListener("click", function () {
    modal.style.display = "flex";
})
closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
})
modalBtn.addEventListener("click", createTask);
document.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        createTask();
    }
});
function createTask() {
    const div = document.createElement("div");
    div.classList.add("task");
    div.setAttribute("draggable", "true");
    div.innerHTML = `<h2>${taskTitle.value}</h2>
                    <p>${taskDesc.value}</p>
                    <button class="delete-btn">Delete</button>`
    modal.style.display = "none";
    todo.appendChild(div);
    taskTitle.value = "";
    taskDesc.value = "";
    div.addEventListener("drag", function (e) {
        dragElement = div;
    })
    div.querySelector(".delete-btn").addEventListener("click", function () {
        div.remove();
    });
}




// Tasks Handling
tasks.forEach(task => {
    task.addEventListener("drag", function (e) {
        dragElement = task;
    })
    task.querySelector(".delete-btn").addEventListener("click", function () {
        task.remove();
    });
});


column.forEach(col => {
    col.addEventListener("dragenter", function (e) {
        e.preventDefault();
        this.classList.add("task-column-active");
    })
    col.addEventListener("dragleave", function (e) {
        e.preventDefault();
        this.classList.remove("task-column-active");
    })
    col.addEventListener("dragover", function (e) {
        e.preventDefault();
    })
    col.addEventListener("drop", function (e) {
        e.preventDefault();
        this.appendChild(dragElement);
        this.classList.remove("task-column-active");
    })
});






