import Link from "next/link";
import { nav, site, socials } from "@/lib/data/site";
import { Container } from "./Container";
import { SocialLinks } from "../ui/SocialLinks";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <p className="font-mono-tight text-sm text-ink">
            {site.firstName.toLowerCase()}
            <span className="text-accent">.</span>dev
          </p>
          <p className="mt-2 text-sm text-muted">{site.tagline}</p>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <span className="font-mono-tight text-xs uppercase tracking-wider text-muted">
            Navigation
          </span>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-mono-tight text-xs uppercase tracking-wider text-muted">
            Verbinden
          </span>
          <SocialLinks links={socials} className="-ml-2" />
        </div>
      </Container>

      <Container className="flex flex-col-reverse gap-2 border-t border-border py-6 text-xs text-muted md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}. Alle Rechte vorbehalten.
        </p>
        <p className="font-mono-tight">Gebaut mit Next.js &amp; Tailwind CSS</p>
      </Container>
    </footer>
  );
}
