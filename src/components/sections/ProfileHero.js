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
    <section className="relative py-20 sm:py-24 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-green-200/30 rounded-full blur-3xl floating-animation"></div>
        <div
          className="absolute bottom-20 left-20 w-48 h-48 bg-emerald-200/30 rounded-full blur-2xl floating-animation"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-6 shadow-lg">
            <MapPinIcon className="w-4 h-4 mr-2" />
            Profil Kelurahan
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-6">
            {data.name}
          </h1>

          <div className="text-base sm:text-lg md:text-xl text-gray-600 space-y-2">
            <p>
              Kecamatan {data.kecamatan}, {data.kota}
            </p>
            <p>
              {data.provinsi} {data.kodePos}
            </p>
          </div>
        </div>

        {/* Stats Grid - Centered for 3 cards */}
        <div className="flex justify-center mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl card-hover border border-white/50 text-center">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br from-${stat.color}-400 to-${stat.color}-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </h3>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Info */}
        <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50">
          <h2 className="text-xl sm:text-2xl font-bold gradient-text mb-6 text-center">
            Gambaran Umum
          </h2>
          <div className="text-center text-gray-700 leading-relaxed">
            <p className="text-sm sm:text-base">
              Kelurahan {data.name} merupakan salah satu kelurahan yang berada
              di wilayah Kecamatan {data.kecamatan}, Kota {data.kota}, Provinsi{" "}
              {data.provinsi}. Dengan luas wilayah {data.luasWilayah} km² dan
              jumlah penduduk {data.jumlahPenduduk.toLocaleString("id-ID")}{" "}
              jiwa, kelurahan ini berkomitmen untuk memberikan pelayanan terbaik
              kepada masyarakat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
