import { AboutSection } from "@/components/AboutSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { ContactSection } from "@/components/ContactSection";
import { EducationSection } from "@/components/EducationSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-5 lg:px-8">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <CertificationsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
