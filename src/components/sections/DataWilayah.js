import { MapIcon, GlobeAltIcon } from "@heroicons/react/24/outline";

export default function DataWilayah({ data }) {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-green-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 sm:top-16 lg:top-20 right-4 sm:right-10 lg:right-20 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-green-200/20 sm:bg-green-200/30 rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute bottom-10 sm:bottom-16 lg:bottom-20 left-4 sm:left-10 lg:left-20 w-24 h-24 sm:w-36 sm:h-36 lg:w-48 lg:h-48 bg-blue-200/20 sm:bg-blue-200/30 rounded-full blur-xl sm:blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="inline-block bg-green-100 text-green-800 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4 shadow-lg">
            Data Wilayah
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Informasi Wilayah
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-4 leading-relaxed">
            Data geografis dan administratif kelurahan
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8">
          {/* Batas Wilayah */}
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 transform hover:-translate-y-1">
            <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-0 sm:mr-4 flex-shrink-0">
                <MapIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                Batas Wilayah
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {Object.entries(data.batasWilayah).map(([arah, wilayah]) => (
                <div
                  key={arah}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg sm:rounded-xl p-3 sm:p-4 hover:from-blue-50 hover:to-blue-100 transition-all duration-300 border border-gray-200/50 hover:border-blue-200/50"
                >
                  <div className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1 sm:mb-2">
                    {arah}
                  </div>
                  <div className="text-sm sm:text-base font-medium text-gray-900 leading-tight">
                    {wilayah}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Data Administratif */}
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 transform hover:-translate-y-1">
            <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-0 sm:mr-4 flex-shrink-0">
                <GlobeAltIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                Data Administratif
              </h3>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {[
                { label: "Kelurahan", value: data.name },
                { label: "Kecamatan", value: data.kecamatan },
                { label: "Kota", value: data.kota },
                { label: "Provinsi", value: data.provinsi },
                { label: "Kode Pos", value: data.kodePos },
                { label: "Luas Wilayah", value: `${data.luasWilayah} km²` },
                {
                  label: "Kepadatan Penduduk",
                  value: `${data.kepadatan.toLocaleString("id-ID")} jiwa/km²`,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 sm:py-3 border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-colors duration-200 rounded-lg px-2 sm:px-3"
                >
                  <span className="text-gray-600 font-medium text-sm sm:text-base mb-1 sm:mb-0">
                    {item.label}
                  </span>
                  <span className="text-gray-900 font-semibold text-sm sm:text-base break-words sm:text-right">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-8 sm:mt-12 lg:mt-16">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-green-200/50 shadow-lg">
            <div className="text-center">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-green-800 mb-2 sm:mb-3">
                Informasi Tambahan
              </h3>
              <p className="text-green-700 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
                Data wilayah ini diperbarui secara berkala sesuai dengan
                informasi dari instansi terkait. Untuk informasi lebih detail
                mengenai administrasi wilayah, silakan hubungi kantor kelurahan.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-6 sm:mt-8">
                <div className="bg-white/60 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center border border-green-200/30">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-green-600">
                    {data.luasWilayah}
                  </div>
                  <div className="text-xs sm:text-sm text-green-700 font-medium">
                    km² Luas
                  </div>
                </div>

                <div className="bg-white/60 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center border border-green-200/30">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-green-600">
                    {data.kepadatan.toLocaleString("id-ID")}
                  </div>
                  <div className="text-xs sm:text-sm text-green-700 font-medium">
                    Jiwa/km²
                  </div>
                </div>

                <div className="bg-white/60 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center border border-green-200/30">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-green-600">
                    {data.kodePos}
                  </div>
                  <div className="text-xs sm:text-sm text-green-700 font-medium">
                    Kode Pos
                  </div>
                </div>

                <div className="bg-white/60 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center border border-green-200/30">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-green-600">
                    4
                  </div>
                  <div className="text-xs sm:text-sm text-green-700 font-medium">
                    Batas Wilayah
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
