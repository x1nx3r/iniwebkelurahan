// src/components/sections/BeritaHero.js
import { NewspaperIcon } from "@heroicons/react/24/outline";

export default function BeritaHero() {
  return (
    <section className="relative py-20 sm:py-24 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-green-200/30 rounded-full blur-3xl floating-animation"></div>
        <div
          className="absolute bottom-20 left-20 w-48 h-48 bg-emerald-200/30 rounded-full blur-2xl floating-animation"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-6 shadow-lg">
            <NewspaperIcon className="w-4 h-4 mr-2" />
            Informasi Kelurahan Kemayoran
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-6">
            Berita & Pengumuman
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Tetap terhubung dengan informasi terbaru, pengumuman resmi, dan
            kegiatan masyarakat di Kelurahan Kemayoran.
          </p>
        </div>
      </div>
    </section>
  );
}
