import { Timer } from "../../shared/interface/timer.interface.js";

export class Pomodoro {
  timer;
  focus;
  shortBreak;
  longBreak;
  activity;
  status;

  constructor() {
    this.focus = 25;
    this.shortBreak = 5;
    this.longBreak = 15;

    this.activity = "focus";
    this.status = "pause";

    this.timer = new Timer(0, this.focus);
  }
}
