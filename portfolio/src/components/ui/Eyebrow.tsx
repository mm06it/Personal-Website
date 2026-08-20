export function Eyebrow({
  path,
  className = "",
}: {
  path: string;
  className?: string;
}) {
  return (
    <p
      className={`font-mono-tight text-[13px] uppercase tracking-wider text-muted ${className}`}
      aria-hidden="true"
    >
      <span className="text-accent">~/</span>
      {path}
    </p>
  );
}
