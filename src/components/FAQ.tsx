import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services does Biodoctor Solutions offer?",
    answer: "We offer comprehensive biomedical equipment services including installation, maintenance, repair, calibration, and training. Our expertise covers a wide range of medical devices from diagnostic equipment to therapeutic systems."
  },
  {
    question: "How quickly can you respond to emergency repairs?",
    answer: "We provide 24/7 emergency support with typical response times of 2-4 hours for critical equipment. Our team of certified technicians is strategically located to ensure rapid response across our service areas."
  },
  {
    question: "Do you offer preventive maintenance contracts?",
    answer: "Yes, we offer flexible preventive maintenance contracts tailored to your facility's needs. These contracts help reduce downtime, extend equipment life, and ensure compliance with regulatory requirements."
  },
  {
    question: "What certifications do your technicians hold?",
    answer: "Our technicians are certified by leading equipment manufacturers and hold relevant industry certifications. We invest continuously in training to stay current with the latest technologies and best practices."
  },
  {
    question: "Can you service equipment from multiple manufacturers?",
    answer: "Absolutely. We are multi-vendor certified and can service equipment from virtually all major biomedical equipment manufacturers, providing you with a single point of contact for all your service needs."
  },
  {
    question: "What geographic areas do you serve?",
    answer: "We provide services nationwide with regional offices strategically located for optimal coverage. Contact us to confirm service availability in your specific location."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our biomedical equipment services
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background rounded-lg border border-border px-6 shadow-soft animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
