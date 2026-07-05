"use client";

import { motion } from "framer-motion";
import { Check, Info, MessageSquare } from "lucide-react";

interface Package {
  name: string;
  price: string;
  popular: boolean;
  description: string;
  coverage: string;
  features: string[];
}

const packages: Package[] = [
  {
    name: "Silver Bridal",
    price: "₹11,000",
    popular: false,
    description: "Elegant, clean patterns perfect for minimalist brides who prefer modern layouts.",
    coverage: "Mid-forearm length (both sides)",
    features: [
      "Traditional mandalas or Arabic bel layout",
      "Symmetrical backhand vines",
      "Fresh organic mehndi cones",
      "Free lemon-sugar sealant spray",
      "Groom's complimentary initials design"
    ]
  },
  {
    name: "Gold Bridal",
    price: "₹18,000",
    popular: true,
    description: "Our most requested package. A rich fusion of traditional density and modern spacing.",
    coverage: "Elbow length (both sides)",
    features: [
      "Indo-Arabic fusion jaali & floral layouts",
      "Doli (palanquin) & Shehnai wedding symbols",
      "Groom's name hidden creatively in design",
      "Fresh organic cones & essential oil prep",
      "Groom's complimentary classic palm mehndi"
    ]
  },
  {
    name: "Platinum Portrait",
    price: "₹26,000",
    popular: false,
    description: "Highly detailed artistic styling featuring custom hand-sketched bride & groom portraits.",
    coverage: "Full elbow length (premium density)",
    features: [
      "Custom hand-drawn bride & groom portrait motifs",
      "Wedding rituals: Baraat, Sindoor, or Varmaala scenes",
      "Extremely dense jaal-work and traditional shading",
      "Complete aftercare instructions & essential oil kit",
      "Groom's complete forearm mehndi package"
    ]
  },
  {
    name: "Diamond Royal",
    price: "₹45,000",
    popular: false,
    description: "The ultimate wedding luxury. Complete custom mehndi by Sangeeta and HD bridal makeup.",
    coverage: "Bicep length mehndi + Complete Bridal Makeup",
    features: [
      "Bicep-length detailed mehndi applied entirely by Sangeeta",
      "Custom realistic couple portraits & personal love story motifs",
      "HD Bridal Makeup & Hairstyling on wedding day",
      "Luxury draping (Saree/Dupatta) & jewelry setting",
      "Groom's complete forearm mehndi package",
      "Travel charges waived within Mumbai city"
    ]
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-luxury-beige/50 dark:bg-luxury-coffee/40">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="font-poppins text-xs font-semibold uppercase tracking-[0.3em] text-luxury-gold">
            Bridal Packages
          </span>
          <h2 className="font-cormorant text-4xl md:text-5xl font-bold tracking-wide text-luxury-coffee dark:text-luxury-cream uppercase mt-3">
            Luxury Wedding Bundles
          </h2>
          <div className="w-16 h-[1.5px] bg-luxury-gold mx-auto mt-4" />
          <p className="font-poppins text-sm text-luxury-coffee/70 dark:text-luxury-cream/70 font-light mt-4 leading-relaxed">
            Compare our curated bridal collections. Each tier is designed to make you look and feel like royalty on your most memorable day.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-white dark:bg-luxury-coffee/60 border rounded-2xl p-8 flex flex-col justify-between relative shadow-sm hover:shadow-xl transition-all duration-300 ${
                pkg.popular
                  ? "border-luxury-gold ring-1 ring-luxury-gold scale-100 lg:scale-[1.03] z-10"
                  : "border-luxury-brown/10 dark:border-luxury-gold/10"
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <span className="absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-luxury-gold text-white font-poppins text-[9px] uppercase tracking-widest font-bold px-4 py-1.5 rounded-full shadow-md">
                  Most Popular
                </span>
              )}

              {/* Title & Price */}
              <div>
                <h3 className="font-playfair text-xl font-bold text-luxury-coffee dark:text-luxury-cream mb-2">
                  {pkg.name}
                </h3>
                <p className="font-poppins text-[10px] text-luxury-coffee/50 dark:text-luxury-cream/50 font-light leading-relaxed mb-6">
                  {pkg.description}
                </p>
                
                {/* Price block */}
                <div className="flex flex-col border-b border-luxury-brown/5 dark:border-luxury-gold/5 pb-5 mb-6">
                  <span className="font-cormorant text-4xl font-bold text-luxury-gold">
                    {pkg.price}
                  </span>
                  <span className="text-[10px] text-luxury-coffee/40 dark:text-luxury-cream/40 font-semibold tracking-wider uppercase mt-1">
                    Package Total
                  </span>
                </div>

                {/* Coverage detail */}
                <div className="flex items-start gap-2 bg-luxury-beige dark:bg-luxury-gold/5 p-3.5 rounded-xl mb-6">
                  <Info className="w-4 h-4 text-luxury-gold shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="text-[9px] uppercase tracking-widest text-luxury-coffee/40 dark:text-luxury-cream/40 font-semibold">Coverage length</span>
                    <span className="font-poppins text-xs font-semibold text-luxury-coffee dark:text-luxury-cream mt-0.5">{pkg.coverage}</span>
                  </div>
                </div>

                {/* Features checklist */}
                <ul className="space-y-3.5 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-luxury-coffee/70 dark:text-luxury-cream/70 font-light">
                      <Check className="w-3.5 h-3.5 text-luxury-gold shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Book action */}
              <a
                href={`https://wa.me/919820098200?text=Hi%20Sangeeta,%20I%20want%20to%20book%20the%20${encodeURIComponent(pkg.name)}%20package%20for%20my%20wedding.`}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 w-full py-4 rounded-full font-poppins text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                  pkg.popular
                    ? "bg-luxury-gold hover:bg-luxury-gold/90 text-white shadow-md hover:shadow-lg"
                    : "border border-luxury-gold/50 text-luxury-gold hover:bg-luxury-gold hover:text-white"
                }`}
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                Book Package
              </a>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
