export class Timer {
  sec = 0;
  min = 0;

  finished = false;

  tickSec = () => {
    this.sec -= 1;
    if (this.sec <= 0) {
      this.sec = 59;
      this.min -= 1;

      if (this.sec && this.min === 0) {
        this.finished = true;
      }
    }
  };

  stringify = () => {
    return `${this.min}:${this.sec === 0 ? "00" : this.sec}`;
  };

  constructor(sec, min) {
    this.sec = sec;
    this.min = min;
  }
}
