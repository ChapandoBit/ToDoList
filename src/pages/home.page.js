import { ChapandoElement } from "../js/interface/chapando-element.interface.js";
import navbarComponent from "./components/navbar.component.js";

export default () => {
  const head = document.createElement("div");
  const main = document.createElement("div");
  const script = null;

  head.innerHTML = `
    <title>ChapandoBit</title> 
  `;

  main.innerHTML = `
    ${navbarComponent()}
    <footer>By ChapandoBit</footer>
  `;

  return new ChapandoElement(head, main, script);
};
