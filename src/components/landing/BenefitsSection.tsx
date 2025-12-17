import { useEffect, useRef, useState } from "react";
import { 
  TrendingDown, 
  Gauge, 
  Database, 
  Shield, 
  MessageCircle, 
  Bot, 
  Zap, 
  Users
} from "lucide-react";

const benefits = [
  {
    icon: Gauge,
    stat: "80%",
    title: "Less Manual Work",
    description: "Automate repetitive procurement tasks and focus on strategic decisions"
  },
  {
    icon: TrendingDown,
    stat: "20%",
    title: "Cost Savings",
    description: "Drive competitive bidding and optimize supplier pricing automatically"
  },
  {
    icon: Database,
    stat: "Central",
    title: "Data Repository",
    description: "All procurement data in one place — searchable, structured, accessible"
  },
  {
    icon: Shield,
    stat: "100%",
    title: "Audit Trail",
    description: "Complete transparency with digital records of every transaction"
  },
  {
    icon: MessageCircle,
    stat: "Native",
    title: "WhatsApp Integration",
    description: "Reach suppliers where they are — no new apps to learn"
  },
  {
    icon: Bot,
    stat: "AI-Powered",
    title: "Smart Follow-ups",
    description: "Automated supplier calling and follow-ups that never miss a beat"
  },
  {
    icon: Zap,
    stat: "10x",
    title: "Faster Responses",
    description: "Accelerate vendor response cycles with multi-channel outreach"
  },
  {
    icon: Users,
    stat: "Clear",
    title: "Accountability",
    description: "Role-based ownership eliminates finger-pointing and delays"
  }
];

const BenefitsSection = () => {
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
    <section id="benefits" ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-[200px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 
            className={`font-display text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Outcomes That <span className="text-gradient">Matter</span>
          </h2>
          <p 
            className={`text-xl text-muted-foreground transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Measurable impact on your procurement operations from day one
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`group transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${150 + index * 50}ms` }}
            >
              <div className="card-glow p-6 h-full floating-card">
                {/* Icon */}
                <div className="inline-flex p-3 rounded-xl mb-4 bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-colors">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Stat */}
                <div className="text-3xl font-display font-bold text-gradient mb-2">
                  {benefit.stat}
                </div>

                {/* Content */}
                <h3 className="font-display text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
