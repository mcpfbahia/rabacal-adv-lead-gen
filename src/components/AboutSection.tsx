import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, BookOpen, Users, Clock, Award, Target } from "lucide-react";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLHeadingElement>();
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const { elementRef: cardsRef, visibleItems } = useStaggeredAnimation<HTMLDivElement>(6, 150);

  const qualities = [
    {
      icon: GraduationCap,
      title: "Formação Sólida",
      description: "Graduação recente com conhecimento atualizado das leis trabalhistas"
    },
    {
      icon: BookOpen,
      title: "Sempre Atualizado",
      description: "Acompanho todas as mudanças na legislação trabalhista"
    },
    {
      icon: Users,
      title: "Atendimento Personalizado",
      description: "Cada caso é único e merece atenção exclusiva"
    },
    {
      icon: Clock,
      title: "Disponibilidade Total",
      description: "Agilidade no atendimento e resposta rápida"
    },
    {
      icon: Award,
      title: "Comprometimento",
      description: "Dedicação total aos seus direitos trabalhistas"
    },
    {
      icon: Target,
      title: "Foco em Resultados",
      description: "Estratégias eficazes para defender seus interesses"
    }
  ];

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
            Conheça o <span className="text-primary">Dr. Thiago Rabaçal</span>
          </h2>
          <p 
            className={`text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed transition-all duration-800 delay-200 ${
              titleVisible ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Advogado especializado em Direito Trabalhista, formado com dedicação e 
            comprometido em defender seus direitos com conhecimento atualizado e 
            atendimento personalizado.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div 
            ref={contentRef}
            className={`space-y-6 transition-all duration-800 ${
              contentVisible ? 'animate-fade-in opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
              <h3 className="text-2xl font-semibold text-primary mb-3">Minha Missão</h3>
              <p className="text-lg text-foreground leading-relaxed">
                Garantir que cada trabalhador tenha seus direitos respeitados e defendidos 
                com dedicação, conhecimento atualizado e estratégias eficazes. Acredito que 
                todos merecem um advogado comprometido e acessível.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Por que escolher meu trabalho?</h3>
              <ul className="space-y-3 text-lg text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span>Conhecimento das leis trabalhistas mais recentes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span>Atendimento humanizado e próximo ao cliente</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span>Honorários justos e transparentes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span>Primeira consulta sempre gratuita</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Qualities Grid */}
          <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {qualities.map((quality, index) => {
              const IconComponent = quality.icon;
              const isVisible = visibleItems.includes(index);
              return (
                <Card 
                  key={index} 
                  className={`shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 hover:scale-105 ${
                    isVisible ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{quality.title}</h4>
                    <p className="text-sm text-muted-foreground">{quality.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Enhanced Call to Action - Mobile Optimized */}
        <div className="text-center mt-20">
          <div className="relative max-w-4xl mx-auto px-2">
            {/* Background Glow Effect */}
            <div className="absolute -inset-2 lg:-inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-2xl blur-xl opacity-75"></div>
            
            {/* Main CTA Container */}
            <div className="relative bg-gradient-to-br from-white/95 to-white/90 dark:from-background/95 dark:to-background/90 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 lg:p-12 shadow-elegant hover:shadow-glow transition-all duration-500 hover:scale-[1.02]">
              
              {/* Header with Icon - Mobile Responsive */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent text-center sm:text-left leading-tight">
                  Precisa de um advogado trabalhista dedicado?
                </h3>
              </div>
              
              {/* Description - Mobile Optimized */}
              <p className="text-lg sm:text-xl lg:text-2xl text-foreground/80 mb-8 leading-relaxed max-w-3xl mx-auto text-center px-2">
                Agende sua <span className="text-accent font-semibold">consulta gratuita</span> e descubra como posso ajudar a defender seus direitos.
              </p>

              {/* Location and Credentials - Mobile Stack */}
              <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-4 lg:gap-6">
                <div className="bg-primary/10 border border-primary/20 rounded-full px-4 sm:px-6 py-2 sm:py-3 flex items-center gap-2 w-full sm:w-auto justify-center">
                  <Award className="h-4 sm:h-5 w-4 sm:w-5 text-primary" />
                  <span className="font-bold text-primary text-base sm:text-lg">OAB/BA</span>
                </div>
                
                <div className="hidden sm:block text-primary/60 text-lg">•</div>
                
                <div className="bg-accent/10 border border-accent/20 rounded-full px-4 sm:px-6 py-2 sm:py-3 flex items-center gap-2 w-full sm:w-auto justify-center">
                  <Clock className="h-4 sm:h-5 w-4 sm:w-5 text-accent" />
                  <span className="font-semibold text-foreground text-base sm:text-lg">Salvador</span>
                </div>
                
                <div className="hidden sm:block text-primary/60 text-lg">•</div>
                
                <div className="bg-accent/10 border border-accent/20 rounded-full px-4 sm:px-6 py-2 sm:py-3 flex items-center gap-2 w-full sm:w-auto justify-center">
                  <Users className="h-4 sm:h-5 w-4 sm:w-5 text-accent" />
                  <span className="font-semibold text-foreground text-base sm:text-lg">Lauro de Freitas</span>
                </div>
              </div>

              {/* Decorative Elements - Hidden on small mobile */}
              <div className="hidden sm:block absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-xl"></div>
              <div className="hidden sm:block absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;