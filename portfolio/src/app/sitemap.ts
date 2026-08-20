import type { MetadataRoute } from "next";
import { site } from "@/lib/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/projects", "/setup", "/about", "/contact"];

  return routes.map((route) => ({
    url: `${site.siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
