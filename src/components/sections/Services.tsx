"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  Heart, 
  Flower2, 
  UserRound, 
  Calendar, 
  Palette, 
  Brush, 
  BookOpen, 
  Home, 
  Clock, 
  CheckCircle, 
  IndianRupee, 
  X, 
  MessageSquare 
} from "lucide-react";

interface Service {
  id: string;
  title: string;
  icon: React.ReactNode;
  shortDesc: string;
  longDesc: string;
  duration: string;
  price: string;
  includes: string[];
}

const servicesList: Service[] = [
  {
    id: "bridal-mehndi",
    title: "Professional Bridal Mehndi",
    icon: <Heart className="w-6 h-6 text-luxury-gold" />,
    shortDesc: "Royal, full-coverage traditional designs celebrating your love story up to the elbows or shoulders.",
    longDesc: "Our signature Bridal Mehndi service is tailored specifically to each bride. We create a custom wedding story on your hands using traditional patterns, personalized symbols, hidden names, and wedding motifs. All applications use 100% organic, hand-rolled mehndi cones prepared fresh by Sangeeta.",
    duration: "4 - 6 Hours",
    price: "₹11,000 - ₹31,000",
    includes: [
      "Custom pre-wedding design consultation",
      "Freshly prepared organic henna cones (no chemical dyes)",
      "Essential oils application for rich color release",
      "Traditional aftercare instructions & sugar-lemon sealant spray",
      "Complimentary minimal design for the groom",
    ]
  },
  {
    id: "arabic-mehndi",
    title: "Arabic Mehndi",
    icon: <Flower2 className="w-6 h-6 text-luxury-gold" />,
    shortDesc: "Bold leaf outlines, flowing floral chains, and negative space geometry.",
    longDesc: "Characterized by its thick, dark outlines, diagonal flowing paths, and open spaces, Arabic Mehndi is modern, striking, and incredibly elegant. Ideal for bridesmaids, festivals, and close family members who prefer a chic look.",
    duration: "1 - 2 Hours",
    price: "₹2,500 onwards",
    includes: [
      "Bold floral and leafy chain elements",
      "Contemporary negative-spacing designs",
      "Quick-stain application techniques",
      "Homemade organic henna cones",
    ]
  },
  {
    id: "indo-arabic-mehndi",
    title: "Indo Arabic Mehndi",
    icon: <Sparkles className="w-6 h-6 text-luxury-gold" />,
    shortDesc: "A master fusion of delicate Indian fillings and bold Arabic shading.",
    longDesc: "The perfect middle ground between traditional Indian density and Arabic modernism. This design blends intricate net-patterns (jaal), paisleys, and fine lines with bold floral border overlays to create a rich dimensional aesthetic.",
    duration: "2 - 3 Hours",
    price: "₹4,500 onwards",
    includes: [
      "Jaali (grid) fillings and checkers work",
      "Symmetrical backhand shading",
      "Fine line detailing combined with bold outlines",
      "Organic deep-stain cones",
    ]
  },
  {
    id: "portrait-mehndi",
    title: "Portrait Mehndi",
    icon: <UserRound className="w-6 h-6 text-luxury-gold" />,
    shortDesc: "Bespoke drawings of Bride, Groom, and auspicious wedding rituals.",
    longDesc: "The pinnacle of mehndi craftsmanship. Sangeeta hand-sketches realistic couple portraits, doli (wedding palanquin), shehnai (instruments), sindoor ceremony, or custom elements (like your pets or favorite skylines) directly into your wedding henna.",
    duration: "5 - 7 Hours",
    price: "₹15,000 onwards",
    includes: [
      "Hand-drawn couple portraits on palms",
      "Wedding ritual sketches (Doli, Baraat, Kalash)",
      "Custom name calligraphy / wedding vows",
      "Premium organic henna paste for ultra-fine lines",
      "Dedicated senior assistant for arm details",
    ]
  },
  {
    id: "festival-mehndi",
    title: "Festival Mehndi",
    icon: <Calendar className="w-6 h-6 text-luxury-gold" />,
    shortDesc: "Elegant designs for Karwa Chauth, Teej, Eid, Diwali, and family events.",
    longDesc: "Make your festivals extra special with clean, elegant designs. We offer quick-applying mandalas, half-hand patterns, or back-hand trails that stain deeply, so you can enjoy the festivities with beautiful, fragrant hands.",
    duration: "30 - 60 Mins",
    price: "₹1,000 onwards",
    includes: [
      "Quick-apply traditional mandalas or floral trails",
      "Deep-stain organic formula",
      "Fast drying application",
      "Available for small group home bookings",
    ]
  },
  {
    id: "bridal-makeup",
    title: "Bridal Makeup",
    icon: <Brush className="w-6 h-6 text-luxury-gold" />,
    shortDesc: "HD and Airbrush luxury makeup tailored for your wedding day glow.",
    longDesc: "A premium bridal makeup experience designed to make you feel beautiful, glowing, and camera-ready. Sangeeta utilizes top-tier global cosmetic brands (MAC, Huda Beauty, Dior, Estee Lauder) to create a long-lasting, flawless base customized to your face structure.",
    duration: "3 Hours",
    price: "₹15,000 - ₹25,000",
    includes: [
      "Premium HD or Airbrush base customization",
      "Professional luxury eye makeup (glitter/smoke/cut crease)",
      "Premium lash extensions & lip contours",
      "Bridal hairstyling & hair extensions styling",
      "Dupatta draping and jewelry setting",
    ]
  },
  {
    id: "party-makeup",
    title: "Party Makeup",
    icon: <Palette className="w-6 h-6 text-luxury-gold" />,
    shortDesc: "Glamorous, skin-focused makeup for receptions, cocktails, and sangeet.",
    longDesc: "Turn heads at any pre-wedding event, reception, cocktail party, or family function. We design customizable glam looks—from subtle dewy skin to dramatic, smokey eyes—perfectly matching your designer outfit.",
    duration: "1.5 Hours",
    price: "₹6,000 onwards",
    includes: [
      "Flawless long-wear skin prep and base",
      "Eye makeup styling matched to your outfit",
      "Lash placement (optional)",
      "Elegant party hair styling (curls/braids/buns)",
      "Saree / lehenga draping",
    ]
  },
  {
    id: "mehndi-classes",
    title: "Mehndi Academy Classes",
    icon: <BookOpen className="w-6 h-6 text-luxury-gold" />,
    shortDesc: "Learn professional mehndi art, shading, and portraits with certification.",
    longDesc: "Master the art of henna with Sangeeta's academy courses. From beginner fundamentals (cone-making, line control, pressure) to advanced masterclasses (portrait sketching, shading, pricing your work), we guide you to build a successful career.",
    duration: "15 - 45 Days Courses",
    price: "₹8,000 onwards",
    includes: [
      "Professional toolkit (practice pads, raw materials)",
      "Live hands-on training with Sangeeta",
      "Government-registered academy certification",
      "Bridal portfolio building guidance",
      "Career launching mentorship",
    ]
  },
  {
    id: "home-service",
    title: "Luxury Home Service",
    icon: <Home className="w-6 h-6 text-luxury-gold" />,
    shortDesc: "We bring our professional team directly to your home or wedding venue.",
    longDesc: "Skip the travel stress on your big day. Sangeeta and her skilled team of mehndi artists and makeup assistants will travel directly to your home, hotel room, or wedding destination in Chembur, Mumbai, or worldwide.",
    duration: "On Demand",
    price: "Travel fee varies by location",
    includes: [
      "On-time arrival with all equipment",
      "Clean setups to protect your interiors",
      "Multiple senior artists for large guest groups",
      "Venues travel across Mumbai, India, and internationally",
    ]
  }
];

export default function Services() {
  const [activeService, setActiveService] = useState<Service | null>(null);

  return (
    <section id="services" className="py-24 bg-luxury-cream dark:bg-luxury-coffee">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-poppins text-xs font-semibold uppercase tracking-[0.3em] text-luxury-gold">
            Our Services
          </span>
          <h2 className="font-cormorant text-4xl md:text-5xl font-bold tracking-wide text-luxury-coffee dark:text-luxury-cream uppercase mt-3">
            Luxury Offerings
          </h2>
          <div className="w-16 h-[1.5px] bg-luxury-gold mx-auto mt-4" />
          <p className="font-poppins text-sm text-luxury-coffee/70 dark:text-luxury-cream/70 font-light mt-4 leading-relaxed">
            From royal bridal mehndi motifs to radiant wedding day makeovers, discover Sangeeta&apos;s premium beauty and henna solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-luxury-coffee/60 border border-luxury-brown/10 dark:border-luxury-gold/10 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-start group hover:-translate-y-1"
            >
              {/* Icon Container */}
              <div className="p-4 rounded-xl bg-luxury-gold/10 dark:bg-luxury-gold/5 mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="font-playfair text-xl font-bold text-luxury-coffee dark:text-luxury-cream mb-3 group-hover:text-luxury-gold transition-colors duration-300">
                {service.title}
              </h3>

              {/* Short Description */}
              <p className="font-poppins text-xs text-luxury-coffee/70 dark:text-luxury-cream/70 font-light leading-relaxed mb-6 flex-grow">
                {service.shortDesc}
              </p>

              {/* Footer details */}
              <div className="flex items-center justify-between w-full border-t border-luxury-brown/5 dark:border-luxury-gold/5 pt-5">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-luxury-coffee/40 dark:text-luxury-cream/40">Starts from</span>
                  <span className="font-poppins text-xs font-semibold text-luxury-gold">{service.price.split(' ')[0]}</span>
                </div>
                
                <button
                  onClick={() => setActiveService(service)}
                  className="font-poppins text-[10px] uppercase tracking-widest font-semibold text-luxury-coffee dark:text-luxury-cream group-hover:text-luxury-gold transition-colors duration-300"
                >
                  View Details &rarr;
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Details Modal Popup */}
      <AnimatePresence>
        {activeService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveService(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-luxury-coffee/80 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-luxury-coffee border border-luxury-gold/20 max-w-2xl w-full rounded-2xl shadow-2xl overflow-hidden relative"
            >
              {/* Close button */}
              <button
                onClick={() => setActiveService(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-luxury-coffee/5 dark:bg-white/5 hover:bg-luxury-coffee/10 dark:hover:bg-white/10 text-luxury-coffee dark:text-luxury-cream transition-colors z-10"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Banner Info */}
              <div className="p-8 border-b border-luxury-brown/5 dark:border-luxury-gold/5 bg-luxury-cream/50 dark:bg-luxury-coffee/40">
                <span className="font-poppins text-[10px] font-semibold uppercase tracking-[0.25em] text-luxury-gold">
                  Detailed Service Breakdown
                </span>
                <h3 className="font-playfair text-2xl md:text-3xl font-bold text-luxury-coffee dark:text-luxury-cream mt-1.5">
                  {activeService.title}
                </h3>
                
                <div className="flex flex-wrap items-center gap-6 mt-4">
                  <div className="flex items-center gap-2 text-xs text-luxury-coffee/70 dark:text-luxury-cream/70 font-light">
                    <Clock className="w-4 h-4 text-luxury-gold" />
                    <span>Duration: <strong>{activeService.duration}</strong></span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-luxury-gold font-medium">
                    <IndianRupee className="w-4 h-4 text-luxury-gold" />
                    <span>Price: <strong>{activeService.price}</strong></span>
                  </div>
                </div>
              </div>

              {/* Modal Scrollable Details */}
              <div className="p-8 max-h-[50vh] overflow-y-auto">
                <p className="font-poppins text-xs text-luxury-coffee/85 dark:text-luxury-cream/85 leading-relaxed font-light mb-6">
                  {activeService.longDesc}
                </p>

                <h4 className="font-playfair text-sm font-bold text-luxury-coffee dark:text-luxury-cream uppercase tracking-wider mb-3">
                  What&apos;s Included In This Package
                </h4>
                
                <ul className="space-y-2.5">
                  {activeService.includes.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-xs text-luxury-coffee/70 dark:text-luxury-cream/70 font-light">
                      <CheckCircle className="w-4 h-4 text-luxury-gold shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Modal CTA footer */}
              <div className="p-8 border-t border-luxury-brown/5 dark:border-luxury-gold/5 flex flex-col sm:flex-row items-center justify-between gap-4 bg-luxury-cream/20">
                <span className="text-[10px] text-luxury-coffee/40 dark:text-luxury-cream/40 font-light text-center sm:text-left">
                  Slots fill quickly. Booking 3-6 months in advance is recommended.
                </span>
                
                <a
                  href={`https://wa.me/919820098200?text=Hi%20Sangeeta,%20I'd%20love%20to%20book%20the%20${encodeURIComponent(activeService.title)}%20service.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full sm:w-auto bg-luxury-gold hover:bg-luxury-gold/90 text-white font-poppins text-xs font-semibold uppercase tracking-[0.1em] px-6 py-3.5 rounded-full transition-all duration-300 shadow-md"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-white" />
                  Book via WhatsApp
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
