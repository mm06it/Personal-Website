import { SocialLink } from "./types";

/**
 * Zentrale Stelle für alle persönlichen Angaben.
 * Diese Datei zuerst anpassen, um die Seite mit deinen echten Daten zu füllen.
 */
export const site = {
  name: "Maximilian Mayr",
  firstName: "Maximilian",
  role: "Software Developer",
  location: "Österreich",
  email: "mmayr006@gmail.com",
  /** Kurzer Claim für Hero & Meta-Description */
  tagline:
    "Ich baue Software, die ich selbst gerne benutzen würde — von der ersten Zeile Code bis zum Deploy.",
  /** Etwas ausführlicher, für den Hero-Absatz auf der Startseite */
  heroDescription:
    "Software Developer mit einem Faible für moderne Web-Anwendungen. Ich mag sauberen Code, durchdachte Interfaces und Tools, die im Alltag wirklich was bringen — kein unnötiger Schnickschnack.",
  /** Für die Über-mich-Seite */
  aboutText: [
    "Angefangen hat alles damit, dass ich einfach verstehen wollte, wie die Dinge hinter dem Bildschirm eigentlich funktionieren. Mittlerweile ist daraus mehr geworden: Ich liebe es, aus einem unübersichtlichen Problem eine klare Struktur zu bauen — und am Ende steht etwas, das echte Menschen tatsächlich benutzen.",
    "Mein Fokus liegt auf modernen Web-Technologien — von schnellen, durchdachten Frontends bis zu sauber aufgebauten Backends. Code, der nur funktioniert, reicht mir nicht: Er soll auch in einem Jahr noch verständlich sein, wenn ich (oder jemand anderes) ihn wieder aufmacht.",
    "Wenn ich nicht gerade an einem Projekt sitze, probiere ich neue Tools aus, lese mich in offene Standards ein oder schraube an meinem eigenen Setup rum — Details dazu gibt's auf der Setup-Seite.",
  ],
  availability: "Offen für neue Projekte",
  siteUrl: "https://example.com", // Für Produktion anpassen (Vercel-Domain o.ä.)
} as const;

export const socials: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/mm06it",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/dein-profil", // TODO: ersetzen
    icon: "linkedin",
  },
  {
    label: "X / Twitter",
    href: "https://x.com/dein-handle", // TODO: ersetzen oder entfernen
    icon: "x",
  },
  {
    label: "E-Mail",
    href: `mailto:${site.email}`,
    icon: "mail",
  },
];

export const nav = [
  { label: "Start", href: "/" },
  { label: "Projekte", href: "/projects" },
  { label: "Setup", href: "/setup" },
  { label: "Über mich", href: "/about" },
  { label: "Kontakt", href: "/contact" },
] as const;
