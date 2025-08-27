import { Heart, BookOpen, Shield, Users, Star } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Lorem ipsum dolor sit",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    icon: BookOpen,
    title: "Consectetur adipiscing elit",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    icon: Shield,
    title: "Sed do eiusmod tempor",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    icon: Users,
    title: "Incididunt ut labore",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."
  },
  {
    icon: Star,
    title: "Et dolore magna aliqua",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo."
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Título da seção */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-musgo mb-3 sm:mb-4">
            Por que escolher DOMUS 2025?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2 sm:px-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        
        {/* Grid de benefícios */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="card-benefit group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Ícone */}
              <div className="mb-4">
                <div className="w-16 h-16 bg-gradient-verde rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-musgo" />
                </div>
              </div>
              
              {/* Conteúdo */}
              <h3 className="text-xl font-bold text-musgo mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;