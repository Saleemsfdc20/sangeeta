import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Gallery from "@/components/sections/Gallery";
import Services from "@/components/sections/Services";
import Classes from "@/components/sections/Classes";
import Pricing from "@/components/sections/Pricing";
import About from "@/components/sections/About";
import Process from "@/components/sections/Process";
import Reviews from "@/components/sections/Reviews";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import FloatingCTAs from "@/components/FloatingCTAs";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Gallery />
        <Services />
        <Classes />
        <Pricing />
        <About />
        <Process />
        <Reviews />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingCTAs />
    </>
  );
}
