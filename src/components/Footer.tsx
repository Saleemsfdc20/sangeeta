"use client";

import { Star, Phone, MessageSquare, Heart } from "lucide-react";

export default function Footer() {
  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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
    <footer className="bg-luxury-coffee text-luxury-cream border-t border-luxury-gold/15 py-16 relative">
      {/* Golden Pattern Accent Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#C9A227_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        
        {/* Brand column */}
        <div className="md:col-span-4 space-y-6">
          <button
            onClick={() => handleNavClick("home")}
            className="flex flex-col items-start focus:outline-none"
          >
            <span className="font-cormorant text-2xl md:text-3xl tracking-[0.15em] font-bold text-luxury-gold uppercase leading-none">
              Sangeeta
            </span>
            <span className="font-poppins text-[9px] md:text-[10px] tracking-[0.3em] text-luxury-cream/70 uppercase font-light mt-1">
              Mehndi & Makeup
            </span>
          </button>
          
          <p className="font-poppins text-xs text-luxury-cream/70 font-light leading-relaxed max-w-sm">
            Creating beautiful memories, one mehndi design at a time. Serving brides in Mumbai and worldwide with premium organic henna cones.
          </p>

          {/* Google rating trust stamp */}
          <div className="flex items-center gap-2 bg-white/5 border border-luxury-gold/20 p-3 rounded-xl w-fit">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-luxury-gold text-luxury-gold" />
              ))}
            </div>
            <span className="font-poppins text-[10px] font-semibold text-luxury-cream/90 uppercase tracking-wider">
              5.0 Star Rated (254 Reviews)
            </span>
          </div>
        </div>

        {/* Quick links column */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="font-playfair text-sm font-bold text-luxury-gold uppercase tracking-wider">
            Quick Links
          </h4>
          <ul className="space-y-2.5">
            {[
              { name: "Home", href: "home" },
              { name: "Gallery Portfolio", href: "gallery" },
              { name: "Services Catalog", href: "services" },
              { name: "Training Classes", href: "classes" },
              { name: "Reviews / Testimonials", href: "reviews" },
              { name: "About Sangeeta", href: "about" },
              { name: "Contact & Booking", href: "contact" }
            ].map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="font-poppins text-xs text-luxury-cream/70 hover:text-luxury-gold transition-colors font-light"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Services column */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="font-playfair text-sm font-bold text-luxury-gold uppercase tracking-wider">
            Our Services
          </h4>
          <ul className="space-y-2.5 font-poppins text-xs text-luxury-cream/70 font-light">
            <li>Royal Bridal Mehndi</li>
            <li>Intricate Portrait Henna</li>
            <li>Bold Arabic Stroke Art</li>
            <li>HD Wedding Day Makeup</li>
            <li>Party Makeup & Draping</li>
            <li>Professional Academy Classes</li>
          </ul>
        </div>

        {/* Connect column */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="font-playfair text-sm font-bold text-luxury-gold uppercase tracking-wider">
            Connect
          </h4>
          <div className="flex gap-3">
            <a
              href="https://wa.me/919820098200"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 hover:bg-luxury-gold hover:text-white rounded-full transition-all duration-300 border border-white/10"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-4 h-4 fill-current text-luxury-cream" />
            </a>
            <a
              href="tel:+919820098200"
              className="p-3 bg-white/5 hover:bg-luxury-gold hover:text-white rounded-full transition-all duration-300 border border-white/10"
              title="Call Sangeeta"
            >
              <Phone className="w-4 h-4 text-luxury-cream" />
            </a>
            <a
              href="https://instagram.com/sangeeta_mehndi_makeup" // Placeholder instagram
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 hover:bg-luxury-gold hover:text-white rounded-full transition-all duration-300 border border-white/10 flex items-center justify-center"
              title="Follow Sangeeta on Instagram"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-luxury-cream"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
          </div>
        </div>

      </div>

      {/* Copyright row */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-poppins text-[10px] text-luxury-cream/40 font-light text-center sm:text-left">
          &copy; {new Date().getFullYear()} Sangeeta Professional Mehndi & Makeup. All rights reserved.
        </span>
        
        <span className="font-poppins text-[10px] text-luxury-cream/40 font-light flex items-center gap-1.5 justify-center">
          Crafting memories with <Heart className="w-3 h-3 text-red-500 fill-red-500 animate-pulse" /> in Mumbai.
        </span>
      </div>
    </footer>
  );
}
