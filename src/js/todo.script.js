import { Task } from "./interface/task.interface.js";

export default () => {
  //elements
  const inputTaskEl = document.getElementById("input-task-description");
  const taskListEl = document.getElementById("container-task-list");

  //variables
  let taskList = [];
  let taskIdCounter = 0;

  //listeners
  inputTaskEl.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      if (inputTaskEl.value === "" || inputTaskEl.value.startsWith(" ")) return;
      e.preventDefault();
      newTask();
    }
  });

  //functions
  const newTask = () => {
    const task = new Task(inputTaskEl.value, taskIdCounter);
    inputTaskEl.value = null;
    taskList.push(task);

    const newTask = document.createElement("div");
    newTask.className = "task-container";
    newTask.id = `${taskIdCounter}-task-container`;
    newTask.innerHTML = `
      <label class="task-label-checkbox">
        <input 
        class="task-completed-checkbox" 
        type="checkbox" 
        id="${taskIdCounter}-task-completed-checkbox"
        ></input>
        <span class="task-checkmark-checkbox"></span>
      </label>
      <span class="task-description">${task.description}</span> 
      <button 
      class="task-delete-btn"
      id="${taskIdCounter}-task-delete-btn"
      >
        <i class="fa-solid fa-trash-can"></i>
      </button>
    `;

    taskListEl.append(newTask);
    let taskCheckbox = document.getElementById(
      `${taskIdCounter}-task-completed-checkbox`
    );
    let taskDeleteBtn = document.getElementById(
      `${taskIdCounter}-task-delete-btn`
    );
    taskCheckbox.addEventListener("change", (e) => {
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
    taskDeleteBtn.addEventListener("click", (e) => {
      const id = e.target.id.split("-")[0];
      taskList = taskList.filter((task) => {
        return task.id !== parseInt(id);
      });
      document.getElementById(`${id}-task-container`).remove();
    });

    console.log(taskList);
    taskIdCounter++;
  };

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

  console.log("inside todo script");
};
