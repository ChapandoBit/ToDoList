export default () => {
  const container = document.createElement("div");

  container.innerHTML = `
    <nav>
      <a href="/#" class="nav-link">Home</a>
      <a href="/#todo" class="nav-link">Todo</a>
      <a href="/#todoz" class="nav-link">Todoz</a>
      <a href="/#todozo" class="nav-link">Todozo</a>
    </nav>
  `;

  return container.innerHTML;
};
