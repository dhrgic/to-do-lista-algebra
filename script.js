window.addEventListener("load", (ucitavanje) => {
  ucitavanje.preventDefault();
  const formEl = document.querySelector("#myForm");
  const taskInput = document.querySelector("#taskInput");
  const tasksEl = document.querySelector("#tasks");
  let tasksArray = [];

  formEl.addEventListener("keydown", (e) => {
    if (event.key === "Enter") {
      e.preventDefault();
      let todo = taskInput.value;
      if (todo === "") {
        alert("Zadatak prazan. Unesi zadatak");
        return;
      }

      const taskEl = document.createElement("div");
      taskEl.classList.add("todo__task");
      tasksEl.appendChild(taskEl);
      tasksArray.push(todo);
      console.log(tasksArray);

      const taskText = document.createElement("input");
      taskText.setAttribute("type", "text");
      taskText.classList.add("todo__text");
      taskText.value = todo;
      taskText.setAttribute("readonly", "readonly");
      taskEl.appendChild(taskText);

      const buttonDelete = document.createElement("button");
      buttonDelete.classList.add("button__delete");
      buttonDelete.innerText = "Delete";
      taskEl.appendChild(buttonDelete);

      buttonDelete.addEventListener("click", (e) => {
        taskEl.parentNode.removeChild(taskEl);
      });

      formEl.reset();
    }
  });
});
