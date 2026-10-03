# AufbauKunst

Deutsche Website für Zimmerpatenschaften in Odesa. Responsive Architekturübersicht mit 16 klickbaren Räumen, echten Projektfotos, Raumgalerien und Texten über Akademie, Initiative und Meckenheim hilft.

## Lokal starten

Node.js 22.13+ und npm erforderlich.

```sh
npm ci
npm run db:generate
npm run build
node --import ./scripts/sites-env.mjs ./node_modules/wrangler/bin/wrangler.js d1 execute DB --local --config dist/server/wrangler.json --persist-to .wrangler/state --file drizzle/0000_milky_jubilee.sql
npm run dev
```

Den tatsächlichen generierten Dateinamen in drizzle/ verwenden; bestehende Migrationen nicht erneut ausführen.

## Inhalte pflegen

- `data/rooms.json`: Zimmernummern, bestätigte Fotos, Beträge, Patenschaftsstatus, Bauphase und Updates. Die derzeitigen 01–16 sind Entwurfskennungen, keine bestätigten Zimmernummern. Fotozuordnung und Kategorien sind vorläufig.
- `public/images/`: echte Dokumentationsfotos und schematische Illustration.
- `app/page.tsx`: deutsche Texte und Oberfläche.
- `app/globals.css`: Design und responsive Darstellung.
- `app/api/rooms/route.ts`: Zimmerdaten-Endpunkt.
- `app/api/interesse/route.ts`: validierte Testanfragen, dauerhaft in D1 gespeichert. Keine E-Mails, Zahlungen oder automatischen Reservierungen.

Zimmerbilder können als weitere Objekte in `images` ergänzt werden. `phase`, `updates` und `patron` steuern Fortschrittsanzeige, Berichte und freigegebene Namensnennung. Die öffentliche Ansicht zeigt ausschließlich vorhandene Bilder. Vor dem produktiven Start müssen Statusdarstellung, Baufortschritt, bestätigte Zimmerdaten und Verantwortlichkeiten abgestimmt werden.

## Veröffentlichung

Private Sites-Vorschau mit Cloudflare Worker und D1. Hosting-ID steht in `.openai/hosting.json`. Eigene Domain später möglich. Für einen öffentlichen Start: echte Zimmerdaten und Beträge bestätigen, Betreiber- und Datenschutzangaben ergänzen, Zahlungs-/Anfrageablauf verbindlich festlegen und Testdatensätze entfernen.

## Quellen

Akademie: https://odma.edu.ua/wp-content/uploads/zvit-onma-za-2025-rik-2.pdf
Partner: https://meckenheim-hilft.org/ueber-uns-2
Fotos: vom Projekt bereitgestellte Dokumentation. Veröffentlichungserlaubnis vor öffentlichem Start klären.

Die generierte Zeichnung ist schematisch und kein maßstäblicher Plan des realen Wohnheims.

## Verifikation dieser Version

- TypeScript-Prüfung und Worker-Build erfolgreich.
- Zimmer-Endpunkt liefert 16 Räume; alle als unbestätigt gekennzeichnet.
- Fehlende Angaben werden zurückgewiesen (400); fremde Origin zurückgewiesen (403).
- Gültige Testanfrage gespeichert (201), anschließend aus der lokalen Datenbank gelesen und gelöscht.
- Bilddateien und eindeutige Raumkennungen geprüft.
- Visuelle Browserprüfung und WebMCP-Laufzeitprüfung wegen Ausfall der Browsersteuerung nicht möglich.
- Private Veröffentlichung wurde durch automatische Freigabeprüfung blockiert. Kein GitHub-Repository angelegt.

Weitere Bilder in `images` in gewünschter Reihenfolge eintragen: das aktuelle Foto an Position 0, frühere Zustände dahinter. Alle bleiben in der Galerie erreichbar. Fortschrittsberichte haben `date` und `text`, freigegebene Namensnennung `patron`. `phase`: ausgang, wiederaufbau oder fertig. `status`: frei, reserviert oder vergeben. `verified: true` erst nach bestätigter Zuordnung und Betrag setzen.
