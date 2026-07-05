import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        luxury: {
          gold: "#C9A227",
          "gold-light": "#E5C05B",
          brown: "#6D4C41",
          coffee: "#2C1E1B",
          cream: "#FAF7F2",
          beige: "#FAF6F0",
          accent: "#C9A227",
        }
      },
      fontFamily: {
        cormorant: ["var(--font-cormorant)", "serif"],
        playfair: ["var(--font-playfair)", "serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      animation: {
        "shimmer-gold": "shimmer-gold 3s ease-in-out infinite",
        "fade-in-up": "fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "pulse-gold": "pulseGold 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        "shimmer-gold": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        pulseGold: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: ".7", transform: "scale(1.05)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
