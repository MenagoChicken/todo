/***** contstants *****/
let todoList = JSON.parse(localStorage.getItem("localTodoList")) || [];
const todoListHTML = document.querySelector("#todo-list");
const nameInput = document.querySelector("#name");
const newTodoForm = document.querySelector("#new-todo-form");
const userName = localStorage.getItem("username") || "";
const emptyErrorMessage = document.querySelector("#empty-error-message");

/*** display on start ***/
displayTodoList();

/********** logic **********/

/*** user name -> local storage ***/
nameInput.value = userName;
nameInput.addEventListener("change", (name) => {
  localStorage.setItem("username", name.target.value);
});

/*** todolist from and to local storage ***/
newTodoForm.addEventListener("submit", (item) => {
  item.preventDefault();

  console.log("content " + item.target.elements.content.value.type);
  console.log("content " + item.target.elements.category.value.type);

  /*** did user type anything and checked category  ***/
  if (
    !item.target.elements.content.value ||
    !item.target.elements.category.value
  ) {
    emptyErrorMessage.style.visibility = "visible";
    console.log(todoList);
  } else {
    emptyErrorMessage.style.visibility = "hidden";

    /*** create new todo ***/
    const todo = {
      content: item.target.elements.content.value,
      category: item.target.elements.category.value,
      done: false,
      creationTime: new Date().getTime(),
    };

    /*** add new todo ***/
    todoList.push(todo);
    /*** save to local storage ***/
    localStorage.setItem("localTodoList", JSON.stringify(todoList));

    item.target.reset();
  }

  /*** display list ***/
  displayTodoList();
});

/*** display list function ***/
function displayTodoList() {
  todoListHTML.innerHTML = "";

  /*** create todo in web page ***/
  todoList.forEach((element) => {
    const todoItem = document.createElement("div");
    const label = document.createElement("label");
    const input = document.createElement("input");
    const span = document.createElement("span");
    const content = document.createElement("div");
    const actions = document.createElement("div");
    const editBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");

    todoItem.classList.add("todo-item");

    if (element.done) {
      todoItem.classList.add("done");
    }

    input.type = "checkbox";
    input.checked = element.done;
    span.classList.add("bubble");

    if (element.category === "personal") {
      span.classList.add("personal");
    } else {
      span.classList.add("business");
    }

    content.classList.add("todo-content");
    actions.classList.add("actions");
    editBtn.classList.add("edit");
    deleteBtn.classList.add("delete");

    content.innerHTML = `<input type="text" value="${element.content}" readonly />`;
    editBtn.textContent = "Edit";
    deleteBtn.textContent = "Delete";

    label.appendChild(input);
    label.appendChild(span);
    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);
    todoItem.appendChild(label);
    todoItem.appendChild(content);
    todoItem.appendChild(actions);

    todoListHTML.appendChild(todoItem);

    /*** checked funcionality -> save state  ***/
    input.addEventListener("click", (e) => {
      console.log(todoList);
      element.done = e.target.checked;
      localStorage.setItem("localTodoList", JSON.stringify(todoList));

      if (element.done) {
        todoItem.classList.add("done");
      }

      displayTodoList();
    });

    /*** edit button funcionalty -> save state ***/
    editBtn.addEventListener("click", (edit) => {
      const input = content.querySelector("input");
      input.removeAttribute("readonly");
      input.focus();

      input.addEventListener("blur", (e) => {
        input.setAttribute("readonly", true);
        element.content = e.target.value;
        localStorage.setItem("localTodoList", JSON.stringify(todoList));

        displayTodoList();
      });
    });

    /*** delete button funcionalty -> save state ***/
    deleteBtn.addEventListener("click", (e) => {
      console.log("delete clicked");
      console.log(todoList);

      todoList = todoList.filter((t) => t !== element);

      console.log(todoList);

      localStorage.setItem("localTodoList", JSON.stringify(todoList));
      displayTodoList();
    });
  });
}
