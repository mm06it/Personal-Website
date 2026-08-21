"use client";

import { useMemo, useState } from "react";
import { projectCategories, projects } from "@/lib/data/projects";
import { Project } from "@/lib/data/types";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";

export function ProjectsFilter() {
  const [active, setActive] = useState<Project["category"] | "all">("all");

  const filtered = useMemo(
    () => (active === "all" ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  return (
    <div>
      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label="Projekte nach Kategorie filtern"
      >
        {projectCategories.map((cat) => {
          const isActive = active === cat.value;
          return (
            <button
              key={cat.value}
              type="button"
              onClick={() => setActive(cat.value)}
              aria-pressed={isActive}
              className={`rounded-full border px-4 py-2 text-sm transition-colors duration-150 ${
                isActive
                  ? "border-ink bg-ink text-bg"
                  : "border-border text-muted hover:border-accent hover:text-accent"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      <p className="mt-4 font-mono-tight text-xs text-muted" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? "Projekt" : "Projekte"}
      </p>

      {filtered.length > 0 ? (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 6) * 70}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-2xl border border-dashed border-border p-10 text-center">
          <p className="text-muted">
            Für diese Kategorie sind aktuell keine Projekte hinterlegt.
          </p>
        </div>
      )}
    </div>
  );
}
