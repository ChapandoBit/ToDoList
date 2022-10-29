import routes from "./src/js/routes.js";

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
