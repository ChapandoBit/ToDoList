class Task {
  id;
  description;
  startDate;
  endDate;
  isCompleted;

  finish = () => {
    this.endDate = new Date(Date.now());
    this.isCompleted = true;
  };
  restart = () => {
    this.endDate = null;
    this.isCompleted = false;
  };
  constructor(description, id) {
    this.id = id;
    this.description = description;
    this.startDate = new Date(Date.now());
    this.endDate = null;
    this.isCompleted = false;
  }
}

//elements
const inputTaskEl = document.querySelector("#input-task-description");
const taskListEl = document.querySelector("#container-task-list");

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
  //inputTaskEl.value = null;
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
          >X</button>

          <br/>
        </div>
    `;

  taskListEl.insertAdjacentHTML("beforeend", htmlToInsert);
  taskCheckbox = document.getElementById(
    `${taskIdCounter}-${taskList.length - 1}-task-completed-checkbox`
  );
  taskDeleteBtn = document.getElementById(
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



newTask();
newTask();
newTask();
newTask();
newTask();
newTask();
newTask();