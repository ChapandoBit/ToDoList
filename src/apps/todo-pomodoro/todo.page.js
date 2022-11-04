import navbarComponent from "../shared/component/navbar.component.js";
import { ChapandoElement } from "../shared/interface/chapando-element.interface.js";
import pomodoroPopupComponent from "./component/pomodoro.component.js";
import todoScript from "./script/todo.script.js";

export default () => {
  const main = document.createElement("div");
  main.id = "todo-container";
  const script = todoScript;

  document.title = "Todo App";

  main.innerHTML = `
    ${navbarComponent()}
    <div id="content-container">
      <div id="header-todo">
        <h1>TODO</h1>
        <span>v0.1</span>
        <button id="pomodoro-btn">
          pomodoro
          <i class="fa-solid fa-clock"></i>
        </button>
        <span id="pomodoro-counter">${window.pomodoro.stringify()}</span>
      </div>
      <div id="body-todo">
        <input
          type="text"
          id="input-task-description"
          name="input-task-description"
          placeholder="Enter new task"
        />
        ${pomodoroPopupComponent()}
        <div id="task-list-container"></div>
      </div>
      <footer>By ChapandoBit</footer>
    </div>
  `;

  return new ChapandoElement(main, script);
};
