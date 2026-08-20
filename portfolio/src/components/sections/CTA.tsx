import { site, socials } from "@/lib/data/site";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function CTA() {
  return (
    <section className="py-16 md:py-24">
      <Container className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <Eyebrow path="contact" />
          <h2 className="mt-4 text-balance text-2xl font-medium tracking-tight text-ink sm:text-3xl">
            Lust auf ein gemeinsames Projekt?
          </h2>
          <p className="mt-3 max-w-md text-muted">
            Ich freue mich über Nachrichten zu Projekten, Zusammenarbeit oder
            einfach einem fachlichen Austausch.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button href="/contact">Nachricht schreiben</Button>
            <Button href={`mailto:${site.email}`} variant="secondary" external>
              {site.email}
            </Button>
          </div>
        </div>

        <SocialLinks links={socials} />
      </Container>
    </section>
  );
}
