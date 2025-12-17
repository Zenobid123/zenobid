import { useEffect, useRef, useState } from "react";
import { 
  Workflow, 
  Scale, 
  UserPlus, 
  GitCompare, 
  LineChart, 
  ShieldCheck, 
  Lock
} from "lucide-react";

const capabilities = [
  {
    icon: Workflow,
    title: "End-to-End Automation",
    description: "Complete procurement workflow from RFQ to delivery in one seamless platform"
  },
  {
    icon: Scale,
    title: "Live Bidding",
    description: "Real-time competitive bidding with transparent negotiation tools"
  },
  {
    icon: UserPlus,
    title: "Supplier Management",
    description: "Onboard, categorize, and manage your entire supplier ecosystem"
  },
  {
    icon: GitCompare,
    title: "Smart Comparisons",
    description: "AI-powered quote comparison engine with actionable insights"
  },
  {
    icon: LineChart,
    title: "Procurement Analytics",
    description: "Deep insights into spending patterns, savings, and supplier performance"
  },
  {
    icon: ShieldCheck,
    title: "Role-Based Approvals",
    description: "Configurable approval workflows with clear ownership and controls"
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "Bank-grade security with complete data encryption and compliance"
  }
];

const CapabilitiesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="capabilities" ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Header */}
          <div>
            <h2 
              className={`font-display text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Built for <span className="text-gradient">Enterprise</span> Procurement
            </h2>
            <p 
              className={`text-xl text-muted-foreground mb-8 transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Every capability designed to handle the complexity and scale of modern procurement operations
            </p>
            
            {/* Feature highlights */}
            <div 
              className={`glass glass-border rounded-2xl p-6 transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Lock className="w-5 h-5 text-primary" />
                </div>
                <span className="font-semibold">Enterprise-Ready Architecture</span>
              </div>
              <p className="text-muted-foreground text-sm">
                SOC 2 compliant infrastructure with dedicated deployment options, 
                SSO integration, and complete data sovereignty.
              </p>
            </div>
          </div>

          {/* Right: Capabilities Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {capabilities.slice(0, 6).map((capability, index) => (
              <div
                key={index}
                className={`card-glow p-6 floating-card transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${200 + index * 75}ms` }}
              >
                <div className="inline-flex p-2 rounded-lg mb-3 bg-gradient-to-br from-primary/10 to-accent/10">
                  <capability.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-bold mb-1">{capability.title}</h3>
                <p className="text-sm text-muted-foreground">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
