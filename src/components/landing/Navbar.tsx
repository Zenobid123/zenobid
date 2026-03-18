import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, User } from "lucide-react";
import zenobidLogo from "@/assets/zenobid-logo.png";
import DemoFormDialog from "./DemoFormDialog";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [demoDialogOpen, setDemoDialogOpen] = useState(false);
  const [howItWorksDialogOpen, setHowItWorksDialogOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Solution", href: "#solution" },
    { label: "Benefits", href: "#benefits" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Industries", href: "#industries" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass glass-border py-3" : "py-5"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a href="#">
            <img src={zenobidLogo} alt="Zenobid" className="h-10 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="heroOutline" size="lg" onClick={() => setHowItWorksDialogOpen(true)}>
              See How It Works
            </Button>
            <Button variant="hero" size="lg" onClick={() => setDemoDialogOpen(true)}>
              Book a Demo
            </Button>
            <a
              href="https://app.zenobid.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-0.5 text-muted-foreground hover:text-foreground transition-colors duration-200 ml-2"
            >
              <User size={20} />
              <span className="text-[10px] font-semibold tracking-wide">LOGIN</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass glass-border mt-2 mx-4 rounded-xl p-6 animate-fade-up">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 mt-4">
                <Button variant="heroOutline" size="lg" className="w-full" onClick={() => { setHowItWorksDialogOpen(true); setIsMobileMenuOpen(false); }}>
                  See How It Works
                </Button>
                <Button variant="hero" size="lg" className="w-full" onClick={() => { setDemoDialogOpen(true); setIsMobileMenuOpen(false); }}>
                  Book a Demo
                </Button>
                <a
                  href="https://app.zenobid.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  <User size={18} />
                  <span className="text-sm font-semibold">LOGIN</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

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
    </>
  );
};

export default Navbar;
