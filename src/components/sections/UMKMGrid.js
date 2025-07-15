import {
  MapPinIcon,
  PhoneIcon,
  EyeIcon,
  BuildingStorefrontIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import Image from "next/image";

export default function UMKMGrid({ umkm, onSelectUMKM }) {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Daftar UMKM
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Menampilkan {umkm.length} UMKM yang tersedia
          </p>
        </div>

        {/* UMKM Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {umkm.map((item) => (
            <UMKMCard key={item.id} item={item} onSelectUMKM={onSelectUMKM} />
          ))}
        </div>

        {/* Empty state */}
        {umkm.length === 0 && (
          <div className="text-center py-16">
            <BuildingStorefrontIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Tidak ada UMKM ditemukan
            </h3>
            <p className="text-gray-600">
              Belum ada UMKM yang terdaftar saat ini
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

// Separate component for individual UMKM card
function UMKMCard({ item, onSelectUMKM }) {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  // Check if image exists and is valid
  const hasImage = item.foto && item.foto.trim() !== "" && !imageError;

  const handleImageError = () => {
    setImageError(true);
    setImageLoading(false);
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  return (
    <div className="group">
      <div className="bg-white rounded-3xl shadow-xl card-hover border border-gray-100 overflow-hidden h-full">
        {/* Image section */}
        <div className="relative h-48 sm:h-56 overflow-hidden">
          {hasImage ? (
            <>
              {/* Loading placeholder */}
              {imageLoading && (
                <div className="absolute inset-0 bg-gradient-to-br from-green-200 to-emerald-300 flex items-center justify-center animate-pulse">
                  <div className="w-16 h-16 bg-white/30 rounded-2xl flex items-center justify-center">
                    <BuildingStorefrontIcon className="w-8 h-8 text-white/70" />
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
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </>
          ) : (
            // Fallback placeholder
            <div className="w-full h-full bg-gradient-to-br from-green-200 to-emerald-300 flex items-center justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <BuildingStorefrontIcon className="w-8 h-8 text-white" />
              </div>
            </div>
          )}

          {/* Image overlay for better text readability when image exists */}
          {hasImage && !imageLoading && (
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/30 to-transparent"></div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
            {item.nama}
          </h3>

          <p className="text-sm text-gray-600 mb-4">
            Pemilik: <span className="font-medium">{item.pemilik}</span>
          </p>

          <p className="text-sm text-gray-700 mb-6 line-clamp-3 leading-relaxed">
            {item.deskripsi}
          </p>

          {/* Button */}
          <button
            onClick={() => onSelectUMKM(item)}
            className="text-green-600 hover:text-green-700 font-semibold text-sm border-b-2 border-green-600 hover:border-green-700 transition-all duration-300 pb-1 group/btn"
          >
            Lihat detail lengkap
            <span className="inline-block ml-1 group-hover/btn:translate-x-1 transition-transform duration-300">
              →
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
