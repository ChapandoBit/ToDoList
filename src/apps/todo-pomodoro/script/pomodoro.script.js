export default () => {
  const pomodoroContainer = document.querySelector("#pomodoro-container");
  const pomodoroCounterText = document.querySelector("#pomodoro-counter");

  let isPomoWindowActive = false;
  let pomodoroInterval;

  document.querySelector("#pomodoro-btn").addEventListener("click", (e) => {
    e.preventDefault();

    if (isPomoWindowActive) {
      pomodoroContainer.className = "";
    } else {
      pomodoroContainer.className = "js-invisible";
    }
    isPomoWindowActive = !isPomoWindowActive;
  });

  document
    .querySelector("#pomodoro-pause-resume-btn")
    .addEventListener("click", (e) => {
      e.preventDefault();

      if (window.pomodoro.status === "pause") {
        pomodoroInterval = setInterval((e) => {
          window.pomodoro.timer.tickSec();
          pomodoroCounterText.innerText = window.pomodoro.timer.stringify();
        }, 1000);
        window.pomodoro.status = "resume";
        pomodoroCounterText.className = "";
      } else if (window.pomodoro.status === "resume") {
        clearInterval(pomodoroInterval);
        window.pomodoro.status = "pause";
      }
      console.log(window.pomodoro.status);
    });

  document
    .querySelector("#pomodoro-save-btn")
    .addEventListener("click", (e) => {
      window.pomodoro.focus = parseInt(
        document.querySelector("#pomodoro-focus-input").value
      );
      window.pomodoro.shortBreak = parseInt(
        document.querySelector("#pomodoro-shortbreak-input").value
      );
      window.pomodoro.longBreak = parseInt(
        document.querySelector("#pomodoro-longbreak-input").value
      );
    });

  document
    .querySelector("#pomodoro-reset-btn")
    .addEventListener("click", (e) => {
      window.pomodoro.focus = document.querySelector(
        "#pomodoro-focus-input"
      ).value = 25;
      window.pomodoro.shortBreak = document.querySelector(
        "#pomodoro-shortbreak-input"
      ).value = 5;
      window.pomodoro.longBreak = document.querySelector(
        "#pomodoro-longbreak-input"
      ).value = 15;
    });
};
