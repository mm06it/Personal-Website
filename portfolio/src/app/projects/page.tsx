import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/layout/Container";
import { ProjectsFilter } from "@/components/ProjectsFilter";

export const metadata: Metadata = {
  title: "Projekte",
  description:
    "Eine Auswahl meiner Projekte — von Web-Anwendungen über CLI-Tools bis zu Open-Source-Bibliotheken.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        path="projects"
        title="Projekte"
        description="Eine Auswahl meiner Arbeiten. Nach Kategorie filterbar, mit Links zu Code und Live-Demo."
      />
      <Container className="py-14 md:py-20">
        <ProjectsFilter />
      </Container>
    </>
  );
}
