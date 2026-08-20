import { SkillGroup, TimelineItem } from "./types";

export const skillGroups: SkillGroup[] = [
  {
    label: "Sprachen",
    skills: ["TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    label: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Accessibility"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "REST / APIs", "PostgreSQL", "Prisma"],
  },
  {
    label: "Tools",
    skills: ["Git", "Docker", "Vercel", "CI/CD"],
  },
];

/**
 * Optionale Timeline des Werdegangs. Array einfach leer lassen ([]),
 * um den Abschnitt auf der Über-mich-Seite auszublenden.
 */
export const timeline: TimelineItem[] = [
  {
    year: "2026",
    title: "Software Developer",
    place: "Aktuelle Station",
    description:
      "Entwicklung moderner Web-Anwendungen mit Fokus auf Frontend-Architektur und Developer Experience.",
  },
  {
    year: "2024",
    title: "Junior Developer",
    place: "Vorherige Station",
    description:
      "Erste professionelle Erfahrung in agilen Teams, Aufbau von Kenntnissen in React und Next.js.",
  },
  {
    year: "2023",
    title: "Ausbildung / Studium",
    place: "Bildungseinrichtung",
    description:
      "Grundlagen der Softwareentwicklung, Algorithmen und Datenstrukturen.",
  },
];
