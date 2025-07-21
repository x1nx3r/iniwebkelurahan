import Link from "next/link";
import {
  DocumentTextIcon,
  IdentificationIcon,
  HomeIcon,
  UserGroupIcon,
  BuildingStorefrontIcon,
  HeartIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

export default function ServicesSection() {
  const services = [
    {
      icon: IdentificationIcon,
      title: "Kartu Tanda Penduduk",
      description: "Pembuatan dan perpanjangan KTP elektronik",
      features: ["Pendaftaran online", "Proses cepat", "Gratis biaya admin"],
      gradient: "from-green-400 to-emerald-500",
    },
    {
      icon: DocumentTextIcon,
      title: "Surat Keterangan",
      description: "Berbagai surat keterangan untuk keperluan administrasi",
      features: ["Surat domisili", "Surat tidak mampu", "Surat usaha"],
      gradient: "from-emerald-400 to-teal-500",
    },
    {
      icon: HomeIcon,
      title: "Surat Pindah",
      description: "Pelayanan administrasi perpindahan penduduk",
      features: ["Pindah dalam kota", "Pindah luar kota", "Konsultasi gratis"],
      gradient: "from-teal-400 to-cyan-500",
    },
    {
      icon: UserGroupIcon,
      title: "Kartu Keluarga",
      description: "Pembuatan dan perubahan data kartu keluarga",
      features: ["KK baru", "Perubahan data", "Penambahan anggota"],
      gradient: "from-green-500 to-emerald-600",
    },
    {
      icon: BuildingStorefrontIcon,
      title: "Izin Usaha",
      description: "Bantuan pengurusan izin UMKM dan usaha kecil",
      features: ["IUMK", "Konsultasi bisnis", "Pendampingan"],
      gradient: "from-emerald-500 to-green-600",
    },
    {
      icon: HeartIcon,
      title: "Layanan Sosial",
      description: "Program bantuan dan pemberdayaan masyarakat",
      features: ["Bantuan sosial", "Program PKH", "Pemberdayaan"],
      gradient: "from-teal-500 to-emerald-600",
    },
  ];

  return (
    <section
      id="layanan"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 sm:top-16 lg:top-20 right-4 sm:right-10 lg:right-20 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-green-200/20 sm:bg-green-200/30 rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute bottom-10 sm:bottom-16 lg:bottom-20 left-4 sm:left-10 lg:left-20 w-24 h-24 sm:w-36 sm:h-36 lg:w-48 lg:h-48 bg-emerald-200/20 sm:bg-emerald-200/30 rounded-full blur-xl sm:blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-teal-200/10 sm:bg-teal-200/20 rounded-full blur-2xl sm:blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 shadow-lg">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full mr-2 sm:mr-3 animate-pulse"></div>
            <span className="whitespace-nowrap">Layanan Publik</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold gradient-text mb-3 sm:mb-4 px-4">
            <span className="block sm:inline">Layanan Kelurahan</span>
            <span className="block sm:inline"> Kemayoran</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Berbagai layanan administrasi dan pemberdayaan masyarakat yang
            tersedia dengan pelayanan terbaik
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 relative overflow-hidden h-full transform hover:-translate-y-1 hover:scale-[1.02]">
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl sm:rounded-3xl`}
                ></div>

                {/* Icon with glow effect */}
                <div className="relative mb-4 sm:mb-6">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br ${service.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg`}
                  >
                    <service.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
                  </div>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-xl sm:rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}
                  ></div>
                </div>

                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:scale-105 transition-transform duration-300 leading-tight">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 sm:mb-6 text-xs sm:text-sm lg:text-base leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 sm:space-y-3">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-xs sm:text-sm text-gray-600 group/item"
                    >
                      <div
                        className={`w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-2 sm:mr-3 group-hover/item:scale-125 transition-transform duration-300 flex-shrink-0`}
                      ></div>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Decorative corner */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-4 h-4 sm:w-6 sm:h-6 border-t-2 border-r-2 border-green-300/50 rounded-tr-lg"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="bg-white/70 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 xl:p-12 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-emerald-50/50 rounded-2xl sm:rounded-3xl"></div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/90 to-emerald-600/90 rounded-2xl sm:rounded-3xl"></div>

          <div className="relative z-10 text-center text-white">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full mr-2 sm:mr-3 animate-pulse"></div>
              <span className="whitespace-nowrap">Bantuan Layanan</span>
            </div>

            <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold mb-3 sm:mb-4 px-4">
              Butuh Bantuan Layanan?
            </h3>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl mb-4 sm:mb-6 lg:mb-8 text-green-100 max-w-2xl mx-auto leading-relaxed px-4">
              Tim kami siap membantu Anda dalam proses administrasi dan
              memberikan informasi yang dibutuhkan dengan pelayanan terbaik
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <a
                href="tel:+62311234567"
                className="bg-white/90 backdrop-blur-sm text-green-600 hover:bg-white hover:scale-105 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base shadow-lg touch-manipulation"
              >
                Hubungi Kami
              </a>
              <Link
                href="/profil"
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 flex items-center justify-center text-sm sm:text-base border border-white/30 hover:scale-105 touch-manipulation"
              >
                <span className="whitespace-nowrap">Lihat Kontak Lengkap</span>
                <ArrowRightIcon className="w-3 h-3 sm:w-4 sm:h-4 ml-2 flex-shrink-0" />
              </Link>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-3 right-3 sm:top-6 sm:right-6 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-white/30 rounded-tr-lg sm:rounded-tr-xl"></div>
          <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-l-2 border-white/30 rounded-bl-lg sm:rounded-bl-xl"></div>
        </div>
      </div>
    </section>
  );
}
