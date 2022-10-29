import { ChapandoElement } from "../js/interface/chapando-element.interface.js";
import navbarComponent from "./components/navbar.component.js";

export default () => {
  const main = document.createElement("div");
  const script = null;

  document.title = "Page Not Found";

  main.innerHTML = `
    ${navbarComponent()}
    <h1>404 Page not found</h1>
  `;

  return new ChapandoElement(main, script);
};
