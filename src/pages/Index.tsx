import { lazy, Suspense } from "react";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";

const ProblemSection = lazy(() => import("@/components/landing/ProblemSection"));
const SolutionSection = lazy(() => import("@/components/landing/SolutionSection"));
const BenefitsSection = lazy(() => import("@/components/landing/BenefitsSection"));
const CapabilitiesSection = lazy(() => import("@/components/landing/CapabilitiesSection"));
const IndustriesSection = lazy(() => import("@/components/landing/IndustriesSection"));
const CTASection = lazy(() => import("@/components/landing/CTASection"));
const Footer = lazy(() => import("@/components/landing/Footer"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <Suspense fallback={null}>
          <ProblemSection />
          <SolutionSection />
          <BenefitsSection />
          <CapabilitiesSection />
          <IndustriesSection />
          <CTASection />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
