import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import CapabilitiesSection from "@/components/landing/CapabilitiesSection";
import IndustriesSection from "@/components/landing/IndustriesSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <BenefitsSection />
        <CapabilitiesSection />
        <IndustriesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
