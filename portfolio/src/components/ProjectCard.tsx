import { Project } from "@/lib/data/types";
import { Badge } from "@/components/ui/Badge";
import { ExternalLinkIcon, GitHubIcon } from "@/components/ui/icons";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface/50 transition-all duration-200 hover:border-accent hover:bg-surface">
      <div className="flex aspect-[16/10] items-center justify-center border-b border-border bg-surface">
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt={`Vorschaubild von ${project.title}`}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="font-mono-tight text-xs uppercase tracking-wider text-muted">
            {project.category}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-medium tracking-tight text-ink">
            {project.title}
          </h3>
          <span className="font-mono-tight shrink-0 text-xs text-muted">
            {project.year}
          </span>
        </div>

        <p className="text-sm leading-relaxed text-muted">{project.description}</p>

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
