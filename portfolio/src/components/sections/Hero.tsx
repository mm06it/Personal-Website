import { site } from "@/lib/data/site";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid w-full max-w-5xl gap-10 px-6 py-16 md:grid-cols-[1.3fr_0.7fr] md:items-center md:px-8 md:py-24">
        <div className="animate-fade-up">
          <Eyebrow path={`${site.firstName.toLowerCase()}-mayr`} className="mb-5" />
          <h1 className="text-balance text-4xl font-medium leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl">
            {site.name}
          </h1>
          <p className="mt-4 text-xl text-muted sm:text-2xl">{site.role}.</p>
          <p className="mt-6 max-w-lg text-balance text-base leading-relaxed text-muted sm:text-lg">
            {site.heroDescription}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="/projects">Projekte ansehen</Button>
            <Button href="/contact" variant="secondary">
              Kontakt aufnehmen
            </Button>
          </div>
        </div>

        <div
          className="animate-fade-up justify-self-center md:justify-self-end"
          style={{ animationDelay: "120ms" }}
        >
          <div className="flex h-40 w-40 items-center justify-center rounded-2xl border border-border bg-surface sm:h-48 sm:w-48">
            <span className="font-mono-tight text-4xl text-muted sm:text-5xl">
              {site.firstName.charAt(0)}
              {site.name.split(" ").slice(-1)[0].charAt(0)}
            </span>
          </div>
          <p className="mt-3 text-center font-mono-tight text-[11px] uppercase tracking-wider text-muted">
            fig. 01 — profil
          </p>
        </div>
      </div>
    </section>
  );
}
