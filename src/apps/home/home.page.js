import homeScript from "./script/home.script.js";
import { ChapandoElement } from "../shared/interface/chapando-element.interface.js";
import navbarComponent from "../shared/component/navbar.component.js";

export default () => {
  const main = document.createElement("div");
  const script = homeScript;

  main.innerHTML = `
    ${navbarComponent()}
    <footer>By ChapandoBit</footer>
  `;

  return new ChapandoElement(main, script);
};
