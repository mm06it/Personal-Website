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
    "Ich baue schnelle, durchdachte Software — vom ersten Commit bis zum Deploy.",
  /** Etwas ausführlicher, für den Hero-Absatz auf der Startseite */
  heroDescription:
    "Ich bin Software Developer mit Fokus auf moderne Web-Anwendungen. Ich mag klaren Code, durchdachte Interfaces und Tools, die im Alltag wirklich helfen.",
  /** Für die Über-mich-Seite */
  aboutText: [
    "Ich beschäftige mich mit Softwareentwicklung, weil mich die Kombination aus Logik und Gestaltung fasziniert: Ein Problem in klare Struktur zu übersetzen und daraus etwas zu bauen, das andere Menschen wirklich benutzen.",
    "Mein Fokus liegt auf modernen Web-Technologien — von performanten Frontends bis zu sauber strukturierten Backends. Mir ist wichtig, dass Code nicht nur funktioniert, sondern auch verständlich und wartbar bleibt.",
    "Außerhalb der Arbeit beschäftige ich mich mit neuen Tools, offenen Standards und optimiere gerne mein eigenes Setup — mehr dazu auf der Setup-Seite.",
  ],
  availability: "Offen für neue Projekte",
  siteUrl: "https://example.com", // Für Produktion anpassen (Vercel-Domain o.ä.)
} as const;

export const socials: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/dein-username", // TODO: ersetzen
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
