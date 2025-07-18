// iniwebumkm/src/components/sections/BeritaModal.js
"use client";
import { useState } from "react";
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

  const formatDate = (timestamp) => {
    if (!timestamp) return "";
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return new Intl.DateTimeFormat("id-ID", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
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
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-3xl max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl relative">
        {/* Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-xl border-b border-gray-200 p-4 flex items-center justify-between z-10">
          <div className="flex items-center space-x-3">
            <span
              className={`bg-gradient-to-r ${getCategoryColor(berita.kategori)} text-white px-3 py-1 rounded-full text-sm font-semibold`}
            >
              {berita.kategori}
            </span>
            <div className="text-sm text-gray-500 flex items-center">
              <CalendarDaysIcon className="w-4 h-4 mr-1" />
              {formatDate(berita.tanggal)}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleShare}
              className="p-2 hover:bg-gray-100 rounded-xl transition-colors duration-200"
              title="Bagikan"
            >
              <ShareIcon className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={handlePrint}
              className="p-2 hover:bg-gray-100 rounded-xl transition-colors duration-200"
              title="Cetak"
            >
              <PrinterIcon className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-xl transition-colors duration-200"
            >
              <XMarkIcon className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
          {/* Hero Image */}
          {berita.gambar && !imageError && (
            <div className="relative h-64 sm:h-80 overflow-hidden">
              <Image
                src={berita.gambar}
                alt={berita.judul}
                fill
                className="w-full h-full object-cover"
                onError={() => setImageError(true)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          )}

          <div className="p-6 sm:p-8">
            {/* Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {berita.judul}
            </h1>

            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-gray-600 border-b border-gray-200 pb-6">
              {berita.penulis && (
                <div className="flex items-center">
                  <UserIcon className="w-4 h-4 mr-2" />
                  <span>Oleh: {berita.penulis}</span>
                </div>
              )}

              {berita.tags && berita.tags.length > 0 && (
                <div className="flex items-center">
                  <TagIcon className="w-4 h-4 mr-2" />
                  <div className="flex flex-wrap gap-2">
                    {berita.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded-lg text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Ringkasan */}
            {berita.ringkasan && (
              <div className="mb-8">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-6 rounded-r-2xl">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">
                    Ringkasan
                  </h3>
                  <p className="text-green-700 leading-relaxed">
                    {berita.ringkasan}
                  </p>
                </div>
              </div>
            )}

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <div
                className="text-gray-800 leading-relaxed whitespace-pre-wrap"
                dangerouslySetInnerHTML={{ __html: berita.konten }}
              />
            </div>

            {/* Contact info for pengumuman */}
            {berita.kategori === "pengumuman" && berita.kontak && (
              <div className="mt-8 bg-blue-50 border border-blue-200 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">
                  Informasi Lebih Lanjut
                </h3>
                <div className="text-blue-700">
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
                <div className="mt-8 bg-green-50 border border-green-200 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">
                    Detail Kegiatan
                  </h3>
                  <div className="space-y-2 text-green-700">
                    {berita.tanggal_acara && (
                      <p>
                        <strong>Tanggal:</strong>{" "}
                        {formatDate(berita.tanggal_acara)}
                      </p>
                    )}
                    {berita.lokasi && (
                      <p>
                        <strong>Lokasi:</strong> {berita.lokasi}
                      </p>
                    )}
                    {berita.pendaftaran && (
                      <p>
                        <strong>Pendaftaran:</strong> {berita.pendaftaran}
                      </p>
                    )}
                  </div>
                </div>
              )}

            {/* Footer */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-sm text-gray-500">
                  Dipublikasikan: {formatDate(berita.tanggal)}
                  {berita.updated_at &&
                    berita.updated_at !== berita.tanggal && (
                      <span className="block">
                        Diperbarui: {formatDate(berita.updated_at)}
                      </span>
                    )}
                </div>

                <div className="flex items-center space-x-3">
                  <span className="text-sm text-gray-500">Bagikan:</span>
                  <button
                    onClick={handleShare}
                    className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all duration-300 text-sm font-medium"
                  >
                    <ShareIcon className="w-4 h-4 inline mr-2" />
                    Bagikan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
