"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site } from "@/lib/data/site";
import { Container } from "./Container";
import { ThemeToggle } from "./ThemeToggle";
import { CloseIcon, MenuIcon } from "../ui/icons";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/85 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="font-mono-tight text-sm font-medium tracking-tight text-ink"
          onClick={() => setOpen(false)}
        >
          {site.firstName.toLowerCase()}
          <span className="text-accent">.</span>dev
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Hauptnavigation">
          {nav.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-sm transition-colors duration-150 ${
                  active
                    ? "bg-surface text-ink"
                    : "text-muted hover:bg-surface hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-1 md:flex">
          <ThemeToggle />
          <Link
            href="/contact"
            className="ml-2 rounded-full bg-ink px-4 py-2 text-sm font-medium text-bg transition-colors duration-150 hover:bg-accent hover:text-accent-ink"
          >
            Kontakt
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink md:hidden"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </Container>

      {open && (
        <nav
          className="border-t border-border bg-bg md:hidden"
          aria-label="Mobile Navigation"
        >
          <Container className="flex flex-col gap-1 py-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-base text-ink hover:bg-surface"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center justify-between border-t border-border pt-3">
              <span className="font-mono-tight text-xs text-muted">Darstellung</span>
              <ThemeToggle />
            </div>
          </Container>
        </nav>
      )}
    </header>
  );
}
