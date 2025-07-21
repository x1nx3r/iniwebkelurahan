// src/components/sections/UMKMGrid.js
import {
  BuildingStorefrontIcon,
  ExclamationTriangleIcon,
  ArrowPathIcon,
  SparklesIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import { useState, useMemo } from "react";
import Image from "next/image";

export default function UMKMGrid({
  umkm = [],
  loading = false,
  error = null,
  onSelectUMKM,
  onRetry,
  loadingMore = false,
  hasMore = false,
  onLoadMore,
  title = "Daftar UMKM",
  subtitle = null,
  showStats = true,
  className = "",
}) {
  // Sort UMKM to show featured ones first
  const sortedUMKM = useMemo(() => {
    if (!umkm || umkm.length === 0) return [];

    return [...umkm].sort((a, b) => {
      // Featured items first
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      // Then by name alphabetically
      return a.nama.localeCompare(b.nama);
    });
  }, [umkm]);

  // Count featured UMKM
  const featuredCount = sortedUMKM.filter((item) => item.featured).length;

  // Loading state
  if (loading && umkm.length === 0) {
    return <UMKMGridSkeleton title={title} subtitle={subtitle} />;
  }

  // Error state
  if (error && umkm.length === 0) {
    return <ErrorState error={error} onRetry={onRetry} />;
  }

  return (
    <section className={`py-12 sm:py-16 lg:py-20 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            {title}
          </h2>

          {subtitle && (
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-3 sm:mb-4 px-4">
              {subtitle}
            </p>
          )}

          {showStats && (
            <div className="flex flex-col items-center gap-2 text-sm sm:text-base text-gray-600 px-4">
              <div className="flex items-center gap-2">
                <BuildingStorefrontIcon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span className="text-center">
                  {loading && umkm.length === 0
                    ? "Memuat data UMKM..."
                    : umkm.length === 0
                      ? "Belum ada UMKM yang tersedia"
                      : `Menampilkan ${umkm.length} UMKM${hasMore ? "+" : ""}`}
                </span>
              </div>

              {/* Featured count indicator */}
              {featuredCount > 0 && (
                <div className="flex items-center gap-2 text-orange-600">
                  <StarIcon className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium">
                    {featuredCount} UMKM Unggulan
                  </span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* UMKM Grid */}
        {sortedUMKM.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {sortedUMKM.map((item) => (
              <UMKMCard
                key={item.id || item.slug}
                item={item}
                onSelectUMKM={onSelectUMKM}
              />
            ))}
          </div>
        )}

        {/* Loading more skeleton */}
        {loadingMore && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-6 sm:mt-8">
            {[...Array(3)].map((_, index) => (
              <SkeletonCard key={`loading-${index}`} />
            ))}
          </div>
        )}

        {/* Load More Button */}
        {hasMore && !loadingMore && umkm.length > 0 && onLoadMore && (
          <div className="text-center mt-8 sm:mt-12">
            <button
              onClick={onLoadMore}
              disabled={loadingMore}
              className="inline-flex items-center px-4 sm:px-6 py-2.5 sm:py-3 border border-green-600 text-green-600 font-semibold rounded-full hover:bg-green-600 hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base touch-manipulation"
            >
              {loadingMore ? (
                <>
                  <div className="animate-spin rounded-full h-3 w-3 sm:h-4 sm:w-4 border-b-2 border-current mr-2"></div>
                  Memuat...
                </>
              ) : (
                "Lihat lebih banyak"
              )}
            </button>
          </div>
        )}

        {/* Empty state */}
        {umkm.length === 0 && !loading && !error && <EmptyState />}

        {/* Error banner (when there's partial data) */}
        {error && umkm.length > 0 && (
          <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-red-50 border border-red-200 rounded-lg sm:rounded-xl mx-4 sm:mx-0">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0">
              <div className="flex items-start sm:items-center flex-1">
                <ExclamationTriangleIcon className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5 sm:mt-0" />
                <p className="text-red-700 text-xs sm:text-sm leading-relaxed">
                  Terjadi kesalahan saat memuat data tambahan: {error}
                </p>
              </div>
              {onRetry && (
                <button
                  onClick={onRetry}
                  className="text-red-600 hover:text-red-800 text-xs sm:text-sm font-medium self-start sm:self-center touch-manipulation"
                >
                  Coba lagi
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// Loading skeleton component
function UMKMGridSkeleton({ title, subtitle }) {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-3 sm:mb-4">
              {subtitle}
            </p>
          )}
          <div className="h-4 sm:h-5 bg-gray-200 rounded w-32 sm:w-48 mx-auto animate-pulse"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {[...Array(6)].map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Individual skeleton card
function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="h-40 sm:h-48 lg:h-56 bg-gray-200 animate-pulse"></div>
      <div className="p-4 sm:p-6">
        <div className="h-5 sm:h-6 bg-gray-200 rounded mb-2 animate-pulse"></div>
        <div className="h-3 sm:h-4 bg-gray-200 rounded w-3/4 mb-3 sm:mb-4 animate-pulse"></div>
        <div className="space-y-2 mb-4 sm:mb-6">
          <div className="h-3 sm:h-4 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-3 sm:h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
          <div className="h-3 sm:h-4 bg-gray-200 rounded w-4/6 animate-pulse"></div>
        </div>
        <div className="h-3 sm:h-4 bg-gray-200 rounded w-24 sm:w-32 animate-pulse"></div>
      </div>
    </div>
  );
}

// Error state component
function ErrorState({ error, onRetry }) {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-12 sm:py-16">
          <ExclamationTriangleIcon className="w-12 h-12 sm:w-16 sm:h-16 text-red-400 mx-auto mb-3 sm:mb-4" />
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
            Terjadi Kesalahan
          </h3>
          <p className="text-gray-600 mb-4 sm:mb-6 max-w-md mx-auto text-sm sm:text-base px-4">
            {error || "Gagal memuat data UMKM. Silakan coba lagi."}
          </p>
          {onRetry && (
            <button
              onClick={onRetry}
              className="inline-flex items-center px-3 sm:px-4 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-300 text-sm sm:text-base touch-manipulation"
            >
              <ArrowPathIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              Coba Lagi
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

// Empty state component
function EmptyState() {
  return (
    <div className="text-center py-12 sm:py-16 px-4">
      <div className="relative inline-block">
        <BuildingStorefrontIcon className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 mx-auto mb-3 sm:mb-4" />
        <SparklesIcon className="w-4 h-4 sm:w-6 sm:h-6 text-gray-300 absolute -top-1 -right-6 sm:-right-8" />
      </div>
      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
        Belum Ada UMKM
      </h3>
      <p className="text-gray-600 max-w-md mx-auto text-sm sm:text-base">
        Saat ini belum ada UMKM yang terdaftar. Silakan cek kembali nanti atau
        hubungi administrator.
      </p>
    </div>
  );
}

// Standard UMKM card component with responsive styling
function UMKMCard({ item, onSelectUMKM }) {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const hasImage = item.foto && item.foto.trim() !== "" && !imageError;

  const handleImageError = () => {
    setImageError(true);
    setImageLoading(false);
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleCardClick = () => {
    if (onSelectUMKM) {
      onSelectUMKM(item);
    }
  };

  return (
    <div
      className="group cursor-pointer touch-manipulation"
      onClick={handleCardClick}
    >
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl border border-gray-100 overflow-hidden h-full transition-all duration-300 group-hover:scale-[1.02] transform hover:-translate-y-1">
        {/* Image section */}
        <div className="relative h-40 sm:h-48 lg:h-56 overflow-hidden">
          {hasImage ? (
            <>
              {/* Loading placeholder */}
              {imageLoading && (
                <div className="absolute inset-0 bg-gradient-to-br from-green-200 to-emerald-300 flex items-center justify-center animate-pulse">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/30 rounded-xl sm:rounded-2xl flex items-center justify-center">
                    <BuildingStorefrontIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white/70" />
                  </div>
                </div>
              )}

              {/* Actual image */}
              <Image
                src={item.foto}
                alt={`${item.nama} - UMKM Kemayoran`}
                fill
                className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
                  imageLoading ? "opacity-0" : "opacity-100"
                }`}
                onError={handleImageError}
                onLoad={handleImageLoad}
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </>
          ) : (
            // Fallback placeholder
            <div className="w-full h-full bg-gradient-to-br from-green-200 to-emerald-300 flex items-center justify-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <BuildingStorefrontIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
            </div>
          )}

          {/* Featured badge */}
          {item.featured && (
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 shadow-lg">
                <SparklesIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1" />
                <span className="whitespace-nowrap">Unggulan</span>
              </span>
            </div>
          )}

          {/* Image overlay for better text readability */}
          {hasImage && !imageLoading && (
            <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 bg-gradient-to-t from-black/30 to-transparent"></div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">
          <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300 line-clamp-2 leading-tight">
            {item.nama}
          </h3>

          <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
            Pemilik: <span className="font-medium">{item.pemilik}</span>
          </p>

          <p className="text-xs sm:text-sm text-gray-700 mb-4 sm:mb-6 line-clamp-3 leading-relaxed">
            {item.deskripsi}
          </p>

          {/* Action button */}
          <div className="flex items-center justify-between">
            <span className="text-green-600 hover:text-green-700 font-semibold text-xs sm:text-sm border-b-2 border-green-600 hover:border-green-700 transition-all duration-300 pb-1 group/btn">
              <span className="hidden sm:inline">Lihat detail lengkap</span>
              <span className="sm:hidden">Lihat detail</span>
              <span className="inline-block ml-1 group-hover/btn:translate-x-1 transition-transform duration-300">
                →
              </span>
            </span>

            {/* Contact indicator */}
            {item.telefon && (
              <div className="text-xs text-gray-500 flex items-center">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full mr-1"></div>
                <span className="hidden sm:inline">Tersedia kontak</span>
                <span className="sm:hidden">Kontak</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
