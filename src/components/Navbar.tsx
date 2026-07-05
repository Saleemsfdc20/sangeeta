"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "home" },
  { name: "Gallery", href: "gallery" },
  { name: "Services", href: "services" },
  { name: "Classes", href: "classes" },
  { name: "Reviews", href: "reviews" },
  { name: "About", href: "about" },
  { name: "Contact", href: "contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // Add background filter after 50px of scroll
      setIsScrolled(window.scrollY > 50);

      // Simple active link detection
      const sections = navLinks.map(link => document.getElementById(link.href));
      const scrollPosition = window.scrollY + 120; // offset navbar height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].href);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
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
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "glass-panel py-4 shadow-sm"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick("home")}
            className="flex flex-col items-start focus:outline-none"
          >
            <span className="font-cormorant text-2xl md:text-3xl tracking-[0.15em] font-bold text-luxury-gold uppercase leading-none">
              Sangeeta
            </span>
            <span className="font-poppins text-[9px] md:text-[10px] tracking-[0.3em] text-luxury-coffee/70 dark:text-luxury-cream/70 uppercase font-light mt-1">
              Mehndi & Makeup
            </span>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={`font-poppins text-xs uppercase tracking-widest transition-colors duration-300 relative py-1 ${
                  activeSection === link.href
                    ? "text-luxury-gold font-medium"
                    : "text-luxury-coffee/80 dark:text-luxury-cream/80 hover:text-luxury-gold"
                }`}
              >
                {link.name}
                {activeSection === link.href && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-luxury-gold"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* CTAs */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="tel:+919820098200" // Placeholder phone
              className="p-2.5 rounded-full border border-luxury-gold/30 hover:border-luxury-gold hover:text-luxury-gold text-luxury-coffee dark:text-luxury-cream transition-all duration-300"
              title="Call Sangeeta"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => handleNavClick("contact")}
              className="flex items-center gap-2 font-poppins text-xs font-semibold uppercase tracking-widest text-white bg-luxury-gold hover:bg-luxury-gold/90 px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <Calendar className="w-3.5 h-3.5" />
              Book Now
            </button>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-luxury-coffee dark:text-luxury-cream focus:outline-none p-1"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[76px] z-40 lg:hidden glass-panel py-6 px-6 border-b shadow-lg flex flex-col gap-4 max-h-[calc(100vh-80px)] overflow-y-auto"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`w-full text-left font-poppins text-sm uppercase tracking-widest py-2 border-b border-luxury-coffee/5 dark:border-luxury-cream/5 transition-colors ${
                    activeSection === link.href
                      ? "text-luxury-gold font-bold"
                      : "text-luxury-coffee/70 dark:text-luxury-cream/70 hover:text-luxury-gold"
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>

            <div className="flex flex-col sm:hidden gap-3 mt-4 pt-4 border-t border-luxury-coffee/10 dark:border-luxury-cream/10">
              <a
                href="tel:+919820098200"
                className="flex items-center justify-center gap-2 font-poppins text-xs font-semibold uppercase tracking-widest border border-luxury-gold/50 text-luxury-coffee dark:text-luxury-cream py-3.5 rounded-full"
              >
                <Phone className="w-3.5 h-3.5" />
                Call Now
              </a>
              <button
                onClick={() => handleNavClick("contact")}
                className="flex items-center justify-center gap-2 font-poppins text-xs font-semibold uppercase tracking-widest text-white bg-luxury-gold py-3.5 rounded-full shadow-md"
              >
                <Calendar className="w-3.5 h-3.5" />
                Book Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
