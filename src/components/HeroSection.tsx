import { Button } from "@/components/ui/button";
const heroImage = "/lovable-uploads/84dab5cc-a416-4b59-8f29-67c1665cf61f.png";
import { Heart, Star, Gift } from "lucide-react";
const HeroSection = () => {
  const scrollToTarget = () => {
    const element = document.getElementById("oferta-final");
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="gradient-hero min-h-screen flex items-center justify-center px-3 sm:px-6 py-8 sm:py-12 md:pt-12 md:pb-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 md:items-start items-center">
          {/* Conteúdo Textual */}
          <div className="text-center lg:text-left space-y-2">
            {/* Título Principal */}
            <h1 className="text-[32px] sm:text-4xl md:text-4xl lg:text-5xl font-bold text-[#506853] leading-[1.4] sm:leading-tight text-center lg:text-left max-w-[96vw] sm:max-w-none mx-auto lg:mx-0" style={{
            wordBreak: 'normal',
            whiteSpace: 'normal'
          }}>
              Palavras são sementes. Escolha plantar <span className="text-[#8A262E]">bênçãos</span> no coração dos seus filhos
            </h1>
            
            {/* Subtítulo */}
            <p className="text-base sm:text-base md:text-lg text-muted-foreground max-w-[92vw] sm:max-w-xl mx-auto lg:mx-0">São <span className="font-bold">80 cards com temas essenciais</span> como responsabilidade, pensamentos positivos, superação de medo, sabedoria e muito mais. <span className="font-bold">Todos fundamentados na Palavra de Deus.</span> Uma forma simples e intencional de plantar, todos os dias, palavras que fortalecem a fé, o vínculo emocional e o caráter dos seus filhos.</p>
            
            {/* Imagem Hero - Visível apenas no mobile */}
            <div className="lg:hidden pt-1 pb-0">
              <img src={heroImage} alt="Produtos Declarando Bênçãos - Planner, quadro e cards de bênção baseados na Palavra de Deus" className="w-full max-w-[85vw] h-auto rounded-2xl mx-auto" />
            </div>
            
            {/* Call to Action */}
            <div className="space-y-1 pt-1">
              <button onClick={scrollToTarget} className="btn-primary w-full lg:w-auto min-h-[48px] text-base sm:text-lg md:text-xl lg:text-2xl px-6 py-4 sm:px-8 sm:py-5 md:px-12 md:py-6 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl shadow-[var(--shadow-cta)] hover:shadow-2xl transform hover:scale-105 active:scale-95 transition-all duration-300 font-leto font-bold group relative overflow-hidden animate-pulse-gentle">
                <span className="relative z-10 flex items-center justify-center">
                  <span className="text-center whitespace-nowrap">Quero meu Declarando Bênçãos</span>
                </span>
                
                {/* Subtle gradient overlay for extra appeal */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </button>
              <p className="text-xs sm:text-sm text-muted-foreground">📄 Arquivo em PDF</p>
            </div>
          </div>
          
          {/* Imagem Hero - Visível apenas no desktop */}
          <div className="mt-6 lg:mt-0 hidden lg:block">
            <img src={heroImage} alt="Produtos Declarando Bênçãos - Planner, quadro e cards de bênção baseados na Palavra de Deus" className="w-full max-w-[400px] sm:max-w-none h-auto rounded-2xl mx-auto" />
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;