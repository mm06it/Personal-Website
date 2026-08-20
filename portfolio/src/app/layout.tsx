import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { site } from "@/lib/data/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StatusBar } from "@/components/layout/StatusBar";
import { SkipLink } from "@/components/layout/SkipLink";
import { ThemeScript } from "@/components/layout/ThemeScript";

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.tagline,
  keywords: [site.name, site.role, "Portfolio", "Web Development", "Next.js"],
  authors: [{ name: site.name, url: site.siteUrl }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: site.siteUrl,
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <SkipLink />
        <div className="flex min-h-screen flex-col">
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <StatusBar />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
