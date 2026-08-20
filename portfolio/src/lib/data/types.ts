export type SocialLink = {
  label: string;
  href: string;
  /** icon key, matched in components/ui/SocialLinks.tsx */
  icon: "github" | "linkedin" | "x" | "instagram" | "mail" | "link";
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  /** Longer description shown on hover / detail contexts, optional */
  summary?: string;
  tech: string[];
  category: "web" | "tool" | "mobile" | "opensource" | "other";
  image?: string;
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
  year: number;
};

export type SetupCategory =
  | "computer"
  | "monitor"
  | "kamera"
  | "audio"
  | "zubehoer"
  | "apps";

export type SetupItem = {
  name: string;
  description: string;
  url: string;
  image?: string;
  isAffiliate?: boolean;
};

export type SkillGroup = {
  label: string;
  skills: string[];
};

export type TimelineItem = {
  year: string;
  title: string;
  place: string;
  description: string;
};
