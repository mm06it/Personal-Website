"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/data/site";

export function StatusBar() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString("de-DE", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="sticky bottom-0 z-30 hidden border-t border-border bg-surface/90 backdrop-blur md:block"
      aria-hidden="true"
    >
      <div className="mx-auto flex h-8 w-full max-w-5xl items-center justify-between px-6 font-mono-tight text-[11px] text-muted md:px-8">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-ok" />
            {site.availability}
          </span>
          <span>{site.location}</span>
        </div>
        <div className="flex items-center gap-4">
          <span>build: next.js · vercel</span>
          {time && <span suppressHydrationWarning>{time} Uhr</span>}
        </div>
      </div>
    </div>
  );
}
