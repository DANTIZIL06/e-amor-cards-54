import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const faqs = [{
  question: "O material é para alguma religião específica?",
  answer: "Não. É pautado na Palavra de Deus, não em doutrinas. Pode ser usado por pais de diferentes denominações cristãs."
}, {
  question: "Como receberei o material?",
  answer: "Totalmente digital (PDF). Após o pagamento, você receberá o acesso por e-mail."
}, {
  question: "Para qual idade é indicado?",
  answer: "Desde o ventre até a adolescência — enquanto os filhos estiverem em casa, os pais podem declarar bênçãos."
}, {
  question: "Terei suporte?",
  answer: "Sim! Dúvidas sobre download ou uso? Entre em contato com nosso suporte por e-mail."
}];
const FAQSection = () => {
  return <section className="py-8 sm:py-10 px-4 md:py-0 sm:px-[13px]">
      <div className="container mx-auto max-w-4xl py-0 rounded-2xl">
        {/* Título da seção */}
        <div className="text-center mb-8 sm:mb-10 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-musgo mb-3 sm:mb-4">
            Perguntas Frequentes
          </h2>
          
        </div>
        
        {/* Accordion FAQ */}
        <div className="animate-fade-in" style={{
        animationDelay: '0.2s'
      }}>
          <Accordion type="single" collapsible className="space-y-4 rounded-none px-0 mx-0">
            {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="bg-white shadow-[var(--shadow-card)] border-0 px-3 sm:px-4 md:px-6 mx-2 sm:mx-0 rounded">
                <AccordionTrigger className="text-left font-semibold text-musgo hover:no-underline py-3 sm:py-4 md:py-6 text-base sm:text-lg md:text-xl">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-3 sm:pb-4 md:pb-6 text-sm sm:text-base md:text-lg">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>
        </div>
      </div>
    </section>;
};
export default FAQSection;