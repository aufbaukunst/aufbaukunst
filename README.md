# AufbauKunst

Website-Entwurf für den Wiederaufbau kultureller Räume. Das erste Projekt beginnt im Studierendenwohnheim der Musikakademie Odesa.

## Öffentliche Vorschau

https://aufbaukunst.github.io/aufbaukunst/

Die Vorschau wird über GitHub Pages aus dem Hauptzweig `main`, Verzeichnis `/`, veröffentlicht. Sie enthält die animierte Architekturzeichnung, 16 anklickbare Zimmer, Projektfotos und deutsche Informationstexte. Zimmernummern, Fotozuordnung, Verfügbarkeit und Beträge bleiben vorläufig. Anfragen und Zahlungen sind deaktiviert; es wird keine Datenbank benötigt.

## Vorschau neu erstellen

Node.js 22.13+ und npm verwenden:

```sh
npm ci
node scripts/build-pages.mjs
```

Danach die geänderten Quelldateien sowie `index.html`, `assets/`, `images/`, `favicon.svg` und `.nojekyll` auf `main` hochladen. GitHub Pages veröffentlicht die fertigen Dateien automatisch. Zusätzliche Hosting-Konten sind nicht erforderlich.

## Inhalte

- `app/page.tsx`: Texte und Zimmeransichten.
- `app/globals.css`: Typografie, Hintergründe und Animationen.
- `components/site/dormitory-drawing.tsx`: nach Fotografien vereinfachte Wohnheimzeichnung.
- `data/rooms.json`: Zimmerbilder, Status und Fortschritt.
- `public/images/`: originale Website-Bilddateien.
- `pages-main.tsx`, `pages-entry.html`, `pages.vite.config.ts`: statische Vorschau.

Die vorhandenen API-Dateien gehören zur früheren Serverversion und werden auf GitHub Pages nicht ausgeführt. Vor einem späteren operativen Spendenstart müssen bestätigte Projektdaten, Kontakt, Impressum, Datenschutz und Anfrageablauf ergänzt werden.
