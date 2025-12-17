import { useEffect, useRef, useState } from "react";
import { Building2, Factory, HardHat, Cog } from "lucide-react";

const industries = [
  {
    icon: HardHat,
    title: "Construction",
    tags: ["EPCs", "Contractors", "Developers", "Infrastructure"],
    description: "Handle high-volume RFQs across multiple projects with complete visibility"
  },
  {
    icon: Factory,
    title: "Manufacturing",
    tags: ["Plants", "OEMs", "SMEs", "Production Units"],
    description: "Streamline repetitive procurement for raw materials and components"
  },
  {
    icon: Building2,
    title: "Infrastructure",
    tags: ["Roads", "Bridges", "Power", "Utilities"],
    description: "Manage complex, multi-supplier procurement at scale"
  },
  {
    icon: Cog,
    title: "Industrial",
    tags: ["Heavy Machinery", "Equipment", "Maintenance"],
    description: "Optimize procurement cycles for critical industrial operations"
  }
];

const optimizedFor = [
  "High-volume RFQ environments",
  "Repetitive procurement cycles",
  "Multi-supplier negotiations",
  "Complex approval workflows",
  "Distributed project teams"
];

const IndustriesSection = () => {
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
    <section id="industries" ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-indigo/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 
            className={`font-display text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Purpose-Built for <span className="text-gradient">Your Industry</span>
          </h2>
          <p 
            className={`text-xl text-muted-foreground transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Zenobid understands the unique procurement challenges of construction and manufacturing
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`card-glow p-6 h-full floating-card transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${150 + index * 75}ms` }}
            >
              <div className="inline-flex p-3 rounded-xl mb-4 bg-gradient-to-br from-primary/20 to-indigo/20">
                <industry.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">{industry.title}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {industry.tags.map((tag, i) => (
                  <span key={i} className="text-xs px-2 py-1 rounded-full bg-secondary text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">{industry.description}</p>
            </div>
          ))}
        </div>

        {/* Optimized For */}
        <div 
          className={`glass glass-border rounded-2xl p-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <h3 className="font-display text-2xl font-bold text-center mb-8">
            Optimized for
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {optimizedFor.map((item, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5"
              >
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
