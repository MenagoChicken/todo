/***** contstants *****/
const todoList = JSON.parse(localStorage.getItem("todoList")) || [];
const nameInput = document.querySelector("#name");
const newTodoForm = document.querySelector("#new-todo-form");
const userName = localStorage.getItem("username") || "";

/***** logic *****/

/*** usser name -> localc storage ***/
nameInput.value = userName;
nameInput.addEventListener("change", (name) => {
  localStorage.setItem("username", name.target.value);
});

console.log(newTodoForm);

/*** todolist from and to local storage ***/
newTodoForm.addEventListener("submit", (list) => {
  list.preventDefault();

  const todo = {
    content: list.target.elements.content.value,
    category: list.target.elements.category.value,
    done: false,
    creationTime: new Date().getTime(),
  };

  list.push(todo);
  localStorage.setItem("todoList", JSON.stringify(todo));
});
