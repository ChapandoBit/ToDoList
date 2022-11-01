import { ChapandoElement } from "../shared/interface/chapando-element.interface.js";
import todoScript from "./script/todo.script.js";
import navbarComponent from "../shared/component/navbar.component.js";
import pomodoroPopupComponent from "./component/pomodoro.component.js";

export default () => {
  const main = document.createElement("div");
  main.className = "general-container";
  const script = todoScript;

  document.title = "Todo App";

  main.innerHTML = `
    ${navbarComponent()}
    <div id="header-todo">
      <h1>TODO</h1>
      <span>v0.1</span>
      <button id="pomodoro-btn">
        pomodoro
        <i class="fa-solid fa-tomato"></i>
      </button>
      <span class="js-invisible" id="pomodoro-counter">${window.pomodoro.timer.stringify()}</span>
    </div>
    <div class="container-todo">
      <input
        type="text"
        id="input-task-description"
        name="input-task-description"
        placeholder="Enter new task"
      />
      ${pomodoroPopupComponent()}
      <div class="container-task-list" id="container-task-list"></div>
    </div>
    <footer>By ChapandoBit</footer>
  `;

  return new ChapandoElement(main, script);
};
