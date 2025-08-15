import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, BookOpen, Users, Clock, Award, Target } from "lucide-react";

const AboutSection = () => {
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
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Conheça o <span className="text-primary">Dr. Thiago Rabaçal</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Advogado especializado em Direito Trabalhista, formado com dedicação e 
            comprometido em defender seus direitos com conhecimento atualizado e 
            atendimento personalizado.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="space-y-6">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {qualities.map((quality, index) => {
              const IconComponent = quality.icon;
              return (
                <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
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

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-accent/10 border border-accent/20 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Precisa de um advogado trabalhista dedicado?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Agende sua consulta gratuita e descubra como posso ajudar a defender seus direitos.
            </p>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-primary">OAB/BA</span> • Salvador • Lauro de Freitas
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;