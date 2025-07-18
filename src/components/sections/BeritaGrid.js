// iniwebumkm/src/components/sections/BeritaGrid.js
"use client";
import { useState, useEffect } from "react";
import {
  ClockIcon,
  UserIcon,
  TagIcon,
  CalendarDaysIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { getBerita } from "@/lib/firestore";
import BeritaModal from "@/components/sections/BeritaModal";

export default function BeritaGrid() {
  const [berita, setBerita] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBerita, setSelectedBerita] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "Semua" },
    { id: "pengumuman", name: "Pengumuman" },
    { id: "kegiatan", name: "Kegiatan" },
    { id: "berita", name: "Berita" },
    { id: "layanan", name: "Layanan" },
  ];

  useEffect(() => {
    loadBerita();
  }, []);

  // In BeritaGrid.js, update the loadBerita function:
  const loadBerita = async () => {
    try {
      setLoading(true);
      console.log("🔍 Loading berita from Firestore...");
      const data = await getBerita();
      console.log("✅ Loaded berita:", data.length, "articles");
      console.log("📄 First article:", data[0]);
      setBerita(data);
    } catch (error) {
      console.error("❌ Error loading berita:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredBerita = berita.filter((item) => {
    const matchesSearch =
      item.judul.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.konten.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || item.kategori === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return <BeritaGridSkeleton />;
  }

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters */}
        <div className="mb-12">
          {/* Search */}
          <div className="relative mb-6">
            <MagnifyingGlassIcon className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Cari berita atau pengumuman..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/80 backdrop-blur-xl rounded-2xl border border-white/50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent shadow-lg"
            />
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg"
                    : "bg-white/80 text-gray-700 hover:bg-white/90 border border-white/50"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <div className="mb-8">
          <p className="text-gray-600">
            Menampilkan {filteredBerita.length} dari {berita.length} artikel
          </p>
        </div>

        {/* Berita Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBerita.map((item) => (
            <BeritaCard
              key={item.id}
              item={item}
              onSelect={() => setSelectedBerita(item)}
            />
          ))}
        </div>

        {/* Empty state */}
        {filteredBerita.length === 0 && !loading && (
          <div className="text-center py-16">
            <MagnifyingGlassIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Tidak ada hasil ditemukan
            </h3>
            <p className="text-gray-600">
              Coba ubah kata kunci pencarian atau filter kategori
            </p>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedBerita && (
        <BeritaModal
          berita={selectedBerita}
          onClose={() => setSelectedBerita(null)}
        />
      )}
    </section>
  );
}

// Individual berita card component
function BeritaCard({ item, onSelect }) {
  const [imageError, setImageError] = useState(false);

  const formatDate = (timestamp) => {
    if (!timestamp) return "";
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return new Intl.DateTimeFormat("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  };

  const getCategoryColor = (category) => {
    const colors = {
      pengumuman: "from-red-400 to-red-500",
      kegiatan: "from-blue-400 to-blue-500",
      berita: "from-green-400 to-green-500",
      layanan: "from-purple-400 to-purple-500",
    };
    return colors[category] || "from-gray-400 to-gray-500";
  };

  return (
    <article className="group cursor-pointer" onClick={onSelect}>
      <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl card-hover border border-white/50 overflow-hidden h-full">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          {item.gambar && !imageError ? (
            <Image
              src={item.gambar}
              alt={item.judul}
              fill
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-green-200 to-emerald-300 flex items-center justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                <TagIcon className="w-8 h-8 text-white" />
              </div>
            </div>
          )}

          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span
              className={`bg-gradient-to-r ${getCategoryColor(item.kategori)} text-white px-3 py-1 rounded-full text-xs font-semibold`}
            >
              {item.kategori}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-green-600 transition-colors duration-300">
            {item.judul}
          </h3>

          <p className="text-sm text-gray-600 mb-4 line-clamp-3">
            {item.ringkasan || item.konten?.substring(0, 150) + "..."}
          </p>

          {/* Meta info */}
          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center">
              <CalendarDaysIcon className="w-4 h-4 mr-1" />
              {formatDate(item.tanggal)}
            </div>
            {item.penulis && (
              <div className="flex items-center">
                <UserIcon className="w-4 h-4 mr-1" />
                {item.penulis}
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

// Loading skeleton
function BeritaGridSkeleton() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white/80 rounded-3xl p-6 animate-pulse">
              <div className="h-48 bg-gray-200 rounded-2xl mb-6"></div>
              <div className="h-4 bg-gray-200 rounded mb-3"></div>
              <div className="h-4 bg-gray-200 rounded mb-3 w-3/4"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
