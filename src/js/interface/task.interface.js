export class Task {
  id;
  description;
  startDate;
  endDate;
  isCompleted;

  finish = () => {
    this.endDate = new Date(Date.now());
    this.isCompleted = true;
  };
  restart = () => {
    this.endDate = null;
    this.isCompleted = false;
  };
  constructor(description, id) {
    this.id = id;
    this.description = description;
    this.startDate = new Date(Date.now());
    this.endDate = null;
    this.isCompleted = false;
  }
}
