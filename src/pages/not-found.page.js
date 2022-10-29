import { ChapandoElement } from "../js/interface/chapando-element.interface.js";
import navbarComponent from "./components/navbar.component.js";

export default () => {
  const head = document.createElement("div");
  const main = document.createElement("div");
  const script = null;

  main.innerHTML = `
    ${navbarComponent()}
    <h1>404 Page not found</h1>
  `;

  return new ChapandoElement(head, main, script);
};
