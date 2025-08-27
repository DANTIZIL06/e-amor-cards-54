import { Button } from "@/components/ui/button";
import { Check, Heart, Star, Gift, CreditCard, Smartphone } from "lucide-react";

const PurchaseSection = () => {
  const features = [
    "80 Cards únicos com base bíblica",
    "Acesso imediato por email",
    "Material digital de alta qualidade",
    "Orientações de uso incluídas",
    "Garantia de 7 dias",
    "Suporte via WhatsApp"
  ];

  return (
    <section id="comprar" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-verde">
      <div className="container mx-auto max-w-4xl">
        {/* Título da seção */}
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-bordo text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-3 sm:mb-4">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
            <span className="text-xs sm:text-sm font-semibold">OFERTA ESPECIAL</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-musgo mb-3 sm:mb-4">
            Transforme a rotina da sua família hoje
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground px-2 sm:px-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </p>
        </div>
        
        {/* Card de compra */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden animate-fade-in mx-2 sm:mx-0" style={{ animationDelay: '0.2s' }}>
          <div className="p-4 sm:p-6 md:p-8 lg:p-12">
            {/* Preço */}
            <div className="text-center mb-6 sm:mb-8">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-xs sm:text-sm text-muted-foreground line-through">De R$ 97,00</span>
                <span className="bg-bordo text-white px-2 py-1 rounded text-xs sm:text-sm font-bold">50% OFF</span>
              </div>
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-musgo mb-2">
                R$ 47<span className="text-lg sm:text-xl md:text-2xl">,00</span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">Pagamento único • Acesso vitalício</p>
            </div>
            
            {/* Lista de benefícios */}
            <div className="mb-6 sm:mb-8">
              <h3 className="font-bold text-musgo mb-3 sm:mb-4 text-center text-sm sm:text-base">O que está incluso:</h3>
              <div className="space-y-2 sm:space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 sm:gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-verde-escuro rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 text-musgo" />
                    </div>
                    <span className="text-muted-foreground text-xs sm:text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Botão de compra principal */}
            <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
              <Button className="btn-primary w-full text-sm sm:text-base md:text-lg lg:text-xl py-4 sm:py-5 md:py-6 min-h-[48px]">
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2" />
                Sim, quero transformar nossa rotina!
              </Button>
              <p className="text-center text-xs sm:text-sm text-muted-foreground">
                🔒 Compra 100% segura • Entrega imediata • Garantia de 7 dias
              </p>
            </div>
            
            {/* Métodos de pagamento */}
            <div className="border-t border-muted pt-4 sm:pt-6">
              <p className="text-center text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                Formas de pagamento aceitas:
              </p>
              <div className="flex items-center justify-center gap-3 sm:gap-6">
                <div className="flex items-center gap-1 sm:gap-2 text-muted-foreground">
                  <CreditCard className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-xs sm:text-sm">Cartão</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 text-muted-foreground">
                  <Smartphone className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-xs sm:text-sm">PIX</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 text-muted-foreground">
                  <Gift className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-xs sm:text-sm">Boleto</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Urgência */}
          <div className="bg-bordo text-white p-3 sm:p-4 text-center">
            <p className="font-semibold text-xs sm:text-sm">
              ⏰ Oferta por tempo limitado • Apenas hoje com 50% de desconto
            </p>
          </div>
        </div>
        
        {/* Garantia final */}
        <div className="text-center mt-6 sm:mt-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg mx-2 sm:mx-0">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-verde-claro rounded-full flex items-center justify-center">
              <Check className="w-3 h-3 sm:w-4 sm:h-4 text-musgo" />
            </div>
            <span className="text-musgo font-medium text-xs sm:text-sm">Garantia incondicional de 7 dias</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurchaseSection;