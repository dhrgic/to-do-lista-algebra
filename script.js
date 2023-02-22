const inputEl = document.querySelector("#taskInput");
const todoTasksContainer = document.querySelector(".todo__tasks");
const todoTasksEl = document.querySelectorAll(".todo__task");
const errorMessage = document.querySelector(".todo__error-message");
const taskArray =
  localStorage.getItem("taskArray") === null
    ? []
    : JSON.parse(localStorage.getItem("taskArray"));

renderToDoTasks(taskArray);

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
      localStorage.setItem("taskArray", JSON.stringify(taskArray));
      errorMessage.style.display = "none";
    } else {
      errorMessage.style.display = "block";
      inputEl.value = "";
    }
  }
});

function renderToDoTasks(taskArray) {
  todoTasksContainer.innerHTML = "";
  taskArray.forEach((zadatak, index) => {
    const taskEl = document.createElement("div");
    taskEl.className = "todo__task";
    todoTasksContainer.appendChild(taskEl);

    const paragraph = document.createElement("p");
    paragraph.innerText = `${index + 1}. ${zadatak}`;
    taskEl.appendChild(paragraph);
    // index + 1 + ". " + zadatak;

    const btnDelete = document.createElement("a");
    btnDelete.innerHTML = "Delete";
    btnDelete.className = "todo__task-delete";
    taskEl.appendChild(btnDelete);

    btnDelete.addEventListener("click", () => {
      //   let currentText = event.target.previousSibling.innerText;
      //   currentText = currentText.substring(currentText.indexOf(""));
      taskArray.splice(taskArray.indexOf(zadatak), 1);
      localStorage.setItem("taskArray", JSON.stringify(taskArray));
      renderToDoTasks(taskArray);
    });
  });
}

// todoTasksEl.forEach((todoTaskEl) =>
//   todoTaskEl.addEventListener("click", (event) => {
//     console.log(event.target);
//   })
// );
