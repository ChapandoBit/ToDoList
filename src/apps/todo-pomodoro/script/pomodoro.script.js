export default () => {
  const pomodoroBtn = document.querySelector("#pomodoro-btn");
  const pomodoroSaveBtn = document.querySelector("#pomodoro-save-btn");
  const pomodoroPauseResumeBtn = document.querySelector(
    "#pomodoro-pause-resume-btn"
  );
  const pomodoroContainer = document.querySelector("#pomodoro-container");
  const pomodoroCounterText = document.querySelector("#pomodoro-counter");

  let isPomoWindowActive = false;
  let pomodoroInterval;

  pomodoroBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (isPomoWindowActive) {
      pomodoroContainer.className = "";
    } else {
      pomodoroContainer.className = "js-invisible";
    }
    isPomoWindowActive = !isPomoWindowActive;
  });

  pomodoroPauseResumeBtn.addEventListener("click", (e) => {
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
};
