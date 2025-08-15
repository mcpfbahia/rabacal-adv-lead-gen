import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import heroImage from "@/assets/hero-lawyer.jpg";
import thiagoProfile from "@/assets/thiago-profile.jpg";
import { Phone, MessageCircle, Calendar } from "lucide-react";

const HeroSection = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLHeadingElement>();
  const { elementRef: subtitleRef, isVisible: subtitleVisible } = useScrollAnimation<HTMLParagraphElement>({ threshold: 0.2 });
  const { elementRef: ctaRef, isVisible: ctaVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 });
  const { elementRef: photoRef, isVisible: photoVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  const handleWhatsApp = () => {
    const phoneNumber = "5571999999999";
    const message = "Olá! Vim através do site e gostaria de agendar uma consulta gratuita sobre direito trabalhista.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleCall = () => {
    window.open('tel:+5571999999999', '_self');
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
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Profile Photo - Mobile First, Desktop Right */}
          <div 
            ref={photoRef}
            className={`lg:order-2 flex justify-center transition-all duration-1000 ${
              photoVisible ? 'animate-fade-in opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl blur-xl"></div>
              
              {/* Photo Container */}
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-2xl hover:scale-105 transition-transform duration-500">
                <img 
                  src={thiagoProfile} 
                  alt="Dr. Thiago Rabaçal - Advogado Trabalhista em Salvador e Lauro de Freitas"
                  className="w-80 h-96 lg:w-96 lg:h-[28rem] object-cover rounded-lg shadow-elegant"
                />
                
                {/* OAB Badge */}
                <div className="absolute -bottom-2 -right-2 bg-accent text-white px-4 py-2 rounded-lg shadow-button font-semibold text-sm animate-pulse">
                  OAB/BA
                </div>
                
                {/* Experience Badge */}
                <div className="absolute -top-2 -left-2 bg-primary text-white px-3 py-1 rounded-lg shadow-button font-medium text-xs">
                  Especialista Trabalhista
                </div>
              </div>
            </div>
          </div>

          {/* Content - Desktop Left */}
          <div className="lg:order-1 space-y-8">
            <h1 
              ref={titleRef}
              className={`text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight transition-all duration-1000 ${
                titleVisible ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="block">Dr. Thiago</span>
              <span className="block text-accent">Rabaçal</span>
              <span className="block text-2xl md:text-3xl lg:text-4xl font-normal text-gray-200 mt-4">
                Advogado Trabalhista
              </span>
            </h1>
            
            <p 
              ref={subtitleRef}
              className={`text-xl md:text-2xl text-gray-200 max-w-2xl leading-relaxed transition-all duration-1000 delay-300 ${
                subtitleVisible ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Defendo seus <span className="text-accent font-semibold">direitos trabalhistas</span> em 
              Salvador e Lauro de Freitas com dedicação total e conhecimento atualizado.
              <span className="block mt-4 text-lg bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <span className="text-accent font-bold text-2xl">⚖️ Primeira consulta 100% GRATUITA</span>
              </span>
            </p>

            <div 
              ref={ctaRef}
              className={`flex flex-col sm:flex-row gap-4 pt-4 transition-all duration-1000 delay-500 ${
                ctaVisible ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <Button 
                onClick={handleWhatsApp}
                variant="hero" 
                size="lg" 
                className="text-lg px-8 py-4 shadow-glow hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                📞 Consulta Gratuita via WhatsApp
              </Button>
              <Button 
                onClick={handleCall}
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-4 border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm hover:scale-105 transition-all duration-300"
              >
                <Phone className="mr-2 h-5 w-5" />
                📞 Ligar Agora
              </Button>
            </div>

            {/* Quick Trust Indicators */}
            <div className="flex flex-wrap gap-4 text-white/90 text-sm">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                ✅ OAB/BA Ativo
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                🎓 Formação Sólida
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                ⚡ Resposta Imediata
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Trust Indicators */}
        <div className="text-center mt-16 text-white/80">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span>OAB/BA Regularizado</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span>Consulta 100% Gratuita</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span>Atendimento Personalizado</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span>Salvador & Lauro de Freitas</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;