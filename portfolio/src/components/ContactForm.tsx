"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/data/site";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Hinweis: Dieses Formular ist aktuell nur UI und versendet noch keine
    // echten Nachrichten. Für einen echten Versand z. B. an eine API-Route,
    // einen Service wie Resend/Formspree oder mailto anbinden.
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-border bg-surface p-8 text-center"
      >
        <p className="font-medium text-ink">Danke für deine Nachricht!</p>
        <p className="mt-2 text-sm text-muted">
          Dieses Formular ist aktuell ein UI-Prototyp. Schreib mir in der
          Zwischenzeit gerne direkt an{" "}
          <a href={`mailto:${site.email}`} className="text-accent underline">
            {site.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-ink">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="rounded-lg border border-border bg-transparent px-4 py-2.5 text-sm text-ink outline-none placeholder:text-muted focus-visible:border-accent"
            placeholder="Dein Name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-ink">
            E-Mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="rounded-lg border border-border bg-transparent px-4 py-2.5 text-sm text-ink outline-none placeholder:text-muted focus-visible:border-accent"
            placeholder="du@beispiel.de"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="subject" className="text-sm font-medium text-ink">
          Betreff
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          className="rounded-lg border border-border bg-transparent px-4 py-2.5 text-sm text-ink outline-none placeholder:text-muted focus-visible:border-accent"
          placeholder="Worum geht's?"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-ink">
          Nachricht
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="resize-none rounded-lg border border-border bg-transparent px-4 py-2.5 text-sm text-ink outline-none placeholder:text-muted focus-visible:border-accent"
          placeholder="Deine Nachricht an mich …"
        />
      </div>

      <button
        type="submit"
        className="mt-2 inline-flex w-fit items-center justify-center rounded-full bg-ink px-6 py-2.5 text-sm font-medium text-bg transition-colors hover:bg-accent hover:text-accent-ink"
      >
        Nachricht senden
      </button>
      <p className="text-xs text-muted">
        Hinweis: Dies ist aktuell ein UI-Prototyp ohne echten Versand.
      </p>
    </form>
  );
}
