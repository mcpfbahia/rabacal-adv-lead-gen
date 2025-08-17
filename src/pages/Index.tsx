import HeroSectionNew from "@/components/HeroSectionNew";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import WhatsAppButton from "@/components/ui/whatsapp-button";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Update document title and meta tags for SEO
    document.title = "Dr. Thiago Rabaçal - Advogado Trabalhista em Salvador e Lauro de Freitas";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Advogado trabalhista em Salvador e Lauro de Freitas. Primeira consulta gratuita. Especialista em rescisão, horas extras, assédio moral e todos os direitos trabalhistas.'
      );
    }

    // Add canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.href);

    // Add structured data for local business
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LegalService",
      "name": "Dr. Thiago Rabaçal - Advogado Trabalhista",
      "description": "Advogado especializado em Direito Trabalhista em Salvador e Lauro de Freitas",
      "url": window.location.href,
      "telephone": "+5571999999999",
      "areaServed": ["Salvador", "Lauro de Freitas", "Bahia"],
      "serviceType": "Direito Trabalhista",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Salvador",
        "addressRegion": "BA",
        "addressCountry": "BR"
      },
      "priceRange": "Consulta gratuita",
      "openingHours": "Mo-Fr 08:00-18:00"
    };

    let script = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);
  }, []);

  return (
    <main className="min-h-screen">
      <HeroSectionNew />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <FAQSection />
      <ContactSection />
      <WhatsAppButton />
    </main>
  );
};

export default Index;