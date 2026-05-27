# Mohammed Afana Portfolio

Modernes Web-Portfolio mit Projektübersicht, Kontaktlinks und aktualisiertem Lebenslauf.

## Inhalt

- responsive Startseite mit aktuellem Praktikum bei der Universität Mannheim
- filterbare Projektkarten aus `projects.json`
- Light-/Dark-Theme per JavaScript
- Online-Lebenslauf unter `lebenslauf.html`
- PDF-Lebenslauf unter `assets/Mohammed_Afana_CV.pdf`

## Technologien

- HTML
- CSS
- JavaScript
- GitHub Pages

## Lokal starten

Das Projekt ist statisch. Du kannst `index.html` direkt im Browser öffnen.

Wenn `fetch("projects.json")` im Browser blockiert wird, starte einen kleinen lokalen Server:

```bash
python -m http.server 8080
```

Danach im Browser öffnen:

```text
http://localhost:8080
```

## Struktur

```text
.
├── index.html
├── lebenslauf.html
├── lebenslauf.css
├── projects.json
├── script.js
├── styles.css
└── assets/
    ├── Mohammed_Afana_CV.pdf
    └── avatar.jpg
```
