import { site } from "@/lib/data/site";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";

export function AboutPreview() {
  return (
    <section className="border-b border-border py-16 md:py-24">
      <Container className="grid gap-8 md:grid-cols-[0.35fr_0.65fr] md:gap-16">
        <div>
          <Eyebrow path="about" />
          <h2 className="mt-4 text-2xl font-medium tracking-tight text-ink sm:text-3xl">
            Über mich
          </h2>
        </div>
        <div>
          <p className="text-balance text-lg leading-relaxed text-muted">
            {site.aboutText[0]}
          </p>
          <Button href="/about" variant="secondary" className="mt-6">
            Mehr über mich
          </Button>
        </div>
      </Container>
    </section>
  );
}
