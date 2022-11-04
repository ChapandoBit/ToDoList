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
          window.pomodoro.tick();
          pomodoroCounterText.innerText = window.pomodoro.stringify();
        }, 1000);
        window.pomodoro.status = "resume";
      } else if (window.pomodoro.status === "resume") {
        clearInterval(pomodoroInterval);
        window.pomodoro.status = "pause";
      }
      console.log(window.pomodoro.status);
    });

  document
    .querySelector("#pomodoro-save-btn")
    .addEventListener("click", (e) => {
      window.pomodoro.activitiesDuration[0] = parseInt(
        document.querySelector("#pomodoro-focus-input").value
      );
      window.pomodoro.activitiesDuration[1] = parseInt(
        document.querySelector("#pomodoro-shortbreak-input").value
      );
      window.pomodoro.activitiesDuration[2] = parseInt(
        document.querySelector("#pomodoro-longbreak-input").value
      );
    });

  document
    .querySelector("#pomodoro-reset-btn")
    .addEventListener("click", (e) => {
      window.pomodoro.resetDurations();

      document.querySelector("#pomodoro-focus-input").value =
        window.pomodoro.activitiesDuration[0];
      document.querySelector("#pomodoro-shortbreak-input").value =
        window.pomodoro.activitiesDuration[1];
      document.querySelector("#pomodoro-longbreak-input").value =
        window.pomodoro.activitiesDuration[2];
    });

  document
    .querySelector("#pomodoro-next-btn")
    .addEventListener("click", (e) => {
      window.pomodoro.nextActivity();

      pomodoroCounterText.innerText = window.pomodoro.stringify();
    });
};
