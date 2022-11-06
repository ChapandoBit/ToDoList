import routes from "./src/apps/router/routes.js";
import { Pomodoro } from "./src/apps/todo-pomodoro/interface/pomodoro.interface.js";

/*Globals*/
window.pomodoro = new Pomodoro();

const main = document.querySelector("#root");
let currentRoute = null;

const checkStarterRoute = () => {
  main.innerHTML = "";

  let validatedRoute = routes().filter((route) => {
    return route.name === window.location.hash.slice(1);
  })[0];
  if (typeof validatedRoute === "undefined") validatedRoute = routes()[0];

  console.log("Current Route: ", validatedRoute);

  validatedRoute.pageObject.script.onStart();
  main.appendChild(validatedRoute.pageObject.main);
  validatedRoute.pageObject.script.main();
  currentRoute = validatedRoute;
};

const activateRouteChangeHandler = () => {
  window.addEventListener("hashchange", () => {
    if (currentRoute !== null) {
      currentRoute.script?.onEnd();
      currentRoute = null;
    }
    main.innerHTML = "";

    let validatedRoute = routes().filter((route) => {
      return route.name === window.location.hash.slice(1);
    })[0];
    if (typeof validatedRoute === "undefined") validatedRoute = routes()[0];

    console.log("Current Route: ", validatedRoute);

    validatedRoute.pageObject.script.onStart();
    main.appendChild(validatedRoute.pageObject.main);
    validatedRoute.pageObject.script.main();
    currentRoute = validatedRoute;
  });
};

window.addEventListener("load", () => {
  checkStarterRoute();
  activateRouteChangeHandler();
});
