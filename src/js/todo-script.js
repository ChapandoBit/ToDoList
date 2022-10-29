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

    const htmlToInsert = `
        <div 
        class="task-container" 
        id="${taskIdCounter}-${taskList.length - 1}-task-container"
        >
        
          <label class="task-label-checkbox">

            <input 
            class="task-completed-checkbox" 
            type="checkbox" 
            id="${taskIdCounter}-${taskList.length - 1}-task-completed-checkbox"
            ></input>

            <span class="task-checkmark-checkbox"></span>

          </label>

          <span class="task-description">${task.description}</span> 

          <button 
          class="task-delete-btn"
          id="${taskIdCounter}-${taskList.length - 1}-task-delete-btn"
          ><i class="fa-solid fa-trash-can"></i></button>

          <br/>
        </div>
    `;

    taskListEl.insertAdjacentHTML("beforeend", htmlToInsert);
    let taskCheckbox = document.getElementById(
      `${taskIdCounter}-${taskList.length - 1}-task-completed-checkbox`
    );
    let taskDeleteBtn = document.getElementById(
      `${taskIdCounter}-${taskList.length - 1}-task-delete-btn`
    );
    taskCheckbox.addEventListener("change", (e) => {
      const id = e.target.id.split("-")[0];
      const arrayPos = e.target.id.split("-")[1];
      if (e.target.checked) {
        taskList[arrayPos].finish();
      } else {
        taskList[arrayPos].restart();
      }
    });
    taskDeleteBtn.addEventListener("click", (e) => {
      const id = e.target.id.split("-")[0];
      const arrayPos = e.target.id.split("-")[1];
      taskList = taskList.filter((task) => {
        return task.id !== parseInt(id);
      });
      document.getElementById(`${id}-${arrayPos}-task-container`).remove();
    });

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
