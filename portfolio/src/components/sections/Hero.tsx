import { site } from "@/lib/data/site";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Terminal, type TerminalLine } from "@/components/ui/Terminal";

const terminalLines: TerminalLine[] = [
  { text: "whoami" },
  { text: `${site.name.toLowerCase()} — ${site.role.toLowerCase()}`, instant: true },
  { text: "cat focus.md" },
  { text: site.tagline, instant: true },
  { text: "./status --check" },
  { text: `● ${site.availability.toLowerCase()} · ${site.location.toLowerCase()}`, instant: true },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        className="hero-backdrop bg-grid-fade pointer-events-none absolute inset-0"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-full max-w-5xl gap-12 px-6 py-16 md:grid-cols-[1.15fr_0.85fr] md:items-center md:px-8 md:py-28">
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
          style={{ animationDelay: "150ms" }}
        >
          <Terminal lines={terminalLines} className="w-full max-w-sm" />
          <p className="mt-3 text-center font-mono-tight text-[11px] uppercase tracking-wider text-muted">
            fig. 01 — live session
          </p>
        </div>
      </div>
    </section>
  );
}
