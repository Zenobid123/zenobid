import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import DemoFormDialog from "./DemoFormDialog";

const HeroSection = () => {
  const [demoDialogOpen, setDemoDialogOpen] = useState(false);
  const [howItWorksDialogOpen, setHowItWorksDialogOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements - smaller on mobile */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/10 rounded-full blur-[150px] animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-accent/10 rounded-full blur-[150px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo/5 rounded-full blur-[200px]" />
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px"
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass glass-border rounded-full px-4 py-2 mb-8 animate-fade-up opacity-0" style={{ animationDelay: "0.1s" }}>
            <span className="w-2 h-2 rounded-full bg-gradient-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Procurement Operating System</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-up opacity-0" style={{ animationDelay: "0.2s" }}>
            Automate Your
            <br />
            <span className="text-gradient">Procurement Workflow</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up opacity-0" style={{ animationDelay: "0.3s" }}>
            From RFQ to delivery tracking — one platform that eliminates manual work, reduces costs, and gives you complete control.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up opacity-0" style={{ animationDelay: "0.4s" }}>
            <Button variant="hero" size="xl" className="group" onClick={() => setDemoDialogOpen(true)}>
              Book a Demo
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="xl" className="group" onClick={() => setHowItWorksDialogOpen(true)}>
              <Play size={18} className="mr-1" />
              See How Zenobid Works
            </Button>
          </div>

          {/* Stats Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-up opacity-0" style={{ animationDelay: "0.5s" }}>
            {[
              { value: "80%", label: "Less Manual Work" },
              { value: "20%", label: "Cost Savings" },
              { value: "100%", label: "Audit Trail" },
              { value: "10x", label: "Faster Response" },
            ].map((stat, index) => (
              <div key={index} className="card-glow p-6 floating-card">
                <div className="text-3xl md:text-4xl font-display font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      {/* Demo Form Dialogs */}
      <DemoFormDialog 
        open={demoDialogOpen} 
        onOpenChange={setDemoDialogOpen} 
        title="Book a Demo" 
      />
      <DemoFormDialog 
        open={howItWorksDialogOpen} 
        onOpenChange={setHowItWorksDialogOpen} 
        title="See How Zenobid Works" 
      />
    </section>
  );
};

export default HeroSection;
