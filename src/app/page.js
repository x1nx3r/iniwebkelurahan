// iniwebumkm/src/app/page.js
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import StatsSection from "@/components/sections/StatsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import BeritaPengumumanSection from "@/components/sections/BeritaPengumumanSection"; // Add this
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16">
        <Hero />
        <BeritaPengumumanSection />
        <StatsSection />
        <ServicesSection />
        <Footer />
      </div>
    </main>
  );
}
