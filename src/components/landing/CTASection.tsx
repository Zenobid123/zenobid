import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/10 rounded-full blur-[200px] animate-glow-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px] animate-glow-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div 
          className={`max-w-4xl mx-auto text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass glass-border rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-gradient-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Ready to transform your procurement?</span>
          </div>

          {/* Headline */}
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Start Your Procurement
            <br />
            <span className="text-gradient">Transformation Today</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Join forward-thinking companies that have automated their procurement 
            and are saving time, money, and resources every day.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" className="group">
              Book a Demo
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="xl" className="group">
              <Play size={18} className="mr-1" />
              See How Zenobid Works
            </Button>
          </div>

          {/* Trust Signals */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Free demo, no commitment
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Personalized walkthrough
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Implementation support included
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
