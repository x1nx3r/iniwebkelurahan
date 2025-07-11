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
    },
    {
      icon: DocumentTextIcon,
      title: "Surat Keterangan",
      description: "Berbagai surat keterangan untuk keperluan administrasi",
      features: ["Surat domisili", "Surat tidak mampu", "Surat usaha"],
    },
    {
      icon: HomeIcon,
      title: "Surat Pindah",
      description: "Pelayanan administrasi perpindahan penduduk",
      features: ["Pindah dalam kota", "Pindah luar kota", "Konsultasi gratis"],
    },
    {
      icon: UserGroupIcon,
      title: "Kartu Keluarga",
      description: "Pembuatan dan perubahan data kartu keluarga",
      features: ["KK baru", "Perubahan data", "Penambahan anggota"],
    },
    {
      icon: BuildingStorefrontIcon,
      title: "Izin Usaha",
      description: "Bantuan pengurusan izin UMKM dan usaha kecil",
      features: ["IUMK", "Konsultasi bisnis", "Pendampingan"],
    },
    {
      icon: HeartIcon,
      title: "Layanan Sosial",
      description: "Program bantuan dan pemberdayaan masyarakat",
      features: ["Bantuan sosial", "Program PKH", "Pemberdayaan"],
    },
  ];

  return (
    <section id="layanan" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4">
            Layanan Publik
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Layanan Kelurahan
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Berbagai layanan administrasi dan pemberdayaan masyarakat yang
            tersedia
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 card-hover h-full">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-emerald-200 transition-colors duration-300">
                  <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-xs sm:text-sm text-gray-600"
                    >
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl p-6 sm:p-8 lg:p-12 text-center text-white">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
            Butuh Bantuan Layanan?
          </h3>
          <p className="text-sm sm:text-base lg:text-xl mb-6 sm:mb-8 text-emerald-100 max-w-2xl mx-auto">
            Tim kami siap membantu Anda dalam proses administrasi dan memberikan
            informasi yang dibutuhkan
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+62311234567"
              className="bg-white text-emerald-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors duration-300 text-sm sm:text-base"
            >
              Hubungi Kami
            </a>
            <Link
              href="/profil"
              className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center text-sm sm:text-base"
            >
              Lihat Kontak Lengkap
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
