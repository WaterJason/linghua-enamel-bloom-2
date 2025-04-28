
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { t } from "@/lib/i18n";
import { Link } from "react-router-dom";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  title?: string;
  showMoreLink?: boolean;
  className?: string;
}

const FAQSection = ({ 
  faqs, 
  title = t('faq.title'),
  showMoreLink = true,
  className = ""
}: FAQSectionProps) => {
  return (
    <section className={`py-16 ${className}`}>
      <div className="container-custom max-w-4xl">
        <h2 className="text-2xl md:text-3xl mb-8 text-center">{title}</h2>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>
                <div className="text-beige-700 pt-2" dangerouslySetInnerHTML={{ __html: faq.answer }} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        {showMoreLink && (
          <div className="mt-8 text-center">
            <Link to="/faq" className="text-seal-600 hover:text-seal-700 font-medium">
              {t('faq.more')} &rarr;
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQSection;
