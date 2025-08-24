import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "À propos", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const whatsappNumber = "+221784066315";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=Bonjour,%20je%20souhaite%20demander%20un%20devis%20pour%20mes%20projets%20digitaux.`;

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-heading font-bold text-dark-bg">
              ComConnect
            </span>
            <span className="text-2xl font-heading font-bold text-brand-blue ml-1">
              Sénégal
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-brand-blue ${
                  location.pathname === item.href
                    ? "text-brand-blue border-b-2 border-brand-blue pb-1"
                    : "text-dark-bg"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button & Phone */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={`tel:${whatsappNumber}`}
              className="flex items-center text-sm text-dark-bg hover:text-brand-blue transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              +221 78 406 63 15
            </a>
            <Button
              asChild
              className="bg-brand-blue hover:bg-brand-blue-dark text-white px-6"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Demander un devis
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-dark-bg hover:text-brand-blue transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block text-sm font-medium transition-colors hover:text-brand-blue ${
                    location.pathname === item.href
                      ? "text-brand-blue"
                      : "text-dark-bg"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-border">
                <a
                  href={`tel:${whatsappNumber}`}
                  className="flex items-center text-sm text-dark-bg hover:text-brand-blue transition-colors mb-4"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  +221 78 406 63 15
                </a>
                <Button
                  asChild
                  className="w-full bg-brand-blue hover:bg-brand-blue-dark text-white"
                >
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    Demander un devis
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;