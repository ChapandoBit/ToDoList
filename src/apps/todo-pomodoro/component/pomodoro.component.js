export default () => {
  return `
    <div id ="pomodoro-container" class="js-invisible">
      <label>
          focus
          <input id="pomodoro-focus-input" type="number" value="${window.pomodoro.activitiesDuration[0]}"></input>
      </label>
      <label>
          shortBreak
          <input id="pomodoro-shortbreak-input" type="number" value="${window.pomodoro.activitiesDuration[1]}"></input>
      </label>
      <label>
          longBreak
          <input id="pomodoro-longbreak-input" type="number" value="${window.pomodoro.activitiesDuration[2]}"></input>
      </label>
      <button id="pomodoro-pause-resume-btn" class="js-${window.pomodoro.status}">
          pause/resume
          <i class="fa-sharp fa-solid fa-circle-pause"></i>
          <i class="fa-sharp fa-solid fa-circle-play"></i>
      </button>
      <button id="pomodoro-next-btn">next</button>
      <button id="pomodoro-save-btn">save</button>
      <button id="pomodoro-reset-btn">reset</button>
    </div>
  `;
};
