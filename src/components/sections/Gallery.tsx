"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ZoomIn, X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryItems, GalleryItem } from "@/data/gallery-data";

const categories = [
  "All",
  "Bridal Mehndi",
  "Arabic Mehndi",
  "Indo Arabic",
  "Portrait Mehndi",
  "Traditional",
  "Engagement",
  "Festival",
  "Kids",
  "Minimal",
  "Makeup",
  "Classes",
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [visibleCount, setVisibleCount] = useState(9); // For progressive loading

  // Filter gallery items based on category and search query
  const filteredItems = useMemo(() => {
    return galleryItems.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Items currently rendered (progessive loading / load more)
  const visibleItems = useMemo(() => {
    return filteredItems.slice(0, visibleCount);
  }, [filteredItems, visibleCount]);

  const hasMore = filteredItems.length > visibleCount;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const openLightbox = (item: GalleryItem) => {
    const idx = galleryItems.findIndex((x) => x.id === item.id);
    if (idx !== -1) {
      setLightboxIndex(idx);
      setIsZoomed(false);
      // Disable body scroll when lightbox is open
      document.body.style.overflow = "hidden";
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    setIsZoomed(false);
    // Restore body scroll
    document.body.style.overflow = "";
  };

  const navigateLightbox = (direction: "next" | "prev", e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setIsZoomed(false);

    let nextIndex = lightboxIndex;
    if (direction === "next") {
      nextIndex = (lightboxIndex + 1) % galleryItems.length;
    } else {
      nextIndex = (lightboxIndex - 1 + galleryItems.length) % galleryItems.length;
    }
    setLightboxIndex(nextIndex);
  };

  const activeLightboxItem = lightboxIndex !== null ? galleryItems[lightboxIndex] : null;

  return (
    <section id="gallery" className="py-24 bg-luxury-beige/50 dark:bg-luxury-coffee/40">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-poppins text-xs font-semibold uppercase tracking-[0.3em] text-luxury-gold">
            Portfolio Showcase
          </span>
          <h2 className="font-cormorant text-4xl md:text-5xl font-bold tracking-wide text-luxury-coffee dark:text-luxury-cream uppercase mt-3">
            Pinterest Art Gallery
          </h2>
          <div className="w-16 h-[1.5px] bg-luxury-gold mx-auto mt-4" />
          <p className="font-poppins text-sm text-luxury-coffee/70 dark:text-luxury-cream/70 font-light mt-4 leading-relaxed">
            Explore a curated selection of Sangeeta&apos;s custom mehndi designs, bridal makeup transformations, and training academy memories.
          </p>
        </div>

        {/* Filters and Search Bar Container */}
        <div className="flex flex-col gap-6 mb-12">
          {/* Search Box */}
          <div className="relative max-w-md mx-auto w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-luxury-coffee/40 dark:text-luxury-cream/40" />
            <input
              type="text"
              placeholder="Search mehndi designs, makeup..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(9); // Reset load count on search
              }}
              className="w-full pl-11 pr-6 py-3.5 rounded-full border border-luxury-brown/15 bg-white dark:bg-luxury-coffee dark:border-luxury-gold/20 focus:outline-none focus:border-luxury-gold text-sm font-poppins transition-all duration-300"
            />
          </div>

          {/* Categories Horizontal Slider */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setVisibleCount(9); // Reset load count on filter change
                }}
                className={`px-5 py-2 rounded-full font-poppins text-[11px] uppercase tracking-wider transition-all duration-300 border ${
                  selectedCategory === cat
                    ? "bg-luxury-gold border-luxury-gold text-white shadow-md"
                    : "bg-white dark:bg-luxury-coffee border-luxury-brown/10 dark:border-luxury-gold/10 text-luxury-coffee/80 dark:text-luxury-cream/80 hover:border-luxury-gold hover:text-luxury-gold"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Pinterest Masonry Grid */}
        {visibleItems.length > 0 ? (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 [column-fill:_balance]">
            <AnimatePresence mode="popLayout">
              {visibleItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="break-inside-avoid relative overflow-hidden rounded-2xl bg-white dark:bg-luxury-coffee border border-luxury-brown/10 dark:border-luxury-gold/10 group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500"
                  onClick={() => openLightbox(item)}
                >
                  {/* Thumbnail Image */}
                  <div className="relative w-full overflow-hidden rounded-t-2xl">
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      width={600}
                      height={800}
                      className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 select-none"
                      loading="lazy"
                      onContextMenu={(e) => e.preventDefault()}
                    />
                    
                    {/* Category Tag overlay on image top-left */}
                    <span className="absolute top-4 left-4 z-10 bg-luxury-coffee/80 dark:bg-luxury-gold/80 backdrop-blur-md text-[9px] uppercase tracking-widest text-white px-3 py-1.5 rounded-full font-medium">
                      {item.category}
                    </span>
                  </div>

                  {/* Text Details & Action overlay on hover */}
                  <div className="p-5 flex flex-col justify-end">
                    <h3 className="font-playfair text-lg font-bold text-luxury-coffee dark:text-luxury-cream group-hover:text-luxury-gold transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="font-poppins text-[11px] text-luxury-coffee/60 dark:text-luxury-cream/60 font-light mt-1.5 line-clamp-2">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-1.5 mt-3 text-luxury-gold text-xs font-semibold tracking-wider uppercase">
                      <ZoomIn className="w-3.5 h-3.5" />
                      Quick View
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="text-center py-20 bg-white dark:bg-luxury-coffee rounded-2xl border border-luxury-brown/10 dark:border-luxury-gold/10 max-w-lg mx-auto">
            <p className="font-poppins text-sm text-luxury-coffee/60 dark:text-luxury-cream/60">
              No matching artworks found. Try checking another category.
            </p>
          </div>
        )}

        {/* Load More Button */}
        {hasMore && (
          <div className="text-center mt-12">
            <button
              onClick={handleLoadMore}
              className="font-poppins text-xs font-semibold uppercase tracking-widest border border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-white px-8 py-3.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              Load More Artworks
            </button>
          </div>
        )}
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {activeLightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-luxury-coffee/95 backdrop-blur-md p-4 select-none"
          >
            {/* Top Toolbar */}
            <div className="absolute top-4 left-0 right-0 px-6 flex items-center justify-between z-50 text-white">
              <span className="font-poppins text-xs tracking-widest text-luxury-cream/80 uppercase">
                {activeLightboxItem.category} &bull; Image {lightboxIndex! + 1} of {galleryItems.length}
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsZoomed(!isZoomed);
                  }}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
                  title="Toggle Zoom"
                >
                  <ZoomIn className="w-5 h-5" />
                </button>
                <div 
                  className="p-2 rounded-full bg-white/5 text-luxury-cream/40 cursor-not-allowed flex items-center justify-center"
                  title="Downloads are disabled to protect copyright"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line><line x1="2" y1="2" x2="22" y2="22"></line></svg>
                </div>
                <button
                  onClick={closeLightbox}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
                  title="Close Lightbox"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Nav Arrows */}
            <button
              onClick={(e) => navigateLightbox("prev", e)}
              className="absolute left-4 p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors z-50 hidden sm:block"
              title="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => navigateLightbox("next", e)}
              className="absolute right-4 p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors z-50 hidden sm:block"
              title="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Center Image Container */}
            <div 
              className="relative max-w-4xl max-h-[75vh] w-full h-full flex flex-col items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                key={activeLightboxItem.id}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full flex items-center justify-center"
              >
                <img
                  src={activeLightboxItem.full}
                  alt={activeLightboxItem.title}
                  className={`max-w-full max-h-full object-contain rounded-lg transition-transform duration-300 no-download select-none ${
                    isZoomed ? "scale-150 cursor-zoom-out" : "cursor-zoom-in"
                  }`}
                  onContextMenu={(e) => e.preventDefault()}
                  onClick={() => setIsZoomed(!isZoomed)}
                />
              </motion.div>
            </div>

            {/* Bottom Metadata bar */}
            <div 
              className="absolute bottom-4 left-0 right-0 px-6 text-center text-white z-50 max-w-2xl mx-auto bg-luxury-coffee/40 backdrop-blur-sm rounded-xl py-3 px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="font-playfair text-xl font-bold text-luxury-gold">
                {activeLightboxItem.title}
              </h3>
              <p className="font-poppins text-xs text-luxury-cream/80 font-light mt-1 max-w-xl mx-auto">
                {activeLightboxItem.description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
