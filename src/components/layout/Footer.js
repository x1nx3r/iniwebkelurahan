import Link from "next/link";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  BuildingOfficeIcon,
  AcademicCapIcon,
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
    UMKM: [{ name: "Daftar UMKM", href: "/umkm" }],
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                <BuildingOfficeIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Kelurahan Kemayoran</h3>
                <p className="text-gray-400 text-sm">Surabaya</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPinIcon className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  Jl. Krembangan Baru No.49 009, RT.009/RW.01, Kemayoran, Kec.
                  Krembangan, Surabaya, Jawa Timur 60176
                  <br />
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <PhoneIcon className="w-5 h-5 text-emerald-400" />
                <p className="text-gray-300 text-sm">(031) 3522396</p>
              </div>

              <div className="flex items-center space-x-3">
                <EnvelopeIcon className="w-5 h-5 text-emerald-400" />
                <p className="text-gray-300 text-sm">
                  kelurahankemayoran72@gmail.com
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <ClockIcon className="w-5 h-5 text-emerald-400 mt-1" />
                <div className="text-gray-300 text-sm">
                  <p>Sen-Jum: 07:00-16:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-bold text-lg mb-6">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section with Copyright, KKN Attribution, and Social Media */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Left side - Copyright */}
            <div className="text-center lg:text-left">
              <p className="text-gray-400 text-sm">
                © 2025 Kelurahan Kemayoran. Semua hak dilindungi.
              </p>
            </div>

            {/* Center - KKN Attribution */}
            <div className="flex items-center space-x-3 order-3 lg:order-2">
              <AcademicCapIcon className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <div className="text-center">
                <p className="text-gray-300 text-xs">
                  Dikembangkan oleh{" "}
                  <span className="text-emerald-400 font-semibold">
                    KKN SDGs Kelompok 11
                  </span>{" "}
                  UPN &quotVeteran&quot Jawa Timur
                </p>
              </div>
            </div>

            {/* Right side - Social Media Links */}
            <div className="flex items-center space-x-4 order-2 lg:order-3">
              <a
                href="https://www.instagram.com/mengukirkemayoran"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-gray-400 hover:text-pink-400 transition-colors duration-200 group"
              >
                <FaviconImage
                  src="https://cdn.x1nx3r.uk/free-bucket/01e0f295-960f-4509-bd6a-11fcc071ccef.png"
                  alt="Instagram"
                  fallbackDomain="instagram.com"
                  className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity duration-200"
                />
              </a>

              <a
                href="https://www.tiktok.com/@kkn11.kelurahankemayoran"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-gray-400 hover:text-pink-500 transition-colors duration-200 group"
              >
                <FaviconImage
                  src="https://cdn.x1nx3r.uk/free-bucket/01e0f295-960f-4509-bd6a-11fcc071ccef.png"
                  alt="TikTok"
                  fallbackDomain="tiktok.com"
                  className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity duration-200"
                />
              </a>

              <a
                href="mailto:kknkelompok11@upnjatim.ac.id"
                className="flex items-center space-x-1 text-gray-400 hover:text-emerald-400 transition-colors duration-200 group"
              >
                <EnvelopeIcon className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity duration-200" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
