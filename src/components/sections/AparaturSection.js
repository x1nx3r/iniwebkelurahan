import {
  PhoneIcon,
  EnvelopeIcon,
  UserIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";

export default function AparaturSection({ aparatur }) {
  return (
    <section id="struktur" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4">
            Struktur Organisasi
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Aparatur Kelurahan
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Tim terbaik yang siap melayani kebutuhan masyarakat
          </p>
        </div>

        {/* Aparatur Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aparatur.map((person) => (
            <div key={person.id} className="group">
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl card-hover border border-gray-100 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-green-100 to-emerald-100 rounded-bl-3xl opacity-50"></div>

                {/* Photo placeholder */}
                <div className="relative z-10 mb-6">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                    <UserIcon className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                  </div>
                  {/* If you have actual photos, replace the div above with: */}
                  {/* <img src={person.foto} alt={person.nama} className="w-24 h-24 mx-auto rounded-2xl object-cover shadow-lg" /> */}
                </div>

                {/* Info */}
                <div className="text-center mb-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    {person.nama}
                  </h3>
                  <div className="inline-block bg-gradient-to-r from-green-600 to-emerald-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold mb-3">
                    {person.jabatan}
                  </div>

                  {/* Details */}
                  <div className="space-y-2 text-xs sm:text-sm text-gray-600">
                    <div className="flex items-center justify-center">
                      <AcademicCapIcon className="w-4 h-4 mr-2 text-green-500" />
                      <span>{person.pendidikan}</span>
                    </div>
                    {person.nip && (
                      <div className="text-xs text-gray-500">
                        NIP: {person.nip}
                      </div>
                    )}
                  </div>
                </div>

                {/* Contact */}
                <div className="space-y-3 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-center text-xs sm:text-sm text-gray-600 hover:text-green-600 transition-colors duration-200">
                    <PhoneIcon className="w-4 h-4 mr-2 text-green-500" />
                    <a href={`tel:${person.telefon}`}>{person.telefon}</a>
                  </div>
                  <div className="flex items-center justify-center text-xs sm:text-sm text-gray-600 hover:text-green-600 transition-colors duration-200">
                    <EnvelopeIcon className="w-4 h-4 mr-2 text-green-500" />
                    <a href={`mailto:${person.email}`} className="truncate">
                      {person.email}
                    </a>
                  </div>
                </div>

                {/* Corner decoration */}
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-green-300/50 rounded-br-lg"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-100">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              Butuh Bantuan?
            </h3>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              Jangan ragu untuk menghubungi aparatur kelurahan untuk bantuan dan
              informasi
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+62311234567"
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Hubungi Langsung
              </a>
              <a
                href="mailto:info@kemayoran-sby.go.id"
                className="bg-white text-green-600 border-2 border-green-200 hover:border-green-300 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-green-50"
              >
                Kirim Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
