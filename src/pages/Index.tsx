import HeroSection from "@/components/HeroSection";
import NewBenefitsSection from "@/components/NewBenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import EmotionalTextSection from "@/components/EmotionalTextSection";

import ProductFeaturesSection from "@/components/ProductFeaturesSection";
import BonusSection from "@/components/BonusSection";

import FAQSection from "@/components/FAQSection";

import FinalOfferSection from "@/components/FinalOfferSection";
import GuaranteeConversionSection from "@/components/GuaranteeConversionSection";

import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <TestimonialsSection />
      <EmotionalTextSection />
      <NewBenefitsSection />
      
      
      <BonusSection />
      <ProductFeaturesSection />
      
      
      <FinalOfferSection />
      <GuaranteeConversionSection />
      <FAQSection />
      
      {/* Logo Section */}
      <section className="py-8 px-4 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <img 
            src="/lovable-uploads/e358c00f-4982-4f66-8118-77f2115d0ee1.png"
            alt="Domus 2025 - Lares firmados na fé e no amor"
            className="w-64 md:w-80 h-auto mx-auto opacity-90"
          />
        </div>
      </section>
      
      <Footer />
      <FloatingElements />
    </div>
  );
};

export default Index;
