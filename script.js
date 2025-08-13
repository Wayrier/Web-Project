const $ = (s, el=document) => el.querySelector(s);
const $$ = (s, el=document) => [...el.querySelectorAll(s)];

const state = { tag: 'All', q: '' };

const renderProjects = (items) => {
  const grid = $('#grid');
  const q = state.q.toLowerCase();
  const tag = state.tag;

  const filtered = items.filter(p => {
    const matchesQ = !q || (p.title+p.description+p.tags.join(' ')).toLowerCase().includes(q);
    const matchesTag = tag === 'All' || p.tags.includes(tag);
    return matchesQ && matchesTag;
  });

  grid.innerHTML = filtered.map(p => `
    <article class="card">
      <h3>${p.title}</h3>
      <p>${p.description}</p>
      <div class="badges">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div>
      <div class="actions">
        ${p.demo ? `<a class="btn" target="_blank" rel="noreferrer" href="${p.demo}">Live Demo ↗</a>` : ''}
        ${p.repo ? `<a class="btn ghost" target="_blank" rel="noreferrer" href="${p.repo}">GitHub</a>` : ''}
      </div>
    </article>
  `).join('') || '<p class="subtle">No projects match that filter.</p>';
};

const renderFilters = (items) => {
  const allTags = ['All', ...new Set(items.flatMap(p => p.tags))];
  const filters = $('#filters');
  filters.innerHTML = allTags.map(t=>{
    const active = t === state.tag ? 'style="outline:2px solid var(--primary)"' : '';
    return `<button class="btn" ${active} data-tag="${t}">${t}</button>`;
  }).join('');
  filters.addEventListener('click', e=>{
    const t = e.target.closest('button')?.dataset.tag;
    if(!t) return;
    state.tag = t;
    renderProjects(window.__projects);
    renderFilters(window.__projects);
  }, { once:true });
};

const initTheme = () => {
  const key='theme';
  const root = document.documentElement;
  const toggle = $('#themeToggle');
  const set = (mode) => {
    if(mode==='light') root.classList.add('light'); else root.classList.remove('light');
    toggle.textContent = mode==='light' ? '🌙' : '☀️';
    localStorage.setItem(key, mode);
  };
  set(localStorage.getItem(key) || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark':'light'));
  toggle.addEventListener('click', ()=> set(root.classList.contains('light') ? 'dark' : 'light'));
};

const boot = async () => {
  $('#year').textContent = new Date().getFullYear();
  initTheme();

  try {
    const res = await fetch('projects.json', {cache:'no-store'});
    const data = await res.json();
    window.__projects = data;
    renderProjects(data);
    renderFilters(data);
  } catch (e) {
    $('#grid').innerHTML = '<p class="subtle">Could not load projects.json.</p>';
  }

  $('#search').addEventListener('input', e=>{
    state.q = e.target.value;
    renderProjects(window.__projects || []);
  });
};

boot();
