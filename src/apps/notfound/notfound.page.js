import navbarComponent from "../shared/component/navbar.component.js";
import { ChapandoElement } from "../shared/interface/chapando-element.interface.js";
import { notFoundScript } from "./script/notfound.script.js";

export default () => {
  const main = document.createElement("div");
  const script = notFoundScript;

  main.innerHTML = `
    ${navbarComponent()}
    <h1>404 Page not found</h1>
  `;

  return new ChapandoElement(main, script);
};
