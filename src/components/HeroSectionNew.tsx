import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import heroImage from "@/assets/hero-lawyer.jpg";
import thiagoProfile from "@/assets/thiago-profile.jpg";
import { Phone, MessageCircle, Shield, Award, Clock, MapPin, Star } from "lucide-react";

const HeroSectionNew = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLHeadingElement>();
  const { elementRef: subtitleRef, isVisible: subtitleVisible } = useScrollAnimation<HTMLParagraphElement>({ threshold: 0.2 });
  const { elementRef: ctaRef, isVisible: ctaVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 });
  const { elementRef: photoRef, isVisible: photoVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { elementRef: statsRef, isVisible: statsVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px]"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Main Hero Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
            
            {/* Text Content - Left Side */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-8">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium border border-accent/30">
                <Shield className="w-4 h-4" />
                Advogado OAB/BA Ativo
              </div>

              {/* Main Title */}
              <h1 
                ref={titleRef}
                className={`text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight transition-all duration-1000 ${
                  titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Dr. Thiago
                </span>
                <span className="block bg-gradient-to-r from-accent to-yellow-400 bg-clip-text text-transparent mb-2">
                  Rabaçal
                </span>
                <span className="block text-2xl md:text-3xl lg:text-4xl font-normal text-gray-300 mt-4">
                  Especialista em Direito Trabalhista
                </span>
              </h1>
              
              {/* Subtitle */}
              <p 
                ref={subtitleRef}
                className={`text-xl md:text-2xl text-gray-300 leading-relaxed transition-all duration-1000 delay-300 ${
                  subtitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                Defendendo seus <span className="text-accent font-bold">direitos trabalhistas</span> em 
                Salvador e Lauro de Freitas com excelência e dedicação.
              </p>

              {/* Value Proposition Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-green-400 text-lg">💼</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Consulta Gratuita</h3>
                      <p className="text-gray-400 text-sm">Primera consulta sem custos</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Resposta Rápida</h3>
                      <p className="text-gray-400 text-sm">Atendimento em 24h</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div 
                ref={ctaRef}
                className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-500 ${
                  ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <Button 
                  onClick={handleWhatsApp}
                  size="lg" 
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-green-500/25 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
                >
                  <MessageCircle className="mr-3 h-6 w-6" />
                  WhatsApp - Consulta Gratuita
                </Button>
                <Button 
                  onClick={handleCall}
                  variant="outline"
                  size="lg"
                  className="border-2 border-accent text-accent hover:bg-accent hover:text-white px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm hover:scale-105 transition-all duration-300"
                >
                  <Phone className="mr-3 h-6 w-6" />
                  Ligar Agora
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-3 text-sm">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="text-white">Avaliação 5⭐</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                  <Award className="w-4 h-4 text-accent" />
                  <span className="text-white">Especialista OAB</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span className="text-white">Salvador & Lauro</span>
                </div>
              </div>
            </div>

            {/* Profile Photo - Right Side */}
            <div 
              ref={photoRef}
              className={`lg:col-span-5 flex justify-center transition-all duration-1000 ${
                photoVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
            >
              <div className="relative">
                {/* Animated Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-accent via-primary to-accent rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
                
                {/* Photo Container */}
                <div className="relative bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-2xl">
                  <img 
                    src={thiagoProfile} 
                    alt="Dr. Thiago Rabaçal - Advogado Trabalhista"
                    className="w-80 h-96 lg:w-96 lg:h-[30rem] object-cover rounded-2xl shadow-2xl"
                  />
                  
                  {/* Floating Badges */}
                  <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-accent to-yellow-500 text-white px-4 py-2 rounded-xl shadow-lg font-bold text-sm">
                    OAB/BA
                  </div>
                  
                  <div className="absolute -top-3 -left-3 bg-gradient-to-r from-blue-600 to-primary text-white px-4 py-2 rounded-xl shadow-lg font-medium text-sm">
                    Trabalhista
                  </div>

                  {/* Updated Badge */}
                  <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-xs font-medium">
                    Atualizado
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics Section */}
          <div 
            ref={statsRef}
            className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-white/20 transition-all duration-1000 delay-700 ${
              statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">500+</div>
              <div className="text-gray-300 text-sm">Casos Resolvidos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">95%</div>
              <div className="text-gray-300 text-sm">Taxa de Sucesso</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">100%</div>
              <div className="text-gray-300 text-sm">Sempre Atualizado</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">24h</div>
              <div className="text-gray-300 text-sm">Tempo de Resposta</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionNew;