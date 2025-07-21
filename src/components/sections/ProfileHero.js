import {
  MapPinIcon,
  UsersIcon,
  HomeIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

export default function ProfileHero({ data }) {
  const stats = [
    {
      icon: UsersIcon,
      value: data.jumlahPenduduk.toLocaleString("id-ID"),
      label: "Penduduk",
      color: "emerald",
    },
    {
      icon: ChartBarIcon,
      value: `${data.luasWilayah} km²`,
      label: "Luas Wilayah",
      color: "teal",
    },
    {
      icon: MapPinIcon,
      value: `${data.kepadatan.toLocaleString("id-ID")} jiwa/km²`,
      label: "Kepadatan",
      color: "cyan",
    },
  ];

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 sm:top-16 lg:top-20 right-4 sm:right-10 lg:right-20 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-green-200/20 sm:bg-green-200/30 rounded-full blur-2xl sm:blur-3xl floating-animation"></div>
        <div
          className="absolute bottom-10 sm:bottom-16 lg:bottom-20 left-4 sm:left-10 lg:left-20 w-24 h-24 sm:w-36 sm:h-36 lg:w-48 lg:h-48 bg-emerald-200/20 sm:bg-emerald-200/30 rounded-full blur-xl sm:blur-2xl floating-animation"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 shadow-lg">
            <MapPinIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
            <span className="whitespace-nowrap">Profil Kelurahan</span>
          </div>

          {/* Main Title */}
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold gradient-text mb-6 sm:mb-8 px-4 leading-tight"
            style={{
              paddingBottom: "0.5rem",
              paddingTop: "0.25rem",
              lineHeight: "1.2",
            }}
          >
            {data.name}
          </h1>

          {/* Location Info */}
          <div className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 space-y-1 sm:space-y-2 px-4">
            <p>
              Kecamatan {data.kecamatan}, {data.kota}
            </p>
            <p>
              {data.provinsi} {data.kodePos}
            </p>
          </div>
        </div>

        {/* Stats Grid - Responsive layout */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="bg-white/80 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 text-center transform hover:-translate-y-1 hover:scale-105">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-1 break-words">
                    {stat.value}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 font-medium">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Info */}
        <div className="bg-white/70 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50">
          <h2
            className="text-lg sm:text-xl lg:text-2xl font-bold gradient-text mb-4 sm:mb-6 lg:mb-8 text-center px-2"
            style={{
              paddingBottom: "0.5rem",
              paddingTop: "0.25rem",
            }}
          >
            Gambaran Umum
          </h2>
          <div className="text-center text-gray-700 leading-relaxed">
            <p className="text-sm sm:text-base lg:text-lg max-w-4xl mx-auto">
              Kelurahan {data.name} merupakan salah satu kelurahan yang berada
              di wilayah Kecamatan {data.kecamatan}, Kota {data.kota}, Provinsi{" "}
              {data.provinsi}. Dengan luas wilayah {data.luasWilayah} km² dan
              jumlah penduduk {data.jumlahPenduduk.toLocaleString("id-ID")}{" "}
              jiwa, kelurahan ini berkomitmen untuk memberikan pelayanan terbaik
              kepada masyarakat.
            </p>
          </div>

          {/* Additional Info Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-6 sm:mt-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center border border-green-200/50">
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-green-600 mb-1">
                {data.luasWilayah}
              </div>
              <div className="text-xs sm:text-sm text-green-700 font-medium">
                km² Luas
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center border border-emerald-200/50">
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-emerald-600 mb-1">
                {data.jumlahPenduduk.toLocaleString("id-ID")}
              </div>
              <div className="text-xs sm:text-sm text-emerald-700 font-medium">
                Penduduk
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center border border-teal-200/50">
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-teal-600 mb-1">
                {data.kepadatan.toLocaleString("id-ID")}
              </div>
              <div className="text-xs sm:text-sm text-teal-700 font-medium">
                Jiwa/km²
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center border border-cyan-200/50">
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-cyan-600 mb-1">
                {data.kodePos}
              </div>
              <div className="text-xs sm:text-sm text-cyan-700 font-medium">
                Kode Pos
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
