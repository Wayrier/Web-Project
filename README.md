# Web Portfolio

[![Pages](https://github.com/Wayrier/Web-Project/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/Wayrier/Web-Project/actions/workflows/pages/pages-build-deployment)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

**Live:** https://wayrier.github.io/Web-Project/

A fast, responsive portfolio built with **HTML • CSS • JavaScript**.  
Projects are loaded from `projects.json` and rendered with search + tag filters. Includes a light/dark theme toggle.

---

## ✨ Features
- Responsive layout with sticky header & smooth scrolling
- Dark/Light theme toggle (saved in localStorage)
- Search + tag filters for projects
- Data-driven via `projects.json` (no build step, easy to edit)

---

## 🗂 Structure
index.html # layout & meta (hero, projects, skills, contact)
styles.css # styles + light/dark theme + scroll offset for sticky header
script.js # fetch projects.json, search/filter, theme toggle, smooth scroll
projects.json # projects (title, description, tags, repo/demo links)
assets/ # images (e.g., avatar.jpg, CV pdf)



---

## 🚀 Getting Started (local)
- Double-click `index.html`, or  
- Use VS Code “Live Server” for auto-reload.

---

## 🛠 Customize
- **Avatar:** replace `assets/avatar.jpg` with your photo (same filename).
- **Contact:** edit the hero buttons + footer links in `index.html`.
  ```html
  <!-- hero -->
  <a class="btn" href="mailto:wayrier@gmail.com">Email me</a>
  <a class="btn ghost" href="https://github.com/Wayrier" target="_blank" rel="noreferrer">GitHub</a>
  <a class="btn" href="assets/Mohammed_Afana_CV.pdf" target="_blank" rel="noreferrer">Download CV</a>

  <!-- footer -->
  <a href="mailto:wayrier@gmail.com">Email</a>
  <a href="https://linkedin.com/in/afana-mohammed" target="_blank" rel="noreferrer">LinkedIn</a>
  <a href="https://github.com/Wayrier" target="_blank" rel="noreferrer">GitHub</a>
Projects: update projects.json:


[
  {
    "title": "Java Banking App",
    "description": "CLI app: accounts, deposits/withdrawals, transfers, JSON persistence, JUnit tests.",
    "tags": ["Java", "Maven", "CLI", "JSON"],
    "repo": "https://github.com/Wayrier/java-banking-app",
    "demo": ""
  }
]

🌐 Deploy (GitHub Pages)
Repo Settings → Pages → Source: main / (root)

Push a commit; wait for pages build and deployment to pass

Your site is live at https://wayrier.github.io/Web-Project/

Pages caching: if changes don’t appear, hard refresh (Ctrl/Cmd+Shift+R) or append ?v=2 to the URL.

📫 Contact
Email: wayrier@gmail.com

LinkedIn: https://linkedin.com/in/afana-mohammed

GitHub: https://github.com/Wayrier

📄 License
Code is released under the MIT License (see LICENSE).
Content (text, images, CV) © Mohammed Afana. Please do not reuse without permission.
