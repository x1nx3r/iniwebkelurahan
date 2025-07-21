// iniwebumkm/src/components/sections/BeritaModal.js
"use client";
import { useState, useEffect } from "react";
import {
  XMarkIcon,
  CalendarDaysIcon,
  UserIcon,
  TagIcon,
  ShareIcon,
  PrinterIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

export default function BeritaModal({ berita, onClose }) {
  const [imageError, setImageError] = useState(false);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  const formatDate = (timestamp) => {
    if (!timestamp) return "";
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);

    // Shorter format for mobile
    const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

    return new Intl.DateTimeFormat("id-ID", {
      weekday: isMobile ? "short" : "long",
      day: "numeric",
      month: isMobile ? "short" : "long",
      year: "numeric",
      ...(isMobile ? {} : { hour: "2-digit", minute: "2-digit" }),
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

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: berita.judul,
          text: berita.ringkasan || berita.konten?.substring(0, 150),
          url: window.location.href,
        });
      } catch (error) {
        console.log("Error sharing:", error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert("Link disalin ke clipboard!");
    }
  };

  const handlePrint = () => {
    window.print();
  };

  // Handle click outside modal
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start sm:items-center justify-center overflow-auto"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-none sm:rounded-2xl lg:rounded-3xl w-full sm:max-w-2xl lg:max-w-4xl xl:max-w-5xl max-h-screen sm:max-h-[95vh] sm:m-4 overflow-hidden shadow-2xl relative flex flex-col">
        {/* Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-xl border-b border-gray-200 p-3 sm:p-4 flex items-center justify-between z-10 flex-shrink-0">
          <div className="flex items-start sm:items-center flex-col sm:flex-row gap-2 sm:gap-3 flex-1 min-w-0">
            <span
              className={`bg-gradient-to-r ${getCategoryColor(berita.kategori)} text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-semibold flex-shrink-0`}
            >
              {berita.kategori}
            </span>
            <div className="text-xs sm:text-sm text-gray-500 flex items-center min-w-0">
              <CalendarDaysIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" />
              <span className="truncate">{formatDate(berita.tanggal)}</span>
            </div>
          </div>

          <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
            {/* Hide some buttons on mobile */}
            <button
              onClick={handleShare}
              className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-lg sm:rounded-xl transition-colors duration-200 touch-manipulation"
              title="Bagikan"
            >
              <ShareIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
            </button>
            <button
              onClick={handlePrint}
              className="hidden sm:flex p-1.5 sm:p-2 hover:bg-gray-100 rounded-lg sm:rounded-xl transition-colors duration-200"
              title="Cetak"
            >
              <PrinterIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-lg sm:rounded-xl transition-colors duration-200 touch-manipulation"
            >
              <XMarkIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto flex-1">
          {/* Hero Image */}
          {berita.gambar && !imageError && (
            <div className="relative h-48 sm:h-64 lg:h-80 overflow-hidden">
              <Image
                src={berita.gambar}
                alt={berita.judul}
                fill
                className="w-full h-full object-cover"
                onError={() => setImageError(true)}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          )}

          <div className="p-4 sm:p-6 lg:p-8">
            {/* Title */}
            <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              {berita.judul}
            </h1>

            {/* Meta info */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 sm:gap-4 mb-6 sm:mb-8 text-xs sm:text-sm text-gray-600 border-b border-gray-200 pb-4 sm:pb-6">
              {berita.penulis && (
                <div className="flex items-center">
                  <UserIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 flex-shrink-0" />
                  <span className="truncate">Oleh: {berita.penulis}</span>
                </div>
              )}

              {berita.tags && berita.tags.length > 0 && (
                <div className="flex items-start">
                  <TagIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 flex-shrink-0 mt-0.5" />
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {berita.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-2 py-0.5 sm:py-1 rounded-md sm:rounded-lg text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                    {berita.tags.length > 3 && (
                      <span className="text-gray-500 text-xs">
                        +{berita.tags.length - 3} lainnya
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Ringkasan */}
            {berita.ringkasan && (
              <div className="mb-6 sm:mb-8">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-4 sm:p-6 rounded-r-xl sm:rounded-r-2xl">
                  <h3 className="text-base sm:text-lg font-semibold text-green-800 mb-2">
                    Ringkasan
                  </h3>
                  <p className="text-green-700 leading-relaxed text-sm sm:text-base">
                    {berita.ringkasan}
                  </p>
                </div>
              </div>
            )}

            {/* Content */}
            <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
              <div
                className="text-gray-800 leading-relaxed whitespace-pre-wrap text-sm sm:text-base"
                dangerouslySetInnerHTML={{ __html: berita.konten }}
              />
            </div>

            {/* Contact info for pengumuman */}
            {berita.kategori === "pengumuman" && berita.kontak && (
              <div className="mt-6 sm:mt-8 bg-blue-50 border border-blue-200 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-blue-800 mb-2 sm:mb-3">
                  Informasi Lebih Lanjut
                </h3>
                <div className="text-blue-700 text-sm sm:text-base">
                  {berita.kontak.split("\n").map((line, index) => (
                    <p key={index} className="mb-1">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* Event details for kegiatan */}
            {berita.kategori === "kegiatan" &&
              (berita.tanggal_acara || berita.lokasi) && (
                <div className="mt-6 sm:mt-8 bg-green-50 border border-green-200 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-semibold text-green-800 mb-2 sm:mb-3">
                    Detail Kegiatan
                  </h3>
                  <div className="space-y-2 text-green-700 text-sm sm:text-base">
                    {berita.tanggal_acara && (
                      <p>
                        <strong>Tanggal:</strong>{" "}
                        {formatDate(berita.tanggal_acara)}
                      </p>
                    )}
                    {berita.lokasi && (
                      <p className="break-words">
                        <strong>Lokasi:</strong> {berita.lokasi}
                      </p>
                    )}
                    {berita.pendaftaran && (
                      <p className="break-words">
                        <strong>Pendaftaran:</strong> {berita.pendaftaran}
                      </p>
                    )}
                  </div>
                </div>
              )}

            {/* Footer */}
            <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
              <div className="flex flex-col gap-4">
                <div className="text-xs sm:text-sm text-gray-500">
                  <div>Dipublikasikan: {formatDate(berita.tanggal)}</div>
                  {berita.updated_at &&
                    berita.updated_at !== berita.tanggal && (
                      <div className="mt-1">
                        Diperbarui: {formatDate(berita.updated_at)}
                      </div>
                    )}
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <span className="text-xs sm:text-sm text-gray-500">
                    Bagikan artikel ini:
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={handleShare}
                      className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all duration-300 text-xs sm:text-sm font-medium flex items-center justify-center flex-1 sm:flex-none touch-manipulation"
                    >
                      <ShareIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      Bagikan
                    </button>
                    <button
                      onClick={handlePrint}
                      className="sm:hidden bg-gray-100 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-200 transition-all duration-300 text-xs font-medium flex items-center justify-center touch-manipulation"
                    >
                      <PrinterIcon className="w-3 h-3 mr-1" />
                      Cetak
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
