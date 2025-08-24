import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = "+221784066315";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=Bonjour,%20je%20souhaite%20en%20savoir%20plus%20sur%20vos%20services.`;

  return (
    <footer className="bg-dark-bg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-heading font-bold text-white">
                ComConnect
              </span>
              <span className="text-2xl font-heading font-bold text-brand-blue ml-1">
                Sénégal
              </span>
            </div>
            <p className="text-muted-dark-foreground mb-6 max-w-md">
              Agence de communication créative basée à Dakar. Nous propulsons votre marque et vos projets digitaux grâce à l'IA et à notre créativité.
            </p>
            <div className="space-y-2">
              <a
                href={`tel:${whatsappNumber}`}
                className="flex items-center text-sm text-muted-dark-foreground hover:text-brand-blue transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                +221 78 406 63 15
              </a>
              <div className="flex items-center text-sm text-muted-dark-foreground">
                <MapPin className="w-4 h-4 mr-2" />
                Dakar, Sénégal
              </div>
            </div>
          </div>

          {/* Navigation rapide */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-muted-dark-foreground hover:text-brand-blue transition-colors"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-muted-dark-foreground hover:text-brand-blue transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/portfolio" 
                  className="text-muted-dark-foreground hover:text-brand-blue transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-muted-dark-foreground hover:text-brand-blue transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Portfolio développeur */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-brand-blue hover:text-brand-blue-light transition-colors"
              >
                WhatsApp
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
              <div>
                <p className="text-sm text-muted-dark-foreground mb-2">Développé par</p>
                <a
                  href="https://khadim4k.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-brand-blue hover:text-brand-blue-light transition-colors font-medium"
                >
                  Khadim Gueye
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
                <p className="text-xs text-muted-dark-foreground">Développeur Full Stack</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border-dark mt-12 pt-8 text-center">
          <p className="text-sm text-muted-dark-foreground">
            © {currentYear} ComConnect Sénégal – Tous droits réservés |{" "}
            <a
              href="https://khadim4k.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-blue hover:text-brand-blue-light transition-colors"
            >
              Portfolio développeur
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;