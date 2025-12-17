import { useEffect, useRef, useState } from "react";
import { 
  MessageSquare, 
  Mail, 
  Phone, 
  FileSpreadsheet, 
  Clock, 
  AlertTriangle,
  XCircle,
  TrendingDown
} from "lucide-react";

const problems = [
  { icon: MessageSquare, text: "Sharing RFQs over WhatsApp and calls" },
  { icon: Mail, text: "Collecting supplier rates via scattered emails" },
  { icon: Phone, text: "Manual negotiations with limited visibility" },
  { icon: FileSpreadsheet, text: "Comparing quotes on Excel sheets" },
  { icon: Clock, text: "Chasing approvals and creating POs manually" },
  { icon: AlertTriangle, text: "No real-time order tracking" },
];

const painPoints = [
  { icon: TrendingDown, text: "High procurement costs", color: "text-destructive" },
  { icon: XCircle, text: "Scattered, unstructured data", color: "text-destructive" },
  { icon: AlertTriangle, text: "Thousands of unmanaged suppliers", color: "text-destructive" },
  { icon: Clock, text: "Delays and accountability gaps", color: "text-destructive" },
];

const ProblemSection = () => {
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
    <section ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-destructive/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 
            className={`font-display text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Procurement is <span className="text-destructive">Broken</span>
          </h2>
          <p 
            className={`text-xl text-muted-foreground transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Purchase managers are overwhelmed by fragmented, manual processes
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {problems.map((problem, index) => (
            <div
              key={index}
              className={`card-glow p-6 flex items-start gap-4 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${150 + index * 50}ms` }}
            >
              <div className="p-2 rounded-lg bg-destructive/10">
                <problem.icon className="w-5 h-5 text-destructive" />
              </div>
              <p className="text-foreground">{problem.text}</p>
            </div>
          ))}
        </div>

        {/* Results in Pain Points */}
        <div 
          className={`glass glass-border rounded-2xl p-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <h3 className="font-display text-2xl font-bold text-center mb-8">
            This results in...
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {painPoints.map((point, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center text-center p-4"
              >
                <div className="p-3 rounded-full bg-destructive/10 mb-4">
                  <point.icon className={`w-6 h-6 ${point.color}`} />
                </div>
                <p className="text-muted-foreground">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
