import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/layout/Container";
import { setupCategories } from "@/lib/data/setup";
import { SetupRow } from "@/components/SetupRow";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const metadata: Metadata = {
  title: "Setup",
  description:
    "Meine Hardware, Software und mein Arbeitsplatz — Computer, Monitor, Kamera, Audio, Zubehör und Apps.",
};

export default function SetupPage() {
  const hasAffiliateLinks = setupCategories.some((cat) =>
    cat.items.some((item) => item.isAffiliate)
  );

  return (
    <>
      <PageHeader
        path="setup"
        title="Setup"
        description="Hardware, Software und Werkzeuge, mit denen ich täglich arbeite."
      />
      <Container className="py-14 md:py-20">
        {hasAffiliateLinks && (
          <p className="mb-10 max-w-2xl rounded-xl border border-border bg-surface px-4 py-3 text-sm text-muted">
            Mit <span className="font-mono-tight">Affiliate-Link</span> markierte Produkte
            sind Partnerlinks. Beim Kauf über diesen Link entstehen dir keine
            zusätzlichen Kosten, ich erhalte ggf. eine kleine Provision.
          </p>
        )}

        <div className="flex flex-col gap-14">
          {setupCategories.map((category) => (
            <section key={category.key} aria-labelledby={`setup-${category.key}`}>
              <Eyebrow path={`setup/${category.key}`} className="mb-2" />
              <h2
                id={`setup-${category.key}`}
                className="text-xl font-medium tracking-tight text-ink"
              >
                {category.label}
              </h2>
              <div className="mt-2 divide-y divide-border">
                {category.items.map((item) => (
                  <SetupRow key={item.name} item={item} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </>
  );
}
