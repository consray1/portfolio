import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ResumeSection from "@/components/ResumeSection";
import ProjectsSection from "@/components/ProjectsSection";
import ChallengesSection from "@/components/ChallengesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <ResumeSection />
      <ProjectsSection />
      <ChallengesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
