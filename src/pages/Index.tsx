import HeroSection from "@/components/HeroSection";
import NewBenefitsSection from "@/components/NewBenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import EmotionalTextSection from "@/components/EmotionalTextSection";

import ProductFeaturesSection from "@/components/ProductFeaturesSection";
import BonusSection from "@/components/BonusSection";

import FAQSection from "@/components/FAQSection";

import FinalOfferSection from "@/components/FinalOfferSection";
import GuaranteeConversionSection from "@/components/GuaranteeConversionSection";
import WhatsAppSupportSection from "@/components/WhatsAppSupportSection";
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
      <WhatsAppSupportSection />
      <Footer />
      <FloatingElements />
    </div>
  );
};

export default Index;
