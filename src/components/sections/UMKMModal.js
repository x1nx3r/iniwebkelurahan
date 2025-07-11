"use client";
import { Fragment, useEffect, useState } from "react";
import {
  XMarkIcon,
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  BuildingStorefrontIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

export default function UMKMModal({ umkm, onClose }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  // Trigger animation on mount
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

  // Handle backdrop click
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  // Handle close with animation
  const handleClose = () => {
    if (isClosing) return; // Prevent multiple calls

    setIsClosing(true);
    setIsVisible(false);

    const timer = setTimeout(() => {
      onClose();
    }, 300); // Match animation duration

    return () => clearTimeout(timer);
  };

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  // Get social media icon
  const getSocialIcon = (platform) => {
    switch (platform.toLowerCase()) {
      case "whatsapp":
        return "💬";
      case "instagram":
        return "📷";
      case "facebook":
        return "👥";
      case "tiktok":
        return "🎵";
      case "twitter":
        return "🐦";
      default:
        return "🌐";
    }
  };

  // Check if contact info exists
  const hasPhone = umkm.telefon && umkm.telefon.trim() !== "";
  const hasWhatsApp =
    umkm.sosialMedia?.whatsapp && umkm.sosialMedia.whatsapp.trim() !== "";
  const hasSocialMedia =
    umkm.sosialMedia && Object.keys(umkm.sosialMedia).length > 0;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
        isVisible && !isClosing
          ? "opacity-100 backdrop-blur-md"
          : "opacity-0 backdrop-blur-none"
      }`}
      onClick={handleBackdropClick}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-300 ${
          isVisible && !isClosing ? "opacity-60" : "opacity-0"
        }`}
      ></div>

      {/* Modal */}
      <div
        className={`relative w-full max-w-4xl max-h-[85vh] bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-300 ease-out ${
          isVisible && !isClosing
            ? "scale-100 opacity-100 translate-y-0 rotate-0"
            : isClosing
              ? "scale-95 opacity-0 translate-y-4 -rotate-1"
              : "scale-75 opacity-0 translate-y-8 rotate-2"
        }`}
        style={{
          animation:
            isVisible && !isClosing ? "modalBounce 0.4s ease-out" : "none",
        }}
      >
        <div className="flex flex-col h-full max-h-[85vh]">
          {/* Header */}
          <div
            className={`relative bg-gradient-to-r from-green-500 to-emerald-600 p-6 text-white transform transition-all duration-500 delay-100 ${
              isVisible && !isClosing
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            <button
              onClick={handleClose}
              type="button"
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 hover:rotate-90 group z-10"
              aria-label="Close modal"
            >
              <XMarkIcon className="w-6 h-6 transition-transform duration-200" />
            </button>

            <div className="flex items-center space-x-4">
              <div
                className={`w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0 transform transition-all duration-500 delay-200 ${
                  isVisible && !isClosing
                    ? "scale-100 rotate-0 opacity-100"
                    : "scale-50 rotate-45 opacity-0"
                }`}
              >
                <BuildingStorefrontIcon className="w-8 h-8" />
              </div>

              <div
                className={`flex-1 min-w-0 transform transition-all duration-500 delay-300 ${
                  isVisible && !isClosing
                    ? "translate-x-0 opacity-100"
                    : "translate-x-4 opacity-0"
                }`}
              >
                <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                  {umkm.nama}
                </h2>
                <p className="text-lg opacity-90 mb-3">
                  Pemilik: {umkm.pemilik}
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                    UMKM Kemayoran
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`flex-1 overflow-y-auto p-6 transform transition-all duration-700 delay-400 ${
              isVisible && !isClosing
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Info */}
              <div className="lg:col-span-2 space-y-6">
                {/* Description */}
                <div
                  className={`transform transition-all duration-500 delay-500 ${
                    isVisible && !isClosing
                      ? "translate-x-0 opacity-100"
                      : "translate-x-8 opacity-0"
                  }`}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Tentang Usaha
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-base">
                    {umkm.deskripsi}
                  </p>
                </div>

                {/* Contact Actions */}
                <div
                  className={`transform transition-all duration-500 delay-600 ${
                    isVisible && !isClosing
                      ? "translate-x-0 opacity-100"
                      : "translate-x-8 opacity-0"
                  }`}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Hubungi Sekarang
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {/* Phone Button */}
                    {hasPhone && (
                      <a
                        href={`tel:${umkm.telefon}`}
                        className="flex items-center bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
                      >
                        <PhoneIcon className="w-5 h-5 mr-2" />
                        Telepon
                      </a>
                    )}

                    {/* WhatsApp Button */}
                    {hasWhatsApp && (
                      <a
                        href={`https://wa.me/${umkm.sosialMedia.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
                      >
                        <span className="mr-2">💬</span>
                        WhatsApp
                      </a>
                    )}
                  </div>
                </div>

                {/* Social Media */}
                {hasSocialMedia && (
                  <div
                    className={`transform transition-all duration-500 delay-700 ${
                      isVisible && !isClosing
                        ? "translate-x-0 opacity-100"
                        : "translate-x-8 opacity-0"
                    }`}
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Media Sosial
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {Object.entries(umkm.sosialMedia).map(
                        ([platform, handle], index) => (
                          <div
                            key={platform}
                            className={`flex items-center bg-gray-100 hover:bg-gray-200 rounded-xl px-4 py-3 transition-all duration-300 group hover:scale-105 transform ${
                              isVisible && !isClosing
                                ? "translate-y-0 opacity-100"
                                : "translate-y-4 opacity-0"
                            }`}
                            style={{
                              transitionDelay: `${800 + index * 100}ms`,
                            }}
                          >
                            <span className="text-xl mr-3 group-hover:scale-110 transition-transform duration-200">
                              {getSocialIcon(platform)}
                            </span>
                            <div>
                              <div className="text-sm font-medium text-gray-700 capitalize">
                                {platform}
                              </div>
                              <div className="text-sm text-green-600">
                                {handle}
                              </div>
                            </div>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Contact Info Sidebar */}
              <div
                className={`space-y-6 transform transition-all duration-500 delay-500 ${
                  isVisible && !isClosing
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }`}
              >
                {/* Contact Card */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-lg font-bold text-gray-900 mb-6">
                    Info Kontak
                  </h3>

                  {/* Address */}
                  <div
                    className={`bg-white rounded-xl p-4 mb-4 border border-green-100 transition-all duration-300 hover:shadow-md transform ${
                      isVisible && !isClosing
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                    }`}
                    style={{ transitionDelay: "600ms" }}
                  >
                    <div className="flex items-start space-x-3">
                      <MapPinIcon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-sm font-medium text-gray-700 mb-1">
                          Alamat
                        </div>
                        <div className="text-sm text-gray-600 leading-relaxed">
                          {umkm.alamat}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  {hasPhone && (
                    <div
                      className={`bg-white rounded-xl p-4 mb-4 border border-green-100 transition-all duration-300 hover:shadow-md transform ${
                        isVisible && !isClosing
                          ? "translate-y-0 opacity-100"
                          : "translate-y-4 opacity-0"
                      }`}
                      style={{ transitionDelay: "700ms" }}
                    >
                      <div className="flex items-center space-x-3">
                        <PhoneIcon className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <div>
                          <div className="text-sm font-medium text-gray-700 mb-1">
                            Telepon
                          </div>
                          <a
                            href={`tel:${umkm.telefon}`}
                            className="text-sm text-green-600 hover:text-green-700 font-medium transition-colors duration-200"
                          >
                            {umkm.telefon}
                          </a>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* WhatsApp Quick Link */}
                  {hasWhatsApp && (
                    <a
                      href={`https://wa.me/${umkm.sosialMedia.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 ${
                        isVisible && !isClosing
                          ? "translate-y-0 opacity-100"
                          : "translate-y-4 opacity-0"
                      }`}
                      style={{ transitionDelay: "800ms" }}
                    >
                      <span className="mr-2">💬</span>
                      Chat WhatsApp
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for bounce animation */}
      <style jsx>{`
        @keyframes modalBounce {
          0% {
            transform: scale(0.8) translateY(20px) rotate(1deg);
            opacity: 0;
          }
          50% {
            transform: scale(1.02) translateY(-5px) rotate(-0.5deg);
            opacity: 0.8;
          }
          100% {
            transform: scale(1) translateY(0) rotate(0deg);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
