import lectures from "./data/data.js";
const inputEl = document.querySelector(".input__field");
const gridEl = document.querySelector(".grid");

function render() {
  lectures.forEach((lecture) => {
    console.log(lecture);
    const gridItemEl = document.createElement("div");
    gridItemEl.className = "grid__item";
    gridEl.appendChild(gridItemEl);

    const itemNameEl = document.createElement("p");
    itemNameEl.className = "grid__lecture";
    gridItemEl.appendChild(itemNameEl);
    itemNameEl.innerText = `${lecture.lectureName}`;

    const itemLengthEl = document.createElement("p");
    itemNameEl.className = "grid__length";
    gridItemEl.appendChild(itemLengthEl);
    itemLengthEl.innerText = `${lecture.lectureLength}`;

    inputEl.addEventListener("keyup", (event) => {
      gridEl.innerHTML = "";
      let inputValue = inputEl.value;
    });
  });
}

render();
