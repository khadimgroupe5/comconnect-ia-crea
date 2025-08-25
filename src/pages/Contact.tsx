import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Mail,
  Clock,
  Send
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const whatsappNumber = "+221784066315";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=Bonjour,%20je%20souhaite%20demander%20un%20devis%20pour%20mes%20projets%20digitaux.`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in-up">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
              Nous <span className="text-brand-blue">Contacter</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Prêt à transformer vos idées en réalité ? Contactez-nous pour discuter de vos projets digitaux.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="fade-in-left">
              <Card className="service-card">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-heading font-bold mb-6 text-dark-bg">
                    Envoyez-nous un message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-dark-bg mb-2">
                        Nom complet
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Votre nom complet"
                        className="border-brand-blue/20 focus:border-brand-blue"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-dark-bg mb-2">
                        Adresse email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="votre@email.com"
                        className="border-brand-blue/20 focus:border-brand-blue"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-dark-bg mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Décrivez votre projet ou vos besoins..."
                        rows={6}
                        className="border-brand-blue/20 focus:border-brand-blue resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-brand-blue hover:bg-brand-blue-dark text-white py-6 text-lg font-semibold rounded-xl shadow-blue hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Envoyer le message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="fade-in-right space-y-8">
              <Card className="service-card">
                <CardContent className="p-8">
                  <h3 className="text-xl font-heading font-semibold mb-6 text-dark-bg">
                    Informations de contact
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-brand-blue/10 p-3 rounded-lg">
                        <Phone className="w-6 h-6 text-brand-blue" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-dark-bg mb-1">Téléphone</h4>
                        <a 
                          href="tel:+221784066315" 
                          className="text-muted-foreground hover:text-brand-blue transition-colors"
                        >
                          +221 78 406 63 15
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-brand-blue/10 p-3 rounded-lg">
                        <MessageCircle className="w-6 h-6 text-brand-blue" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-dark-bg mb-1">WhatsApp</h4>
                        <a 
                          href={whatsappUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-brand-blue transition-colors"
                        >
                          Chat direct WhatsApp
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-brand-blue/10 p-3 rounded-lg">
                        <Mail className="w-6 h-6 text-brand-blue" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-dark-bg mb-1">Email</h4>
                        <a 
                          href="mailto:contact@comconnect.sn" 
                          className="text-muted-foreground hover:text-brand-blue transition-colors"
                        >
                          contact@comconnect.sn
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-brand-blue/10 p-3 rounded-lg">
                        <MapPin className="w-6 h-6 text-brand-blue" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-dark-bg mb-1">Adresse</h4>
                        <p className="text-muted-foreground">
                          Dakar, Sénégal
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-brand-blue/10 p-3 rounded-lg">
                        <Clock className="w-6 h-6 text-brand-blue" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-dark-bg mb-1">Horaires</h4>
                        <p className="text-muted-foreground">
                          Lun - Ven : 8h - 18h<br />
                          Sam : 9h - 15h
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Action */}
              <Card className="service-card bg-brand-blue text-white">
                <CardContent className="p-8 text-center">
                  <MessageCircle className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-heading font-semibold mb-4">
                    Besoin d'une réponse rapide ?
                  </h3>
                  <p className="mb-6">
                    Contactez-nous directement sur WhatsApp pour une réponse immédiate !
                  </p>
                  <Button
                    asChild
                    variant="secondary"
                    size="lg"
                    className="bg-white text-brand-blue hover:bg-gray-100 w-full py-6 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02]"
                  >
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      Ouvrir WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-dark-bg">
              Notre Localisation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nous sommes basés à Dakar, au cœur du dynamisme économique sénégalais
            </p>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15433.899516875147!2d-17.4648555!3d14.7167249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec1731a55bb21db%3A0x90c43e9b7f5b9e8f!2sDakar%2C%20S%C3%A9n%C3%A9gal!5e0!3m2!1sfr!2sfr!4v1642517564895!5m2!1sfr!2sfr"
              width="100%"
              height="400"
              className="border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation ComConnect Sénégal - Dakar"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in-up">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-white">
              Commençons votre projet dès aujourd'hui
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Nous répondons à tous les messages dans les 2 heures. Votre succès digital commence maintenant !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-brand-blue hover:bg-brand-blue-dark text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-blue hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  WhatsApp : Devis immédiat
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-gray-700 text-white hover:bg-gray-600 px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
              >
                <a href="tel:+221784066315">
                  Appeler maintenant
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;