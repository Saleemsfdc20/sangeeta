"use client";

import { motion } from "framer-motion";
import { Star, MessageSquareQuote } from "lucide-react";

interface Review {
  name: string;
  role: string;
  text: string;
  rating: number;
  source: string;
}

const reviewsList: Review[] = [
  {
    name: "Aditi Sharma",
    role: "Premium Portrait Bride",
    text: "Sangeeta created the most beautiful portrait mehndi for my wedding! The couple drawing looked exactly like us. The organic henna stain was so dark and lasted for two weeks. Absolutely amazing!",
    rating: 5,
    source: "Google Reviews"
  },
  {
    name: "Meera Patel",
    role: "Bridal Makeup Client",
    text: "I booked Sangeeta for both my mehndi and bridal makeup. She did an outstanding job! The makeup was flawless, felt so light, and photographed beautifully. My family loved her professional attitude.",
    rating: 5,
    source: "Google Reviews"
  },
  {
    name: "Pooja Mehta",
    role: "Academy Student Graduate",
    text: "Joined the 30-day professional course at Sangeeta Academy. She is a wonderful teacher, explaining line work and pressure control so patiently. Now I am taking bookings independently!",
    rating: 5,
    source: "Google Reviews"
  },
  {
    name: "Sneha Rao",
    role: "Sangeet Bride",
    text: "Sangeeta and her team are very professional. They arrived on time at our sangeet venue and completed mehndi for 20 guests so quickly and beautifully. The homemade organic cones smell amazing!",
    rating: 5,
    source: "Google Reviews"
  },
  {
    name: "Divya Nair",
    role: "Engagement Bride",
    text: "Excellent service! Sangeeta is very patient and friendly. She customized a gorgeous Rajasthani-Arabic fusion design for my sangeet. The color turned out deep mahogany. 5 stars!",
    rating: 5,
    source: "Google Reviews"
  }
];

export default function Reviews() {
  // Duplicate list to create a seamless infinite marquee effect
  const doubleReviews = [...reviewsList, ...reviewsList];

  return (
    <section id="reviews" className="py-24 bg-luxury-cream dark:bg-luxury-coffee overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-poppins text-xs font-semibold uppercase tracking-[0.3em] text-luxury-gold">
            Client Love
          </span>
          <h2 className="font-cormorant text-4xl md:text-5xl font-bold tracking-wide text-luxury-coffee dark:text-luxury-cream uppercase mt-3">
            What Our Brides Say
          </h2>
          <div className="w-16 h-[1.5px] bg-luxury-gold mx-auto mt-4" />
          
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 mt-6 bg-white dark:bg-luxury-coffee/60 border border-luxury-gold/25 px-5 py-2.5 rounded-full shadow-sm">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-luxury-gold text-luxury-gold" />
              ))}
            </div>
            <span className="font-poppins text-xs text-luxury-coffee/85 dark:text-luxury-cream/85 font-semibold">
              5.0 Star Rating (254+ Google Reviews)
            </span>
          </div>
        </div>

        {/* Infinite Horizontal Marquee */}
        <div className="relative w-full overflow-hidden py-4 mask-gradient-horizontal">
          <motion.div
            animate={{
              x: [0, -1700], // Adjust based on total card width
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 35,
                ease: "linear",
              },
            }}
            className="flex gap-6 w-max"
          >
            {doubleReviews.map((review, index) => (
              <div
                key={index}
                className="w-[340px] sm:w-[380px] bg-white dark:bg-luxury-coffee/40 border border-luxury-brown/10 dark:border-luxury-gold/10 p-8 rounded-2xl flex flex-col justify-between hover:border-luxury-gold transition-all duration-300 shadow-sm"
              >
                <div>
                  {/* Rating stars & Quote Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-0.5">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-luxury-gold text-luxury-gold" />
                      ))}
                    </div>
                    <MessageSquareQuote className="w-6 h-6 text-luxury-gold/20" />
                  </div>

                  {/* Review text */}
                  <p className="font-poppins text-xs text-luxury-coffee/75 dark:text-luxury-cream/75 font-light leading-relaxed mb-6 italic">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>

                {/* Client info & Source */}
                <div className="flex items-center justify-between border-t border-luxury-brown/5 dark:border-luxury-gold/5 pt-5">
                  <div className="flex flex-col">
                    <span className="font-playfair text-sm font-bold text-luxury-coffee dark:text-luxury-cream">
                      {review.name}
                    </span>
                    <span className="font-poppins text-[9px] uppercase tracking-widest text-luxury-coffee/45 dark:text-luxury-cream/45 mt-0.5">
                      {review.role}
                    </span>
                  </div>
                  
                  <span className="font-poppins text-[9px] uppercase tracking-widest bg-luxury-gold/10 text-luxury-gold px-2.5 py-1 rounded-full font-semibold">
                    {review.source}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
