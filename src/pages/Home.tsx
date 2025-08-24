import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Palette, 
  Bot, 
  FileImage, 
  Sparkles, 
  CheckCircle, 
  Zap,
  ExternalLink 
} from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import brandingService from "@/assets/branding-service.jpg";
import aiContentService from "@/assets/ai-content-service.jpg";
import marketingService from "@/assets/marketing-service.jpg";

const Home = () => {
  const whatsappNumber = "+221784066315";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=Bonjour,%20je%20souhaite%20demander%20un%20devis%20pour%20mes%20projets%20digitaux.`;

  const services = [
    {
      icon: Palette,
      title: "Branding & Design",
      description: "Création de logos, identités visuelles et supports graphiques qui marquent les esprits.",
      image: brandingService,
    },
    {
      icon: Bot,
      title: "Community Management & IA générative",
      description: "Gestion de vos réseaux sociaux avec contenus IA (images, vidéos, textes).",
      image: aiContentService,
    },
    {
      icon: FileImage,
      title: "Flyers et supports marketing",
      description: "Conception de supports marketing impactants pour votre communication.",
      image: marketingService,
    },
  ];

  const advantages = [
    {
      icon: Bot,
      title: "Expertise en IA et communication digitale",
      description: "Nous maîtrisons les dernières technologies d'IA pour créer des contenus uniques et performants.",
    },
    {
      icon: Zap,
      title: "Créativité et rapidité",
      description: "Des projets livrés rapidement sans compromis sur la qualité créative.",
    },
    {
      icon: Sparkles,
      title: "Formation IA et génération de contenus",
      description: "Nous vous formons également aux outils IA pour votre autonomie créative.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Concepts digitaux modernes - ComConnect Sénégal" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-bg/90 to-dark-section/70"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-left">
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
                Vos idées, notre{" "}
                <span className="text-brand-blue">créativité</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                ComConnect Sénégal propulse votre marque et vos projets digitaux grâce à l'IA et à notre expertise créative.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-brand-blue hover:bg-brand-blue-dark text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-blue hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    Demander un devis
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-dark-bg px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300"
                >
                  <a href="https://khadim4k.com" target="_blank" rel="noopener noreferrer">
                    Voir le portfolio
                    <ExternalLink className="w-5 h-5 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="fade-in-right hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-blue opacity-20 blur-lg rounded-3xl"></div>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <div className="text-center">
                    <h3 className="text-2xl font-heading font-bold mb-4 text-brand-blue">
                      +221 78 406 63 15
                    </h3>
                    <p className="text-white/80">
                      Contactez-nous directement pour discuter de vos projets
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-dark-bg">
              Nos Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Des solutions créatives et technologiques pour propulser votre présence digitale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="service-card group overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={`Service ${service.title} - ComConnect Sénégal`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <service.icon className="w-8 h-8 text-brand-blue" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-heading font-semibold mb-3 text-dark-bg">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-dark-bg">
              Pourquoi nous choisir ?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Une approche innovante qui combine créativité traditionnelle et intelligence artificielle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-blue/10 rounded-full mb-6">
                  <advantage.icon className="w-8 h-8 text-brand-blue" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-4 text-dark-bg">
                  {advantage.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 fade-in-up">
            <Button
              asChild
              size="lg"
              className="bg-brand-blue hover:bg-brand-blue-dark text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-blue hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <a href="https://khadim4k.com" target="_blank" rel="noopener noreferrer">
                Découvrez notre portfolio
                <ExternalLink className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in-up">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-white">
              Prêt à propulser votre marque ?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Contactez-nous dès maintenant pour discuter de vos projets et obtenir un devis personnalisé.
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
                className="border-2 border-white text-white hover:bg-white hover:text-dark-bg px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300"
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

export default Home;