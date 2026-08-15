import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Process from "@/components/Process";
import Experiences from "@/components/Experiences";
import CTA from "@/components/CTA";
import { getFeaturedExperiences } from "@/lib/experiences";

export default async function Home() {
  const featuredExperiences = await getFeaturedExperiences();

  return (
    <>
      <Hero />
      <Intro />
      <Process />

      <Experiences
        experiences={featuredExperiences}/>

      <CTA />
    </>
  );
}