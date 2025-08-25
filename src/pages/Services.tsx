import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Palette, 
  Bot, 
  FileImage, 
  GraduationCap,
  Megaphone,
  Sparkles,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import brandingService from "@/assets/branding-service.jpg";
import aiContentService from "@/assets/ai-content-service.jpg";
import marketingService from "@/assets/marketing-service.jpg";

const Services = () => {
  const whatsappNumber = "+221784066315";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=Bonjour,%20je%20souhaite%20demander%20un%20devis%20pour%20mes%20projets%20digitaux.`;

  const mainServices = [
    {
      icon: Palette,
      title: "Branding & Design",
      description: "Création d'identités visuelles complètes qui marquent les esprits et renforcent votre image de marque.",
      image: brandingService,
      features: [
        "Logos et identités visuelles",
        "Chartes graphiques",
        "Affiches et flyers",
        "Supports de communication",
        "Packaging et étiquettes"
      ]
    },
    {
      icon: Bot,
      title: "Community Management & IA générative",
      description: "Gestion professionnelle de vos réseaux sociaux avec des contenus IA innovants pour maximiser votre engagement.",
      image: aiContentService,
      features: [
        "Gestion réseaux sociaux",
        "Contenus IA (images, vidéos)",
        "Rédaction automatisée",
        "Planning éditorial",
        "Analyse de performance"
      ]
    },
    {
      icon: FileImage,
      title: "Flyers et supports marketing",
      description: "Conception de supports marketing impactants qui convertissent vos prospects en clients fidèles.",
      image: marketingService,
      features: [
        "Flyers publicitaires",
        "Cartes de visite",
        "Brochures commerciales",
        "Banners digitaux",
        "Supports événementiels"
      ]
    }
  ];

  const additionalServices = [
    {
      icon: Sparkles,
      title: "Génération IA avancée",
      description: "Création de contenus uniques grâce aux dernières technologies d'intelligence artificielle.",
      features: [
        "Images haute qualité",
        "Vidéos personnalisées", 
        "Textes optimisés SEO",
        "Voix off IA",
        "Traductions automatiques"
      ]
    },
    {
      icon: GraduationCap,
      title: "Formation IA",
      description: "Formations personnalisées pour maîtriser les outils d'IA générative et gagner en autonomie.",
      features: [
        "Formation aux outils IA",
        "Ateliers pratiques",
        "Support personnalisé",
        "Certification",
        "Suivi post-formation"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in-up">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
              Nos <span className="text-brand-blue">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Des solutions créatives et technologiques complètes pour propulser votre présence digitale et développer votre marque.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-brand-blue hover:bg-brand-blue-dark text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-blue hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Demander un devis gratuit
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-dark-bg">
              Services Principaux
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Notre expertise au service de votre réussite digitale
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12">
            {mainServices.map((service, index) => (
              <Card key={index} className="service-card overflow-hidden">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`relative h-64 lg:h-auto ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <img 
                      src={service.image} 
                      alt={`Service ${service.title} - ComConnect Sénégal`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/20 to-transparent"></div>
                    <div className="absolute top-6 left-6">
                      <service.icon className="w-12 h-12 text-white bg-brand-blue/80 p-2 rounded-lg" />
                    </div>
                  </div>
                  <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                    <h3 className="text-2xl lg:text-3xl font-heading font-bold mb-4 text-dark-bg">
                      {service.title}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-muted-foreground">
                          <CheckCircle className="w-5 h-5 text-brand-blue mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      className="bg-brand-blue hover:bg-brand-blue-dark text-white w-fit"
                    >
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                        Commander ce service
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-dark-bg">
              Services Spécialisés
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Technologies avancées et formations pour votre autonomie digitale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="service-card group">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-blue/10 rounded-full mb-6">
                    <service.icon className="w-8 h-8 text-brand-blue" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-4 text-dark-bg">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-brand-blue mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    variant="outline"
                    className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white w-full"
                  >
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      En savoir plus
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in-up">
            <Megaphone className="w-16 h-16 text-brand-blue mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-white">
              Prêt à transformer votre communication ?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Contactez-nous pour discuter de vos besoins et recevoir une proposition personnalisée sous 24h.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-brand-blue hover:bg-brand-blue-dark text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-blue hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Demander un devis WhatsApp
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-gray-700 text-white hover:bg-gray-600 px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
              >
                <a href="tel:+221784066315">
                  Appeler +221 78 406 63 15
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;