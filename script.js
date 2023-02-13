const inputEl = document.querySelector("#taskInput");
const todoTasksContainer = document.querySelector(".todo__tasks");
const todoTasksEl = document.querySelectorAll(".todo__task");
const taskArray = [];

inputEl.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    const task = inputEl.value;

    taskArray.push(task);
    console.log(taskArray);

    const todoElContainer = document.createElement("div");
    todoElContainer.classList.add("todo__task");
    todoTasksContainer.appendChild(todoElContainer);

    const todoTaskText = document.createElement("input");
    todoTaskText.classList.add("todo__text");
    todoTaskText.type = "type";
    todoTaskText.value = taskArray.length + ". " + task;
    todoTaskText.setAttribute("readonly", "readonly");
    todoElContainer.appendChild(todoTaskText);

    inputEl.value = "";
  }
});

todoTasksEl.forEach((todoTaskEl) =>
  todoTaskEl.addEventListener("click", (event) => {
    console.log(event.target);
  })
);
