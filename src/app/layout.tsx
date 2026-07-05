import type { Metadata } from "next";
import { Cormorant_Garamond, Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";
import CursorGlow from "@/components/CursorGlow";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Sangeeta Professional Mehndi & Makeup | Best Henna Artist Mumbai",
  description: "Bridal Mehndi Artist & Makeup Specialist in Chembur, Mumbai. Creating beautiful wedding memories with premium organic mehndi cones and gorgeous bridal makeup packages.",
  keywords: [
    "Bridal Mehndi Artist Mumbai",
    "Professional Mehndi Artist Chembur",
    "Arabic Mehndi Mumbai",
    "Best Mehndi Artist Mumbai",
    "Bridal Makeup Mumbai",
    "Mehndi Classes Mumbai",
    "Wedding Mehndi Artist",
    "Henna Artist Mumbai",
    "Portrait Mehndi",
    "Home Mehndi Service Mumbai"
  ],
  openGraph: {
    title: "Sangeeta Professional Mehndi & Makeup | Mumbai",
    description: "Creating Beautiful Memories, One Mehndi Design at a Time. Book your bridal mehndi and makeup slots.",
    type: "website",
    locale: "en_IN",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${playfair.variable} ${poppins.variable} font-poppins antialiased bg-luxury-cream text-luxury-coffee`}
      >
        <Preloader />
        <CursorGlow />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
