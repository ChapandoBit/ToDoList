import { Script } from "../../shared/interface/script.interface.js";
import { Task } from "../interface/task.interface.js";
import { pomodoroScript } from "./pomodoro.script.js";

export const todoScript = new Script(
  () => {
    pomodoroScript.onStart();
  },
  () => {
    //elements
    const inputTaskEl = document.querySelector("#input-task-description");
    const taskListEl = document.querySelector("#task-list-container");

    //variables
    let taskIdCounter = window.todo.length;

    //variables edit mode
    let editMode = false;
    let taskToBeEditedId = null;

    const convertTaskToHTML = (task) => {
      const taskEl = document.createElement("div");
      taskEl.className = "task-card";
      taskEl.id = `${taskIdCounter}-task-card`;

      const checkboxEl = document.createElement("label");
      checkboxEl.className = "task-label-checkbox";
      checkboxEl.innerHTML = `
      <input 
      class="task-completed-checkbox" 
      type="checkbox" 
      id="${taskIdCounter}-task-completed-checkbox"
      ></input>
      <span class="task-checkmark-checkbox"></span>
      <i class="fa-solid fa-square-check fa-lg"></i>
      <i class="fa-solid fa-square fa-lg"></i>
    `;
      checkboxEl.addEventListener("change", (e) => {
        const id = parseInt(e.target.id.split("-")[0]);
        let taskArrayPos;
        for (let i = 0; i < window.todo.length; i++) {
          if (window.todo[i].id === id) {
            taskArrayPos = i;
            break;
          }
        }
        if (e.target.checked) {
          window.todo[taskArrayPos].finish();
        } else {
          window.todo[taskArrayPos].restart();
        }
      });

      const descriptionEl = document.createElement("div");
      descriptionEl.id = `${taskIdCounter}-task-description`;
      descriptionEl.className = "task-description";
      descriptionEl.innerHTML = `
        ${task.description}
    `;
      descriptionEl.addEventListener("click", (e) => {
        const taskId = parseInt(e.target.id.split("-")[0]);
        if (taskToBeEditedId !== taskId) {
          taskToBeEditedId = taskId;
          enterEditMode();
        }
      });

      const deleteBtnEl = document.createElement("button");
      deleteBtnEl.className = "task-delete-btn";
      deleteBtnEl.id = `${taskIdCounter}-task-delete-btn`;
      deleteBtnEl.innerHTML = `
      <i class="fa-solid fa-trash-can"></i>
    `;
      deleteBtnEl.addEventListener("click", (e) => {
        const id = e.target.id.split("-")[0];
        window.todo = window.todo.filter((task) => {
          return task.id !== parseInt(id);
        });
        document.getElementById(`${id}-task-card`).remove();
      });

      taskEl.append(checkboxEl);
      taskEl.append(descriptionEl);
      taskEl.append(deleteBtnEl);

      taskIdCounter++;

      return taskEl;
    };

    const refreshTaskListEl = () => {
      const listEl = document.createElement("div");
      window.todo.forEach((task) => {
        listEl.append(convertTaskToHTML(task));
      });
      taskListEl.innerHTML = listEl.innerHTML;
    };

    const enterEditMode = () => {
      const taskText = document.getElementById(
        `${taskToBeEditedId}-task-description`
      );
      document.getElementById(`${taskToBeEditedId}-task-card`).className =
        "task-card editing";

      inputTaskEl.value = taskText.innerText;
      taskText.className = "task-description js-editing";

      inputTaskEl.focus();
      editMode = true;
    };

    const finishEditMode = () => {
      const taskText = document.getElementById(
        `${taskToBeEditedId}-task-description`
      );

      document.getElementById(`${taskToBeEditedId}-task-card`).className =
        "task-card";

      taskText.className = "task-description";
      taskText.innerText = inputTaskEl.value;

      inputTaskEl.value = null;
      editMode = false;
      taskToBeEditedId = null;
    };

    const cancelEditMode = () => {
      document.getElementById(
        `${taskToBeEditedId}-task-description`
      ).className = "task-description";

      document.getElementById(`${taskToBeEditedId}-task-card`).className =
        "task-card";

      inputTaskEl.value = null;
      editMode = false;
      taskToBeEditedId = null;
    };

    //functions
    const newTask = () => {
      const task = new Task(inputTaskEl.value, taskIdCounter);
      inputTaskEl.value = null;
      window.todo.push(task);

      taskListEl.append(convertTaskToHTML(task));
    };

    //listeners
    inputTaskEl.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        if (inputTaskEl.value === "" || inputTaskEl.value.startsWith(" "))
          return;
        if (editMode) {
          finishEditMode();
        } else {
          newTask();
        }
      }
    });
    inputTaskEl.addEventListener("focusout", (e) => {
      e.preventDefault();
      if (editMode) {
        cancelEditMode();
      }
    });

    refreshTaskListEl();
    pomodoroScript.main();
  },
  () => {
    pomodoroScript.onEnd();
  }
);
