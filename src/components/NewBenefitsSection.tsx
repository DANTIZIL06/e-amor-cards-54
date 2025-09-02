import { Heart, Shield, Lightbulb, Home, Star } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Ready biblical declarations",
    description: "Have ready biblical declarations that make daily practice easier and eliminate doubts about what to say."
  },
  {
    icon: Star,
    title: "Blessings at the right time",
    description: "Use the cards to declare specific blessings, at the right moment, over your children's challenges or needs."
  },
  {
    icon: Lightbulb,
    title: "Words that bear fruit",
    description: "Transform random and unintentional words into seeds that produce eternal fruit."
  },
  {
    icon: Shield,
    title: "Inspire Christian virtues",
    description: "Inspire courage, wisdom, responsibility and positive thoughts in your children's lives."
  },
  {
    icon: Home,
    title: "Environment of love and protection",
    description: "Promote an environment of love, protection and spiritual security in the home."
  }
];

const NewBenefitsSection = () => {
  return (
    <section className="py-10 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-leto font-bold text-verde-musgo mb-4">
            Discover the Benefits!
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index}
                className="group bg-white p-6 lg:p-8 rounded-xl shadow-[var(--shadow-card)] hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-secondary/30"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent 
                      className="w-8 h-8 text-verde-musgo" 
                      strokeWidth={2}
                    />
                  </div>
                  
                  <h3 className="text-lg lg:text-xl font-leto font-bold text-verde-musgo leading-tight">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-foreground/80 leading-relaxed text-base lg:text-lg">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Decorative elements */}
        <div className="relative mt-10 pt-6 border-t border-secondary/30">
          <div className="text-center">
            <p className="text-lg lg:text-xl font-leto text-verde-musgo italic max-w-3xl mx-auto leading-relaxed mb-6">
              "Transform every moment into an opportunity to bless and edify your children's lives with words that echo in eternity."
            </p>
            
            {/* CTA Button */}
            <div className="mt-6">
              <button
                onClick={() => {
                  const target = document.getElementById('oferta-final');
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="btn-primary text-xl lg:text-2xl px-10 py-5 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl shadow-[var(--shadow-cta)] font-leto font-bold group relative overflow-hidden animate-pulse-gentle"
              >
                <span className="relative z-10 flex items-center gap-3">
                  I Want Mine Now
                  <Heart className="w-6 h-6 group-hover:animate-pulse" />
                </span>
                
                {/* Subtle gradient overlay for extra appeal */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </button>
              
              <p className="text-sm text-muted-foreground mt-3 font-leto">
                ✨ Transform your words into eternal blessings
              </p>
            </div>
          </div>
          
          {/* Floating decorative elements */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <div className="w-8 h-8 bg-primary/20 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewBenefitsSection;