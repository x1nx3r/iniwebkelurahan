import {
  MapPinIcon,
  PhoneIcon,
  EyeIcon,
  BuildingStorefrontIcon,
} from "@heroicons/react/24/outline";

export default function UMKMGrid({ umkm, onSelectUMKM }) {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Daftar UMKM
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Menampilkan {umkm.length} UMKM yang tersedia
          </p>
        </div>

        {/* UMKM Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {umkm.map((item) => (
            <div key={item.id} className="group">
              <div className="bg-white rounded-3xl shadow-xl card-hover border border-gray-100 overflow-hidden h-full">
                {/* Image placeholder */}
                <div className="relative h-48 sm:h-56 bg-gradient-to-br from-green-200 to-emerald-300 flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <BuildingStorefrontIcon className="w-8 h-8 text-white" />
                  </div>

                  {/* UMKM Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                      UMKM
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                    {item.nama}
                  </h3>

                  <p className="text-sm text-gray-600 mb-4">
                    Pemilik: <span className="font-medium">{item.pemilik}</span>
                  </p>

                  <p className="text-sm text-gray-700 mb-6 line-clamp-3 leading-relaxed">
                    {item.deskripsi}
                  </p>

                  {/* Button */}
                  <button
                    onClick={() => onSelectUMKM(item)}
                    className="text-green-600 hover:text-green-700 font-semibold text-sm border-b-2 border-green-600 hover:border-green-700 transition-all duration-300 pb-1"
                  >
                    Lihat detail lengkap →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {umkm.length === 0 && (
          <div className="text-center py-16">
            <BuildingStorefrontIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Tidak ada UMKM ditemukan
            </h3>
            <p className="text-gray-600">
              Belum ada UMKM yang terdaftar saat ini
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
