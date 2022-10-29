export default () => {
  const container = document.createElement("div");

  container.innerHTML = `
    <nav>
      <a href="/#" class="nav-link">Home</a>
      <a href="/#todo" class="nav-link">Todo</a>
      <a href="/#todoz" class="nav-link">Todoz</a>
      <a href="/#todozo" class="nav-link">Todozo</a>
    </nav>
    <label class="toggle-color-mode">
      <input type="checkbox" name="toggle-color-mode-checkbox" id="toggle-input">
      <span></span>
      <i class="fa-solid fa-sun" id="toggle-light"></i>
      <i class="fa-solid fa-moon" id="toggle-dark"></i>
    </label>
  `;

  return container.innerHTML;
};
