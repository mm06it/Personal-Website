import { TimelineItem } from "@/lib/data/types";

export function Timeline({ items }: { items: TimelineItem[] }) {
  if (items.length === 0) return null;

  return (
    <ol className="relative flex flex-col gap-10 border-l border-border pl-8">
      {items.map((item) => (
        <li key={`${item.year}-${item.title}`} className="relative">
          <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-bg bg-accent" />
          <span className="font-mono-tight text-xs uppercase tracking-wider text-accent">
            {item.year}
          </span>
          <h3 className="mt-1 font-medium text-ink">{item.title}</h3>
          <p className="text-sm text-muted">{item.place}</p>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
            {item.description}
          </p>
        </li>
      ))}
    </ol>
  );
}
