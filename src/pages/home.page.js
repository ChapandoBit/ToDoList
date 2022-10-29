import homeScript from "../js/home.script.js";
import { ChapandoElement } from "../js/interface/chapando-element.interface.js";
import navbarComponent from "./components/navbar.component.js";

export default () => {
  const main = document.createElement("div");
  const script = homeScript;

  main.innerHTML = `
    ${navbarComponent()}
    <footer>By ChapandoBit</footer>
  `;

  return new ChapandoElement(main, script);
};
