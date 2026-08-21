import { Project } from "./types";

/**
 * Alle Projekte werden hier gepflegt.
 * `featured: true` zeigt ein Projekt zusätzlich auf der Startseite.
 * `image` ist optional — ohne Bild wird ein generierter Platzhalter gezeigt.
 */
export const projects: Project[] = [
  {
    slug: "personal-website",
    title: "Personal Website",
    description:
      "Diese Seite hier — mein digitales Zuhause. Next.js, Tailwind und ein Terminal-Hero, weil eine normale Vorstellungsseite einfach zu langweilig war.",
    summary:
      "App Router, komplett in TypeScript, Dark Mode inklusive, ein zentrales Design-Token-System und automatisches Deployment über Vercel — Inhalte pflege ich über einfache Daten-Dateien statt über ein CMS.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "web",
    githubUrl: "https://github.com/mm06it/Personal-Website",
    demoUrl: "https://personal-website-ecru-seven-62.vercel.app",
    featured: true,
    year: 2026,
  },
  {
    slug: "bankist-webapp",
    title: "Bankist",
    description:
      "Eine simulierte Banking-App direkt im Browser: einloggen, Geld zwischen Konten überweisen, Bewegungen sortieren, einen Kredit beantragen — komplett in Vanilla JavaScript, ganz ohne Framework.",
    summary:
      "Bewusst ohne Libraries gebaut, um DOM-Handling und Array-Methoden wirklich zu verstehen: Login-Logik, dynamisch berechnete Kontoauszüge, Transfers zwischen Konten, ein Sortier-Toggle und ein automatischer Logout-Timer bei Inaktivität.",
    tech: ["JavaScript", "HTML", "CSS"],
    category: "web",
    githubUrl: "https://github.com/mm06it/Bank-WebApp",
    featured: true,
    year: 2026,
  },
];

export const projectCategories: { value: Project["category"] | "all"; label: string }[] = [
  { value: "all", label: "Alle" },
  { value: "web", label: "Web" },
];
