import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProfileHero from "@/components/sections/ProfileHero";
import VisiMisi from "@/components/sections/VisiMisi";
import DataWilayah from "@/components/sections/DataWilayah";
import AparaturSection from "@/components/sections/AparaturSection";
import kelurahanData from "@/data/kelurahan.json";

export const metadata = {
  title: "Profil Kelurahan Kemayoran - Surabaya",
  description:
    "Profil lengkap Kelurahan Kemayoran, struktur organisasi, visi misi, dan data wilayah",
};

export default function ProfilPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16">
        <ProfileHero data={kelurahanData.profile} />
        <VisiMisi data={kelurahanData.profile} />
        <DataWilayah data={kelurahanData.profile} />
        <AparaturSection aparatur={kelurahanData.aparatur} />
        <Footer />
      </div>
    </main>
  );
}
