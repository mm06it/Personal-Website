import { Project } from "./types";

/**
 * Alle Projekte werden hier gepflegt.
 * `featured: true` zeigt ein Projekt zusätzlich auf der Startseite.
 * `image` ist optional — ohne Bild wird ein generierter Platzhalter gezeigt.
 */
export const projects: Project[] = [
  {
    slug: "portfolio-website",
    title: "Persönliches Portfolio",
    description:
      "Diese Website: ein minimalistisches Portfolio mit Next.js, TypeScript und Tailwind CSS, gepflegt über lokale Daten-Dateien.",
    summary:
      "Aufgebaut mit dem App Router, vollständig typisiert, mit Dark Mode, zentralem Design-Token-System und Deployment auf Vercel.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "web",
    githubUrl: "https://github.com/dein-username/portfolio",
    demoUrl: "https://personal-website-ecru-seven-62.vercel.app/",
    featured: true,
    year: 2026,
  },
  {
    slug: "task-flow",
    title: "TaskFlow",
    description:
      "Eine schlanke Aufgabenverwaltung mit Tastatur-Shortcuts, lokalem Speicher und einer minimalistischen Oberfläche.",
    summary:
      "Fokus auf Geschwindigkeit: alle Aktionen sind per Tastatur erreichbar, Zustände werden lokal persistiert.",
    tech: ["React", "TypeScript", "Zustand"],
    category: "web",
    githubUrl: "https://github.com/dein-username/task-flow",
    demoUrl: "",
    featured: true,
    year: 2025,
  },
    
  {
    slug: "recipe-radar",
    title: "Recipe Radar",
    description:
      "Web-App zum Speichern und Filtern eigener Rezepte nach Zutaten, Zubereitungszeit und Kategorie.",
    tech: ["Next.js", "PostgreSQL", "Prisma"],
    category: "web",
    githubUrl: "https://github.com/dein-username/recipe-radar",
    demoUrl: "https://example.com",
    year: 2024,
  },
  {
    slug: "open-changelog",
    title: "open-changelog",
    description:
      "Open-Source-Bibliothek, die Changelogs automatisch aus Conventional Commits generiert.",
    tech: ["TypeScript", "Node.js", "Open Source"],
    category: "opensource",
    githubUrl: "https://github.com/dein-username/open-changelog",
    year: 2024,
  },
  {
    slug: "pulse-habit-tracker",
    title: "Pulse",
    description:
      "Mobile-first Habit-Tracker mit Streak-Visualisierung und Wochenrückblick.",
    tech: ["React Native", "TypeScript"],
    category: "mobile",
    githubUrl: "https://github.com/dein-username/pulse",
    year: 2023,
  },
];

export const projectCategories: { value: Project["category"] | "all"; label: string }[] = [
  { value: "all", label: "Alle" },
  { value: "web", label: "Web" },
  { value: "tool", label: "Tools" },
  { value: "mobile", label: "Mobile" },
  { value: "opensource", label: "Open Source" },
  { value: "other", label: "Sonstiges" },
];
