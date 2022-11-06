import { Script } from "../../shared/interface/script.interface.js";

export const notFoundScript = new Script(
  () => {},
  () => {
    document.title = "Page Not Found";
  },
  () => {}
);
