"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide preloader after 2.5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-luxury-coffee"
        >
          {/* Animated SVG Mandala/Paisley Pattern */}
          <div className="relative w-40 h-40 flex items-center justify-center">
            {/* Background glowing circle */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.15 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute inset-0 rounded-full bg-luxury-gold filter blur-xl"
            />
            
            <svg
              className="w-32 h-32 text-luxury-gold"
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Central Lotus / Flower */}
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                d="M50 50 C45 35, 55 35, 50 50 Z"
              />
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.4 }}
                d="M50 50 C35 45, 35 55, 50 50 Z"
              />
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.6 }}
                d="M50 50 C55 65, 45 65, 50 50 Z"
              />
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.8 }}
                d="M50 50 C65 55, 65 45, 50 50 Z"
              />
              
              {/* Surrounding Petals / Vines */}
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                d="M50 25 C60 15, 75 30, 50 45 C25 30, 40 15, 50 25"
              />
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut", delay: 0.7 }}
                d="M50 75 C60 85, 75 70, 50 55 C25 70, 40 85, 50 75"
              />
              
              {/* Outer Mandala Circle */}
              <motion.circle
                cx="50"
                cy="50"
                r="45"
                strokeDasharray="4 4"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
              <motion.circle
                cx="50"
                cy="50"
                r="40"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              />
            </svg>
          </div>

          {/* Typography */}
          <div className="mt-8 text-center overflow-hidden">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
              className="font-cormorant text-3xl md:text-4xl tracking-[0.2em] text-luxury-gold uppercase font-bold"
            >
              Sangeeta
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 0.8 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
              className="mt-2 font-poppins text-xs md:text-sm tracking-[0.3em] text-luxury-cream uppercase font-light"
            >
              Mehndi & Makeup Artist
            </motion.p>
          </div>

          {/* Golden Line Loader */}
          <div className="absolute bottom-12 left-0 right-0 flex justify-center">
            <div className="w-48 h-[1px] bg-luxury-cream/20 overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 2, ease: "easeInOut", repeat: 0 }}
                className="w-full h-full bg-luxury-gold"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
