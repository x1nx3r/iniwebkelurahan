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
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import { getBerita } from "@/lib/firestore";
import BeritaModal from "@/components/sections/BeritaModal";

export default function BeritaPengumumanSection() {
  const [berita, setBerita] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("semua");
  const [selectedBerita, setSelectedBerita] = useState(null);

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

      // Enhanced sorting: First by priority (highest first), then by date (newest first)
      const sortedData = data
        .sort((a, b) => {
          // Priority comparison (higher priority first)
          const priorityA = a.priority || 0;
          const priorityB = b.priority || 0;

          if (priorityA !== priorityB) {
            return priorityB - priorityA; // Higher priority first
          }

          // If priorities are equal, sort by date (newest first)
          const dateA = a.tanggal?.toDate?.() || new Date(a.tanggal);
          const dateB = b.tanggal?.toDate?.() || new Date(b.tanggal);
          return dateB - dateA;
        })
        .slice(0, 8); // Increase to 8 to have more options after filtering

      setBerita(sortedData);
      console.log(
        "📋 Sorted berita by priority:",
        sortedData.map((item) => ({
          title: item.judul.substring(0, 30) + "...",
          priority: item.priority || 0,
          kategori: item.kategori,
        })),
      );
    } catch (error) {
      console.error("Error loading berita:", error);
    } finally {
      setLoading(false);
    }
  };

  // Enhanced filtering with priority-based sorting
  const filteredBerita = berita
    .filter((item) => {
      if (activeTab === "semua") return true;
      return item.kategori === activeTab;
    })
    .sort((a, b) => {
      // Re-sort filtered results by priority, then by date
      const priorityA = a.priority || 0;
      const priorityB = b.priority || 0;

      if (priorityA !== priorityB) {
        return priorityB - priorityA;
      }

      const dateA = a.tanggal?.toDate?.() || new Date(a.tanggal);
      const dateB = b.tanggal?.toDate?.() || new Date(b.tanggal);
      return dateB - dateA;
    })
    .slice(0, 4); // Take top 4 after filtering and sorting

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

  // Get priority badge styling
  const getPriorityBadge = (priority) => {
    if (!priority || priority < 1) return null;

    const styles = {
      high: {
        min: 8,
        bg: "bg-red-500",
        text: "Prioritas Tinggi",
        icon: ExclamationTriangleIcon,
      },
      medium: {
        min: 5,
        bg: "bg-yellow-500",
        text: "Prioritas Sedang",
        icon: ExclamationTriangleIcon,
      },
      low: {
        min: 1,
        bg: "bg-blue-500",
        text: "Prioritas",
        icon: ExclamationTriangleIcon,
      },
    };

    if (priority >= styles.high.min) return { ...styles.high, level: "high" };
    if (priority >= styles.medium.min)
      return { ...styles.medium, level: "medium" };
    return { ...styles.low, level: "low" };
  };

  if (loading) {
    return <BeritaPengumumanSkeleton />;
  }

  return (
    <>
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 sm:top-16 lg:top-20 right-4 sm:right-10 lg:right-20 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-green-200/20 sm:bg-green-200/30 rounded-full blur-2xl sm:blur-3xl"></div>
          <div className="absolute bottom-10 sm:bottom-16 lg:bottom-20 left-4 sm:left-10 lg:left-20 w-24 h-24 sm:w-36 sm:h-36 lg:w-48 lg:h-48 bg-emerald-200/20 sm:bg-emerald-200/30 rounded-full blur-xl sm:blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-teal-200/10 sm:bg-teal-200/20 rounded-full blur-2xl sm:blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 shadow-lg">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full mr-2 sm:mr-3 animate-pulse"></div>
              <span className="whitespace-nowrap">Informasi Terkini</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold gradient-text mb-3 sm:mb-4 px-4">
              <span className="block sm:inline">Berita &</span>
              <span className="block sm:inline"> Pengumuman</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Informasi terbaru, pengumuman penting, dan kegiatan dari Kelurahan
              Kemayoran
            </p>
          </div>

          {/* Priority Legend */}
          {filteredBerita.some(
            (item) => item.priority && item.priority >= 1,
          ) && (
            <div className="mb-6 flex flex-wrap justify-center gap-2 text-xs">
              <div className="bg-white/80 backdrop-blur-xl rounded-lg px-3 py-1 border border-white/50"></div>
            </div>
          )}

          {/* Content Layout: 1 Featured + 3 Small Cards */}
          {filteredBerita.length > 0 ? (
            <div className="mb-8 sm:mb-12">
              {/* Featured Article (Highest priority item) */}
              <div className="mb-6 sm:mb-8">
                <FeaturedBeritaCard
                  item={filteredBerita[0]}
                  onSelect={() => setSelectedBerita(filteredBerita[0])}
                />
              </div>

              {/* Small Cards Grid (Remaining items in priority order) */}
              {filteredBerita.length > 1 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {filteredBerita.slice(1, 4).map((item) => (
                    <BeritaCard
                      key={item.id}
                      item={item}
                      onSelect={() => setSelectedBerita(item)}
                    />
                  ))}
                </div>
              )}
            </div>
          ) : (
            /* Empty state */
            <div className="text-center py-12 sm:py-16">
              <NewspaperIcon className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Belum ada {activeTab === "semua" ? "berita" : activeTab}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base px-4">
                Informasi terbaru akan segera ditampilkan di sini
              </p>
            </div>
          )}

          {/* CTA to full news page */}
          <div className="text-center">
            <Link
              href="/berita"
              className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base touch-manipulation"
            >
              <span className="whitespace-nowrap">Lihat Semua Berita</span>
              <ArrowRightIcon className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedBerita && (
        <BeritaModal
          berita={selectedBerita}
          onClose={() => setSelectedBerita(null)}
        />
      )}
    </>
  );
}

// Enhanced Featured article component with priority badge
function FeaturedBeritaCard({ item, onSelect }) {
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
    <article
      className="group cursor-pointer touch-manipulation"
      onClick={onSelect}
    >
      <div className="bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 overflow-hidden transform hover:-translate-y-1 hover:scale-[1.02] relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Image */}
          <div className="relative h-48 sm:h-64 lg:h-80 overflow-hidden order-2 lg:order-1">
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
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl sm:rounded-2xl flex items-center justify-center">
                  <NewspaperIcon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
              </div>
            )}

            {/* Category badge */}
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
              <span
                className={`bg-gradient-to-r ${getCategoryColor(item.kategori)} text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-semibold shadow-lg`}
              >
                {item.kategori}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-6 lg:p-8 flex flex-col justify-center order-1 lg:order-2">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 line-clamp-2 group-hover:text-green-600 transition-colors duration-300 leading-tight">
              {item.judul}
            </h3>

            <p className="text-gray-600 mb-4 sm:mb-6 line-clamp-3 leading-relaxed text-sm sm:text-base">
              {item.ringkasan || item.konten?.substring(0, 200) + "..."}
            </p>

            {/* Meta info */}
            <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500">
              <div className="flex items-center">
                <CalendarDaysIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                <span className="truncate">{formatDate(item.tanggal)}</span>
              </div>
              <div className="flex items-center text-green-600 font-medium">
                <span className="hidden sm:inline">Baca Selengkapnya</span>
                <span className="sm:hidden">Baca</span>
                <ArrowRightIcon className="w-3 h-3 sm:w-4 sm:h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

// Enhanced regular berita card with priority badge
function BeritaCard({ item, onSelect, priorityBadge }) {
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
      className="group cursor-pointer h-full touch-manipulation"
      onClick={onSelect}
    >
      <div className="bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 overflow-hidden h-full flex flex-col transform hover:-translate-y-1 hover:scale-[1.02] relative">
        {/* Priority ribbon for high priority items */}
        {priorityBadge && priorityBadge.level === "high" && (
          <div className="absolute top-0 right-0 z-10">
            <div className="bg-red-500 text-white px-2 py-1 rounded-bl-lg text-xs font-semibold flex items-center shadow-lg">
              <ExclamationTriangleIcon className="w-3 h-3 mr-1" />
              <span>!</span>
            </div>
          </div>
        )}

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
              className={`bg-gradient-to-r ${getCategoryColor(item.kategori)} text-white px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs font-semibold shadow-lg`}
            >
              {item.kategori}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 flex-1 flex flex-col">
          <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 line-clamp-2 group-hover:text-green-600 transition-colors duration-300 leading-tight">
            {item.judul}
          </h3>

          <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 line-clamp-3 flex-1 leading-relaxed">
            {item.ringkasan || item.konten?.substring(0, 120) + "..."}
          </p>

          {/* Meta info */}
          <div className="flex items-center justify-between text-xs text-gray-500 mt-auto">
            <div className="flex items-center min-w-0 flex-1">
              <CalendarDaysIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" />
              <span className="truncate">{formatDate(item.tanggal)}</span>
            </div>
            <div className="flex items-center text-green-600 font-medium ml-2">
              <ClockIcon className="w-3 h-3 mr-1" />
              <span>Baca</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

// Loading skeleton remains the same
function BeritaPengumumanSkeleton() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header skeleton */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="h-5 sm:h-6 bg-gray-200 rounded-full w-24 sm:w-32 mx-auto mb-3 sm:mb-4 animate-pulse"></div>
          <div className="h-6 sm:h-8 bg-gray-200 rounded w-48 sm:w-64 mx-auto mb-3 sm:mb-4 animate-pulse"></div>
          <div className="h-4 sm:h-5 bg-gray-200 rounded w-64 sm:w-96 mx-auto animate-pulse"></div>
        </div>

        {/* Tab skeleton */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="h-8 sm:h-10 bg-gray-200 rounded-lg sm:rounded-xl w-20 sm:w-24 animate-pulse"
            ></div>
          ))}
        </div>

        {/* Featured card skeleton */}
        <div className="bg-white/80 rounded-2xl sm:rounded-3xl p-4 sm:p-6 mb-6 sm:mb-8 animate-pulse">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            <div className="h-48 sm:h-64 lg:h-80 bg-gray-200 rounded-xl sm:rounded-2xl order-2 lg:order-1"></div>
            <div className="space-y-3 sm:space-y-4 order-1 lg:order-2">
              <div className="h-5 sm:h-6 bg-gray-200 rounded w-3/4"></div>
              <div className="h-3 sm:h-4 bg-gray-200 rounded"></div>
              <div className="h-3 sm:h-4 bg-gray-200 rounded w-2/3"></div>
              <div className="h-3 sm:h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
          </div>
        </div>

        {/* Small cards skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="bg-white/80 rounded-2xl sm:rounded-3xl p-4 sm:p-6 animate-pulse"
            >
              <div className="h-40 sm:h-48 bg-gray-200 rounded-xl sm:rounded-2xl mb-4 sm:mb-6"></div>
              <div className="h-4 sm:h-5 bg-gray-200 rounded mb-2 sm:mb-3"></div>
              <div className="h-4 sm:h-5 bg-gray-200 rounded mb-2 sm:mb-3 w-3/4"></div>
              <div className="h-3 sm:h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
          ))}
        </div>

        {/* CTA skeleton */}
        <div className="text-center">
          <div className="h-10 sm:h-12 bg-gray-200 rounded-lg sm:rounded-xl w-40 sm:w-48 mx-auto animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
