export default () => {
  return `
    <div id ="pomodoro-container" class="js-invisible">
      <label>
          focus
          <input id="pomodoro-focus-input" type="number" value="${window.pomodoro.focus}"></input>
      </label>
      <br/>
      <label>
          shortBreak
          <input id="pomodoro-shortbreak-input" type="number" value="${window.pomodoro.shortBreak}"></input>
      </label>
      <br/>
      <label>
          longBreak
          <input id="pomodoro-longbreak-input" type="number" value="${window.pomodoro.longBreak}"></input>
      </label>
      <br/>
      <button id="pomodoro-pause-resume-btn" class="js-${window.pomodoro.status}">
          pause/resume
          <i class="fa-sharp fa-solid fa-circle-pause"></i>
          <i class="fa-sharp fa-solid fa-circle-play"></i>
      </button>
      <br/>
      <button id="pomodoro-save-btn">save</button>
      <br/>
      <button id="pomodoro-reset-btn">reset</button>
    </div>
  `;
};
