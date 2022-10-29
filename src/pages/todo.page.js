import { ChapandoElement } from "../js/interface/chapando-element.interface.js";
import todoScript from "../js/todo.script.js";
import navbarComponent from "./components/navbar.component.js";

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
    </div>
    <div class="container-todo">
      <input
        type="text"
        id="input-task-description"
        name="input-task-description"
        placeholder="Enter new task"
      />
      <div class="container-task-list" id="container-task-list"></div>
    </div>
    <footer>By ChapandoBit</footer>
  `;

  return new ChapandoElement(main, script);
};
