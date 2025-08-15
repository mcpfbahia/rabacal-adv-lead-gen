import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-lawyer.jpg";
import { Phone, MessageCircle, Calendar } from "lucide-react";

const HeroSection = () => {
  const handleWhatsApp = () => {
    const phoneNumber = "5571999999999"; // Substituir pelo número real
    const message = "Olá! Vim através do site e gostaria de agendar uma consulta gratuita sobre direito trabalhista.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleCall = () => {
    window.open('tel:+5571999999999', '_self'); // Substituir pelo número real
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Escritório de advocacia profissional" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="block">THIAGO RABAÇAL</span>
            <span className="block text-accent text-3xl md:text-4xl font-semibold mt-2">
              Advogado Trabalhista
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 text-primary-foreground/90">
            Defendendo seus direitos trabalhistas em
          </p>
          <p className="text-lg md:text-xl mb-8 text-accent font-semibold">
            Salvador • Lauro de Freitas • Toda Bahia
          </p>
          
          {/* Value Proposition */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 max-w-2xl mx-auto">
            <p className="text-lg md:text-xl font-medium mb-2">
              ⚖️ Primeira Consulta 100% GRATUITA
            </p>
            <p className="text-sm md:text-base text-primary-foreground/80">
              Advogado dedicado e atualizado • Atendimento personalizado • Conhecimento das leis mais recentes
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={handleWhatsApp}
              variant="accent" 
              size="lg"
              className="w-full sm:w-auto text-lg px-8 py-4 h-auto"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp - Consulta Grátis
            </Button>
            
            <Button 
              onClick={handleCall}
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto text-lg px-8 py-4 h-auto border-white text-white hover:bg-white hover:text-primary"
            >
              <Phone className="mr-2 h-5 w-5" />
              Ligar Agora
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-accent" />
              <span>Disponível 24h</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-accent">•</span>
              <span>OAB/BA Ativo</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-accent">•</span>
              <span>Formação Sólida</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;