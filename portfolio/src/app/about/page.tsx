import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/layout/Container";
import { site } from "@/lib/data/site";
import { skillGroups, timeline } from "@/lib/data/about";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Badge } from "@/components/ui/Badge";
import { Timeline } from "@/components/Timeline";

export const metadata: Metadata = {
  title: "Über mich",
  description: `Hintergrund, Skills und Werdegang von ${site.name}.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader path="about" title="Über mich" />

      <Container className="grid gap-16 py-14 md:grid-cols-[0.35fr_0.65fr] md:gap-16 md:py-20">
        <div className="hidden md:block">
          <Eyebrow path="bio" />
        </div>
        <div className="flex max-w-2xl flex-col gap-5">
          {site.aboutText.map((paragraph, i) => (
            <p key={i} className="text-balance text-lg leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
        </div>
      </Container>

      <Container className="grid gap-8 border-t border-border py-14 md:grid-cols-[0.35fr_0.65fr] md:gap-16 md:py-20">
        <div>
          <Eyebrow path="skills" />
          <h2 className="mt-4 text-2xl font-medium tracking-tight text-ink">
            Skills &amp; Technologien
          </h2>
        </div>
        <div className="flex flex-col gap-6">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h3 className="font-mono-tight text-xs uppercase tracking-wider text-muted">
                {group.label}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>

      {timeline.length > 0 && (
        <Container className="grid gap-8 border-t border-border py-14 md:grid-cols-[0.35fr_0.65fr] md:gap-16 md:py-20">
          <div>
            <Eyebrow path="timeline" />
            <h2 className="mt-4 text-2xl font-medium tracking-tight text-ink">
              Werdegang
            </h2>
          </div>
          <Timeline items={timeline} />
        </Container>
      )}
    </>
  );
}
