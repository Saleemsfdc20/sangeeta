"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MessageSquare, PhoneCall, ChevronDown } from "lucide-react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Floating gold particles effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    class Particle {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      opacity: number;
      fadeSpeed: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = canvas!.height + Math.random() * 100;
        this.size = Math.random() * 2 + 0.5;
        this.speedY = -(Math.random() * 0.8 + 0.2);
        this.speedX = Math.random() * 0.4 - 0.2;
        this.opacity = Math.random() * 0.5 + 0.3;
        this.fadeSpeed = Math.random() * 0.005 + 0.002;
      }

      update() {
        this.y += this.speedY;
        this.x += this.speedX;
        this.opacity -= this.fadeSpeed;

        if (this.opacity <= 0 || this.y < -10) {
          this.x = Math.random() * canvas!.width;
          this.y = canvas!.height + 10;
          this.size = Math.random() * 2 + 0.5;
          this.opacity = Math.random() * 0.5 + 0.3;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201, 162, 39, ${this.opacity})`; // Gold color
        ctx.shadowBlur = 8;
        ctx.shadowColor = "#C9A227";
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }
    }

    const init = () => {
      particles = [];
      const count = Math.min(80, Math.floor(window.innerWidth / 15));
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
        // Randomize initial heights so they don't all start from bottom
        particles[i].y = Math.random() * canvas.height;
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
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
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-luxury-coffee"
    >
      {/* Background Image with Parallax & Ken Burns Effect */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105 animate-[pulseGold_20s_infinite_alternate]"
        style={{
          backgroundImage: "url('/img/optimized/full-unnamed.webp')",
        }}
      />

      {/* Luxury Radial/Linear Overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-luxury-coffee/60 via-luxury-coffee/70 to-luxury-coffee/95" />

      {/* Floating Canvas Particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-[2] pointer-events-none"
      />

      {/* Content Container */}
      <div className="relative z-[3] max-w-5xl mx-auto px-6 text-center text-white flex flex-col items-center justify-center h-full pt-20 sm:pt-0">
        
        {/* Subtle Gold Subtitle Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="mb-4 sm:mb-6 px-4 py-1.5 rounded-full border border-luxury-gold/40 bg-luxury-gold/10 backdrop-blur-md"
        >
          <span className="font-poppins text-[10px] md:text-xs tracking-[0.25em] text-luxury-gold font-semibold uppercase">
            Mumbai&apos;s Premium Bridal Artist
          </span>
        </motion.div>

        {/* Heading */}
        <div className="overflow-hidden mb-4 sm:mb-6">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            className="font-cormorant text-2xl sm:text-5xl md:text-7xl font-bold tracking-wide uppercase leading-[1.1] text-luxury-cream"
          >
            Your Wedding Begins <br className="hidden sm:inline" />
            With <span className="shimmer-text font-semibold font-playfair italic capitalize">Beautiful Mehndi</span>
          </motion.h1>
        </div>

        {/* Subheading */}
        <div className="overflow-hidden mb-6 sm:mb-12 max-w-2xl">
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 0.85 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
            className="font-poppins text-xs sm:text-sm md:text-lg tracking-[0.05em] text-luxury-cream/80 font-light leading-relaxed"
          >
            Professional Bridal Mehndi Artist & Makeup Specialist in Mumbai. Crafting intricate patterns of love and celebration for your special day.
          </motion.p>
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
        >
          <a
            href="https://wa.me/919820098200?text=Hi%20Sangeeta,%20I%20would%20like%20to%20inquire%20about%20booking%20your%20Bridal%20Mehndi/Makeup%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full sm:w-auto bg-luxury-gold hover:bg-luxury-gold/90 text-white font-poppins text-xs md:text-sm font-semibold uppercase tracking-[0.15em] px-8 py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            Book on WhatsApp
          </a>

          <button
            onClick={handleBookClick}
            className="flex items-center justify-center gap-3 w-full sm:w-auto border border-luxury-cream/35 hover:border-luxury-gold hover:bg-luxury-gold/10 text-luxury-cream font-poppins text-xs md:text-sm font-semibold uppercase tracking-[0.15em] px-8 py-4 rounded-full transition-all duration-300"
          >
            <PhoneCall className="w-4 h-4" />
            Inquire Now
          </button>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: [0, 1, 0], y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        className="absolute bottom-10 z-[3] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer text-luxury-cream/50 hover:text-luxury-gold transition-colors duration-300"
        onClick={() => {
          const gallery = document.getElementById("gallery");
          if (gallery) {
            gallery.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        <span className="font-poppins text-[10px] uppercase tracking-[0.2em] font-light">Scroll</span>
        <ChevronDown className="w-4 h-4" />
      </motion.div>
    </section>
  );
}
