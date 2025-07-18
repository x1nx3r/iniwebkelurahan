import {
  NewspaperIcon,
  MegaphoneIcon,
  CalendarDaysIcon,
  TagIcon,
} from "@heroicons/react/24/outline";

export default function BeritaHero() {
  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl floating-animation"></div>
        <div
          className="absolute bottom-20 left-20 w-48 h-48 bg-white/15 rounded-full blur-2xl floating-animation"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center glass-effect rounded-full px-4 py-2 mb-6">
            <NewspaperIcon className="w-4 h-4 mr-2 text-yellow-300" />
            <span className="text-xs sm:text-sm font-semibold tracking-wider">
              INFORMASI TERKINI
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Berita & Pengumuman
            <span className="block bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 bg-clip-text text-transparent">
              Kelurahan Kemayoran
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 text-green-50 max-w-3xl mx-auto leading-relaxed font-light">
            Dapatkan informasi terbaru tentang kegiatan, program, dan pengumuman
            penting dari Kelurahan Kemayoran
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="glass-effect rounded-2xl p-4">
              <MegaphoneIcon className="w-8 h-8 mx-auto mb-2 text-yellow-300" />
              <div className="text-lg font-bold">Pengumuman</div>
              <div className="text-sm text-green-100">Informasi Resmi</div>
            </div>
            <div className="glass-effect rounded-2xl p-4">
              <CalendarDaysIcon className="w-8 h-8 mx-auto mb-2 text-yellow-300" />
              <div className="text-lg font-bold">Kegiatan</div>
              <div className="text-sm text-green-100">Event & Program</div>
            </div>
            <div className="glass-effect rounded-2xl p-4">
              <TagIcon className="w-8 h-8 mx-auto mb-2 text-yellow-300" />
              <div className="text-lg font-bold">Berita</div>
              <div className="text-sm text-green-100">Update Terkini</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
