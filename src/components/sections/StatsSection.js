import {
  ChartBarIcon,
  HomeIcon,
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
      icon: AcademicCapIcon,
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
    <section className="py-16 sm:py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-64 h-64 bg-green-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-emerald-200/30 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 shadow-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
            Data Kelurahan
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Statistik Kelurahan Kemayoran
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Data terkini mengenai demografis dan perkembangan wilayah kelurahan
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="group relative">
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl card-hover border border-white/50 relative overflow-hidden">
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
                ></div>

                {/* Icon with glow effect */}
                <div className="relative">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-500 shadow-lg`}
                  >
                    <stat.icon className="w-7 h-7 text-white" />
                  </div>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}
                  ></div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 group-hover:scale-105 transition-transform duration-300">
                  {stat.number}
                </h3>
                <p className="text-sm sm:text-base font-semibold text-gray-800 mb-1">
                  {stat.label}
                </p>
                <p className="text-xs sm:text-sm text-gray-600">
                  {stat.description}
                </p>

                {/* Decorative corner */}
                <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-green-300/50 rounded-tr-lg"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Additional Info */}
        <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-white/50 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-emerald-50/50 rounded-3xl"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold gradient-text mb-4">
                Tentang Kelurahan Kemayoran
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
                Kelurahan Kemayoran merupakan salah satu kelurahan di Kecamatan
                Krembangan, Kota Surabaya yang aktif dalam pemberdayaan
                masyarakat dan pengembangan UMKM lokal. Dengan visi menjadi
                kelurahan yang mandiri dan sejahtera.
              </p>
              <div className="space-y-3">
                {[
                  { label: "Luas Wilayah:", value: "2.35 km²" },
                  { label: "Kepadatan:", value: "7,514 jiwa/km²" },
                  { label: "Kode Pos:", value: "60177" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center group">
                    <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
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

            <div className="bg-gradient-to-br from-green-100/80 to-emerald-100/80 backdrop-blur-sm rounded-2xl p-6 border border-green-200/50">
              <h4 className="text-lg sm:text-xl font-bold gradient-text mb-4">
                Jam Pelayanan
              </h4>
              <div className="space-y-3">
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
                    className="flex justify-between items-center p-3 bg-white/60 rounded-xl"
                  >
                    <span className="text-gray-700 font-medium text-sm">
                      {schedule.day}
                    </span>
                    <span
                      className={`font-bold text-sm ${schedule.available ? "text-green-600" : "text-red-500"}`}
                    >
                      {schedule.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
