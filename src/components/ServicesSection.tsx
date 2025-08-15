import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";
import { 
  Briefcase, 
  Clock, 
  DollarSign, 
  Shield, 
  Users, 
  FileText,
  AlertTriangle,
  Award
} from "lucide-react";

const ServicesSection = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLHeadingElement>();
  const { elementRef: servicesRef, visibleItems } = useStaggeredAnimation<HTMLDivElement>(6, 200);
  const { elementRef: statsRef, isVisible: statsVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 });

  const services = [
    {
      icon: DollarSign,
      title: "Rescisão Trabalhista",
      description: "Cálculo e cobrança de verbas rescisórias",
      benefits: ["FGTS", "Aviso Prévio", "13º Salário", "Férias Proporcionais"]
    },
    {
      icon: Clock,
      title: "Horas Extras",
      description: "Cobrança de horas não pagas pelo empregador",
      benefits: ["50% adicional", "100% adicional", "Banco de horas irregular", "Sobreaviso"]
    },
    {
      icon: Shield,
      title: "Estabilidade no Emprego",
      description: "Proteção contra demissão arbitrária",
      benefits: ["Gestante", "Acidentado", "Cipeiro", "Pré-aposentadoria"]
    },
    {
      icon: AlertTriangle,
      title: "Assédio Moral",
      description: "Defesa contra pressão psicológica no trabalho",
      benefits: ["Danos morais", "Rescisão indireta", "Indenização", "Proteção legal"]
    },
    {
      icon: Briefcase,
      title: "Acidente de Trabalho",
      description: "Direitos do trabalhador acidentado",
      benefits: ["Auxílio-doença", "Aposentadoria", "Indenização", "Estabilidade"]
    },
    {
      icon: FileText,
      title: "Revisão de Contratos",
      description: "Análise de cláusulas abusivas",
      benefits: ["Contratos CLT", "Terceirização", "Home office", "Comissionistas"]
    }
  ];

  const handleWhatsApp = () => {
    const phoneNumber = "5571999999999";
    const message = "Olá! Gostaria de saber mais sobre os serviços de direito trabalhista.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className={`text-4xl md:text-5xl font-bold text-foreground mb-6 transition-all duration-800 ${
              titleVisible ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Áreas de <span className="text-primary">Atuação</span>
          </h2>
          <p 
            className={`text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-800 delay-200 ${
              titleVisible ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Especializado em todas as áreas do Direito Trabalhista para defender 
            seus direitos com conhecimento técnico e dedicação total.
          </p>
        </div>

        <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isVisible = visibleItems.includes(index);
            return (
              <Card 
                key={index} 
                className={`shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-3 hover:scale-105 group ${
                  isVisible ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="bg-gradient-hero w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2 mb-6">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    onClick={handleWhatsApp}
                    variant="outline" 
                    size="sm" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  >
                    Consultar Agora
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div 
          ref={statsRef}
          className={`mt-20 bg-gradient-hero rounded-2xl p-8 md:p-12 transition-all duration-800 ${
            statsVisible ? 'animate-fade-in opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div className={`transition-all duration-800 delay-200 ${statsVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-accent animate-pulse">100%</div>
              <div className="text-lg">Dedicação aos casos</div>
            </div>
            <div className={`transition-all duration-800 delay-400 ${statsVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-accent animate-pulse">24h</div>
              <div className="text-lg">Disponibilidade para contato</div>
            </div>
            <div className={`transition-all duration-800 delay-600 ${statsVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-accent animate-pulse">0€</div>
              <div className="text-lg">Primeira consulta</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto bg-accent/5 border-accent/20">
            <CardContent className="p-8">
              <Award className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-4">
                Não deixe seus direitos serem violados
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Agende sua consulta gratuita e descubra como posso ajudar a recuperar 
                o que é seu por direito.
              </p>
              <Button onClick={handleWhatsApp} variant="hero" size="lg">
                Agendar Consulta Gratuita
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;