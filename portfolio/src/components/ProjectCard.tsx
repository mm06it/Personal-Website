"use client";

import { useRef, type MouseEvent } from "react";
import { Project } from "@/lib/data/types";
import { Badge } from "@/components/ui/Badge";
import { ExternalLinkIcon, GitHubIcon } from "@/components/ui/icons";

export function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLElement>(null);

  function handleMouseMove(e: MouseEvent<HTMLElement>) {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--y", `${e.clientY - rect.top}px`);
  }

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface/50 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-accent/60 hover:bg-surface hover:shadow-xl"
    >
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(220px circle at var(--x, 50%) var(--y, 50%), var(--accent-soft), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden border-b border-border bg-surface">
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt={`Vorschaubild von ${project.title}`}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        ) : (
          <span className="font-mono-tight text-xs uppercase tracking-wider text-muted">
            {project.category}
          </span>
        )}
      </div>

      <div className="relative flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-medium tracking-tight text-ink">
            {project.title}
          </h3>
          <span className="font-mono-tight shrink-0 text-xs text-muted">
            {project.year}
          </span>
        </div>

        <p className="text-sm leading-relaxed text-muted">{project.description}</p>

        {project.summary && (
          <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:grid-rows-[1fr] group-focus-within:grid-rows-[1fr]">
            <div className="overflow-hidden">
              <p className="mt-1 border-t border-border/60 pt-2 text-sm leading-relaxed text-ink/80">
                {project.summary}
              </p>
            </div>
          </div>
        )}

        <div className="mt-1 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-4 pt-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
            >
              <GitHubIcon className="h-4 w-4" />
              Code
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
            >
              <ExternalLinkIcon className="h-4 w-4" />
              Live-Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
