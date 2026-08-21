import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

export function PageHeader({
  path,
  title,
  description,
}: {
  path: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="relative overflow-hidden border-b border-border py-14 md:py-20">
      <div
        className="hero-backdrop bg-grid-fade pointer-events-none absolute inset-0"
        aria-hidden="true"
      />
      <div className="relative mx-auto w-full max-w-5xl px-6 md:px-8">
        <Reveal>
          <Eyebrow path={path} />
          <h1 className="mt-4 text-3xl font-medium tracking-tight text-ink sm:text-4xl md:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-2xl text-balance text-lg leading-relaxed text-muted">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </div>
  );
}
