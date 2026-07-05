"use client";

import { motion } from "framer-motion";
import { CalendarRange, HeartHandshake, FileCheck, Sparkles, Droplet, PartyPopper } from "lucide-react";

interface Step {
  num: string;
  title: string;
  icon: React.ReactNode;
  description: string;
}

const steps: Step[] = [
  {
    num: "01",
    title: "Book Slot",
    icon: <CalendarRange className="w-6 h-6 text-luxury-gold" />,
    description: "Submit our booking inquiry form or message Sangeeta on WhatsApp to secure your wedding date."
  },
  {
    num: "02",
    title: "Consultation",
    icon: <HeartHandshake className="w-6 h-6 text-luxury-gold" />,
    description: "We discuss your bridal dress silhouette, jewelry metal tones, and any custom portrait requests."
  },
  {
    num: "03",
    title: "Design Selection",
    icon: <FileCheck className="w-6 h-6 text-luxury-gold" />,
    description: "Choose from our traditional library or plan customized elements (like groom names, portraits)."
  },
  {
    num: "04",
    title: "Henna Session",
    icon: <Sparkles className="w-6 h-6 text-luxury-gold" />,
    description: "Sangeeta applies the mehndi at your home or hotel using fresh organic lavender-scented cones."
  },
  {
    num: "05",
    title: "Aftercare Setup",
    icon: <Droplet className="w-6 h-6 text-luxury-gold" />,
    description: "Application of lemon-sugar sealant spray and organic oils to lock in moisture and stain deeply."
  },
  {
    num: "06",
    title: "Wedding Ready",
    icon: <PartyPopper className="w-6 h-6 text-luxury-gold" />,
    description: "Wake up 24-48 hours later with a rich mahogany bridal stain, ready to walk down the aisle!"
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-luxury-beige/50 dark:bg-luxury-coffee/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-24">
          <span className="font-poppins text-xs font-semibold uppercase tracking-[0.3em] text-luxury-gold">
            Our Workflow
          </span>
          <h2 className="font-cormorant text-4xl md:text-5xl font-bold tracking-wide text-luxury-coffee dark:text-luxury-cream uppercase mt-3">
            The Bridal Process
          </h2>
          <div className="w-16 h-[1.5px] bg-luxury-gold mx-auto mt-4" />
          <p className="font-poppins text-sm text-luxury-coffee/70 dark:text-luxury-cream/70 font-light mt-4 leading-relaxed">
            From initial consultation to the deep mahogany stain reveal, here is how we make your bridal mehndi experience perfect.
          </p>
        </div>

        {/* Steps Grid with connecting animation line */}
        <div className="relative">
          {/* Connecting Line (Horizontal on large screens) */}
          <div className="absolute top-[52px] left-[10%] right-[10%] h-[2px] bg-luxury-gold/15 dark:bg-luxury-gold/10 hidden lg:block z-0">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
              className="h-full bg-luxury-gold"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-6 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Step Icon circle wrapper */}
                <div className="relative w-24 h-24 flex items-center justify-center rounded-full bg-white dark:bg-luxury-coffee border border-luxury-brown/10 dark:border-luxury-gold/15 group-hover:border-luxury-gold group-hover:scale-105 shadow-sm group-hover:shadow-lg transition-all duration-300">
                  {/* Step number badge */}
                  <span className="absolute -top-1 -right-1 bg-luxury-gold text-white font-poppins text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                    {step.num}
                  </span>
                  
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="font-playfair text-base font-bold text-luxury-coffee dark:text-luxury-cream mt-6 group-hover:text-luxury-gold transition-colors duration-300">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="font-poppins text-[11px] text-luxury-coffee/60 dark:text-luxury-cream/60 font-light leading-relaxed mt-2 px-2 max-w-[200px]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
