const $ = (selector, root = document) => root.querySelector(selector);

const state = {
  tag: "Alle",
  query: ""
};

const escapeHtml = (value = "") =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const projectMatches = (project) => {
  const query = state.query.toLowerCase();
  const haystack = [project.title, project.description, ...(project.tags || [])]
    .join(" ")
    .toLowerCase();
  const matchesQuery = !query || haystack.includes(query);
  const matchesTag = state.tag === "Alle" || project.tags.includes(state.tag);
  return matchesQuery && matchesTag;
};

const renderProjects = (projects) => {
  const grid = $("#grid");
  const filtered = projects.filter(projectMatches);

  if (!filtered.length) {
    grid.innerHTML = '<p class="subtle">Keine Projekte passen zu diesem Filter.</p>';
    return;
  }

  grid.innerHTML = filtered.map((project) => `
    <article class="card">
      <h3>${escapeHtml(project.title)}</h3>
      <p>${escapeHtml(project.description)}</p>
      <ul class="chips" aria-label="Technologien">
        ${project.tags.map((tag) => `<li>${escapeHtml(tag)}</li>`).join("")}
      </ul>
      <div class="actions">
        ${project.demo ? `<a class="btn primary" target="_blank" rel="noreferrer" href="${escapeHtml(project.demo)}">Live ansehen</a>` : ""}
        ${project.repo ? `<a class="btn ghost" target="_blank" rel="noreferrer" href="${escapeHtml(project.repo)}">GitHub</a>` : ""}
      </div>
    </article>
  `).join("");
};

const renderFilters = (projects) => {
  const filters = $("#filters");
  const tags = ["Alle", ...new Set(projects.flatMap((project) => project.tags))];

  filters.innerHTML = tags.map((tag) => `
    <button class="chip ${tag === state.tag ? "active" : ""}" type="button" data-tag="${escapeHtml(tag)}">
      ${escapeHtml(tag)}
    </button>
  `).join("");
};

const initProjectBrowser = async () => {
  try {
    const response = await fetch("projects.json", { cache: "no-store" });
    const projects = await response.json();
    window.projects = projects;

    renderProjects(projects);
    renderFilters(projects);

    $("#filters").addEventListener("click", (event) => {
      const button = event.target.closest("button[data-tag]");
      if (!button) return;
      state.tag = button.dataset.tag;
      renderProjects(projects);
      renderFilters(projects);
    });

    $("#search").addEventListener("input", (event) => {
      state.query = event.target.value;
      renderProjects(projects);
    });
  } catch (error) {
    $("#grid").innerHTML = '<p class="subtle">projects.json konnte nicht geladen werden.</p>';
  }
};

const initTheme = () => {
  const root = document.documentElement;
  const toggle = $("#themeToggle");
  const key = "theme";

  const setTheme = (theme) => {
    root.classList.toggle("light", theme === "light");
    toggle.textContent = theme === "light" ? "Dark" : "Light";
    localStorage.setItem(key, theme);
  };

  const storedTheme = localStorage.getItem(key);
  const preferredTheme = matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  setTheme(storedTheme || preferredTheme);

  toggle.addEventListener("click", () => {
    setTheme(root.classList.contains("light") ? "dark" : "light");
  });
};

const boot = () => {
  $("#year").textContent = new Date().getFullYear();
  initTheme();
  initProjectBrowser();
};

boot();
