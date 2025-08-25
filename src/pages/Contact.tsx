import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ExternalLink, 
  Eye, 
  Calendar,
  ArrowLeft,
  ArrowRight
} from "lucide-react";
import brandingService from "@/assets/branding-service.jpg";
import aiContentService from "@/assets/ai-content-service.jpg";
import marketingService from "@/assets/marketing-service.jpg";

const Portfolio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Identité visuelle - Entreprise Tech",
      category: "Branding",
      description: "Création complète d'identité visuelle pour une startup technologique sénégalaise, incluant logo, charte graphique et supports de communication.",
      image: brandingService,
      tags: ["Logo", "Charte graphique", "Business cards"],
      date: "Janvier 2025",
      client: "TechStart Dakar"
    },
    {
      id: 2,
      title: "Campagne IA - Restaurant",
      category: "IA & Community Management",
      description: "Gestion complète des réseaux sociaux avec contenus générés par IA : photos de plats, vidéos promotionnelles et rédaction de posts.",
      image: aiContentService,
      tags: ["IA générative", "Social Media", "Vidéos"],
      date: "Décembre 2024",
      client: "Restaurant Le Baobab"
    },
    {
      id: 3,
      title: "Supports Marketing - Événement",
      category: "Marketing",
      description: "Conception de tous les supports marketing pour un événement majeur : flyers, affiches, banners digitaux et merchandising.",
      image: marketingService,
      tags: ["Flyers", "Affiches", "Banners"],
      date: "Novembre 2024",
      client: "Festival Teranga"
    },
    {
      id: 4,
      title: "Formation IA - Entreprise",
      category: "Formation",
      description: "Formation complète de 20 employés aux outils d'IA générative pour la création de contenus marketing et communication.",
      image: aiContentService,
      tags: ["Formation", "IA", "Team Building"],
      date: "Octobre 2024",
      client: "Corp Sénégal SA"
    },
    {
      id: 5,
      title: "Branding Complet - ONG",
      category: "Branding",
      description: "Refonte complète de l'identité visuelle d'une ONG locale, création de supports de sensibilisation et optimisation digitale.",
      image: brandingService,
      tags: ["Rebranding", "ONG", "Impact social"],
      date: "Septembre 2024",
      client: "Aide Solidaire"
    },
    {
      id: 6,
      title: "Contenus IA - E-commerce",
      category: "IA & Community Management",
      description: "Création automatisée de contenus produits, descriptions optimisées SEO et visuels marketing pour boutique en ligne.",
      image: marketingService,
      tags: ["E-commerce", "SEO", "Automatisation"],
      date: "Août 2024",
      client: "Boutique Digi"
    }
  ];

  const categories = ["Tous", "Branding", "IA & Community Management", "Marketing", "Formation"];
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredProjects = activeCategory === "Tous" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % filteredProjects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in-up">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
              Notre <span className="text-brand-blue">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Découvrez nos réalisations créatives et les projets qui témoignent de notre expertise en design et IA générative.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Slider */}
      <section className="py-20 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-dark-bg">
              Projets en Vedette
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Un aperçu de nos dernières réalisations créatives
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => {
                  setActiveCategory(category);
                  setCurrentSlide(0);
                }}
                className={`${
                  activeCategory === category
                    ? "bg-brand-blue hover:bg-brand-blue-dark text-white"
                    : "border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Slider */}
          <div className="relative">
            <Card className="service-card overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-96">
                  <img 
                    src={filteredProjects[currentSlide]?.image} 
                    alt={`Projet ${filteredProjects[currentSlide]?.title} - ComConnect Sénégal`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-dark-bg/60 to-transparent"></div>
                  <Badge className="absolute top-4 left-4 bg-brand-blue text-white">
                    {filteredProjects[currentSlide]?.category}
                  </Badge>
                </div>
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    {filteredProjects[currentSlide]?.date}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-heading font-bold mb-4 text-dark-bg">
                    {filteredProjects[currentSlide]?.title}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {filteredProjects[currentSlide]?.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {filteredProjects[currentSlide]?.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-brand-blue/10 text-brand-blue">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="text-sm text-muted-foreground mb-6">
                    <strong>Client :</strong> {filteredProjects[currentSlide]?.client}
                  </div>
                  <Button
                    asChild
                    className="bg-brand-blue hover:bg-brand-blue-dark text-white w-fit"
                  >
                    <a href="https://khadim4k.com" target="_blank" rel="noopener noreferrer">
                      Voir plus de projets
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </div>
            </Card>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ArrowLeft className="w-6 h-6 text-dark-bg" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ArrowRight className="w-6 h-6 text-dark-bg" />
            </button>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {filteredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-brand-blue scale-125' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-dark-bg">
              Galerie de Projets
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explorez notre portfolio complet de réalisations créatives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card key={project.id} className="service-card group overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={`Projet ${project.title} - ComConnect Sénégal`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <Badge className="absolute top-4 left-4 bg-brand-blue text-white">
                    {project.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    {project.date}
                  </div>
                  <h3 className="text-lg font-heading font-semibold mb-3 text-dark-bg">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description.substring(0, 100)}...
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.slice(0, 2).map((tag, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs bg-brand-blue/10 text-brand-blue">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    <strong>Client :</strong> {project.client}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Section */}
      <section className="py-20 hero-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in-up">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-white">
              Développé par Khadim Gueye
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Full Stack Developer passionné par l'innovation, spécialisé dans les technologies modernes et l'IA générative.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-brand-blue hover:bg-brand-blue-dark text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-blue hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <a href="https://khadim4k.com" target="_blank" rel="noopener noreferrer">
                Découvrir le portfolio complet
                <ExternalLink className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;