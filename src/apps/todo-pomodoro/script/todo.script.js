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
    let taskList = [];
    let taskIdCounter = 0;

    //variables edit mode
    let editMode = false;
    let taskToBeEditedId = null;

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
      taskList.push(task);

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
        for (let i = 0; i < taskList.length; i++) {
          if (taskList[i].id === id) {
            taskArrayPos = i;
            break;
          }
        }
        if (e.target.checked) {
          taskList[taskArrayPos].finish();
        } else {
          taskList[taskArrayPos].restart();
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
        taskList = taskList.filter((task) => {
          return task.id !== parseInt(id);
        });
        document.getElementById(`${id}-task-card`).remove();
      });

      taskEl.appendChild(checkboxEl);
      taskEl.appendChild(descriptionEl);
      taskEl.appendChild(deleteBtnEl);

      taskListEl.append(taskEl);

      taskIdCounter++;
    };

    //listeners
    inputTaskEl.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        if (inputTaskEl.value === "" || inputTaskEl.value.startsWith(" "))
          return;
        e.preventDefault();
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

    // For debug purpose
    const DEBUG_CREATE_NEW_TASK = (s) => {
      inputTaskEl.value = s;
      newTask();
    };

    DEBUG_CREATE_NEW_TASK("Build components");
    DEBUG_CREATE_NEW_TASK("CSS padding outside box");
    DEBUG_CREATE_NEW_TASK("Database instance");
    DEBUG_CREATE_NEW_TASK(
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quas laboriosam, doloribus totam nihil ipsa sed nam inventore reiciendis itaque animi, ullam est vel voluptatem, sapiente excepturi cum temporibus architecto!"
    );
    pomodoroScript.main();
  },
  () => {
    pomodoroScript.onEnd();
  }
);
