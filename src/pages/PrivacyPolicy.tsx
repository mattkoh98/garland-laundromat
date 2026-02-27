import { useLanguage } from "@/contexts/LanguageContext";

const PrivacyPolicy = () => {
  const { getText } = useLanguage();

  return (
    <div className="py-10 border-t border-border bg-background/80">
      <div className="max-w-7xl mx-auto px-4 text-xs text-muted-foreground">
        <p className="mb-1 font-medium">
          {getText("Privacy Policy", "Política de Privacidad")}
        </p>
        <p className="mb-1">
          {getText(
            "We use your information only to provide laundry services, communicate about your orders, and improve our store experience. We do not sell your personal information.",
            "Usamos su información solo para proporcionar servicios de lavandería, comunicarnos sobre sus pedidos y mejorar la experiencia en nuestra tienda. No vendemos su información personal."
          )}
        </p>
        <p className="mb-1">
          {getText(
            "If you have any questions about how we handle your information, please contact us at the store or by phone at (210) 257-9402.",
            "Si tiene preguntas sobre cómo manejamos su información, por favor contáctenos en la tienda o por teléfono al (210) 257-9402."
          )}
        </p>
        <p className="mt-1 opacity-80">
          {getText("Last updated: 2026", "Última actualización: 2026")}
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

