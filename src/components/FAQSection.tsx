import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, HelpCircle } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question: "A primeira consulta é realmente gratuita?",
      answer: "Sim! A primeira consulta é 100% gratuita e sem compromisso. É uma oportunidade para você conhecer meu trabalho e eu avaliar seu caso. Só cobramos honorários se decidirmos seguir com o processo."
    },
    {
      question: "Quanto tempo demora um processo trabalhista?",
      answer: "O tempo varia conforme a complexidade do caso, mas processos trabalhistas geralmente são mais rápidos que outras áreas. Casos simples podem ser resolvidos em 6-12 meses, enquanto casos mais complexos podem levar de 1-2 anos. Sempre buscamos acordos para acelerar a resolução."
    },
    {
      question: "Posso processar minha empresa mesmo trabalhando nela?",
      answer: "Sim, você pode! A lei protege o trabalhador contra retaliações. Além disso, muitas vezes é possível resolver a questão através de acordo sem que o empregador saiba inicialmente que você procurou um advogado."
    },
    {
      question: "Como são calculados os honorários advocatícios?",
      answer: "Trabalho principalmente com honorários de êxito (percentual sobre o valor recuperado). Isso significa que você só paga se ganharmos o caso. Os valores são sempre transparentes e acordados antes do início do processo."
    },
    {
      question: "Que documentos preciso levar na consulta?",
      answer: "Traga: carteira de trabalho, contratos, recibos de pagamento, extratos de conta, comunicações com a empresa (WhatsApp, e-mails), atestados médicos (se houver) e qualquer documento relacionado ao seu trabalho."
    },
    {
      question: "Atende casos de todas as cidades da Bahia?",
      answer: "Atendo prioritariamente Salvador e Lauro de Freitas, mas também aceito casos de outras cidades da Bahia, especialmente quando há possibilidade de resolução através de acordo ou quando o caso pode ser conduzido remotamente."
    },
    {
      question: "E se eu perder o processo?",
      answer: "Se o processo for perdido, você não paga honorários de êxito. Podem haver custos processuais mínimos, mas sempre discutimos essas possibilidades na consulta inicial. A maioria dos casos trabalhistas tem grandes chances de sucesso."
    },
    {
      question: "Posso acompanhar meu processo online?",
      answer: "Sim! Você receberá atualizações constantes via WhatsApp e pode acompanhar o andamento processual através dos sistemas do tribunal. Mantenho comunicação transparente em todas as etapas."
    }
  ];

  const handleWhatsApp = () => {
    const phoneNumber = "5571999999999";
    const message = "Olá! Tenho algumas dúvidas sobre meu caso trabalhista. Podemos conversar?";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <HelpCircle className="h-16 w-16 text-primary mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Dúvidas <span className="text-primary">Frequentes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Esclarecimento das principais dúvidas sobre direitos trabalhistas 
            e como posso ajudar você.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-card">
            <CardContent className="p-6 md:p-8">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>

        {/* Still Have Questions Section */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-subtle border-0">
            <CardContent className="p-8">
              <MessageCircle className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ainda tem dúvidas?
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Entre em contato diretamente comigo. Estou aqui para esclarecer 
                todas as suas questões sobre direitos trabalhistas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={handleWhatsApp}
                  variant="hero" 
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Falar no WhatsApp
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full sm:w-auto"
                  onClick={() => window.open('tel:+5571999999999', '_self')}
                >
                  Ligar Agora
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Legal Notice */}
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto bg-primary/5 border border-primary/20 rounded-lg p-6">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-primary">Aviso importante:</strong> As informações desta página não constituem garantia de resultado. 
              Cada caso é único e deve ser analisado individualmente. Este site respeita o Código de Ética da OAB e 
              não promete resultados específicos.
            </p>
            <div className="mt-4 text-xs text-muted-foreground">
              <span className="font-semibold text-primary">Dr. Thiago Rabaçal</span> • OAB/BA • Salvador • Lauro de Freitas
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;