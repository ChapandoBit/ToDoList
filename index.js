import { Pomodoro } from "./src/apps/todo-pomodoro/interface/pomodoro.interface.js";
import routes from "./src/apps/router/routes.js";

/*Globals*/
window.pomodoro = new Pomodoro();

const main = document.querySelector("#root");

const checkStarterRoute = () => {
  main.innerHTML = "";

  let validatedRoute = routes().filter((route) => {
    return route.name === window.location.hash.slice(1);
  })[0];
  if (typeof validatedRoute === "undefined") validatedRoute = routes()[0];

  console.log("Current Route: ", validatedRoute);

  main.appendChild(validatedRoute.pageObject.main);
  if (typeof validatedRoute.pageObject.script !== "object") {
    validatedRoute.pageObject.script();
  }
};

const activateRouteChangeHandler = () => {
  window.addEventListener("hashchange", () => {
    main.innerHTML = "";
    let validatedRoute = routes().filter((route) => {
      return route.name === window.location.hash.slice(1);
    })[0];
    if (typeof validatedRoute === "undefined") validatedRoute = routes()[0];

    console.log("Current Route: ", validatedRoute);

    main.appendChild(validatedRoute.pageObject.main);
    if (typeof validatedRoute.pageObject.script !== "object") {
      validatedRoute.pageObject.script();
    }
  });
};

window.addEventListener("load", () => {
  checkStarterRoute();
  activateRouteChangeHandler();
});
