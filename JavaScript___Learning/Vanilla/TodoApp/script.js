let Todos = []
const form = document.getElementById("addForm");
const filter = document.getElementById("filter");
const input = document.getElementById("item");
const btnSubmit = document.querySelector("input[type='text']");
const ul = document.getElementById("items");
printUI();
if (Todos.length === 0) {
    ul.innerHTML = "<h2 class ='display-2 text-center fw-bold text-danger'>Empty</h2>";
}

form.addEventListener("submit", Submit);
function Submit(e) {
    e.preventDefault()
    Todos.push(input.value);
    input.value = "";
    printUI();
}
function printUI() {
    if (Todos.length != 0) {
        ul.innerHTML = "";
        Todos.forEach((e, i) => {
            const li = document.createElement("li");
            li.classList.add("list-group-item");
            const delBtn = document.createElement("button");
            const updateBtn = document.createElement("button");
            delBtn.classList = "btn btn-danger btn-sm float-right delete";
            updateBtn.classList = "btn btn-success ml-1 btn-sm float-right ";
            delBtn.textContent = " Delete ";
            updateBtn.textContent = " Update ";
            li.textContent = e;
            delBtn.onclick = () => { deleteTodo(i) }
            updateBtn.onclick = () => { updateTodo(i) }
            li.appendChild(updateBtn);
            li.appendChild(delBtn);
            ul.appendChild(li);
        });
    } else {
        ul.innerHTML = "<h2 class ='display-2 text-center fw-bold text-danger'>Empty</h2>";
    }
}
function deleteTodo(i) {
    Todos.splice(i, 1)
    printUI();
}
function updateTodo(i) {
    let update = prompt("Update a Value ", Todos[i]);
    if (update !== null) {
        Todos[i] = update;
        printUI();
    } else {
        printUI();
    }
}


function debounce(fnc, delay) {
    let timer; // store timeout id
    return function (...data) {
        clearTimeout(timer); // reset timer each time user types
        timer = setTimeout(() => {
            fnc(...data);
        }, delay);
    };
}
filter.addEventListener("input", debounce((e) => {
    const listItems = document.querySelectorAll("#items li");
    if (Todos.length != 0) {
        listItems.forEach(li => {
            const text = li.textContent.toLowerCase();
            if (text.includes(e.target.value.toLowerCase())) {
                li.style.display = "block";  // show
            } else {
                li.style.display = "none";  // hide
            }
        });
    } else {
        ul.innerHTML = "<h2 class ='display-2 text-center fw-bold text-danger'>Empty</h2>";
    }

}, 1000));
