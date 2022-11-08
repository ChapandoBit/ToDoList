export default () => {
  return `
    <div id="pomodoro-container" class="js-invisible">
      <div class="cb-container-titled pomodoro-group-settings">
        <h3>Pomodoro Settings</h3>
        <label class="cb-input-fused">
            <span>Focus Timer</span>
            <input id="pomodoro-focus-input" type="number" value="${window.pomodoro.activitiesDuration[0]}"></input>
        </label>
        <label class="cb-input-fused">
            <span>Short Break</span>
            <input id="pomodoro-shortbreak-input" type="number" value="${window.pomodoro.activitiesDuration[1]}"></input>
        </label>
        <label class="cb-input-fused">
            <span>Long Break</span>
            <input id="pomodoro-longbreak-input" type="number" value="${window.pomodoro.activitiesDuration[2]}"></input>
        </label>
        <div class="group-button">
          <button id="pomodoro-pause-resume-btn" class="js-${window.pomodoro.status} btn-clear btn-settings">
              pause/resume
              <i class="fa-sharp fa-solid fa-circle-pause"></i>
              <i class="fa-sharp fa-solid fa-circle-play"></i>
          </button>
          <button id="pomodoro-next-btn" class="btn-clear btn-settings">next</button>
          <button id="pomodoro-save-btn" class="btn-clear btn-settings">save</button>
          <button id="pomodoro-reset-btn" class="btn-clear btn-settings">reset</button>
        </div>
      </div>
    </div>
  `;
};
