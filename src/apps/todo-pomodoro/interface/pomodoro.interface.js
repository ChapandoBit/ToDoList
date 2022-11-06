const activities = {
  0: "Focus",
  1: "Short Break",
  2: "Long Break",
};

const activitiesSequence = [0, 1, 0, 1, 0, 1, 0, 2];

const defaultActivitiesDuration = [25, 5, 15];

export class Pomodoro {
  activityIterator;
  activitiesDuration;
  status;
  interval;
  intervalCallback;
  timeRemaining;

  nextActivity = () => {
    this.activityIterator++;

    if (this.activityIterator >= activitiesSequence.length) {
      this.activityIterator = 0;
    }
    this.timer.restart(this.getCurrentActivityDuration(), 0);
  };
  getCurrentActivity = () => {
    return activities[activitiesSequence[this.activityIterator]];
  };
  getCurrentActivityDuration = () => {
    return this.activitiesDuration[activitiesSequence[this.activityIterator]];
  };

  changeActivitiesDuration = (focus, shortBreak, longBreak) => {
    this.activitiesDuration = [focus, shortBreak, longBreak];
  };

  resetDurations = () => {
    this.activitiesDuration = defaultActivitiesDuration;
  };

  tick = () => {
    if (this.timeRemaining <= 0) {
      this.nextActivity();
    }
  };

  stringify = () => {
    return `${this.timeRemaining.getMinutes()}:${this.timeRemaining.getSeconds()}`;
  };

  constructor() {
    this.activityIterator = 0;
    this.status = "pause";

    this.activitiesDuration = defaultActivitiesDuration;
    this.timeRemaining = new Date(this.getCurrentActivityDuration() * 60000);
    this.timeoutCallback = () => {};
  }
}
