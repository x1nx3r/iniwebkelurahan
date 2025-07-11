import { MapIcon, GlobeAltIcon } from "@heroicons/react/24/outline";

export default function DataWilayah({ data }) {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4">
            Data Wilayah
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Informasi Wilayah
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Data geografis dan administratif kelurahan
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Batas Wilayah */}
          <div className="bg-white rounded-3xl p-8 shadow-xl card-hover">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4">
                <MapIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                Batas Wilayah
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Object.entries(data.batasWilayah).map(([arah, wilayah]) => (
                <div
                  key={arah}
                  className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors duration-300"
                >
                  <div className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                    {arah}
                  </div>
                  <div className="text-sm sm:text-base font-medium text-gray-900">
                    {wilayah}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Data Administratif */}
          <div className="bg-white rounded-3xl p-8 shadow-xl card-hover">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4">
                <GlobeAltIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                Data Administratif
              </h3>
            </div>

            <div className="space-y-4">
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
                  className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0"
                >
                  <span className="text-gray-600 font-medium text-sm sm:text-base">
                    {item.label}
                  </span>
                  <span className="text-gray-900 font-semibold text-sm sm:text-base">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
