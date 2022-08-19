/***** contstants *****/
const todoList = JSON.parse(localStorage.getItem("todoList")) || [];
const nameInput = document.querySelector("#name");
const newTodoForm = document.querySelector("#new-todo-form");
const userName = localStorage.getItem("username") || "";

/***** logic *****/

nameInput.value = userName;
nameInput.addEventListener("change", (name) => {
  localStorage.setItem("username", name.target.value);
});
