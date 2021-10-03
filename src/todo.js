const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoContent = document.querySelector("#todo-form input");

let todos = [];

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}


function deleteTodo(event) {
    const deleteTarget = event.target.parentElement;
    deleteTarget.remove();
    todos = todos.filter((toDo) => toDo.id !== parseInt(deleteTarget.id));
    saveTodos();
}

function memoTodo(todoObj) {
    const li = document.createElement("li");
    li.id = todoObj.id
    const span = document.createElement("span");
    span.innerText = todoObj.text;
    const deleteBt = document.createElement("button");
    deleteBt.innerText = "X";
    deleteBt.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(deleteBt);
    todoList.appendChild(li);
}

function todoInput(todo) {
    todo.preventDefault();
    const todoValue = todoContent.value;
    todoContent.value = "";
    const todoObj = {
        text: todoValue,
        id: Date.now(),
    };

    todos.push(todoObj);
    memoTodo(todoObj);
    saveTodos();
}

todoForm.addEventListener("submit", todoInput);

const savedTodos = localStorage.getItem("todos");

if (savedTodos !== null) {
    const parsedTodo = JSON.parse(savedTodos);
    todos = parsedTodo;
    parsedTodo.forEach(memoTodo);
}

