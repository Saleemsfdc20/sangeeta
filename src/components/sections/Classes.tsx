"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, GraduationCap, Users, Calendar, Briefcase, ChevronRight, MessageSquare } from "lucide-react";

interface Course {
  title: string;
  duration: string;
  level: string;
  price: string;
  description: string;
  curriculum: string[];
}

const courses: Course[] = [
  {
    title: "Beginner's Foundation Course",
    duration: "15 Days (2 Hours daily)",
    level: "Beginner Level",
    price: "₹8,000",
    description: "Build a strong foundation in henna art. Learn pressure control, basic shapes, and simple layouts.",
    curriculum: [
      "Henna paste preparation & cone rolling",
      "Cone holding & pressure control exercises",
      "Basic motifs: lines, humps, dots, swirls",
      "Simple floral trails & leafy Arabic designs",
      "Symmetry exercises on practice sheets",
    ]
  },
  {
    title: "Professional Bridal Course",
    duration: "30 Days (2.5 Hours daily)",
    level: "Intermediate & Advanced",
    price: "₹15,000",
    description: "Master complex layouts, symmetrical bridal structures, intricate fillings, and advanced shading.",
    curriculum: [
      "Bridal layout planning and arm mapping",
      "Advanced shading (shading & negative filling)",
      "Traditional bridal motifs: lotuses, peacocks, elephants",
      "Intricate jaal (grid) patterns & modern cuffs",
      "Client consultation and time management",
    ]
  },
  {
    title: "Master Portrait Masterclass",
    duration: "45 Days (3 Hours daily)",
    level: "Advanced Elite",
    price: "₹22,000",
    description: "The ultimate certification program. Learn realistic couple portraits, storytelling wedding motifs, and business marketing.",
    curriculum: [
      "Realistic bride & groom face sketching",
      "Traditional ritual sketches (Doli, Baraat, Kalash)",
      "Bespoke story-telling theme creation",
      "Bridal portfolio shoot & styling",
      "Social media growth & pricing strategies",
    ]
  }
];

const benefits = [
  {
    icon: <Award className="w-5 h-5 text-luxury-gold" />,
    title: "Registered Certification",
    description: "Receive a professional certificate from Sangeeta Mehndi Academy, valid across India."
  },
  {
    icon: <BookOpen className="w-5 h-5 text-luxury-gold" />,
    title: "Practice Material Included",
    description: "Complimentary professional toolkit with practice sheets, acrylic hands, and organic raw materials."
  },
  {
    icon: <Users className="w-5 h-5 text-luxury-gold" />,
    title: "Personalized Mentorship",
    description: "Small batch sizes (max 8 students) ensuring close attention and immediate feedback."
  },
  {
    icon: <Briefcase className="w-5 h-5 text-luxury-gold" />,
    title: "Career & Business Guidance",
    description: "Learn how to capture client photos, edit reels, price bridal packages, and secure bookings."
  }
];

export default function Classes() {
  return (
    <section id="classes" className="py-24 bg-luxury-cream dark:bg-luxury-coffee">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="font-poppins text-xs font-semibold uppercase tracking-[0.3em] text-luxury-gold">
            Mehndi Academy
          </span>
          <h2 className="font-cormorant text-4xl md:text-5xl font-bold tracking-wide text-luxury-coffee dark:text-luxury-cream uppercase mt-3">
            Learn from Professionals
          </h2>
          <div className="w-16 h-[1.5px] bg-luxury-gold mx-auto mt-4" />
          <p className="font-poppins text-sm text-luxury-coffee/70 dark:text-luxury-cream/70 font-light mt-4 leading-relaxed">
            Turn your creative passion into a highly lucrative career. Join Sangeeta&apos;s academy in Chembur and learn professional henna art from scratch.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Academy Benefits & Introduction */}
          <div className="lg:col-span-5 space-y-10">
            <div className="bg-white dark:bg-luxury-coffee/40 border border-luxury-brown/10 dark:border-luxury-gold/10 p-8 rounded-2xl">
              <span className="flex items-center gap-2 font-poppins text-xs font-semibold text-luxury-gold uppercase tracking-wider mb-4">
                <GraduationCap className="w-4 h-4" />
                Why Join Sangeeta Academy?
              </span>
              <h3 className="font-playfair text-2xl font-bold text-luxury-coffee dark:text-luxury-cream mb-6 leading-snug">
                Step-by-Step Training to Launch Your Career
              </h3>
              
              {/* Benefits list */}
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="p-3 bg-luxury-cream dark:bg-luxury-coffee border border-luxury-gold/20 rounded-xl h-fit shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="font-playfair text-sm font-bold text-luxury-coffee dark:text-luxury-cream">
                        {benefit.title}
                      </h4>
                      <p className="font-poppins text-xs text-luxury-coffee/65 dark:text-luxury-cream/65 font-light leading-relaxed mt-1">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick CTA */}
            <div className="text-center lg:text-left bg-luxury-gold/5 border border-luxury-gold/10 p-8 rounded-2xl">
              <h4 className="font-playfair text-lg font-bold text-luxury-coffee dark:text-luxury-cream mb-2">
                Confused about which course fits you?
              </h4>
              <p className="font-poppins text-xs text-luxury-coffee/60 dark:text-luxury-cream/60 font-light leading-relaxed mb-6">
                Connect with Sangeeta for a free guidance session to review your goals.
              </p>
              <a
                href="https://wa.me/919820098200?text=Hi%20Sangeeta,%20I'm%20interested%20in%20joining%20your%20Mehndi%20Academy.%20Please%20share%20details."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-luxury-gold hover:bg-luxury-gold/90 text-white font-poppins text-xs font-semibold uppercase tracking-[0.1em] px-6 py-3.5 rounded-full transition-all duration-300 shadow-md"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-white" />
                Inquire on WhatsApp
              </a>
            </div>
          </div>

          {/* Right: Course Cards list */}
          <div className="lg:col-span-7 space-y-8">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-white dark:bg-luxury-coffee/40 border border-luxury-brown/10 dark:border-luxury-gold/10 p-8 rounded-2xl relative overflow-hidden group shadow-sm hover:shadow-lg transition-all duration-300"
              >
                {/* Accent top gold border */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-luxury-gold/25 group-hover:bg-luxury-gold transition-colors duration-300" />
                
                {/* Course Metadata */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-luxury-gold">
                    {course.level}
                  </span>
                  
                  <div className="flex items-center gap-1.5 text-xs text-luxury-coffee/40 dark:text-luxury-cream/40 font-medium">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-playfair text-xl font-bold text-luxury-coffee dark:text-luxury-cream group-hover:text-luxury-gold transition-colors duration-300 mb-3">
                  {course.title}
                </h3>
                
                {/* Description */}
                <p className="font-poppins text-xs text-luxury-coffee/70 dark:text-luxury-cream/70 font-light leading-relaxed mb-6">
                  {course.description}
                </p>

                {/* Curriculum breakdown */}
                <div className="border-t border-luxury-brown/5 dark:border-luxury-gold/5 pt-5">
                  <h4 className="font-playfair text-xs font-bold text-luxury-coffee dark:text-luxury-cream uppercase tracking-wider mb-3">
                    Course Syllabus includes:
                  </h4>
                  
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {course.curriculum.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-luxury-coffee/65 dark:text-luxury-cream/65 font-light">
                        <ChevronRight className="w-3 h-3 text-luxury-gold shrink-0" />
                        <span className="truncate">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Action */}
                <div className="flex items-center justify-between border-t border-luxury-brown/5 dark:border-luxury-gold/5 mt-6 pt-5">
                  <div className="flex items-baseline gap-1">
                    <span className="text-[10px] text-luxury-coffee/40 dark:text-luxury-cream/40 font-light uppercase">Fee:</span>
                    <span className="font-poppins text-base font-bold text-luxury-gold">{course.price}</span>
                  </div>
                  
                  <a
                    href={`https://wa.me/919820098200?text=Hi%20Sangeeta,%20I'm%20interested%20in%20booking%20the%20${encodeURIComponent(course.title)}.%20Please%20share%20syllabus%20details.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-poppins text-[10px] uppercase tracking-widest font-semibold text-luxury-coffee dark:text-luxury-cream group-hover:text-luxury-gold transition-colors duration-300 flex items-center gap-1"
                  >
                    Enroll Now &rarr;
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
