// iniwebumkm/src/components/sections/BeritaPengumumanSection.js
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  NewspaperIcon,
  SpeakerWaveIcon,
  ArrowRightIcon,
  CalendarDaysIcon,
  TagIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import { getBerita } from "@/lib/firestore";

export default function BeritaPengumumanSection() {
  const [berita, setBerita] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("semua");

  const tabs = [
    { id: "semua", name: "Semua", icon: NewspaperIcon },
    { id: "pengumuman", name: "Pengumuman", icon: SpeakerWaveIcon },
    { id: "berita", name: "Berita", icon: NewspaperIcon },
    { id: "kegiatan", name: "Kegiatan", icon: CalendarDaysIcon },
  ];

  useEffect(() => {
    loadBerita();
  }, []);

  const loadBerita = async () => {
    try {
      setLoading(true);
      const data = await getBerita();
      // Sort by date (newest first) and take only the latest 4 items total
      const sortedData = data
        .sort((a, b) => {
          const dateA = a.tanggal?.toDate?.() || new Date(a.tanggal);
          const dateB = b.tanggal?.toDate?.() || new Date(b.tanggal);
          return dateB - dateA;
        })
        .slice(0, 4); // Only take 4 items maximum
      setBerita(sortedData);
    } catch (error) {
      console.error("Error loading berita:", error);
    } finally {
      setLoading(false);
    }
  };

  // Filter berita and limit to 4 items
  const filteredBerita = berita
    .filter((item) => {
      if (activeTab === "semua") return true;
      return item.kategori === activeTab;
    })
    .slice(0, 4); // Ensure maximum 4 items after filtering

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

  if (loading) {
    return <BeritaPengumumanSkeleton />;
  }

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-64 h-64 bg-green-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-emerald-200/30 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 shadow-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
            Informasi Terkini
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Berita & Pengumuman
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Informasi terbaru, pengumuman penting, dan kegiatan dari Kelurahan
            Kemayoran
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg"
                  : "bg-white/80 text-gray-700 hover:bg-white/90 border border-white/50"
              }`}
            >
              <tab.icon className="w-4 h-4 mr-2" />
              {tab.name}
            </button>
          ))}
        </div>

        {/* Content Layout: 1 Featured + 3 Small Cards */}
        {filteredBerita.length > 0 ? (
          <div className="mb-12">
            {/* Featured Article (Always shows first item) */}
            <div className="mb-8">
              <FeaturedBeritaCard item={filteredBerita[0]} />
            </div>

            {/* Small Cards Grid (Shows remaining items, max 3) */}
            {filteredBerita.length > 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBerita.slice(1, 4).map((item) => (
                  <BeritaCard key={item.id} item={item} />
                ))}
              </div>
            )}
          </div>
        ) : (
          /* Empty state */
          <div className="text-center py-16">
            <NewspaperIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Belum ada {activeTab === "semua" ? "berita" : activeTab}
            </h3>
            <p className="text-gray-600">
              Informasi terbaru akan segera ditampilkan di sini
            </p>
          </div>
        )}

        {/* CTA to full news page */}
        <div className="text-center">
          <Link
            href="/berita"
            className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Lihat Semua Berita
            <ArrowRightIcon className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// Featured article component (larger card)
function FeaturedBeritaCard({ item }) {
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
    <Link href={`/berita/${item.id}`}>
      <article className="group cursor-pointer">
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl card-hover border border-white/50 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Image */}
            <div className="relative h-64 lg:h-80 overflow-hidden">
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
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                    <NewspaperIcon className="w-10 h-10 text-white" />
                  </div>
                </div>
              )}

              {/* Category badge */}
              <div className="absolute top-4 left-4">
                <span
                  className={`bg-gradient-to-r ${getCategoryColor(item.kategori)} text-white px-3 py-1 rounded-full text-sm font-semibold`}
                >
                  {item.kategori}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 lg:p-8 flex flex-col justify-center">
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 line-clamp-2 group-hover:text-green-600 transition-colors duration-300">
                {item.judul}
              </h3>

              <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                {item.ringkasan || item.konten?.substring(0, 200) + "..."}
              </p>

              {/* Meta info */}
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center">
                  <CalendarDaysIcon className="w-4 h-4 mr-2" />
                  {formatDate(item.tanggal)}
                </div>
                <div className="flex items-center text-green-600 font-medium">
                  Baca Selengkapnya
                  <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}

// Regular berita card component
function BeritaCard({ item }) {
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
    <Link href={`/berita/${item.id}`}>
      <article className="group cursor-pointer h-full">
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl card-hover border border-white/50 overflow-hidden h-full flex flex-col">
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
          <div className="p-6 flex-1 flex flex-col">
            <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-green-600 transition-colors duration-300">
              {item.judul}
            </h3>

            <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-1">
              {item.ringkasan || item.konten?.substring(0, 120) + "..."}
            </p>

            {/* Meta info */}
            <div className="flex items-center justify-between text-xs text-gray-500 mt-auto">
              <div className="flex items-center">
                <CalendarDaysIcon className="w-4 h-4 mr-1" />
                {formatDate(item.tanggal)}
              </div>
              <div className="flex items-center text-green-600 font-medium">
                <ClockIcon className="w-3 h-3 mr-1" />
                Baca
              </div>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}

// Updated Loading skeleton to match 1+3 layout
function BeritaPengumumanSkeleton() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header skeleton */}
        <div className="text-center mb-12">
          <div className="h-6 bg-gray-200 rounded-full w-32 mx-auto mb-4 animate-pulse"></div>
          <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-96 mx-auto animate-pulse"></div>
        </div>

        {/* Tab skeleton */}
        <div className="flex justify-center gap-3 mb-8">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="h-10 bg-gray-200 rounded-xl w-24 animate-pulse"
            ></div>
          ))}
        </div>

        {/* Featured card skeleton */}
        <div className="bg-white/80 rounded-3xl p-6 mb-8 animate-pulse">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="h-64 bg-gray-200 rounded-2xl"></div>
            <div className="space-y-4">
              <div className="h-6 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
          </div>
        </div>

        {/* Small cards skeleton - only 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-white/80 rounded-3xl p-6 animate-pulse">
              <div className="h-48 bg-gray-200 rounded-2xl mb-6"></div>
              <div className="h-4 bg-gray-200 rounded mb-3"></div>
              <div className="h-4 bg-gray-200 rounded mb-3 w-3/4"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2"></div>
            </div>
          ))}
        </div>

        {/* CTA skeleton */}
        <div className="text-center">
          <div className="h-12 bg-gray-200 rounded-xl w-48 mx-auto animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
