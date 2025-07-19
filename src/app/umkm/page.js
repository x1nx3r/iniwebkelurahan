// src/app/umkm/page.js
"use client";
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import UMKMHero from "@/components/sections/UMKMHero";
import UMKMGrid from "@/components/sections/UMKMGrid";
import UMKMModal from "@/components/sections/UMKMModal";
import { useUMKM } from "@/hooks/useUMKM";

export default function UMKMPage() {
  const [selectedUMKM, setSelectedUMKM] = useState(null);
  const { umkm, loading, error, refetch } = useUMKM();

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16">
        <UMKMHero />
        <UMKMGrid
          umkm={umkm}
          loading={loading}
          error={error}
          onSelectUMKM={setSelectedUMKM}
          onRetry={refetch}
        />
        <Footer />
      </div>

      {/* Modal */}
      {selectedUMKM && (
        <UMKMModal umkm={selectedUMKM} onClose={() => setSelectedUMKM(null)} />
      )}
    </main>
  );
}
