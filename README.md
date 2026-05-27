# Mohammed Afana - Online-Lebenslauf

Dieses Repository enthaelt den oeffentlichen Online-Lebenslauf von Mohammed Afana.

Live-Version:
[https://wayrier.github.io/Web-Project/](https://wayrier.github.io/Web-Project/)

Die Startseite `index.html` leitet direkt auf `lebenslauf.html` weiter, damit Besucher sofort den Lebenslauf sehen.

## Inhalt

- moderner, responsiver Online-Lebenslauf
- aktuelle Praktikumsstation bei der Universitaet Mannheim seit dem 21.04.2026
- Kontaktinformationen, Sprachen, Zertifikate, Projekte und technische Kompetenzen
- PDF-Version unter `assets/Mohammed_Afana_CV.pdf`
- GitHub-Pages-Deployment ueber den Branch `gh-pages`

## Dateien

```text
.
|-- index.html
|-- lebenslauf.html
|-- lebenslauf.css
|-- assets/
|   |-- Mohammed_Afana_CV.pdf
|   `-- avatar.jpg
|-- README.md
`-- LICENSE
```

## Lokal ansehen

Das Projekt ist statisch. Du kannst die Datei direkt im Browser oeffnen:

```text
index.html
```

Oder mit einem lokalen Server starten:

```bash
python -m http.server 8080
```

Danach im Browser oeffnen:

```text
http://localhost:8080
```

## Lebenslauf aktualisieren

Wichtige Stellen bei Aenderungen:

- `lebenslauf.html` fuer Inhalte und Struktur
- `lebenslauf.css` fuer Layout und Design
- `assets/Mohammed_Afana_CV.pdf` fuer die herunterladbare PDF-Version
- `index.html` nur fuer die Weiterleitung auf den Online-Lebenslauf

Nach einer Aenderung sollte die Seite lokal in Desktop- und Mobilbreite geprueft werden.

## Deployment

Die Live-Seite wird ueber GitHub Pages bereitgestellt. Der aktuelle Stand sollte auf `main` und `gh-pages` liegen.

```bash
git push origin main
git push origin main:gh-pages
```

GitHub Pages veroeffentlicht die Seite danach unter:

```text
https://wayrier.github.io/Web-Project/
```
