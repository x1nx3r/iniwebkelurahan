// iniwebumkm/src/app/berita/page.js
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BeritaHero from "@/components/sections/BeritaHero";
import BeritaGrid from "@/components/sections/BeritaGrid";

export const metadata = {
  title: "Berita Terkini - Kelurahan Kemayoran",
  description:
    "Berita terbaru, pengumuman, dan informasi penting dari Kelurahan Kemayoran, Surabaya",
  keywords: "berita kemayoran, pengumuman kelurahan, informasi surabaya",
};

export default function BeritaPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16">
        <BeritaHero />
        <BeritaGrid />
        <Footer />
      </div>
    </main>
  );
}
