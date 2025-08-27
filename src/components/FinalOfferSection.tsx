import { Heart } from "lucide-react";
const FinalOfferSection = () => {
  return <section id="oferta-final" className="pt-8 pb-6 px-4 bg-gradient-to-b from-background via-secondary/10 to-secondary/20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Título Principal - mantido exatamente como estava */}
        <div className="text-center mb-6 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-leto font-bold text-verde-musgo leading-tight mb-4">
            Todos esses produtos deveriam custar{" "}
            <span style={{
            color: '#8A262E'
          }}>+ de </span><span style={{
            color: '#8A262E'
          }} className="line-through decoration-4">R$255,00</span>
          </h2>
          
          {/* Subtítulo com urgência - mantido exatamente como estava */}
          <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 max-w-4xl mx-auto leading-relaxed font-leto">
            Mas, <span className="font-bold">somente nesta oferta</span>, o valor promocional que você irá investir hoje para começar a <span className="font-bold">declarar bênçãos intencionalmente sobre seus filhos, que os impactarão por toda a vida, é de apenas:</span>
          </p>
        </div>

        {/* Container compacto da oferta */}
        <div className="bg-white rounded-3xl shadow-lg p-4 sm:p-6 md:p-8 border border-secondary/30 relative animate-fade-in text-center" style={{
        animationDelay: '0.2s'
      }}>
          
          {/* Imagem do produto */}
          <div className="mb-6">
            <img src="/lovable-uploads/b91f38ac-2836-4471-9dcf-1cff6b10ee91.png" alt="Todos os produtos e bônus inclusos" className="w-full max-w-3xl mx-auto" />
          </div>

          {/* Preço parcelado */}
          <div className="mb-3">
            <p className="text-6xl sm:text-7xl md:text-8xl font-leto font-bold" style={{
            color: '#8A262E'
          }}>4x R$5,21</p>
          </div>

          {/* Preço à vista */}
          <div className="mb-4">
            <p className="text-lg sm:text-xl md:text-2xl font-leto font-bold" style={{
            color: '#506853'
          }}>ou R$17,99 à vista</p>
          </div>

          {/* Texto de urgência */}
          <div className="mb-2">
            <p style={{
            color: '#506853'
          }} className="text-base sm:text-lg md:text-xl font-leto whitespace-nowrap font-medium">
              OFERTA ESPECIAL POR TEMPO LIMITADO
            </p>
          </div>

          {/* Botão CTA Principal - mantido exatamente como estava */}
          <div className="text-center">
            <a href="https://pay.cakto.com.br/9eteqvz_485076" target="_blank" rel="noopener noreferrer" className="w-full lg:w-auto inline-block">
              <button className="btn-primary w-full lg:w-auto min-h-[48px] text-base sm:text-lg md:text-xl lg:text-2xl px-6 py-4 sm:px-8 sm:py-5 md:px-12 md:py-6 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl shadow-[var(--shadow-cta)] hover:shadow-2xl transform hover:scale-105 active:scale-95 transition-all duration-300 font-leto font-bold group relative overflow-hidden animate-pulse-gentle">
                <span className="relative z-10 flex items-center justify-center gap-1.5 sm:gap-2 md:gap-3">
                  <span className="text-center whitespace-nowrap">Quero meu Declarando Bênçãos</span>
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:animate-pulse flex-shrink-0" />
                </span>
                
                {/* Subtle gradient overlay for extra appeal */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </button>
            </a>
            
            
          </div>
        </div>
      </div>
    </section>;
};
export default FinalOfferSection;