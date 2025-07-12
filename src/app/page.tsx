import Header from "@/components/pages/Header";
import HeroSection from "@/components/pages/Hero";
import ProjectsSection from "@/components/pages/Projects";
import Tape from "@/components/pages/Tape";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProjectsSection />
      <Tape />
    </div>
  );
}
