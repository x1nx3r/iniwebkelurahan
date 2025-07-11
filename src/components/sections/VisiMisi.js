import { EyeIcon, FlagIcon } from "@heroicons/react/24/outline";

export default function VisiMisi({ data }) {
  return (
    <section id="visi-misi" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4">
            Visi & Misi
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Visi dan Misi Kelurahan
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Komitmen kami dalam membangun kelurahan yang maju dan sejahtera
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Visi */}
          <div className="group">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 shadow-lg card-hover border border-green-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4">
                  <EyeIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold gradient-text">
                  VISI
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                {data.visi}
              </p>
            </div>
          </div>

          {/* Misi */}
          <div className="group">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 shadow-lg card-hover border border-emerald-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mr-4">
                  <FlagIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold gradient-text">
                  MISI
                </h3>
              </div>
              <ul className="space-y-4">
                {data.misi.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-white text-xs font-bold">
                        {index + 1}
                      </span>
                    </div>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
