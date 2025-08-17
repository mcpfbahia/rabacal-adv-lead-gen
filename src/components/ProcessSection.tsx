import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";
import { 
  MessageCircle, 
  Search, 
  FileText, 
  Scale, 
  CheckCircle,
  ArrowRight
} from "lucide-react";

const ProcessSection = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLHeadingElement>();
  const { elementRef: stepsRef, visibleItems } = useStaggeredAnimation<HTMLDivElement>(5, 300);
  const { elementRef: benefitsRef, isVisible: benefitsVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });

  const steps = [
    {
      icon: MessageCircle,
      title: "1. Primeiro Contato",
      description: "Entre em contato via WhatsApp ou telefone",
      details: ["Consulta 100% gratuita", "Atendimento imediato", "Esclarecimento de dúvidas"],
      color: "bg-primary"
    },
    {
      icon: Search,
      title: "2. Análise do Caso",
      description: "Avalio sua situação e documentos",
      details: ["Análise detalhada", "Identificação de direitos", "Estratégia personalizada"],
      color: "bg-accent"
    },
    {
      icon: FileText,
      title: "3. Documentação",
      description: "Organizamos toda documentação necessária",
      details: ["Contratos de trabalho", "Comprovantes de pagamento", "Comunicações da empresa"],
      color: "bg-primary-light"
    },
    {
      icon: Scale,
      title: "4. Ação Jurídica",
      description: "Iniciamos o processo trabalhista",
      details: ["Petição inicial", "Acompanhamento integral", "Negociação ou audiência"],
      color: "bg-primary-dark"
    },
    {
      icon: CheckCircle,
      title: "5. Resultado",
      description: "Conquista dos seus direitos",
      details: ["Acordo vantajoso", "Sentença favorável", "Execução dos valores"],
      color: "bg-accent"
    }
  ];

  const handleWhatsApp = () => {
    const phoneNumber = "5571999999999";
    const message = "Olá! Gostaria de iniciar o processo de análise do meu caso trabalhista.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className={`text-4xl md:text-5xl font-bold text-foreground mb-6 transition-all duration-800 ${
              titleVisible ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Como <span className="text-primary">Funciona</span>
          </h2>
          <p 
            className={`text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-800 delay-200 ${
              titleVisible ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Processo simples e transparente para defender seus direitos trabalhistas 
            com segurança e eficiência.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Hidden on mobile */}
          <div className="hidden lg:block absolute top-24 left-0 w-full h-0.5 bg-gradient-to-r from-primary via-accent to-primary opacity-30"></div>
          
          <div ref={stepsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isVisible = visibleItems.includes(index);
              return (
                <div 
                  key={index} 
                  className={`relative transition-all duration-700 ${
                    isVisible ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${index * 300}ms` }}
                >
                  {/* Step Card */}
                  <Card className="shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-3 hover:scale-105 relative z-10">
                    <CardContent className="p-6 text-center">
                      <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-button`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                      <p className="text-muted-foreground mb-4 text-sm">{step.description}</p>
                      
                      <div className="space-y-1">
                        {step.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Arrow - Only between steps */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-12 -right-4 z-20 items-center justify-center w-8 h-8 bg-background rounded-full border-2 border-accent">
                      <ArrowRight className="h-4 w-4 text-accent" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Benefits Section */}
        <div 
          ref={benefitsRef}
          className={`mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-800 ${
            benefitsVisible ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Vantagens do Processo</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-foreground">Transparência Total</div>
                    <div className="text-sm text-muted-foreground">Você acompanha cada etapa do processo</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-foreground">Sem Custos Iniciais</div>
                    <div className="text-sm text-muted-foreground">Primeira consulta sempre gratuita</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-foreground">Agilidade</div>
                    <div className="text-sm text-muted-foreground">Respostas rápidas e processo eficiente</div>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-accent/5 border-accent/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-accent-foreground mb-4">Compromisso</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-foreground">Dedicação Exclusiva</div>
                    <div className="text-sm text-muted-foreground">Foco total no seu caso</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-foreground">Comunicação Constante</div>
                    <div className="text-sm text-muted-foreground">Informações atualizadas sempre</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-foreground">Resultados Efetivos</div>
                    <div className="text-sm text-muted-foreground">Estratégias para maximizar seus direitos</div>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para defender seus direitos?
            </h3>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Inicie agora mesmo o processo para recuperar o que é seu
            </p>
            <Button 
              onClick={handleWhatsApp}
              variant="accent" 
              size="lg"
              className="text-lg px-8 py-4 h-auto"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Começar Agora - Grátis
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;