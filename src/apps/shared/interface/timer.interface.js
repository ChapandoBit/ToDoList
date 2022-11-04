export class Timer {
  sec = 0;
  min = 0;

  finished = false;

  tick = () => {
    this.sec -= 1;
    if (this.sec <= 0) {
      this.sec = 59;
      this.min -= 1;

      if (this.sec && this.min === 0) {
        this.finished = true;
      }
    }
  };

  restart = (min, sec) => {
    this.min = min;
    this.sec = sec;
  };

  stringify = () => {
    return `${this.min}:${this.sec < 10 ? `0${this.sec}` : this.sec}`;
  };

  constructor(min, sec) {
    this.min = min;
    this.sec = sec;
  }
}
