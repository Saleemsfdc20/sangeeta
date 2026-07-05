"use client";

import { useEffect, useState } from "react";
import { Phone, MessageSquare, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingCTAs() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating actions after 300px of scroll
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBookClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* 1. Floating Desktop WhatsApp CTA */}
      <AnimatePresence>
        {isVisible && (
          <motion.a
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            href="https://wa.me/919820098200?text=Hi%20Sangeeta,%20I'd%20love%20to%20inquire%20about%20booking%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-20 sm:bottom-6 right-6 z-50 p-4 rounded-full bg-emerald-500 text-white shadow-2xl hover:bg-emerald-600 transition-all duration-300 hover:scale-110 flex items-center justify-center group"
            title="Chat with Sangeeta"
          >
            {/* Custom pulse ring animation */}
            <span className="absolute inset-0 rounded-full bg-emerald-500/30 animate-[pulseGold_2s_infinite]" />
            <MessageSquare className="w-6 h-6 fill-white text-white relative z-10" />
            
            {/* Tooltip */}
            <span className="absolute right-14 bg-luxury-coffee text-luxury-cream text-[10px] uppercase tracking-widest font-semibold px-3 py-1.5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-md border border-luxury-gold/20">
              Chat on WhatsApp
            </span>
          </motion.a>
        )}
      </AnimatePresence>

      {/* 2. Mobile Sticky Bottom CTAs */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden glass-panel border-t shadow-[0_-5px_15px_rgba(0,0,0,0.05)] grid grid-cols-3 gap-0 px-2 py-3">
        {/* Call CTA */}
        <a
          href="tel:+919820098200"
          className="flex flex-col items-center justify-center text-luxury-coffee dark:text-luxury-cream hover:text-luxury-gold border-r border-luxury-coffee/5 dark:border-luxury-cream/5"
        >
          <Phone className="w-5 h-5 mb-1" />
          <span className="font-poppins text-[9px] uppercase tracking-wider font-medium">Call Now</span>
        </a>

        {/* WhatsApp CTA */}
        <a
          href="https://wa.me/919820098200?text=Hi%20Sangeeta,%20I%20would%20like%20to%20inquire%20about%20booking%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center text-emerald-600 hover:text-emerald-500 border-r border-luxury-coffee/5 dark:border-luxury-cream/5"
        >
          <MessageSquare className="w-5 h-5 mb-1 fill-emerald-600/10" />
          <span className="font-poppins text-[9px] uppercase tracking-wider font-medium">WhatsApp</span>
        </a>

        {/* Book Now Scroll CTA */}
        <button
          onClick={handleBookClick}
          className="flex flex-col items-center justify-center text-luxury-gold hover:text-luxury-gold/90"
        >
          <Calendar className="w-5 h-5 mb-1" />
          <span className="font-poppins text-[9px] uppercase tracking-wider font-bold">Book Now</span>
        </button>
      </div>
    </>
  );
}
