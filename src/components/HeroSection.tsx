import { Button } from "@/components/ui/button";
const heroImage = "/lovable-uploads/dc370afc-1b8f-4f76-950f-a44781df04b8.png";
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
              Words are seeds. Choose to plant <span className="text-[#8A262E]">blessings</span> in your children's hearts
            </h1>
            
            {/* Subtítulo */}
            <p className="text-base sm:text-base md:text-lg text-muted-foreground max-w-[92vw] sm:max-w-xl mx-auto lg:mx-0"><span className="font-bold">80 cards covering essential themes</span> like responsibility, positive thinking, overcoming fear, wisdom and much more. <span className="font-bold">All founded on God's Word.</span> A simple and intentional way to plant, every day, words that strengthen faith, emotional bonds and your children's character.</p>
            
            {/* Imagem Hero - Visível apenas no mobile */}
            <div className="lg:hidden pt-1 pb-0">
              <img src={heroImage} alt="Speaking Blessings Products - Planner, poster and blessing cards based on God's Word" className="w-full max-w-[85vw] h-auto rounded-2xl mx-auto" />
            </div>
            
            {/* Call to Action */}
            <div className="space-y-1 pt-1">
              <button onClick={scrollToTarget} className="btn-primary w-full lg:w-auto min-h-[48px] text-base sm:text-lg md:text-xl lg:text-2xl px-6 py-4 sm:px-8 sm:py-5 md:px-12 md:py-6 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl shadow-[var(--shadow-cta)] hover:shadow-2xl transform hover:scale-105 active:scale-95 transition-all duration-300 font-leto font-bold group relative overflow-hidden animate-pulse-gentle">
                <span className="relative z-10 flex items-center justify-center">
                  <span className="text-center whitespace-nowrap">I Want My Speaking Blessings</span>
                </span>
                
                {/* Subtle gradient overlay for extra appeal */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </button>
              <p className="text-xs sm:text-sm text-muted-foreground">📄 PDF File</p>
            </div>
          </div>
          
          {/* Imagem Hero - Visível apenas no desktop */}
          <div className="mt-6 lg:mt-0 hidden lg:block">
            <img src={heroImage} alt="Speaking Blessings Products - Planner, poster and blessing cards based on God's Word" className="w-full max-w-[400px] sm:max-w-none h-auto rounded-2xl mx-auto" />
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;