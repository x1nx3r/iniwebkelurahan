import {
  ChartBarIcon,
  HomeIcon,
  BuildingStorefrontIcon,
  AcademicCapIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

export default function StatsSection() {
  const stats = [
    {
      icon: ChartBarIcon,
      number: "17,659",
      label: "Total Penduduk",
      description: "Jiwa terdaftar",
      color: "green",
      gradient: "from-green-400 to-emerald-500",
    },
    {
      icon: BuildingStorefrontIcon,
      number: "127",
      label: "UMKM Aktif",
      description: "Usaha terdaftar",
      color: "teal",
      gradient: "from-teal-400 to-cyan-500",
    },
    {
      icon: HomeIcon,
      number: "74",
      label: "RT",
      description: "Wilayah administrasi",
      color: "emerald",
      gradient: "from-emerald-400 to-teal-500",
    },
    {
      icon: HeartIcon,
      number: "9",
      label: "RW",
      description: "Wilayah administrasi",
      color: "green",
      gradient: "from-green-400 to-emerald-500",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 sm:top-16 lg:top-20 right-4 sm:right-10 lg:right-20 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-green-200/20 sm:bg-green-200/30 rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute bottom-10 sm:bottom-16 lg:bottom-20 left-4 sm:left-10 lg:left-20 w-24 h-24 sm:w-36 sm:h-36 lg:w-48 lg:h-48 bg-emerald-200/20 sm:bg-emerald-200/30 rounded-full blur-xl sm:blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 shadow-lg">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full mr-2 sm:mr-3 animate-pulse"></div>
            <span className="whitespace-nowrap">Data Kelurahan</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold gradient-text mb-3 sm:mb-4 px-4">
            <span className="block sm:inline">Statistik Kelurahan</span>
            <span className="block sm:inline"> Kemayoran</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Data terkini mengenai demografis dan perkembangan wilayah kelurahan
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-12 lg:mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="group relative">
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-3 sm:p-4 lg:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 relative overflow-hidden transform hover:-translate-y-1 hover:scale-[1.02]">
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl sm:rounded-3xl`}
                ></div>

                {/* Icon with glow effect */}
                <div className="relative">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br ${stat.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center mb-2 sm:mb-3 lg:mb-4 group-hover:scale-110 transition-all duration-500 shadow-lg mx-auto sm:mx-0`}
                  >
                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
                  </div>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-xl sm:rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}
                  ></div>
                </div>

                <div className="text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 sm:mb-2 group-hover:scale-105 transition-transform duration-300">
                    {stat.number}
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base font-semibold text-gray-800 mb-1 leading-tight">
                    {stat.label}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 leading-tight">
                    {stat.description}
                  </p>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3 lg:top-4 lg:right-4 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 border-t-2 border-r-2 border-green-300/50 rounded-tr-lg"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Additional Info */}
        <div className="bg-white/70 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 xl:p-10 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-emerald-50/50 rounded-2xl sm:rounded-3xl"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start lg:items-center relative z-10">
            <div>
              <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold gradient-text mb-3 sm:mb-4">
                Tentang Kelurahan Kemayoran
              </h3>
              <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Kelurahan Kemayoran merupakan salah satu kelurahan di Kecamatan
                Krembangan, Kota Surabaya yang aktif dalam pemberdayaan
                masyarakat dan pengembangan UMKM lokal. Dengan visi menjadi
                kelurahan yang mandiri dan sejahtera.
              </p>
              <div className="space-y-2 sm:space-y-3">
                {[
                  { label: "Luas Wilayah:", value: "2.35 km²" },
                  { label: "Kepadatan:", value: "7,514 jiwa/km²" },
                  { label: "Kode Pos:", value: "60177" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center group">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mr-2 sm:mr-3 group-hover:scale-125 transition-transform duration-300 flex-shrink-0"></div>
                    <span className="text-gray-700 font-medium text-sm sm:text-base">
                      {item.label}
                    </span>
                    <span className="text-gray-900 font-bold ml-2 text-sm sm:text-base">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-100/80 to-emerald-100/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-green-200/50">
              <h4 className="text-base sm:text-lg lg:text-xl font-bold gradient-text mb-3 sm:mb-4">
                Jam Pelayanan
              </h4>
              <div className="space-y-2 sm:space-y-3">
                {[
                  {
                    day: "Senin - Jumat",
                    time: "07:00 - 16:00",
                    available: true,
                  },
                  { day: "Sabtu - Minggu", time: "Tutup", available: false },
                ].map((schedule, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-2 sm:p-3 bg-white/60 rounded-lg sm:rounded-xl"
                  >
                    <span className="text-gray-700 font-medium text-xs sm:text-sm">
                      {schedule.day}
                    </span>
                    <span
                      className={`font-bold text-xs sm:text-sm ${schedule.available ? "text-green-600" : "text-red-500"}`}
                    >
                      {schedule.time}
                    </span>
                  </div>
                ))}
              </div>

              {/* Additional service info for mobile */}
              <div className="mt-4 sm:mt-6 p-3 bg-white/40 rounded-lg border border-green-200/30">
                <p className="text-xs sm:text-sm text-gray-600 text-center">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Pelayanan terbaik untuk masyarakat
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
