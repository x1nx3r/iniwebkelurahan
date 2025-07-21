import Link from "next/link";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  BuildingOfficeIcon,
  AcademicCapIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import FaviconImage from "../ui/FaviconImage";

export default function Footer() {
  const footerLinks = {
    Layanan: [
      { name: "Kartu Tanda Penduduk", href: "#" },
      { name: "Kartu Keluarga", href: "#" },
      { name: "Surat Keterangan", href: "#" },
      { name: "Izin Usaha", href: "#" },
    ],
    Informasi: [
      { name: "Profil Kelurahan", href: "/profil" },
      { name: "Struktur Organisasi", href: "/profil#struktur" },
      { name: "Visi & Misi", href: "/profil#visi-misi" },
    ],
    UMKM: [
      { name: "Daftar UMKM", href: "/umkm" },
      { name: "Berita & Pengumuman", href: "/berita" },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-green-600/5 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Contact Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <BuildingOfficeIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-base sm:text-lg leading-tight">
                  <span className="hidden sm:inline">Kelurahan Kemayoran</span>
                  <span className="sm:hidden">Kel. Kemayoran</span>
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm">Surabaya</p>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start space-x-2 sm:space-x-3">
                <MapPinIcon className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  Jl. Krembangan Baru No.49 009, RT.009/RW.01, Kemayoran, Kec.
                  Krembangan, Surabaya, Jawa Timur 60176
                </p>
              </div>

              <div className="flex items-center space-x-2 sm:space-x-3">
                <PhoneIcon className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 flex-shrink-0" />
                <a
                  href="tel:+62313522396"
                  className="text-gray-300 hover:text-emerald-400 transition-colors text-xs sm:text-sm touch-manipulation"
                >
                  (031) 3522396
                </a>
              </div>

              <div className="flex items-center space-x-2 sm:space-x-3">
                <EnvelopeIcon className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 flex-shrink-0" />
                <a
                  href="mailto:kelurahankemayoran72@gmail.com"
                  className="text-gray-300 hover:text-emerald-400 transition-colors text-xs sm:text-sm break-all touch-manipulation"
                >
                  kelurahankemayoran72@gmail.com
                </a>
              </div>

              <div className="flex items-start space-x-2 sm:space-x-3">
                <ClockIcon className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-xs sm:text-sm">
                  <p>Senin - Jumat: 07:00 - 16:00</p>
                  <p className="text-gray-400 mt-1">Sabtu - Minggu: Tutup</p>
                </div>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="sm:col-span-1">
              <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-6 text-emerald-400">
                {title}
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 text-xs sm:text-sm block py-1 touch-manipulation group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8">
          <div className="flex flex-col gap-6 sm:gap-8">
            {/* KKN Attribution - Top on mobile */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 order-1">
              <div className="flex items-center gap-2">
                <AcademicCapIcon className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <HeartIcon className="w-4 h-4 text-red-400 flex-shrink-0" />
              </div>
              <div className="text-center">
                <p className="text-gray-300 text-xs sm:text-sm">
                  Dikembangkan dengan <span className="text-red-400">♥</span>{" "}
                  oleh{" "}
                  <span className="text-emerald-400 font-semibold">
                    KKN SDGs Kelompok 11
                  </span>
                </p>
                <p className="text-gray-400 text-xs mt-1">
                  UPN &quot;Veteran&quot; Jawa Timur
                </p>
              </div>
            </div>

            {/* Copyright and Social Media */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 order-2">
              {/* Copyright */}
              <div className="text-center sm:text-left order-2 sm:order-1">
                <p className="text-gray-400 text-xs sm:text-sm">
                  © 2025 Kelurahan Kemayoran. Semua hak dilindungi.
                </p>
              </div>

              {/* Social Media Links */}
              <div className="flex items-center justify-center gap-3 sm:gap-4 order-1 sm:order-2">
                <span className="text-gray-400 text-xs sm:text-sm hidden sm:inline">
                  Ikuti kami:
                </span>

                <div className="flex items-center gap-3">
                  <a
                    href="https://www.instagram.com/mengukirkemayoran"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 bg-gray-800 hover:bg-pink-600 text-gray-400 hover:text-white rounded-lg transition-all duration-300 group touch-manipulation"
                    aria-label="Instagram KKN Kelompok 11"
                  >
                    <FaviconImage
                      src="https://cdn.x1nx3r.uk/free-bucket/96aae7bf-1a7b-4527-8ee6-6ba0dfe98a21.png"
                      alt="Instagram"
                      fallbackDomain="instagram.com"
                      className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300"
                    />
                  </a>

                  <a
                    href="https://www.tiktok.com/@kkn11.kelurahankemayoran"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 bg-gray-800 hover:bg-black text-gray-400 hover:text-white rounded-lg transition-all duration-300 group touch-manipulation"
                    aria-label="TikTok KKN Kelompok 11"
                  >
                    <FaviconImage
                      src="https://cdn.x1nx3r.uk/free-bucket/01e0f295-960f-4509-bd6a-11fcc071ccef.png"
                      alt="TikTok"
                      fallbackDomain="tiktok.com"
                      className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300"
                    />
                  </a>

                  <a
                    href="mailto:kknkelompok11@upnjatim.ac.id"
                    className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 bg-gray-800 hover:bg-emerald-600 text-gray-400 hover:text-white rounded-lg transition-all duration-300 group touch-manipulation"
                    aria-label="Email KKN Kelompok 11"
                  >
                    <EnvelopeIcon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
