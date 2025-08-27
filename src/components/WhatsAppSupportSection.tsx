import { MessageCircle } from "lucide-react";

const WhatsAppSupportSection = () => {
  return (
    <section className="py-10 px-4 bg-gradient-to-b from-background to-secondary/5">
      <div className="max-w-4xl mx-auto text-center">
        {/* WhatsApp Icon with Animation */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-green-500/20 rounded-full animate-ping"></div>
            <div className="relative bg-green-500 p-6 rounded-full shadow-lg">
              <MessageCircle className="w-12 h-12 text-white" />
            </div>
          </div>
        </div>

        {/* Title and Description */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ficou com dúvidas?
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Converse com a gente pelo WhatsApp
          </p>
        </div>

        {/* WhatsApp CTA Button */}
        <a 
          href="https://api.whatsapp.com/send?phone=5531983479083"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-semibold rounded-xl bg-green-500 hover:bg-green-600 text-white transition-all duration-300 hover:scale-105 hover:shadow-xl focus:ring-4 focus:ring-green-500/30"
        >
          <MessageCircle className="w-6 h-6" />
          Chamar no WhatsApp
        </a>

        {/* Domus Logo */}
        <div className="mt-8 flex justify-center">
          <img 
            src="/lovable-uploads/14d9c21e-03c2-4833-a824-74b89249ae7b.png"
            alt="Domus - Lares firmados na fé e no amor"
            className="w-48 md:w-56 h-auto opacity-80"
          />
        </div>

      </div>
    </section>
  );
};

export default WhatsAppSupportSection;