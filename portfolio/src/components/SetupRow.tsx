import { SetupItem } from "@/lib/data/types";
import { ExternalLinkIcon } from "@/components/ui/icons";

export function SetupRow({ item }: { item: SetupItem }) {
  const content = (
    <div className="flex items-center gap-4 py-4">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-border bg-surface">
        {item.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.image}
            alt=""
            className="h-full w-full rounded-xl object-cover"
          />
        ) : (
          <span className="font-mono-tight text-[11px] text-muted">img</span>
        )}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-medium text-ink">{item.name}</h3>
          {item.isAffiliate && (
            <span className="font-mono-tight rounded-full border border-border px-2 py-0.5 text-[10px] uppercase tracking-wider text-muted">
              Affiliate-Link
            </span>
          )}
        </div>
        <p className="mt-0.5 text-sm text-muted">{item.description}</p>
      </div>

      {item.url && (
        <ExternalLinkIcon className="h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-accent" />
      )}
    </div>
  );

  if (!item.url) {
    return <div>{content}</div>;
  }

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="group -mx-3 block rounded-xl px-3 transition-colors hover:bg-surface"
    >
      {content}
    </a>
  );
}
