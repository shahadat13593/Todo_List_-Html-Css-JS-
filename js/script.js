"use strict";

// ! Declare Variables

const btnAdd = document.querySelector(".add--box");
const parentBoxNode = document.querySelector(".notes-main-box");
const color = [
  "#d0bfff",
  "#bac8ff",
  "#a5d8ff",
  "#c3fae8",
  "#b2f2bb",
  "#d8f5a2",
  "#ffec99",
  " #ff8787",
];
// ! Node Logic
btnAdd.addEventListener("click", function () {
  const randomColor = Math.trunc(Math.random() * 7) + 1;
  // ? Create box for Each Note
  const boxEl = document.createElement("div");
  boxEl.classList.add("box");
  boxEl.style.backgroundColor = `${color[randomColor]}`;

  // ? Create Note title
  const noteTitleInput = document.createElement("input");
  noteTitleInput.type = "text";
  noteTitleInput.classList.add("box-title");
  noteTitleInput.placeholder = "Title";
  noteTitleInput.style.backgroundColor = `${color[randomColor]}`;

  // ? create box for task
  const taskBox = document.createElement("div");
  taskBox.classList.add("task-box");
  // ? Create task description-box
  const taskDescriptionBox = document.createElement("div");
  taskDescriptionBox.classList.add("box-description-box");

  // ? create task add button
  const btnTask = document.createElement("button");
  btnTask.textContent = "+ New task";
  btnTask.classList.add("add--task");

  // ! Add task
  btnTask.addEventListener("click", function () {
    // ? Checkbox
    const checkBox = document.createElement("input");
    checkBox.type = "checkBox";
    checkBox.classList.add("task-checkmark");
    checkBox.addEventListener("click", function () {
      if (checkBox.checked === true) {
        taskDescription.style.textDecoration = "line-through";
      }
      if (checkBox.checked !== true) {
        taskDescription.style.textDecoration = "none";
      }
    });
    // ? task-description
    const taskDescription = document.createElement("input");
    taskDescription.type = "text";
    taskDescription.placeholder = "Task Name";
    taskDescription.classList.add("task-description");
    taskDescription.style.backgroundColor = `${color[randomColor]}`;
    taskDescriptionBox.appendChild(checkBox);
    taskDescriptionBox.appendChild(taskDescription);
  });
  // ? create task Delete button
  const btnDelete = document.createElement("button");
  btnDelete.textContent = "X";
  btnDelete.classList.add("btn--delete");

  // ! Delete task
  btnDelete.addEventListener("click", function (e) {
    const childNode = e.target;
    const parentNode = childNode.parentElement;
    parentBoxNode.removeChild(parentNode);
  });

  // ? Add elements to Box
  boxEl.appendChild(noteTitleInput);
  taskBox.appendChild(taskDescriptionBox);
  boxEl.appendChild(taskBox);
  boxEl.appendChild(btnTask);
  boxEl.appendChild(btnDelete);

  // ? add box to the parent node
  parentBoxNode.appendChild(boxEl);
});
