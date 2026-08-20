export function Badge({ children }: { children: string }) {
  return (
    <span className="font-mono-tight rounded-full border border-border bg-surface px-2.5 py-1 text-[12px] text-muted">
      {children}
    </span>
  );
}
