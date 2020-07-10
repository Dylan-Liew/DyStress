/* To Do List */

/* Creating Variable*/
let form = document.getElementById("todos-form");
let ul = document.getElementById("todos-ul");

/* Add Event Listener */
form.addEventListener("submit", submitForm);
document.addEventListener("change", checkTodo);
document.addEventListener("click", removeTodo);

/* Creating List */
let todos = [];

/* If not empty */
if (!sessionStorage.todos) {
  sessionStorage.setItem("todos", JSON.stringify(todos));
}

todos = JSON.parse(sessionStorage.todos);

function addTodo(text, completed = false) {
  let id = todos.length;
  todos.push({ id, text, completed });
  createTodoListItem(id, text, completed, true);
}

function createTodoListItem(id, text, completed, isNew = false) {
  let li = document.createElement("li");

  // Add an animation for newly created todos
  if (isNew) {
    li.classList.add("new-todo");
  }

  li.innerHTML +=
  `<label>
  <input type="checkbox" class="checkbox" ${completed && "checked"}>
  <span class="todo-text" id="${id}">${text}</span>
  <button type="button" class="remove-todo-btn"></button>
  </label>`;

  ul.appendChild(li);

  li.addEventListener("animationend", function() {
    li.removeAttribute("class");
  });
}

/* Loop and Display all Todo in the sessionStorage */
function displayTodos() {
  for (let todo of todos) {
    createTodoListItem(todo.id, todo.text, todo.completed);
  }
  document.querySelector("#todos-count").textContent = todos.length;
}

function submitForm(event) {
  event.preventDefault();

  let todo = document.getElementById("add-todo-input").value.trim();

  if (todo) {
    addTodo(todo);

    sessionStorage.setItem("todos", JSON.stringify(todos));
    document.querySelector("#todos-count").textContent = todos.length;
    document.getElementById("add-todo-input").value = "";
  }
}

displayTodos();

function checkTodo(event) {
  if (event.target.classList.contains("checkbox")) {
    let itemId = event.target.nextElementSibling.id;
    let todo = todos.find(todo => todo.id == itemId);
    sessionStorage.setItem("todos", JSON.stringify(todos));
  }
}

function removeTodo(event) {
  if (event.target.classList.contains("remove-todo-btn")) {
    let itemId = event.target.previousElementSibling.id;
    let todoIndex = todos.findIndex(todo => todo.id == itemId);

    todos.splice(todoIndex, 1);
    sessionStorage.setItem("todos", JSON.stringify(todos));

    let li = event.target.parentElement.parentElement;
    li.classList.add("remove-todo");

    li.addEventListener("animationend", function() {
      li.parentElement.removeChild(li);
    });

    document.querySelector("#todos-count").textContent = todos.length;
  }
}
