import { EyeIcon, FlagIcon, SparklesIcon } from "@heroicons/react/24/outline";

export default function VisiMisi({ data }) {
  return (
    <section
      id="visi-misi"
      className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 sm:top-16 lg:top-20 right-4 sm:right-10 lg:right-20 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-green-200/10 sm:bg-green-200/20 rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute bottom-10 sm:bottom-16 lg:bottom-20 left-4 sm:left-10 lg:left-20 w-24 h-24 sm:w-36 sm:h-36 lg:w-48 lg:h-48 bg-emerald-200/10 sm:bg-emerald-200/20 rounded-full blur-xl sm:blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="inline-block bg-emerald-100 text-emerald-800 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4 shadow-lg">
            <SparklesIcon className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1.5 sm:mr-2" />
            Visi & Misi
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            <span className="block sm:inline">Visi dan Misi</span>
            <span className="block sm:inline"> Kelurahan</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Komitmen kami dalam membangun kelurahan yang maju dan sejahtera
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Visi */}
          <div className="group transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-green-200/30 rounded-bl-2xl sm:rounded-bl-3xl"></div>

              <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6 relative z-10">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-0 sm:mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <EyeIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold gradient-text">
                  VISI
                </h3>
              </div>

              <div className="relative z-10">
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg">
                  {data.visi}
                </p>
              </div>

              {/* Quote decoration */}
              <div className="absolute bottom-4 right-4 opacity-20">
                <svg
                  className="w-8 h-8 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Misi */}
          <div className="group transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-emerald-200/30 rounded-bl-2xl sm:rounded-bl-3xl"></div>

              <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6 relative z-10">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-0 sm:mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <FlagIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold gradient-text">
                  MISI
                </h3>
              </div>

              <div className="relative z-10">
                <ul className="space-y-3 sm:space-y-4">
                  {data.misi.map((item, index) => (
                    <li key={index} className="flex items-start group/item">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mr-2 sm:mr-3 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                        <span className="text-white text-xs sm:text-sm font-bold">
                          {index + 1}
                        </span>
                      </div>
                      <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* List decoration */}
              <div className="absolute bottom-4 right-4 opacity-20">
                <svg
                  className="w-8 h-8 text-emerald-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-8 sm:mt-12 lg:mt-16">
          <div className="bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-green-200/50 shadow-lg">
            <div className="text-center">
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                Komitmen Pelayanan
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto mb-4 sm:mb-6">
                Dengan visi dan misi yang jelas, kami berkomitmen untuk
                memberikan pelayanan terbaik kepada masyarakat dan membangun
                kelurahan yang maju, sejahtera, dan berkelanjutan.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                <div className="bg-white/60 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center border border-green-200/30">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-green-600">
                    100%
                  </div>
                  <div className="text-xs sm:text-sm text-gray-700 font-medium">
                    Komitmen
                  </div>
                </div>

                <div className="bg-white/60 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center border border-emerald-200/30">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-emerald-600">
                    24/7
                  </div>
                  <div className="text-xs sm:text-sm text-gray-700 font-medium">
                    Siap Melayani
                  </div>
                </div>

                <div className="bg-white/60 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center border border-teal-200/30">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-teal-600">
                    {data.misi.length}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-700 font-medium">
                    Misi Utama
                  </div>
                </div>

                <div className="bg-white/60 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center border border-green-200/30">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-green-600">
                    1
                  </div>
                  <div className="text-xs sm:text-sm text-gray-700 font-medium">
                    Visi Bersama
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
