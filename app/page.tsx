import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import AITools from "@/components/AITools";
import CaseStudies from "@/components/CaseStudies";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <AITools />
        <CaseStudies />
        <Certifications />
        <Contact />
      </main>
    </>
  );
}
