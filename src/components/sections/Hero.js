import Link from "next/link";
import {
  ArrowRightIcon,
  MapPinIcon,
  UsersIcon,
  BuildingOfficeIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-green">
        <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/20"></div>
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl floating-animation"></div>
        <div
          className="absolute top-3/4 right-1/4 w-48 h-48 bg-white/15 rounded-full blur-2xl floating-animation"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-3/4 w-32 h-32 bg-white/20 rounded-full blur-xl floating-animation"
          style={{ animationDelay: "4s" }}
        ></div>

        {/* Simple dot pattern overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute top-20 left-32 w-1 h-1 bg-white rounded-full"></div>
          <div className="absolute top-32 left-16 w-1.5 h-1.5 bg-white rounded-full"></div>
          <div className="absolute top-16 right-20 w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-white rounded-full"></div>
          <div className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-white rounded-full"></div>
          <div className="absolute bottom-20 right-16 w-2 h-2 bg-white rounded-full"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-20">
        <div className="max-w-4xl mx-auto">
          {/* Badge with glow effect */}
          <div className="inline-flex items-center glass-effect rounded-full px-4 py-2 mb-6 pulse-glow">
            <MapPinIcon className="w-4 h-4 mr-2 text-yellow-300" />
            <span className="text-xs sm:text-sm font-semibold tracking-wider">
              SURABAYA, JAWA TIMUR
            </span>
            <SparklesIcon className="w-3 h-3 ml-2 text-yellow-300" />
          </div>

          {/* Main heading - scaled down significantly */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-shadow">
            Selamat Datang di
            <span className="block bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 bg-clip-text text-transparent">
              Kelurahan Kemayoran
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 text-green-50 max-w-3xl mx-auto leading-relaxed font-light">
            Melayani masyarakat dengan sepenuh hati, membangun lingkungan yang
            sejahtera, dan mendukung pertumbuhan UMKM lokal dengan inovasi
            terdepan
          </p>

          {/* Enhanced CTA Buttons - smaller */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/profil" className="group relative">
              <div className="bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 flex items-center justify-center">
                <span className="text-sm sm:text-base">Profil Kelurahan</span>
                <ArrowRightIcon className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Link>
            <Link href="/umkm" className="group relative">
              <div className="glass-effect hover:bg-white/20 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-500 border border-white/30 hover:border-white/50 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 flex items-center justify-center">
                <span className="text-sm sm:text-base">Jelajahi UMKM</span>
                <BuildingOfficeIcon className="w-4 h-4 ml-3 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </Link>
          </div>

          {/* Enhanced Quick stats - smaller */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-20">
            <div className="glass-effect rounded-2xl p-6 card-hover border border-white/20 group">
              <div className="relative">
                <UsersIcon className="w-8 h-8 mx-auto mb-3 text-yellow-300 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-yellow-300/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-1 bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent">
                15,847
              </h3>
              <p className="text-green-100 font-medium text-sm">
                Jumlah Penduduk
              </p>
            </div>

            <div className="glass-effect rounded-2xl p-6 card-hover border border-white/20 group">
              <div className="relative">
                <BuildingOfficeIcon className="w-8 h-8 mx-auto mb-3 text-yellow-300 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-yellow-300/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-1 bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent">
                127
              </h3>
              <p className="text-green-100 font-medium text-sm">
                UMKM Terdaftar
              </p>
            </div>

            <div className="glass-effect rounded-2xl p-6 card-hover border border-white/20 group">
              <div className="relative">
                <MapPinIcon className="w-8 h-8 mx-auto mb-3 text-yellow-300 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-yellow-300/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-1 bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent">
                8
              </h3>
              <p className="text-green-100 font-medium text-sm">RT/RW</p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center relative">
          <div className="w-1 h-3 bg-gradient-to-b from-white to-transparent rounded-full mt-2 animate-pulse"></div>
        </div>
        <p className="text-xs mt-2 text-white/70 font-medium">Scroll</p>
      </div>
    </section>
  );
}
