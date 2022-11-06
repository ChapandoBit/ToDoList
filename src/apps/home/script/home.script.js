import { Script } from "../../shared/interface/script.interface.js";

export const homeScript = new Script(
  () => {},
  () => {
    document.title = "ChapandoBit";
  },
  () => {}
);
