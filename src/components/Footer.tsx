import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const footerLinks = {
  services: [
    { label: "Website Design & Development", to: "/services" },
    { label: "React.js Development", to: "/services" },
    { label: "CMS Development", to: "/services" },
    { label: "Shopify Development", to: "/services" },
    { label: "AI Website Development", to: "/services" },
  ],
  company: [
    { label: "About Us", to: "/about" },
    { label: "Portfolio", to: "/portfolio" },
    { label: "Technologies", to: "/technologies" },
    { label: "Blog", to: "/blog" },
    { label: "Contact Us", to: "/contact" },
    { label: "Privacy Policy", to: "/privacy" },
  ],
};

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2">
            <div className="gradient-primary shrink-0 relative w-10 h-10 flex items-center justify-center bg-primary-600 rounded-lg overflow-hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-code w-6 h-6 text-white"
              >
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
            <span className="text-xl font-bold text-primary-800 dark:text-white">
              WebsCoders
            </span>
        </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Smart Web Solutions with AI Edge. We build high-performance, SEO-optimized websites that drive growth for businesses worldwide.
            </p>
            <div className="mt-6 space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary shrink-0" />
                <span>Ahmedabad, Gujarat, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-primary shrink-0" />
                <span>info.webscoders@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-primary shrink-0" />
                <span>+91 91063 18135</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">We Serve</h3>
            <div className="flex flex-wrap gap-2">
              {["🇺🇸 US", "🇬🇧 UK", "🇦🇺 Australia", "🇦🇪 UAE", "🇨🇦 Canada", "🇳🇱 Netherlands", "🇩🇪 Germany", "🇩🇰 Denmark", "🇮🇳 India"].map((c) => (
                <span key={c} className="text-xs px-3 py-1.5 rounded-full border border-border text-muted-foreground bg-secondary/50">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} WebScoders. All rights reserved.</p>
          <p>Web Development Company in Ahmedabad, India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
