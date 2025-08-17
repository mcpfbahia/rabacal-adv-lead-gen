import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Shield,
  Send
} from "lucide-react";
import React, { useState, useEffect } from "react";

const ContactSection = () => {
  const { toast } = useToast();
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLHeadingElement>();
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  // pulso inicial no botão por 3s
  const [pulseActive, setPulseActive] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setPulseActive(false), 3000);
    return () => clearTimeout(t);
  }, []);

  const handleWhatsApp = () => {
    const phoneNumber = "5571999999999";
    const message = "Olá! Vim através do site e gostaria de agendar uma consulta gratuita sobre direito trabalhista.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleCall = () => {
    window.open('tel:+5571999999999', '_self');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Mensagem enviada!",
      description: "Entrarei em contato em até 2 horas. Obrigado!",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <p 
            className={`text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-800 delay-200 ${
              titleVisible ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Pronto para defender seus direitos trabalhistas? Entre em contato agora 
            e agende sua consulta 100% gratuita.
          </p>
        </div>

        <div 
          ref={contentRef}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto transition-all duration-800 ${
            contentVisible ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center gap-3">
                  <Shield className="h-8 w-8 text-primary" />
                  Dr. Thiago Rabaçal
                </CardTitle>
                <p className="text-muted-foreground">Advogado Trabalhista • OAB/BA</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Button 
                    onClick={handleWhatsApp}
                    variant="hero" 
                    size="lg"
                    className="w-full justify-start h-auto py-4"
                  >
                    <MessageCircle className="mr-3 h-5 w-5" />
                    <div className="text-left">
                      <div className="font-semibold">WhatsApp</div>
                      <div className="text-sm opacity-90">Resposta imediata</div>
                    </div>
                  </Button>
                  
                  <Button 
                    onClick={handleCall}
                    variant="accent" 
                  
                    size="lg"
                    className="w-full justify-start h-auto py-4"
                  >
                    <Phone className="mr-3 h-5 w-5" />
                    <div className="text-left">
                      <div className="font-semibold">Telefone</div>
                      <div className="text-sm opacity-90">(71) 99999-9999</div>
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Location and Hours */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Atendimento</h3>
                      <p className="text-sm text-muted-foreground">
                        Salvador<br />
                        Lauro de Freitas<br />
                        <span className="text-primary font-medium">Toda Bahia</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Horários</h3>
                      <p className="text-sm text-muted-foreground">
                        Segunda a Sexta<br />
                        8:00 às 18:00<br />
                        <span className="text-accent font-medium">WhatsApp 24h</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Guarantee */}
            <Card className="bg-primary/5 border-primary/20 shadow-card">
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">Garantia de Atendimento</h3>
                <p className="text-muted-foreground">
                  Primeira consulta 100% gratuita • Resposta em até 2 horas • 
                  Atendimento personalizado e humanizado
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground flex items-center gap-3">
                <Mail className="h-8 w-8 text-accent" />
                Envie sua Mensagem
              </CardTitle>
              <p className="text-muted-foreground">
                Preencha o formulário e retornarei em até 2 horas
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome completo *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Seu nome"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone/WhatsApp *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(71) 99999-9999"
                      type="tel"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="seu@email.com"
                    type="email"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Descreva seu caso *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Conte-me sobre sua situação trabalhista. Quanto mais detalhes, melhor poderemos ajudar."
                    rows={5}
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Enviar Mensagem
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Suas informações estão protegidas pelo sigilo profissional advocatício. 
                  Responderei pessoalmente em até 2 horas úteis.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-white max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Não espere mais para defender seus direitos
            </h3>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Cada dia que passa pode significar perda de prazos legais. 
              Agende sua consulta gratuita agora!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleWhatsApp}
                variant="accent" 
                size="lg"
                className="text-lg px-8 py-4 h-auto"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Imediato
              </Button>
              <Button
                onClick={handleCall}
                variant="accent" 
                size="lg"
                className={`text-lg px-8 py-4 h-auto bg-yellow-400 text-black hover:bg-yellow-500 ${pulseActive ? 'animate-pulse' : ''}`}
              >
                <Phone className="mr-2 h-5 w-5" />
                Ligar Agora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;