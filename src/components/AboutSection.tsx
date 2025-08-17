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

        {/* Enhanced Call to Action */}
        <div className="text-center mt-16">
          <div className="relative overflow-hidden bg-gradient-hero rounded-2xl p-8 md:p-12 max-w-4xl mx-auto shadow-elegant group hover:scale-[1.02] transition-all duration-500">
            {/* Animated Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-4 right-4 w-16 h-16 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-primary-light/30 rounded-full blur-lg animate-pulse delay-700"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
            </div>
            
            {/* Content */}
            <div className="relative z-10 text-white">
              {/* Icon */}
              <div className="bg-accent/20 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
                🚀 Seus direitos trabalhistas{' '}
                <span className="text-accent">não podem esperar!</span>
              </h3>
              
              <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed animate-fade-in delay-200">
                Cada dia que passa pode significar <span className="font-bold text-accent">perda de prazos legais</span>.
                <br />
                <span className="text-lg">Garanta seus direitos com quem realmente entende!</span>
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300">
                  <div className="text-2xl md:text-3xl font-bold text-accent mb-1">100%</div>
                  <div className="text-sm text-primary-foreground/80">Consulta Gratuita</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300">
                  <div className="text-2xl md:text-3xl font-bold text-accent mb-1">24h</div>
                  <div className="text-sm text-primary-foreground/80">Resposta WhatsApp</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300">
                  <div className="text-2xl md:text-3xl font-bold text-accent mb-1">2 Cidades</div>
                  <div className="text-sm text-primary-foreground/80">Salvador & Lauro</div>
                </div>
              </div>

              {/* Enhanced Location Info */}
              <div className="flex flex-wrap justify-center items-center gap-4 text-primary-foreground/90 mb-6">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  <span className="font-semibold">OAB/BA Ativo</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  <span>Salvador</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  <span>Lauro de Freitas</span>
                </div>
              </div>

              {/* Urgency Message */}
              <div className="bg-yellow-400/20 border border-yellow-400/30 rounded-lg p-4 mb-6 backdrop-blur-sm">
                <p className="text-yellow-100 font-semibold">
                  ⚠️ <span className="text-accent">ATENÇÃO:</span> Muitos direitos trabalhistas têm prazo de 2 anos para serem reclamados!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;