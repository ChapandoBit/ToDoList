export default () => {
  return `
    <nav id="navbar">
      <label class="toggle-color-mode">
        <input type="checkbox" name="toggle-color-mode-checkbox" id="toggle-input">
        <span></span>
        <i class="fa-solid fa-sun" id="toggle-light"></i>
        <i class="fa-solid fa-moon" id="toggle-dark"></i>
      </label>

      <a href="/#" class="nav-link ch-button">
        <i class="fa-solid fa-house"></i>
      </a>
      <a href="/#todo" class="nav-link ch-button">
        <i class="fa-sharp fa-solid fa-list-ul"></i>
      </a>
      <a href="/#todoz" class="nav-link ch-button">
        <i class="fa-solid fa-gamepad"></i>
      </a>
      <a href="/#todozo" class="nav-link ch-button">
        <i class="fa-solid fa-bomb"></i>
      </a>
    </nav>
  `;
};
