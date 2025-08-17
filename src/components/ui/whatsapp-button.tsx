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
    <div className="fixed bottom-6 right-6 z-50">
      {/* Pulse Ring Effect */}
      <div className="absolute inset-0 rounded-full bg-accent animate-pulse opacity-75 scale-110"></div>
      <div className="absolute inset-0 rounded-full bg-accent animate-ping opacity-50 scale-125"></div>
      
      {/* Main Button */}
      <Button
        onClick={handleWhatsAppClick}
        variant="accent"
        size="lg"
        className="relative h-14 w-14 rounded-full shadow-button hover:scale-110 transition-all duration-300 md:w-auto md:px-6 animate-pulse"
      >
        <Phone className="h-6 w-6 md:mr-2" />
        <span className="hidden md:inline">WhatsApp</span>
      </Button>
    </div>
  );
};

export default WhatsAppButton;