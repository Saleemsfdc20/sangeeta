"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Heart, ShieldCheck, MapPin } from "lucide-react";

interface CounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

function Counter({ value, suffix = "", duration = 2 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const totalMiliseconds = duration * 1000;
    const stepTime = Math.max(Math.floor(totalMiliseconds / end), 15);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / (totalMiliseconds / stepTime));
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="font-cormorant text-4xl sm:text-5xl font-bold text-luxury-gold">
      {count}
      {suffix}
    </span>
  );
}

const timeline = [
  {
    year: "2014",
    title: "The Creative Spark",
    description: "Started freelance mehndi styling in Chembur, Mumbai, creating signature handmade cones for friends and family."
  },
  {
    year: "2017",
    title: "Makeup Artistry Expansion",
    description: "Certified in professional bridal makeup, expanding the brand to offer complete, harmonious bridal beauty packages."
  },
  {
    year: "2019",
    title: "Academy Foundation",
    description: "Launched the Sangeeta Professional Mehndi Academy, teaching young aspirants the details of henna stroke art."
  },
  {
    year: "2023",
    title: "Milestone Achievements",
    description: "Named one of Mumbai's top-rated henna artists on Google, reaching a landmark 1,000+ bridal bookings."
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-luxury-cream dark:bg-luxury-coffee">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="font-poppins text-xs font-semibold uppercase tracking-[0.3em] text-luxury-gold">
            Our Story
          </span>
          <h2 className="font-cormorant text-4xl md:text-5xl font-bold tracking-wide text-luxury-coffee dark:text-luxury-cream uppercase mt-3">
            About Sangeeta
          </h2>
          <div className="w-16 h-[1.5px] bg-luxury-gold mx-auto mt-4" />
        </div>

        {/* Story Intro Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          
          {/* Left: Large Portrait Display */}
          <div className="lg:col-span-5 relative">
            {/* Background design accents */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-luxury-gold/30 rounded-tl-3xl pointer-events-none hidden sm:block" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-luxury-gold/30 rounded-br-3xl pointer-events-none hidden sm:block" />
            
            {/* Floating details badge */}
            <div className="absolute bottom-6 left-6 z-10 glass-panel px-5 py-3.5 rounded-2xl flex items-center gap-3 shadow-lg border border-luxury-gold/20">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <div className="flex flex-col">
                <span className="font-poppins text-[9px] uppercase tracking-widest text-luxury-coffee/40 dark:text-luxury-cream/40 font-semibold">Available for bookings</span>
                <span className="font-poppins text-xs font-bold text-luxury-coffee dark:text-luxury-cream">Mumbai & Worldwide</span>
              </div>
            </div>

            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-luxury-brown/10 dark:border-luxury-gold/10">
              <Image
                src="/img/optimized/full-unnamed (16).webp"
                alt="Sangeeta Bridal Portrait Artistry"
                fill
                className="object-cover select-none no-download"
                onContextMenu={(e) => e.preventDefault()}
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
            </div>
          </div>

          {/* Right: Personal Bio & Mission */}
          <div className="lg:col-span-7 space-y-8">
            <span className="font-poppins text-[10px] font-bold uppercase tracking-widest text-luxury-gold flex items-center gap-2">
              <Heart className="w-3.5 h-3.5" />
              Creating Memories since 2014
            </span>
            
            <h3 className="font-playfair text-3xl md:text-4xl font-bold text-luxury-coffee dark:text-luxury-cream leading-tight">
              Crafting Elegant Henna and Radiant Makeup for Your Special Day
            </h3>

            <p className="font-poppins text-sm text-luxury-coffee/70 dark:text-luxury-cream/70 font-light leading-relaxed">
              Hello, I&apos;m Sangeeta. My journey with mehndi started as a passion for traditional art, which evolved into a professional career spanning over a decade. I believe mehndi is not just a stain; it is a sacred wedding ritual that holds memories, emotions, and vows. 
            </p>

            <p className="font-poppins text-sm text-luxury-coffee/70 dark:text-luxury-cream/70 font-light leading-relaxed">
              By combining dense Rajasthani patterns with modern bold Arabic outlines, I specialize in creating custom bridal designs that reflect your individual style. In addition to mehndi, my bridal makeup services ensure you look like the most radiant version of yourself on your wedding day.
            </p>

            {/* Mission & Vision grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-luxury-brown/5 dark:border-luxury-gold/5">
              <div>
                <h4 className="font-playfair text-base font-bold text-luxury-gold flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  Our Mission
                </h4>
                <p className="font-poppins text-xs text-luxury-coffee/65 dark:text-luxury-cream/65 font-light leading-relaxed mt-2">
                  To provide a premium, hygienic, and stress-free bridal service using 100% home-made organic chemical-free henna cones.
                </p>
              </div>
              
              <div>
                <h4 className="font-playfair text-base font-bold text-luxury-gold flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Our Vision
                </h4>
                <p className="font-poppins text-xs text-luxury-coffee/65 dark:text-luxury-cream/65 font-light leading-relaxed mt-2">
                  To nurture and inspire the next generation of professional henna artists through our certified academy courses.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Banner */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 bg-white dark:bg-luxury-coffee/40 border border-luxury-brown/10 dark:border-luxury-gold/10 p-10 rounded-3xl shadow-sm mb-24 text-center">
          <div className="flex flex-col items-center">
            <Counter value={254} suffix="+" />
            <span className="font-poppins text-[10px] sm:text-xs font-semibold tracking-wider text-luxury-coffee/60 dark:text-luxury-cream/60 uppercase mt-2">
              Google Reviews
            </span>
          </div>
          
          <div className="flex flex-col items-center">
            <Counter value={1000} suffix="+" />
            <span className="font-poppins text-[10px] sm:text-xs font-semibold tracking-wider text-luxury-coffee/60 dark:text-luxury-cream/60 uppercase mt-2">
              Happy Brides
            </span>
          </div>

          <div className="flex flex-col items-center">
            <Counter value={500} suffix="+" />
            <span className="font-poppins text-[10px] sm:text-xs font-semibold tracking-wider text-luxury-coffee/60 dark:text-luxury-cream/60 uppercase mt-2">
              Students Trained
            </span>
          </div>

          <div className="flex flex-col items-center">
            <Counter value={10} suffix="+" />
            <span className="font-poppins text-[10px] sm:text-xs font-semibold tracking-wider text-luxury-coffee/60 dark:text-luxury-cream/60 uppercase mt-2">
              Years Experience
            </span>
          </div>
        </div>

        {/* Timeline Story Journey */}
        <div className="max-w-3xl mx-auto">
          <h3 className="font-playfair text-2xl font-bold text-center text-luxury-coffee dark:text-luxury-cream uppercase mb-12">
            Academy & Brand Timeline
          </h3>

          <div className="relative border-l border-luxury-gold/30 ml-4 md:ml-32 pl-8 md:pl-12 space-y-12">
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative"
              >
                {/* Year Indicator left (desktop) */}
                <div className="absolute top-0 -left-[140px] md:flex items-center justify-end w-24 hidden">
                  <span className="font-cormorant text-2xl font-bold text-luxury-gold">
                    {item.year}
                  </span>
                </div>

                {/* Dot */}
                <div className="absolute top-1.5 -left-[41px] md:-left-[57px] w-4 h-4 rounded-full bg-luxury-cream dark:bg-luxury-coffee border-2 border-luxury-gold flex items-center justify-center z-10">
                  <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />
                </div>

                {/* Mobile Year Badge */}
                <span className="inline-block md:hidden font-cormorant text-xl font-bold text-luxury-gold mb-1">
                  {item.year}
                </span>

                {/* Content */}
                <h4 className="font-playfair text-lg font-bold text-luxury-coffee dark:text-luxury-cream">
                  {item.title}
                </h4>
                <p className="font-poppins text-xs text-luxury-coffee/70 dark:text-luxury-cream/70 font-light leading-relaxed mt-2">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
