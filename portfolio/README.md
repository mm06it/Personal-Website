# Portfolio — Maximilian Mayr

Persönliche Portfolio-Website, gebaut mit **Next.js (App Router)**, **TypeScript** und **Tailwind CSS**. Alle Inhalte werden lokal in Daten-Dateien gepflegt — keine Datenbank nötig.

## Tech-Stack

- **Next.js 16** (App Router, React 19)
- **TypeScript**
- **Tailwind CSS v4**
- Selbst gehostete **Geist**-Schriftarten (`geist`-Paket, kein externer Font-Request nötig)
- Deployment-optimiert für **Vercel**

## Lokal starten

Voraussetzung: Node.js 20+ und npm.

```bash
npm install
npm run dev
```

Die Seite läuft anschließend unter [http://localhost:3000](http://localhost:3000).

Weitere Skripte:

```bash
npm run build   # Produktions-Build
npm run start   # Produktions-Build lokal ausliefern
npm run lint    # ESLint prüfen
```

## Projektstruktur (Kurzüberblick)

```
src/
  app/                  Seiten (App Router): /, /projects, /setup, /about, /contact
  components/
    layout/             Header, Footer, StatusBar, ThemeToggle, Container …
    sections/            Hero, FeaturedProjects, AboutPreview, CTA (Startseite)
    ui/                  Wiederverwendbare UI-Bausteine (Button, Badge, Icons …)
    ProjectCard.tsx      Projekt-Karte
    ProjectsFilter.tsx   Client-Komponente für Kategorie-Filter
    SetupRow.tsx         Zeile auf der Setup-Seite
    ContactForm.tsx      Kontaktformular (aktuell reine UI, siehe unten)
  lib/data/              ★ Zentrale Inhalte — hier passt du deine Daten an
```

## Inhalte anpassen — diese Dateien sind relevant

Alle Texte, Links und Listen liegen zentral unter `src/lib/data/`. Du musst **keinen Komponenten-Code** anfassen, um Inhalte zu ändern.

| Datei | Inhalt |
| --- | --- |
| `src/lib/data/site.ts` | Name, Rolle, Kurztexte, E-Mail, Social-Links, Navigation |
| `src/lib/data/projects.ts` | Alle Projekte (Titel, Beschreibung, Technologien, Links, Kategorie, `featured`) |
| `src/lib/data/setup.ts` | Setup-Seite: Kategorien (Computer, Monitor, Kamera, Audio, Zubehör, Apps) mit Produkten |
| `src/lib/data/about.ts` | Skills-Gruppen und Timeline für die Über-mich-Seite |
| `src/lib/data/types.ts` | TypeScript-Typen der obigen Daten (nur bei strukturellen Änderungen anfassen) |

### Beispiele

**Neues Projekt hinzufügen** (`src/lib/data/projects.ts`):

```ts
{
  slug: "mein-projekt",
  title: "Mein Projekt",
  description: "Kurze Beschreibung des Projekts.",
  tech: ["Next.js", "TypeScript"],
  category: "web", // "web" | "tool" | "mobile" | "opensource" | "other"
  githubUrl: "https://github.com/dein-username/mein-projekt",
  demoUrl: "https://mein-projekt.vercel.app",
  featured: true, // erscheint zusätzlich auf der Startseite
  year: 2026,
}
```

**Setup-Produkt hinzufügen** (`src/lib/data/setup.ts`): einfach ein neues Objekt in die passende Kategorie einfügen. `isAffiliate: true` blendet automatisch ein "Affiliate-Link"-Label ein und ergänzt `rel="sponsored"` am Link.

**Social-Links / GitHub / LinkedIn ergänzen** (`src/lib/data/site.ts`): Die Platzhalter-URLs (`github.com/dein-username`, `linkedin.com/in/dein-profil`, `x.com/dein-handle`) durch deine echten Profile ersetzen. Einträge, die du nicht brauchst, kannst du aus dem `socials`-Array entfernen.

### Bilder ersetzen

- **Profilbild:** Der Hero-Bereich (`src/components/sections/Hero.tsx`) zeigt aktuell einen Initialen-Platzhalter. Lege dein Foto z. B. unter `public/images/profile.jpg` ab und ersetze den Platzhalter-Block durch ein `<img>`- bzw. `next/image`-Element.
- **Projektbilder:** Trage im jeweiligen Projekt-Objekt in `projects.ts` ein `image: "/images/projects/mein-projekt.png"` ein (Datei vorher unter `public/images/projects/` ablegen). Ohne `image` wird automatisch ein dezenter Kategorie-Platzhalter angezeigt.
- **Setup-Produktbilder:** Analog über `image` im jeweiligen `SetupItem` in `setup.ts`, Dateien unter `public/images/setup/`.

### Kontaktformular

`src/components/ContactForm.tsx` ist aktuell **nur UI** (kein echter Versand), wie in der Aufgabenstellung gewünscht. Für einen echten Versand z. B.:

- eine Next.js **API-Route** (`src/app/api/contact/route.ts`) anlegen, die die Formulardaten per E-Mail-Service (z. B. Resend) verschickt, oder
- einen Formular-Service wie **Formspree** oder **Getform** als `action`-Ziel einbinden.

### Design / Akzentfarbe anpassen

Alle Farben liegen als CSS-Variablen in `src/app/globals.css` (Abschnitt „Design tokens“). Die Akzentfarbe lässt sich zentral über `--accent` (Light Mode) und `--accent` innerhalb von `:root.dark` (Dark Mode) austauschen — der Rest der Seite (Buttons, Links, Fokus-Ring, Statuspunkt) übernimmt die Farbe automatisch.

### SEO

- Globale Metadaten (Title-Template, Description, Open Graph, Twitter Card) liegen in `src/app/layout.tsx` und ziehen ihre Basiswerte aus `site.ts`.
- Jede Unterseite (`projects`, `setup`, `about`, `contact`) exportiert eigene `metadata` in der jeweiligen `page.tsx`.
- `src/app/sitemap.ts` und `src/app/robots.ts` generieren automatisch `sitemap.xml` und `robots.txt`.
- **Wichtig:** `site.siteUrl` in `src/lib/data/site.ts` vor dem Deployment auf deine echte Domain setzen (z. B. `https://max-mayr.vercel.app`), damit Sitemap und Open-Graph-URLs korrekt sind.

## Deployment auf Vercel

1. Repository auf GitHub (o. Ä.) pushen.
2. Auf [vercel.com](https://vercel.com) einloggen und **„Add New… → Project“** wählen.
3. Das Repository importieren — Next.js wird automatisch erkannt, keine weitere Konfiguration nötig.
4. **Deploy** klicken. Vercel baut das Projekt automatisch (`npm run build`) und liefert es aus.
5. Danach `site.siteUrl` in `src/lib/data/site.ts` auf die von Vercel vergebene (oder eigene) Domain setzen, committen und erneut deployen, damit SEO-Metadaten und Sitemap korrekt sind.

Jeder weitere Push auf den verbundenen Branch löst automatisch ein neues Deployment aus.

## Accessibility & Qualität

- Semantisches HTML (`header`, `nav`, `main`, `footer`, Überschriften-Hierarchie)
- Sichtbarer Fokus-Ring auf allen interaktiven Elementen
- „Zum Hauptinhalt springen“-Skip-Link
- Ausreichende Farbkontraste in Light- und Dark-Mode
- `prefers-reduced-motion` wird respektiert
