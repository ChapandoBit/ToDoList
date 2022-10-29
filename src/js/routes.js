import homePage from "../pages/home.page.js";
import notFoundPage from "../pages/not-found.page.js";
import todoPage from "../pages/todo.page.js";
import { Route } from "./interface/route.interface.js";

export default () => {
  const routes = [
    new Route("404", notFoundPage()),
    new Route("", homePage()),
    new Route("todo", todoPage()),
  ];

  return routes;
};
