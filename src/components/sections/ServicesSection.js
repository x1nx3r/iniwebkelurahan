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
      className="py-16 sm:py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-64 h-64 bg-green-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-emerald-200/30 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 shadow-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
            Layanan Publik
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Layanan Kelurahan Kemayoran
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Berbagai layanan administrasi dan pemberdayaan masyarakat yang
            tersedia dengan pelayanan terbaik
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-xl card-hover border border-white/50 relative overflow-hidden h-full">
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
                ></div>

                {/* Icon with glow effect */}
                <div className="relative mb-6">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg`}
                  >
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}
                  ></div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:scale-105 transition-transform duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-xs sm:text-sm text-gray-600 group/item"
                    >
                      <div
                        className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3 group-hover/item:scale-125 transition-transform duration-300`}
                      ></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Decorative corner */}
                <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-green-300/50 rounded-tr-lg"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl border border-white/50 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-emerald-50/50 rounded-3xl"></div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/90 to-emerald-600/90 rounded-3xl"></div>

          <div className="relative z-10 text-center text-white">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-6">
              <div className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse"></div>
              Bantuan Layanan
            </div>

            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
              Butuh Bantuan Layanan?
            </h3>
            <p className="text-sm sm:text-base lg:text-xl mb-6 sm:mb-8 text-green-100 max-w-2xl mx-auto leading-relaxed">
              Tim kami siap membantu Anda dalam proses administrasi dan
              memberikan informasi yang dibutuhkan dengan pelayanan terbaik
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+62311234567"
                className="bg-white/90 backdrop-blur-sm text-green-600 hover:bg-white hover:scale-105 px-6 py-3 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base shadow-lg"
              >
                Hubungi Kami
              </a>
              <Link
                href="/profil"
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center text-sm sm:text-base border border-white/30 hover:scale-105"
              >
                Lihat Kontak Lengkap
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-white/30 rounded-tr-xl"></div>
          <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-white/30 rounded-bl-xl"></div>
        </div>
      </div>
    </section>
  );
}
