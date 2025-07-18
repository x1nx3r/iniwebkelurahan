// iniwebumkm/src/components/layout/Header.js
"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Beranda", href: "/" },
    { name: "Profil Kelurahan", href: "/profil" },
    { name: "UMKM Kemayoran", href: "/umkm" },
    { name: "Berita & Pengumuman", href: "/berita" }, // Added this line
  ];

  return (
    <header className="fixed w-full z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-white/20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/b/ba/City_of_Surabaya_Logo.svg"
                alt="Surabaya City Logo"
                width={40}
                height={40}
                className="w-10 h-10 object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-md"
              />
            </div>
            <div>
              <h1 className="font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent font-extrabold tracking-tight">
                  Kelurahan Kemayoran
                </span>
              </h1>
              <p className="text-xs text-gray-600 font-medium tracking-wide uppercase">
                Kota Surabaya
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-600 p-2 rounded-lg hover:bg-green-50 transition-colors duration-200"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-b border-white/20">
            <div className="px-4 py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 font-medium rounded-lg transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
