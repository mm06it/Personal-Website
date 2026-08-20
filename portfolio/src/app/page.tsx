import { Hero } from "@/components/sections/Hero";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <FeaturedProjects />
      <CTA />
    </>
  );
}
