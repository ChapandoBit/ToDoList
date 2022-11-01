import homePage from "../home/home.page.js";
import notFoundPage from "../notfound/notfound.page.js";
import todoPage from "../todo-pomodoro/todo.page.js";
import { Route } from "../shared/interface/route.interface.js";

export default () => {
  const routes = [
    new Route("404", notFoundPage()),
    new Route("", homePage()),
    new Route("todo", todoPage()),
  ];

  return routes;
};
