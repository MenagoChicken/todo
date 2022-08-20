/***** contstants *****/
const todoList = JSON.parse(localStorage.getItem("localTodoList")) || [];
const todoListHTML = document.querySelector("#todo-list");
const nameInput = document.querySelector("#name");
const newTodoForm = document.querySelector("#new-todo-form");
const userName = localStorage.getItem("username") || "";

/***** logic *****/

/*** usser name -> localc storage ***/
nameInput.value = userName;
nameInput.addEventListener("change", (name) => {
  localStorage.setItem("username", name.target.value);
});

/*** todolist from and to local storage ***/
newTodoForm.addEventListener("submit", (item) => {
  item.preventDefault();

  const todo = {
    content: item.target.elements.content.value,
    category: item.target.elements.category.value,
    done: false,
    creationTime: new Date().getTime(),
  };

  console.log("BEFORE ADDING ELEMENT " + todoList);
  todoList.push(todo);
  localStorage.setItem("localTodoList", JSON.stringify(todoList));
  console.log("AFTER ADDING ELEMENT " + todoList);
  item.target.reset();

  displayTodoList();
});
