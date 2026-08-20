import { Eyebrow } from "./Eyebrow";

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
    <div className="border-b border-border py-14 md:py-20">
      <div className="mx-auto w-full max-w-5xl px-6 md:px-8">
        <Eyebrow path={path} />
        <h1 className="mt-4 text-3xl font-medium tracking-tight text-ink sm:text-4xl md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-balance text-lg leading-relaxed text-muted">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
