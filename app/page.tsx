import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
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
        <Experience />
        <AITools />
        <CaseStudies />
        <Projects />
        <Certifications />
        <Contact />
      </main>
    </>
  );
}
