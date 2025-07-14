import AboutSection from "@/components/pages/About";
import Header from "@/components/pages/Header";
import HeroSection from "@/components/pages/Hero";
import ProjectsSection from "@/components/pages/Projects";
import TapeSection from "@/components/pages/Tape";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProjectsSection />
      <TapeSection />
      <AboutSection />
    </div>
  );
}
