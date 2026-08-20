import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/layout/Container";
import { site, socials } from "@/lib/data/site";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { MailIcon } from "@/components/ui/icons";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt",
  description: `Kontaktiere ${site.name} per E-Mail oder über Social Media.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        path="contact"
        title="Kontakt"
        description="Ob Projektanfrage, Zusammenarbeit oder einfach nur Hallo sagen — ich freue mich, von dir zu hören."
      />

      <Container className="grid gap-14 py-14 md:grid-cols-[0.4fr_0.6fr] md:gap-16 md:py-20">
        <div className="flex flex-col gap-8">
          <div>
            <Eyebrow path="email" />
            <a
              href={`mailto:${site.email}`}
              className="mt-3 inline-flex items-center gap-2 text-lg font-medium text-ink transition-colors hover:text-accent"
            >
              <MailIcon className="h-5 w-5 text-muted" />
              {site.email}
            </a>
          </div>

          <div>
            <Eyebrow path="social" />
            <SocialLinks links={socials} className="-ml-2 mt-2" />
          </div>

          <div>
            <Eyebrow path="location" />
            <p className="mt-3 text-ink">{site.location}</p>
          </div>
        </div>

        <div>
          <ContactForm />
        </div>
      </Container>
    </>
  );
}
