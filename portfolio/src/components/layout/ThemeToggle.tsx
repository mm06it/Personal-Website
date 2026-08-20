"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "../ui/icons";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    // Einmaliges Auslesen des vom Inline-Script gesetzten Zustands nach dem Mount,
    // um Server/Client-Hydration-Mismatches zu vermeiden.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setIsDark(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Zu Light Mode wechseln" : "Zu Dark Mode wechseln"}
      title={isDark ? "Light Mode" : "Dark Mode"}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full text-muted transition-colors duration-150 hover:bg-surface hover:text-accent"
    >
      {isDark === null ? (
        <span className="block h-[18px] w-[18px]" />
      ) : isDark ? (
        <SunIcon className="h-[18px] w-[18px]" />
      ) : (
        <MoonIcon className="h-[18px] w-[18px]" />
      )}
    </button>
  );
}
