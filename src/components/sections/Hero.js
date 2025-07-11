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
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://cdn.x1nx3r.uk/IMG_1265.jpg"
          alt="Surabaya City Background"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Green overlay to maintain brand colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/60 via-emerald-500/40 to-teal-600/60"></div>
      </div>

      {/* Animated Elements */}
      <div className="absolute inset-0">
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
          <div className="inline-flex items-center glass-effect rounded-full px-4 py-2 mb-6">
            <MapPinIcon className="w-4 h-4 mr-2 text-yellow-300" />
            <span className="text-xs sm:text-sm font-semibold tracking-wider">
              SURABAYA, JAWA TIMUR
            </span>
          </div>

          {/* Main heading - with better text shadow for readability */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
          >
            Selamat Datang di
            <span
              className="block bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 bg-clip-text text-transparent"
              style={{ textShadow: "none" }}
            >
              Kelurahan Kemayoran
            </span>
          </h1>

          <p
            className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 text-green-50 max-w-3xl mx-auto leading-relaxed font-light"
            style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.7)" }}
          >
            Melayani masyarakat dengan sepenuh hati, membangun lingkungan yang
            sejahtera, dan mendukung pertumbuhan UMKM lokal dengan inovasi
            terdepan
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/profil" className="group relative">
              <div className="bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 flex items-center justify-center backdrop-blur-sm">
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
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center relative backdrop-blur-sm">
          <div className="w-1 h-3 bg-gradient-to-b from-white to-transparent rounded-full mt-2 animate-pulse"></div>
        </div>
        <p className="text-xs mt-2 text-white/70 font-medium">Scroll</p>
      </div>
    </section>
  );
}
