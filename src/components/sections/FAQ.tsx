"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqList: FAQItem[] = [
  {
    question: "How much does bridal mehndi cost?",
    answer: "Our bridal mehndi packages range from ₹11,000 to ₹31,000 depending on the design density, length (forearm, elbow, or bicep), and details like custom couple portraits. View our detailed pricing section above or contact Sangeeta for a custom quote."
  },
  {
    question: "Do you provide home service?",
    answer: "Yes, we provide luxury home services. Sangeeta and her team will travel directly to your residence, hotel suite, or wedding venue in Chembur, Mumbai, and internationally. Travel fee varies by distance."
  },
  {
    question: "How early should I book my slot?",
    answer: "For wedding season dates, we recommend booking 3 to 6 months in advance. Since Sangeeta only takes one primary bride per day to maintain premium quality, slots are highly limited and fill up rapidly."
  },
  {
    question: "Do you travel outside Mumbai?",
    answer: "Yes, we travel all across India and internationally for destination weddings. Travel, lodging, and logistics expenses are borne by the client for locations outside Mumbai."
  },
  {
    question: "How long does bridal mehndi take to apply?",
    answer: "A standard elbow-length bridal mehndi takes about 4 to 5 hours. Portrait mehndi with custom wedding scenes can take 6 to 7 hours. Sangeeta and her assistants work efficiently to make sure you are comfortable."
  },
  {
    question: "What is included in the academy classes?",
    answer: "Our classes include a professional materials toolkit (practice pad, raw henna powders, oils, and cones), hands-on instruction from Sangeeta, registered academy certification, portfolio photoshoot training, and career launch mentoring."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-luxury-beige/50 dark:bg-luxury-coffee/40">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="font-poppins text-xs font-semibold uppercase tracking-[0.3em] text-luxury-gold">
            Support Center
          </span>
          <h2 className="font-cormorant text-4xl md:text-5xl font-bold tracking-wide text-luxury-coffee dark:text-luxury-cream uppercase mt-3">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-[1.5px] bg-luxury-gold mx-auto mt-4" />
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqList.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white dark:bg-luxury-coffee/40 border border-luxury-brown/10 dark:border-luxury-gold/10 rounded-2xl overflow-hidden transition-all duration-300"
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-playfair text-base font-bold text-luxury-coffee dark:text-luxury-cream pr-4">
                    {item.question}
                  </span>
                  
                  <div className="p-1 rounded-full bg-luxury-cream dark:bg-luxury-coffee border border-luxury-gold/20 shrink-0">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-luxury-gold" />
                    ) : (
                      <Plus className="w-4 h-4 text-luxury-gold" />
                    )}
                  </div>
                </button>

                {/* Accordion Content Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-8 pb-6 border-t border-luxury-brown/5 dark:border-luxury-gold/5 pt-4">
                        <p className="font-poppins text-xs text-luxury-coffee/70 dark:text-luxury-cream/70 font-light leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
