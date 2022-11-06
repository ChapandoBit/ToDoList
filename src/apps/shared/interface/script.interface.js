export class Script {
  onStart;
  main;
  onEnd;

  constructor(onStart, main, onEnd) {
    this.onStart = onStart;
    this.main = main;
    this.onEnd = onEnd;
  }
}
