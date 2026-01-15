import { Linkedin, Facebook, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import zenobidLogo from "@/assets/zenobid-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { label: "Features", href: "#solution" },
      { label: "Benefits", href: "#benefits" },
      { label: "Industries", href: "#industries" },
      { label: "Pricing", href: "#" },
    ],
    company: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Contact", href: "#" },
    ],
    resources: [
      { label: "Documentation", href: "#" },
      { label: "API", href: "#" },
      { label: "Support", href: "#" },
      { label: "Status", href: "#" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy-policy", isRoute: true },
      { label: "Terms of Service", href: "/terms-and-conditions", isRoute: true },
      { label: "Security", href: "#" },
    ],
  };

  return (
    <footer className="relative border-t border-border/50">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-block mb-4">
              <img src={zenobidLogo} alt="Zenobid" className="h-10 w-auto" />
            </a>
            <p className="text-muted-foreground mb-6 max-w-xs">
              The Procurement Operating System for construction and manufacturing companies.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/zenobidprocurement/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors">
                <Linkedin className="w-5 h-5 text-muted-foreground" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61586269254783" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors">
                <Facebook className="w-5 h-5 text-muted-foreground" />
              </a>
              <a href="mailto:info@zenobid.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors">
                <Mail className="w-5 h-5 text-muted-foreground" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  {link.isRoute ? (
                    <Link to={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                      {link.label}
                    </Link>
                  ) : (
                    <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Company Details */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm text-muted-foreground">
            <p>
              <span className="font-medium text-foreground">Registered Name:</span> Quantumproc Systems Private Limited
            </p>
            <p>
              <span className="font-medium text-foreground">Address:</span> 2114-17, Tower 4, DLF Corporate Greens, Sector 74A, Gurugram, Haryana, 122004
            </p>
            <p>
              <span className="font-medium text-foreground">GSTIN:</span> 06AABCQ1471H1ZM
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Zenobid. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built for procurement excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
