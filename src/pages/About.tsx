import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Lightbulb, Trophy, ExternalLink } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in-up">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
              À propos de{" "}
              <span className="text-brand-blue">ComConnect Sénégal</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Une agence de communication créative basée à Dakar qui aide les marques à se démarquer grâce à des solutions digitales et IA modernes.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-left">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-dark-bg">
                Notre Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                ComConnect Sénégal révolutionne la communication digitale en combinant créativité traditionnelle et intelligence artificielle. Nous créons des identités visuelles marquantes, gérons vos réseaux sociaux avec des contenus IA innovants, et formons vos équipes aux dernières technologies.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Notre approche unique permet à vos projets de se démarquer dans un monde digital en constante évolution, tout en respectant l'authenticité de votre marque.
              </p>
            </div>
            <div className="fade-in-right">
              <div className="bg-gradient-section rounded-2xl p-8">
                <h3 className="text-2xl font-heading font-bold mb-4 text-dark-bg">
                  Chiffres clés
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-blue mb-2">50+</div>
                    <div className="text-sm text-muted-foreground">Projets réalisés</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-blue mb-2">100%</div>
                    <div className="text-sm text-muted-foreground">IA intégrée</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-blue mb-2">24h</div>
                    <div className="text-sm text-muted-foreground">Délai moyen</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-blue mb-2">5★</div>
                    <div className="text-sm text-muted-foreground">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-dark-bg">
              Nos Valeurs
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Les principes qui guident notre travail et notre relation avec nos clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="service-card group text-center">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-blue/10 rounded-full mb-6">
                  <Heart className="w-8 h-8 text-brand-blue" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-4 text-dark-bg">
                  Créativité
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Nous transformons vos idées en créations uniques qui marquent les esprits et reflètent l'identité de votre marque.
                </p>
              </CardContent>
            </Card>

            <Card className="service-card group text-center">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-blue/10 rounded-full mb-6">
                  <Lightbulb className="w-8 h-8 text-brand-blue" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-4 text-dark-bg">
                  Innovation
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Pionniers de l'IA générative au Sénégal, nous intégrons les dernières technologies pour des résultats exceptionnels.
                </p>
              </CardContent>
            </Card>

            <Card className="service-card group text-center">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-blue/10 rounded-full mb-6">
                  <Trophy className="w-8 h-8 text-brand-blue" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-4 text-dark-bg">
                  Excellence
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Chaque projet est traité avec le plus grand soin, de la conception à la livraison, pour garantir votre satisfaction.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Developer Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="service-card">
            <CardContent className="p-8 text-center">
              <div className="fade-in-up">
                <h2 className="text-3xl font-heading font-bold mb-6 text-dark-bg">
                  Développé par un Expert
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  ComConnect Sénégal est développé par{" "}
                  <span className="font-semibold text-brand-blue">Khadim Gueye</span>, 
                  Full Stack Developer passionné par l'innovation et les technologies modernes.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 className="font-heading font-semibold mb-2 text-dark-bg">Expertise Technique</h3>
                    <p className="text-muted-foreground">React, Node.js, IA générative, APIs modernes</p>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-2 text-dark-bg">Vision Créative</h3>
                    <p className="text-muted-foreground">Design UX/UI, branding, communication digitale</p>
                  </div>
                </div>
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
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;