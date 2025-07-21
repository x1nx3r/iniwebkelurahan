import Link from "next/link";
import {
  ArrowRightIcon,
  MapPinIcon,
  UsersIcon,
  BuildingOfficeIcon,
  BuildingStorefrontIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://cdn.x1nx3r.uk/IMG_1265.jpg"
          alt="Surabaya City Background"
          fill
          className="w-full h-full object-cover object-center"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50 sm:bg-black/40"></div>
        {/* Green overlay to maintain brand colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/70 via-emerald-500/50 to-teal-600/70 sm:from-green-600/60 sm:via-emerald-500/40 sm:to-teal-600/60"></div>
      </div>

      {/* Animated Elements */}
      <div className="absolute inset-0">
        {/* Floating orbs - responsive sizing */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-white/5 sm:bg-white/10 rounded-full blur-2xl sm:blur-3xl floating-animation"></div>
        <div
          className="absolute top-3/4 right-1/4 w-24 h-24 sm:w-36 sm:h-36 lg:w-48 lg:h-48 bg-white/10 sm:bg-white/15 rounded-full blur-xl sm:blur-2xl floating-animation"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-3/4 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-white/15 sm:bg-white/20 rounded-full blur-lg sm:blur-xl floating-animation"
          style={{ animationDelay: "4s" }}
        ></div>

        {/* Simple dot pattern overlay - hidden on very small screens */}
        <div className="hidden sm:block absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute top-20 left-32 w-1 h-1 bg-white rounded-full"></div>
          <div className="absolute top-32 left-16 w-1.5 h-1.5 bg-white rounded-full"></div>
          <div className="absolute top-16 right-20 w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-white rounded-full"></div>
          <div className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-white rounded-full"></div>
          <div className="absolute bottom-20 right-16 w-2 h-2 bg-white rounded-full"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-16 sm:py-20">
        <div className="max-w-5xl mx-auto">
          {/* Badge with glow effect */}
          <div className="inline-flex items-center glass-effect rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6 shadow-lg">
            <MapPinIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 text-yellow-300 flex-shrink-0" />
            <span className="text-xs sm:text-sm font-semibold tracking-wider whitespace-nowrap">
              SURABAYA, JAWA TIMUR
            </span>
          </div>

          {/* Main heading - with better text shadow for readability */}
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight px-2"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}
          >
            <span className="block sm:inline">Selamat Datang di</span>
            <span
              className="block bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 bg-clip-text text-transparent mt-1 sm:mt-0"
              style={{ textShadow: "none" }}
            >
              Kelurahan Kemayoran
            </span>
          </h1>

          <p
            className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 text-green-50 max-w-4xl mx-auto leading-relaxed font-light px-4"
            style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}
          >
            Melayani masyarakat dengan sepenuh hati, membangun lingkungan yang
            sejahtera, dan mendukung pertumbuhan UMKM lokal dengan inovasi
            terdepan
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 px-4">
            <Link href="/profil" className="group relative touch-manipulation">
              <div className="bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl font-semibold transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 sm:hover:-translate-y-2 hover:scale-105 flex items-center justify-center backdrop-blur-sm">
                <span className="text-sm sm:text-base font-medium">
                  Profil Kelurahan
                </span>
                <ArrowRightIcon className="w-4 h-4 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
              </div>
            </Link>
            <Link href="/umkm" className="group relative touch-manipulation">
              <div className="glass-effect hover:bg-white/20 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl font-semibold transition-all duration-500 border border-white/30 hover:border-white/50 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 sm:hover:-translate-y-2 hover:scale-105 flex items-center justify-center">
                <span className="text-sm sm:text-base font-medium">
                  Jelajahi UMKM
                </span>
                <BuildingStorefrontIcon className="w-4 h-4 ml-2 sm:ml-3 group-hover:rotate-12 transition-transform duration-300 flex-shrink-0" />
              </div>
            </Link>
          </div>

          {/* Quick Stats/Features - Centered with 2 cards */}
          <div className="flex justify-center gap-4 sm:gap-6 max-w-2xl mx-auto mb-8 sm:mb-12 px-4">
            <div className="glass-effect rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center transform hover:scale-105 transition-all duration-300 flex-1 max-w-xs">
              <UsersIcon className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-300 mx-auto mb-1 sm:mb-2" />
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
                25,000+
              </div>
              <div className="text-xs sm:text-sm text-green-100">Penduduk</div>
            </div>

            <div className="glass-effect rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center transform hover:scale-105 transition-all duration-300 flex-1 max-w-xs">
              <BuildingStorefrontIcon className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-300 mx-auto mb-1 sm:mb-2" />
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
                220+
              </div>
              <div className="text-xs sm:text-sm text-green-100">UMKM</div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex justify-center relative backdrop-blur-sm">
          <div className="w-1 h-2 sm:h-3 bg-gradient-to-b from-white to-transparent rounded-full mt-1.5 sm:mt-2 animate-pulse"></div>
        </div>
        <p className="text-xs mt-1 sm:mt-2 text-white/70 font-medium">Scroll</p>
      </div>
    </section>
  );
}
