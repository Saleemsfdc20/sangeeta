"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import { MapPin, Phone, MessageSquare, Clock, Mail, CheckCircle2 } from "lucide-react";

// Form validation schema with Zod
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  date: z.string().min(1, "Please select your event date"),
  service: z.string().min(1, "Please select a service package"),
  message: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSuccess(true);
    reset();

    // Trigger golden/celebration confetti
    const duration = 2.5 * 1000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#C9A227", "#FAF6F0", "#6D4C41"]
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#C9A227", "#FAF6F0", "#6D4C41"]
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());

    // Construct custom WhatsApp message link and redirect to it after 3 seconds
    const whatsappMsg = `Hi Sangeeta! I just submitted a booking request on your website:\n\n*Name:* ${data.name}\n*Email:* ${data.email}\n*Phone:* ${data.phone}\n*Date:* ${data.date}\n*Service:* ${data.service}\n*Message:* ${data.message || "No comments"}`;
    const whatsappUrl = `https://wa.me/919820098200?text=${encodeURIComponent(whatsappMsg)}`;
    
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 2800);
  };

  return (
    <section id="contact" className="py-24 bg-luxury-cream dark:bg-luxury-coffee">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="font-poppins text-xs font-semibold uppercase tracking-[0.3em] text-luxury-gold">
            Book Slots
          </span>
          <h2 className="font-cormorant text-4xl md:text-5xl font-bold tracking-wide text-luxury-coffee dark:text-luxury-cream uppercase mt-3">
            Get In Touch
          </h2>
          <div className="w-16 h-[1.5px] bg-luxury-gold mx-auto mt-4" />
          <p className="font-poppins text-sm text-luxury-coffee/70 dark:text-luxury-cream/70 font-light mt-4 leading-relaxed">
            Reserve your wedding appointment or register for our academy classes. Complete the form below, and we will contact you within 24 hours.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left: Contact Info & Maps */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="bg-white dark:bg-luxury-coffee/40 border border-luxury-brown/10 dark:border-luxury-gold/10 p-8 rounded-2xl space-y-6">
              <h3 className="font-playfair text-xl font-bold text-luxury-coffee dark:text-luxury-cream mb-4">
                Booking Information
              </h3>

              {/* Direct Address */}
              <div className="flex gap-4">
                <div className="p-3 bg-luxury-cream dark:bg-luxury-coffee border border-luxury-gold/20 rounded-xl h-fit shrink-0">
                  <MapPin className="w-5 h-5 text-luxury-gold" />
                </div>
                <div>
                  <h4 className="font-playfair text-sm font-bold text-luxury-coffee dark:text-luxury-cream">
                    Studio Location
                  </h4>
                  <p className="font-poppins text-xs text-luxury-coffee/65 dark:text-luxury-cream/65 font-light leading-relaxed mt-1">
                    Sangeeta Studio, Chembur East, Mumbai, Maharashtra 400071
                  </p>
                </div>
              </div>

              {/* Contact Numbers */}
              <div className="flex gap-4">
                <div className="p-3 bg-luxury-cream dark:bg-luxury-coffee border border-luxury-gold/20 rounded-xl h-fit shrink-0">
                  <Phone className="w-5 h-5 text-luxury-gold" />
                </div>
                <div>
                  <h4 className="font-playfair text-sm font-bold text-luxury-coffee dark:text-luxury-cream">
                    Phone & WhatsApp
                  </h4>
                  <p className="font-poppins text-xs text-luxury-coffee/65 dark:text-luxury-cream/65 font-light mt-1">
                    Call: +91 98200 98200 <br />
                    WhatsApp: +91 98200 98200
                  </p>
                </div>
              </div>

              {/* Email Address */}
              <div className="flex gap-4">
                <div className="p-3 bg-luxury-cream dark:bg-luxury-coffee border border-luxury-gold/20 rounded-xl h-fit shrink-0">
                  <Mail className="w-5 h-5 text-luxury-gold" />
                </div>
                <div>
                  <h4 className="font-playfair text-sm font-bold text-luxury-coffee dark:text-luxury-cream">
                    Email Address
                  </h4>
                  <p className="font-poppins text-xs text-luxury-coffee/65 dark:text-luxury-cream/65 font-light mt-1">
                    contact@sangeetamehndi.com
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <div className="p-3 bg-luxury-cream dark:bg-luxury-coffee border border-luxury-gold/20 rounded-xl h-fit shrink-0">
                  <Clock className="w-5 h-5 text-luxury-gold" />
                </div>
                <div>
                  <h4 className="font-playfair text-sm font-bold text-luxury-coffee dark:text-luxury-cream">
                    Business Hours
                  </h4>
                  <p className="font-poppins text-xs text-luxury-coffee/65 dark:text-luxury-cream/65 font-light mt-1">
                    Mon - Sun: 09:00 AM - 08:00 PM <br />
                    (Studio visits strictly by appointment)
                  </p>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="relative w-full h-[250px] lg:h-full min-h-[250px] rounded-2xl overflow-hidden border border-luxury-brown/10 dark:border-luxury-gold/15 shadow-sm group">
              <iframe
                title="Sangeeta Studio Chembur Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.4429988167307!2d72.89434857444747!3d19.04423405300234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8ad18659d57%3A0xb3631ee7b51b75bb!2sChembur%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="filter grayscale contrast-125 dark:invert dark:contrast-100 group-hover:grayscale-0 transition-all duration-700 ease-in-out"
              />
            </div>
          </div>

          {/* Right: Booking Form */}
          <div className="lg:col-span-7 bg-white dark:bg-luxury-coffee/40 border border-luxury-brown/10 dark:border-luxury-gold/10 p-8 sm:p-10 rounded-2xl shadow-sm flex flex-col justify-center">
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-6"
              >
                <div className="w-16 h-16 bg-luxury-gold/10 text-luxury-gold rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-luxury-coffee dark:text-luxury-cream">
                  Booking Request Submitted!
                </h3>
                <p className="font-poppins text-xs text-luxury-coffee/70 dark:text-luxury-cream/70 font-light leading-relaxed max-w-sm mx-auto">
                  Thank you! Your request was received successfully. We are now redirecting you to WhatsApp to complete your slot booking...
                </p>
                <div className="w-8 h-[2px] bg-luxury-gold mx-auto" />
                <button
                  onClick={() => setIsSuccess(false)}
                  className="font-poppins text-[10px] uppercase tracking-widest font-semibold text-luxury-gold underline hover:text-luxury-gold/80"
                >
                  Submit Another Form
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <h3 className="font-playfair text-xl font-bold text-luxury-coffee dark:text-luxury-cream mb-2">
                  Request Appointment Slots
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-poppins text-[10px] uppercase tracking-widest text-luxury-coffee/50 dark:text-luxury-cream/50 font-bold">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      {...register("name")}
                      placeholder="e.g. Prianka Sen"
                      className="px-4 py-3 rounded-xl border border-luxury-brown/15 bg-transparent focus:outline-none focus:border-luxury-gold text-xs font-poppins"
                    />
                    {errors.name && (
                      <span className="text-[10px] text-red-500 font-poppins">{errors.name.message}</span>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-poppins text-[10px] uppercase tracking-widest text-luxury-coffee/50 dark:text-luxury-cream/50 font-bold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      {...register("email")}
                      placeholder="e.g. prianka@gmail.com"
                      className="px-4 py-3 rounded-xl border border-luxury-brown/15 bg-transparent focus:outline-none focus:border-luxury-gold text-xs font-poppins"
                    />
                    {errors.email && (
                      <span className="text-[10px] text-red-500 font-poppins">{errors.email.message}</span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone field */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-poppins text-[10px] uppercase tracking-widest text-luxury-coffee/50 dark:text-luxury-cream/50 font-bold">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      {...register("phone")}
                      placeholder="e.g. +91 98765 43210"
                      className="px-4 py-3 rounded-xl border border-luxury-brown/15 bg-transparent focus:outline-none focus:border-luxury-gold text-xs font-poppins"
                    />
                    {errors.phone && (
                      <span className="text-[10px] text-red-500 font-poppins">{errors.phone.message}</span>
                    )}
                  </div>

                  {/* Date field */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-poppins text-[10px] uppercase tracking-widest text-luxury-coffee/50 dark:text-luxury-cream/50 font-bold">
                      Event Date *
                    </label>
                    <input
                      type="date"
                      {...register("date")}
                      className="px-4 py-3 rounded-xl border border-luxury-brown/15 bg-transparent focus:outline-none focus:border-luxury-gold text-xs font-poppins dark:text-white"
                    />
                    {errors.date && (
                      <span className="text-[10px] text-red-500 font-poppins">{errors.date.message}</span>
                    )}
                  </div>
                </div>

                {/* Service dropdown */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-poppins text-[10px] uppercase tracking-widest text-luxury-coffee/50 dark:text-luxury-cream/50 font-bold">
                    Select Service *
                  </label>
                  <select
                    {...register("service")}
                    className="px-4 py-3 rounded-xl border border-luxury-brown/15 bg-white dark:bg-luxury-coffee focus:outline-none focus:border-luxury-gold text-xs font-poppins text-luxury-coffee dark:text-white"
                  >
                    <option value="">-- Choose bridal / makeup package --</option>
                    <option value="Silver Bridal Package">Silver Bridal Mehndi Package (₹11,000)</option>
                    <option value="Gold Bridal Package">Gold Bridal Mehndi Package (₹18,000)</option>
                    <option value="Platinum Portrait Package">Platinum Portrait Mehndi Package (₹26,000)</option>
                    <option value="Diamond Royal Package">Diamond Royal Mehndi & Makeup (₹45,000)</option>
                    <option value="Bridal Makeup Only">Bridal Makeup Only (₹15,000+)</option>
                    <option value="Party Makeup Only">Party Makeup Only (₹6,000+)</option>
                    <option value="Academy Classes">Academy Training Course</option>
                    <option value="Others">Others / Guest Mehndi</option>
                  </select>
                  {errors.service && (
                    <span className="text-[10px] text-red-500 font-poppins">{errors.service.message}</span>
                  )}
                </div>

                {/* Message field */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-poppins text-[10px] uppercase tracking-widest text-luxury-coffee/50 dark:text-luxury-cream/50 font-bold">
                    Add Comments / Custom Demands
                  </label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    placeholder="Describe portrait wishes, wedding locations, number of guest hands, etc."
                    className="px-4 py-3 rounded-xl border border-luxury-brown/15 bg-transparent focus:outline-none focus:border-luxury-gold text-xs font-poppins"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-center gap-2 w-full bg-luxury-gold hover:bg-luxury-gold/90 text-white font-poppins text-xs font-bold uppercase tracking-widest py-4 rounded-xl transition-all duration-300 shadow-md disabled:bg-luxury-gold/50"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  {isSubmitting ? "Submitting Inquiry..." : "Submit Booking Inquiry"}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
