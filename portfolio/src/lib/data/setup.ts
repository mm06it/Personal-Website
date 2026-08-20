import { SetupCategory, SetupItem } from "./types";

/**
 * Setup-Seite: Hardware, Software und Arbeitsplatz.
 * `isAffiliate: true` blendet einen deutlich sichtbaren "Affiliate"-Hinweis ein.
 * Produkte ohne echten Link können mit url: "" gepflegt werden (Link wird dann ausgeblendet).
 */
export const setupCategories: { key: SetupCategory; label: string; items: SetupItem[] }[] = [
  {
    key: "computer",
    label: "Computer",
    items: [
      {
        name: "MacBook Pro 14\" (M-Serie)",
        description:
          "Mein Hauptgerät für Entwicklung, Design und alles dazwischen — leise, schnell, guter Akku.",
        url: "https://www.apple.com/macbook-pro/",
        isAffiliate: false,
      },
      {
        name: "Mechanische Tastatur",
        description:
          "Kompaktes 75%-Layout mit taktilen Switches für lange Coding-Sessions.",
        url: "https://example.com/produkt/tastatur",
        isAffiliate: true,
      },
    ],
  },
  {
    key: "monitor",
    label: "Monitor",
    items: [
      {
        name: "27\" 4K Monitor",
        description: "Scharfe Darstellung für Code-Reviews und Design-Arbeit im Duo-Setup.",
        url: "https://example.com/produkt/monitor",
        isAffiliate: true,
      },
    ],
  },
  {
    key: "kamera",
    label: "Kamera",
    items: [
      {
        name: "Webcam 1080p",
        description: "Für Calls und gelegentliche Aufnahmen — unkompliziert und zuverlässig.",
        url: "https://example.com/produkt/webcam",
        isAffiliate: true,
      },
    ],
  },
  {
    key: "audio",
    label: "Audio",
    items: [
      {
        name: "Over-Ear Kopfhörer mit ANC",
        description: "Für fokussiertes Arbeiten und Musik zwischendurch.",
        url: "https://example.com/produkt/kopfhoerer",
        isAffiliate: true,
      },
      {
        name: "USB-Mikrofon",
        description: "Klare Sprachqualität für Calls und Aufnahmen.",
        url: "https://example.com/produkt/mikrofon",
        isAffiliate: true,
      },
    ],
  },
  {
    key: "zubehoer",
    label: "Zubehör",
    items: [
      {
        name: "Höhenverstellbarer Schreibtisch",
        description: "Wechsel zwischen Sitzen und Stehen während der Arbeit.",
        url: "https://example.com/produkt/schreibtisch",
        isAffiliate: true,
      },
      {
        name: "USB-C Dock",
        description: "Ein Kabel für Monitor, Netzwerk, Peripherie und Ladeleistung.",
        url: "https://example.com/produkt/dock",
        isAffiliate: true,
      },
    ],
  },
  {
    key: "apps",
    label: "Apps & Tools",
    items: [
      {
        name: "Visual Studio Code",
        description: "Mein täglicher Editor, mit schlankem Extension-Setup.",
        url: "https://code.visualstudio.com/",
        isAffiliate: false,
      },
      {
        name: "Raycast",
        description: "Schnellstart, Snippets und Workflow-Automatisierung.",
        url: "https://www.raycast.com/",
        isAffiliate: false,
      },
      {
        name: "Linear",
        description: "Aufgaben- und Projektverwaltung für eigene Vorhaben.",
        url: "https://linear.app/",
        isAffiliate: false,
      },
    ],
  },
];
