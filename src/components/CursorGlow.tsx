"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
  const [enabled, setEnabled] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for trailing effect
  const springConfig = { damping: 30, stiffness: 200, mass: 0.5 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable cursor glow on mouse-enabled devices
    const isDesktop = window.matchMedia("(pointer: fine)").matches;
    if (!isDesktop) return;

    setEnabled(true);

    const handleMouseMove = (e: MouseEvent) => {
      // Offset by half of glow width/height (40px)
      mouseX.set(e.clientX - 20);
      mouseY.set(e.clientY - 20);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  if (!enabled) return null;

  return (
    <motion.div
      style={{
        x: glowX,
        y: glowY,
      }}
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-10 w-10 rounded-full bg-luxury-gold/30 filter blur-md mix-blend-screen"
      animate={{
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
