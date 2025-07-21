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
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block bg-emerald-100 text-emerald-800 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            Informasi Terkini
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Berita & Pengumuman
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
            Update terbaru seputar kegiatan dan layanan kelurahan
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 sm:mb-12">
          {/* Search */}
          <div className="relative mb-4 sm:mb-6">
            <MagnifyingGlassIcon className="w-4 h-4 sm:w-5 sm:h-5 absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Cari berita atau pengumuman..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-white/80 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent shadow-lg text-sm sm:text-base touch-manipulation"
            />
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl font-medium transition-all duration-300 text-xs sm:text-sm touch-manipulation ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg transform scale-105"
                    : "bg-white/80 text-gray-700 hover:bg-white/90 border border-white/50 hover:scale-105"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6 sm:mb-8">
          <p className="text-gray-600 text-sm sm:text-base">
            Menampilkan {filteredBerita.length} dari {berita.length} artikel
          </p>
        </div>

        {/* Berita Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
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
          <div className="text-center py-12 sm:py-16">
            <MagnifyingGlassIcon className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 mx-auto mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
              Tidak ada hasil ditemukan
            </h3>
            <p className="text-gray-600 text-sm sm:text-base px-4">
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
      month: "short",
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
    <article
      className="group cursor-pointer touch-manipulation"
      onClick={onSelect}
    >
      <div className="bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 overflow-hidden h-full transform hover:-translate-y-1 hover:scale-[1.02]">
        {/* Image */}
        <div className="relative h-40 sm:h-48 overflow-hidden">
          {item.gambar && !imageError ? (
            <Image
              src={item.gambar}
              alt={item.judul}
              fill
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
              onError={() => setImageError(true)}
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-green-200 to-emerald-300 flex items-center justify-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl sm:rounded-2xl flex items-center justify-center">
                <TagIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
            </div>
          )}

          {/* Category badge */}
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
            <span
              className={`bg-gradient-to-r ${getCategoryColor(item.kategori)} text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-semibold shadow-lg`}
            >
              {item.kategori}
            </span>
          </div>

          {/* Overlay gradient for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">
          <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 line-clamp-2 group-hover:text-green-600 transition-colors duration-300 leading-tight">
            {item.judul}
          </h3>

          <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 line-clamp-3 leading-relaxed">
            {item.ringkasan || item.konten?.substring(0, 120) + "..."}
          </p>

          {/* Meta info */}
          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center">
              <CalendarDaysIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
              <span className="truncate">{formatDate(item.tanggal)}</span>
            </div>
            {item.penulis && (
              <div className="flex items-center ml-2">
                <UserIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                <span className="truncate max-w-20 sm:max-w-none">
                  {item.penulis}
                </span>
              </div>
            )}
          </div>

          {/* Read more indicator */}
          <div className="mt-3 sm:mt-4 text-right">
            <span className="text-green-600 text-xs sm:text-sm font-medium group-hover:text-green-700 transition-colors duration-300">
              Baca selengkapnya →
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

// Loading skeleton
function BeritaGridSkeleton() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header skeleton */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="w-24 h-6 bg-gray-200 rounded-full mx-auto mb-3 sm:mb-4 animate-pulse"></div>
          <div className="w-48 sm:w-64 h-8 sm:h-10 bg-gray-200 rounded-lg mx-auto mb-3 sm:mb-4 animate-pulse"></div>
          <div className="w-64 sm:w-80 h-4 sm:h-5 bg-gray-200 rounded mx-auto animate-pulse"></div>
        </div>

        {/* Filters skeleton */}
        <div className="mb-8 sm:mb-12">
          <div className="w-full h-10 sm:h-12 bg-gray-200 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 animate-pulse"></div>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-16 sm:w-20 h-8 sm:h-10 bg-gray-200 rounded-lg sm:rounded-xl animate-pulse"
              ></div>
            ))}
          </div>
        </div>

        {/* Cards skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="bg-white/80 rounded-2xl sm:rounded-3xl p-4 sm:p-6 animate-pulse shadow-lg"
            >
              <div className="h-40 sm:h-48 bg-gray-200 rounded-xl sm:rounded-2xl mb-4 sm:mb-6"></div>
              <div className="h-4 sm:h-5 bg-gray-200 rounded mb-2 sm:mb-3"></div>
              <div className="h-4 sm:h-5 bg-gray-200 rounded mb-2 sm:mb-3 w-3/4"></div>
              <div className="h-3 sm:h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-3 sm:h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
