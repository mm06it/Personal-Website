import { projects } from "@/lib/data/projects";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { ProjectCard } from "@/components/ProjectCard";

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="border-b border-border py-16 md:py-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Eyebrow path="projects" />
            <h2 className="mt-4 text-2xl font-medium tracking-tight text-ink sm:text-3xl">
              Ausgewählte Projekte
            </h2>
          </div>
          <Button href="/projects" variant="secondary">
            Alle Projekte
          </Button>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
