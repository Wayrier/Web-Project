# Mohammed Afana Portfolio

Online-Lebenslauf von Mohammed Afana.

## Inhalt

- Startseite leitet direkt auf `lebenslauf.html` weiter
- responsiver Online-Lebenslauf mit aktueller Praktikumsstation bei der Universität Mannheim
- PDF-Lebenslauf unter `assets/Mohammed_Afana_CV.pdf`

## Technologien

- HTML
- CSS
- JavaScript
- GitHub Pages

## Lokal starten

Das Projekt ist statisch. Du kannst `index.html` direkt im Browser öffnen; es leitet automatisch auf den Online-Lebenslauf weiter.

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
└── assets/
    ├── Mohammed_Afana_CV.pdf
    └── avatar.jpg
```
