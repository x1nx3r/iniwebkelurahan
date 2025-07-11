"use client";
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import UMKMHero from "@/components/sections/UMKMHero";
import UMKMGrid from "@/components/sections/UMKMGrid";
import UMKMModal from "@/components/sections/UMKMModal";
import umkmData from "@/data/umkm.json";

export default function UMKMPage() {
  const [selectedUMKM, setSelectedUMKM] = useState(null);

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16">
        <UMKMHero />
        <UMKMGrid umkm={umkmData.umkm} onSelectUMKM={setSelectedUMKM} />
        <Footer />
      </div>

      {/* Modal */}
      {selectedUMKM && (
        <UMKMModal umkm={selectedUMKM} onClose={() => setSelectedUMKM(null)} />
      )}
    </main>
  );
}
