// SELECTORS
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
//todoList
//filterOption

//EVENT LISTENERS
todoButton.addEventListener("click", addTodo);

//FUNCTIONS

function addTodo(event) {
  event.preventDefault();

  //todo DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //creating LI
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  //append to list
  todoList.appendChild(todoDiv);

  //clear input
  todoInput.value = "";
}
