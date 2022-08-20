/***** contstants *****/
const todoList = JSON.parse(localStorage.getItem("localTodoList")) || [];
const todoListHTML = document.querySelector("#todo-list");
const nameInput = document.querySelector("#name");
const newTodoForm = document.querySelector("#new-todo-form");
const userName = localStorage.getItem("username") || "";
const emptyErrorMessage = document.querySelector("#empty-error-message");

/***** logic *****/

/*** usser name -> localc storage ***/
nameInput.value = userName;
nameInput.addEventListener("change", (name) => {
  localStorage.setItem("username", name.target.value);
});

/*** todolist from and to local storage ***/
newTodoForm.addEventListener("submit", (item) => {
  item.preventDefault();

  console.log("content " + item.target.elements.content.value.type);
  console.log("content " + item.target.elements.category.value.type);

  if (
    !item.target.elements.content.value ||
    !item.target.elements.category.value
  ) {
    emptyErrorMessage.style.visibility = "visible";
    console.log(todoList);
  } else {
    emptyErrorMessage.style.visibility = "hidden";
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
  }

  displayTodoList();
});

function displayTodoList() {
  todoListHTML.innerHTML = "";

  todoList.forEach((element) => {
    //   <div class="todo-item">
    //   <label>
    //     <input type="checkbox" />
    //     <span class="bubble business"></span>
    //   </label>
    //   <div class="todo-content">
    //     <input type="text" value="Create todo app." readonly />
    //   </div>
    //   <div class="actions">
    //     <button class="edit">Edit</button>
    //     <button class="delete">Delete</button>
    //   </div>
    // </div>
    const divTodoItem = document.createElement("div");
    divTodoItem.classList.add("todo-item");
    const label = document.createElement("label");
    const input = document.createElement("input");
    const span = document.createElement("span");
    const content = document.createElement("div");
    const actions = document.createElement("div");
    const editBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");
  });
}
