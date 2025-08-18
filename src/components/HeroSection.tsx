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
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* Content - Left Side */}
            <div className="text-center lg:text-left space-y-6 lg:space-y-8 order-2 lg:order-1">
              <h1 
                ref={titleRef}
                className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight transition-all duration-1000 ${
                  titleVisible ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <span className="block mb-2">Dr. Thiago</span>
                <span className="block text-accent mb-4">Rabaçal</span>
                <span className="block text-xl md:text-2xl lg:text-3xl font-normal text-gray-200">
                  Advogado Trabalhista
                </span>
              </h1>
              
              <p 
                ref={subtitleRef}
                className={`text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed transition-all duration-1000 delay-300 ${
                  subtitleVisible ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                Defendo seus <span className="text-accent font-semibold">direitos trabalhistas</span> em 
                Salvador e Lauro de Freitas com dedicação total.
              </p>

              {/* Highlight Box */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 lg:p-6 border border-white/20 inline-block">
                <span className="text-accent font-bold text-xl lg:text-2xl">
                  ⚖️ Primeira consulta 100% GRATUITA
                </span>
              </div>

              {/* CTA Buttons */}
              <div 
                ref={ctaRef}
                className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-1000 delay-500 ${
                  ctaVisible ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <Button 
                  onClick={handleWhatsApp}
                  variant="hero" 
                  size="lg" 
                  className="text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 shadow-glow hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp - Consulta Gratuita
                </Button>
                <Button 
                  onClick={handleCall}
                  variant="outline" 
                  size="lg"
                  className="text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 border-white bg-white text-primary hover:bg-primary hover:text-white hover:scale-105 transition-all duration-300 font-semibold"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Ligar Agora
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 text-white/90 text-sm">
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                  ✅ OAB/BA Ativo
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                  🎓 Especialista
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                  ⚡ Resposta Rápida
                </div>
              </div>
            </div>

            {/* Profile Photo - Right Side */}
            <div 
              ref={photoRef}
              className={`flex justify-center lg:justify-end order-1 lg:order-2 transition-all duration-1000 ${
                photoVisible ? 'animate-fade-in opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
            >
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute -inset-3 bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl blur-xl"></div>
                
                {/* Photo Container */}
                <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-3 lg:p-4 border border-white/20 shadow-2xl hover:scale-105 transition-transform duration-500">
                  <img 
                    src={thiagoProfile} 
                    alt="Dr. Thiago Rabaçal - Advogado Trabalhista"
                    className="w-64 h-80 md:w-72 md:h-96 lg:w-80 lg:h-[28rem] object-cover rounded-lg shadow-elegant"
                  />
                  
                  {/* OAB Badge */}
                  <div className="absolute -bottom-2 -right-2 bg-accent text-white px-3 py-2 rounded-lg shadow-button font-semibold text-sm">
                    OAB/BA
                  </div>
                  
                  {/* Experience Badge */}
                  <div className="absolute -top-2 -left-2 bg-primary text-white px-3 py-1 rounded-lg shadow-button font-medium text-xs">
                    Trabalhista
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Indicators - Properly Spaced */}
          <div className="text-center mt-12 lg:mt-16 pt-8 border-t border-white/20">
            <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-8 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span>OAB/BA Regularizado</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span>Primeira Consulta Grátis</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span>Salvador & Lauro de Freitas</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span>Atendimento Personalizado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;