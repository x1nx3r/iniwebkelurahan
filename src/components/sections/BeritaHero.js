// src/components/sections/BeritaHero.js
import { NewspaperIcon } from "@heroicons/react/24/outline";

export default function BeritaHero() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 xl:py-28 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 overflow-hidden min-h-[60vh] sm:min-h-[70vh] flex items-center">
      {/* Background decorations */}
      <div className="absolute inset-0">
        {/* Large decoration - hidden on mobile, scaled for different screens */}
        <div className="absolute top-10 sm:top-16 lg:top-20 right-4 sm:right-10 lg:right-20 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-green-200/20 sm:bg-green-200/30 rounded-full blur-2xl sm:blur-3xl floating-animation"></div>

        {/* Small decoration - responsive sizing */}
        <div
          className="absolute bottom-10 sm:bottom-16 lg:bottom-20 left-4 sm:left-10 lg:left-20 w-24 h-24 sm:w-36 sm:h-36 lg:w-48 lg:h-48 bg-emerald-200/20 sm:bg-emerald-200/30 rounded-full blur-xl sm:blur-2xl floating-animation"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Additional mobile-friendly decoration */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72 bg-teal-200/10 sm:bg-teal-200/20 rounded-full blur-3xl floating-animation"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Header */}
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 shadow-lg backdrop-blur-sm border border-green-200/50 transition-all duration-300 hover:scale-105">
            <NewspaperIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
            <span className="whitespace-nowrap">
              Informasi Kelurahan Kemayoran
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold gradient-text mb-4 sm:mb-6 leading-tight px-4">
            <span className="block sm:inline">Berita &</span>
            <span className="block sm:inline"> Pengumuman</span>
          </h1>

          {/* Subtitle */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed sm:leading-relaxed md:leading-loose">
              Tetap terhubung dengan informasi terbaru, pengumuman resmi, dan
              kegiatan masyarakat di Kelurahan Kemayoran.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 bg-gradient-to-t from-white/30 to-transparent pointer-events-none"></div>
    </section>
  );
}
