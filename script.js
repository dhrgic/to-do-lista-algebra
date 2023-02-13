const inputEl = document.querySelector("#taskInput");
const todoTasksContainer = document.querySelector(".todo__tasks");
const todoTasksEl = document.querySelectorAll(".todo__task");
const errorMessage = document.querySelector(".todo__error-message");
const taskArray = [];

inputEl.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    const task = inputEl.value;

    const elementExists = taskArray.indexOf(task) === -1;

    if (elementExists) {
      taskArray.push(task);
      // console.log(taskArray);

      // const todoElContainer = document.createElement("div");
      // todoElContainer.classList.add("todo__task");
      // todoTasksContainer.appendChild(todoElContainer);

      // const todoTaskText = document.createElement("input");
      // todoTaskText.classList.add("todo__text");
      // todoTaskText.type = "type";
      // todoTaskText.value = taskArray.length + ". " + task;
      // todoTaskText.setAttribute("readonly", "readonly");
      // todoElContainer.appendChild(todoTaskText);

      // const buttonEdit = document.createElement("button");

      // const buttonDelete = document.createElement("button");
      // buttonEdit.classList.add("todo__button-edit");
      // buttonEdit.innerHTML = `<img src="./images/delete_icon.svg" />`;
      // todoElContainer.appendChild(buttonEdit);
      inputEl.value = "";
      renderToDoTasks(taskArray);
      errorMessage.style.display = "none";
    } else {
      errorMessage.style.display = "block";
    }
  }
});

function renderToDoTasks(taskArray) {
  todoTasksContainer.innerHTML = "";
  taskArray.forEach((zadatak, index) => {
    const taskEl = document.createElement("div");
    taskEl.className = "todo__task";
    taskEl.innerText = `${index + 1}. ${zadatak}`;
    // index + 1 + ". " + zadatak;
    todoTasksContainer.appendChild(taskEl);
  });
}

// todoTasksEl.forEach((todoTaskEl) =>
//   todoTaskEl.addEventListener("click", (event) => {
//     console.log(event.target);
//   })
// );
