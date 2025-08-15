import { Phone } from "lucide-react";
import { Button } from "./button";

const WhatsAppButton = () => {
  const phoneNumber = "5571999999999"; // Substituir pelo número real
  const message = "Olá! Vim através do site e gostaria de agendar uma consulta gratuita sobre direito trabalhista.";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      variant="accent"
      size="lg"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-button hover:scale-110 transition-all duration-300 md:w-auto md:px-6"
    >
      <Phone className="h-6 w-6 md:mr-2" />
      <span className="hidden md:inline">WhatsApp</span>
    </Button>
  );
};

export default WhatsAppButton;