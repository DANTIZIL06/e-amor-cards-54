import { Gift, BookOpen, Calendar, Heart, Home, Edit3 } from "lucide-react";

const bonuses = [
  {
    icon: BookOpen,
    title: "Devotional \"My Mouth Speaks Life\" (7 days)",
    description: "Bible-based reflections to help you transform your speech into an instrument of blessing."
  },
  {
    icon: Calendar,
    title: "Intercessor Mother's Planner",
    description: "Organize your prayers for your children with intention and consistency."
  },
  {
    icon: Gift,
    title: "Biblical Promises Box (PDF + template)",
    description: "A complementary collection with powerful verses, to daily remember God's care."
  },
  {
    icon: Home,
    title: "\"Home Declaration\" Poster (PDF for printing)",
    description: "A poster to consecrate your home to God's presence, with a deep prayer."
  },
  {
    icon: Edit3,
    title: "Extra blank cards",
    description: "Write personalized declarations, specific prayers or messages of love."
  }
];

const BonusSection = () => {
  return (
    <section className="py-10 px-4 bg-gradient-to-b from-secondary/10 to-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          {/* Texto principal */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-leto font-bold text-verde-musgo leading-tight mb-6">
            Buying today, you will also receive
          </h2>
          
          {/* Imagem dos bônus */}
          <div className="mb-6">
            <img 
              src="/lovable-uploads/1d675205-e66a-4aaa-988b-b016f5e3099c.png"
              alt="All special bonuses included"
              className="w-full max-w-4xl mx-auto object-contain"
            />
          </div>
          
          {/* Texto de destaque abaixo da imagem */}
          <div className="relative">
            <div className="inline-flex items-center gap-3 mb-4">
              <Gift className="w-8 h-8 text-primary animate-pulse" />
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-leto font-bold text-primary">
                SPECIAL BONUSES!
              </h3>
              <Gift className="w-8 h-8 text-primary animate-pulse" />
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>
        </div>

        {/* Bonus Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {bonuses.map((bonus, index) => {
            const IconComponent = bonus.icon;
            return (
              <div 
                key={index}
                className="group bg-gradient-to-br from-white to-secondary/20 p-6 lg:p-8 rounded-2xl shadow-[var(--shadow-card)] hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-secondary/40 hover:border-primary/30 relative overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-3xl"></div>
                
                <div className="relative z-10 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <IconComponent 
                        className="w-7 h-7 text-white" 
                        strokeWidth={2.5}
                      />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="text-lg lg:text-xl font-leto font-bold text-verde-musgo leading-tight mb-3">
                        {bonus.title}
                      </h4>
                      
                      <p className="text-foreground/80 leading-relaxed text-sm lg:text-base">
                        {bonus.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Subtle hover effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </div>
            );
          })}
        </div>


        {/* Floating decorative elements */}
        <div className="absolute top-10 left-10 w-6 h-6 bg-primary/20 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute bottom-20 right-16 w-4 h-4 bg-accent/30 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute top-1/2 left-8 w-3 h-3 bg-secondary/40 rounded-full animate-pulse opacity-40"></div>
      </div>
    </section>
  );
};

export default BonusSection;