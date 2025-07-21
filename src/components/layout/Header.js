// iniwebumkm/src/components/layout/Header.js
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigation = [
    { name: "Beranda", href: "/" },
    { name: "Profil Kelurahan", href: "/profil" },
    { name: "UMKM Kemayoran", href: "/umkm" },
    { name: "Berita & Pengumuman", href: "/berita" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest("nav")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-white/20"
          : "bg-white/80 backdrop-blur-sm shadow-md border-b border-white/10"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 lg:h-18">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 sm:space-x-3 group flex-shrink-0"
          >
            <div className="relative">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/b/ba/City_of_Surabaya_Logo.svg"
                alt="Surabaya City Logo"
                width={40}
                height={40}
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-md"
                priority
              />
            </div>
            <div className="min-w-0 flex-1">
              <h1 className="font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300 text-sm sm:text-base lg:text-lg leading-tight">
                <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent font-extrabold tracking-tight">
                  <span className="hidden sm:inline">Kelurahan Kemayoran</span>
                  <span className="sm:hidden">Kel. Kemayoran</span>
                </span>
              </h1>
              <p className="text-xs text-gray-600 font-medium tracking-wide uppercase leading-tight">
                <span className="hidden sm:inline">Kota Surabaya</span>
                <span className="sm:hidden">Surabaya</span>
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex xl:space-x-8 lg:space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 relative group py-2 px-1 text-sm xl:text-base whitespace-nowrap"
              >
                <span className="hidden xl:inline">{item.name}</span>
                <span className="xl:hidden">
                  {item.name === "Profil Kelurahan"
                    ? "Profil"
                    : item.name === "UMKM Kemayoran"
                      ? "UMKM"
                      : item.name === "Berita & Pengumuman"
                        ? "Berita"
                        : item.name}
                </span>
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-600 p-1.5 sm:p-2 rounded-lg hover:bg-green-50 transition-all duration-200 touch-manipulation"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <div className="relative w-5 h-5 sm:w-6 sm:h-6">
                <XMarkIcon
                  className={`h-5 w-5 sm:h-6 sm:w-6 absolute transition-all duration-300 ${
                    isOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-90"
                  }`}
                />
                <Bars3Icon
                  className={`h-5 w-5 sm:h-6 sm:w-6 absolute transition-all duration-300 ${
                    isOpen ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-b border-white/20 transition-all duration-300 ease-in-out ${
            isOpen
              ? "opacity-100 visible transform translate-y-0"
              : "opacity-0 invisible transform -translate-y-2"
          }`}
        >
          <div className="px-3 sm:px-4 py-3 sm:py-4 space-y-1 sm:space-y-2 max-h-[calc(100vh-4rem)] overflow-y-auto">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 sm:px-4 py-2.5 sm:py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 font-medium rounded-lg transition-all duration-200 text-sm sm:text-base touch-manipulation transform ${
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-4 opacity-0"
                }`}
                style={{
                  transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
                }}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {/* Contact info in mobile menu */}
            <div className="pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-gray-200">
              <div className="px-3 sm:px-4 py-2">
                <p className="text-xs text-gray-500 font-medium">
                  Kontak Kelurahan
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  <a
                    href="tel:+62313522396"
                    className="hover:text-green-600 transition-colors"
                  >
                    (031) 352-2396
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu overlay */}
        {isOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-[-1]"
            onClick={() => setIsOpen(false)}
          />
        )}
      </nav>
    </header>
  );
}
