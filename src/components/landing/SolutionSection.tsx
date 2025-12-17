import { useEffect, useRef, useState } from "react";
import { 
  FileText, 
  Send, 
  TrendingUp, 
  BarChart3, 
  ClipboardCheck, 
  Truck,
  ArrowRight
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Generate RFQs",
    description: "Create detailed RFQs in seconds with smart templates and item catalogs",
    color: "from-blue-500 to-blue-600"
  },
  {
    number: "02",
    icon: Send,
    title: "Auto Supplier Outreach",
    description: "Reach suppliers via WhatsApp, SMS, Email, and AI-powered calling",
    color: "from-indigo-500 to-indigo-600"
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Real-time Bidding",
    description: "Enable live bidding and transparent negotiations with suppliers",
    color: "from-violet-500 to-violet-600"
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Smart Comparisons",
    description: "Dynamic quote comparisons with analytics and insights",
    color: "from-purple-500 to-purple-600"
  },
  {
    number: "05",
    icon: ClipboardCheck,
    title: "Generate POs",
    description: "One-click purchase orders with role-based approvals",
    color: "from-fuchsia-500 to-fuchsia-600"
  },
  {
    number: "06",
    icon: Truck,
    title: "Track Deliveries",
    description: "End-to-end order and shipment tracking in real-time",
    color: "from-pink-500 to-pink-600"
  }
];

const SolutionSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
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

  useEffect(() => {
    if (!isVisible) return;
    
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section id="solution" ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div 
            className={`inline-flex items-center gap-2 glass glass-border rounded-full px-4 py-2 mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-sm text-primary">The Zenobid Way</span>
          </div>
          <h2 
            className={`font-display text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            6 Steps to <span className="text-gradient">Effortless</span> Procurement
          </h2>
          <p 
            className={`text-xl text-muted-foreground transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Transform your entire procurement workflow with intelligent automation
          </p>
        </div>

        {/* Steps Flow */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative group transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
                onMouseEnter={() => setActiveStep(index)}
              >
                <div 
                  className={`card-glow p-8 h-full transition-all duration-300 ${
                    activeStep === index ? "border-primary/50 shadow-[0_0_30px_hsl(var(--primary)/0.2)]" : ""
                  }`}
                >
                  {/* Step Number */}
                  <div className={`text-5xl font-display font-bold mb-4 bg-gradient-to-br ${step.color} bg-clip-text text-transparent opacity-50`}>
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-xl mb-4 bg-gradient-to-br ${step.color} shadow-lg`}>
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-display text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>

                  {/* Arrow for flow */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                      <div className={`p-1 rounded-full bg-background border border-border transition-colors ${
                        activeStep === index ? "border-primary" : ""
                      }`}>
                        <ArrowRight className={`w-4 h-4 transition-colors ${
                          activeStep === index ? "text-primary" : "text-muted-foreground"
                        }`} />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
