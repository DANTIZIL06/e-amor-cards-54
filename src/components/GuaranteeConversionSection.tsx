import { Heart, Shield } from "lucide-react";

const GuaranteeConversionSection = () => {
  return (
    <section className="pt-3 pb-6 px-4 bg-gradient-to-b from-secondary/20 to-background relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl shadow-[var(--shadow-card)] hover:shadow-xl transition-all duration-500 p-6 sm:p-8 md:p-10 border border-secondary/30 relative animate-fade-in">
          
          {/* Título da seção */}
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-leto font-bold text-verde-musgo leading-tight mb-4">
              Ainda tem dúvidas?
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          {/* Selo de garantia e conteúdo principal */}
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10 mb-8">
            
            {/* Selo de garantia */}
            <div className="flex-shrink-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <img 
                src="/lovable-uploads/8dc7d653-b5a8-4dcf-9cca-895ee4998724.png"
                alt="Selo de garantia de 7 dias"
                className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 drop-shadow-lg"
              />
            </div>

            {/* Texto da garantia */}
            <div className="flex-1 text-center lg:text-left animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="bg-gradient-to-br from-verde-claro/30 to-secondary/20 p-6 sm:p-8 rounded-2xl border border-secondary/30">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                  <Shield className="w-6 h-6 text-verde-musgo" />
                  <span className="font-leto font-bold text-verde-musgo text-lg sm:text-xl">
                    Sua Garantia Total
                  </span>
                </div>
                
                <p className="text-foreground/90 leading-relaxed font-leto text-base sm:text-lg md:text-xl mb-6">
                  Se ainda está na dúvida se o material vai ajudar seu filho, você tem{" "}
                  <span className="font-bold text-bordo">7 dias de garantia</span>{" "}
                  para começar a aplicar as ferramentas e colher os benefícios.
                </p>
                
                <p className="text-foreground/80 leading-relaxed font-leto text-sm sm:text-base md:text-lg">
                  Se caso você aplicar o material e, por qualquer motivo, ver que o conteúdo não trouxe nenhum ganho, 
                  basta entrar em contato que{" "}
                  <span className="font-bold text-verde-musgo">devolveremos 100% do seu dinheiro.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Botão CTA */}
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a
              href="https://pay.cakto.com.br/9eteqvz_485076"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full lg:w-auto inline-block"
            >
              <button className="btn-primary w-full lg:w-auto min-h-[48px] text-base sm:text-lg md:text-xl lg:text-2xl px-6 py-4 sm:px-8 sm:py-5 md:px-12 md:py-6 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl shadow-[var(--shadow-cta)] hover:shadow-2xl transform hover:scale-105 active:scale-95 transition-all duration-300 font-leto font-bold group relative overflow-hidden animate-pulse-gentle">
                <span className="relative z-10 flex items-center justify-center gap-2 md:gap-3">
                  <span className="text-center flex-shrink-0">Quero meu Declarando Bênçãos</span>
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:animate-pulse flex-shrink-0" />
                </span>
                
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </button>
            </a>
            
            {/* Garantia resumida */}
            <div className="mt-4 flex items-center justify-center gap-2 text-muted-foreground">
              <Shield className="w-4 h-4 text-green-500" />
              <span className="font-leto text-sm sm:text-base">
                7 dias de garantia incondicional
              </span>
            </div>
          </div>
        </div>

        {/* Elementos decorativos */}
        <div className="absolute top-10 left-10 w-16 h-16 bg-verde-claro rounded-full opacity-20 animate-bounce-soft"></div>
        <div className="absolute bottom-10 right-10 w-12 h-12 bg-primary/30 rounded-full opacity-40 animate-pulse-soft"></div>
      </div>
    </section>
  );
};

export default GuaranteeConversionSection;