"use client";
import { Fragment, useEffect, useState, useCallback } from "react";
import {
  XMarkIcon,
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  BuildingStorefrontIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

export default function UMKMModal({ umkm, onClose }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

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
  const handleClose = useCallback(() => {
    if (isClosing) return; // Prevent multiple calls

    setIsClosing(true);
    setIsVisible(false);

    const timer = setTimeout(() => {
      onClose();
    }, 300); // Match animation duration

    return () => clearTimeout(timer);
  }, [isClosing, onClose]);

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [handleClose]);

  // Get social media icon with Font Awesome
  const getSocialIcon = (platform) => {
    switch (platform.toLowerCase()) {
      case "whatsapp":
        return <i className="fab fa-whatsapp text-green-500"></i>;
      case "instagram":
        return <i className="fab fa-instagram text-pink-500"></i>;
      case "facebook":
        return <i className="fab fa-facebook text-blue-600"></i>;
      case "tiktok":
        return <i className="fab fa-tiktok text-black"></i>;
      case "twitter":
        return <i className="fab fa-twitter text-blue-400"></i>;
      case "youtube":
        return <i className="fab fa-youtube text-red-600"></i>;
      case "linkedin":
        return <i className="fab fa-linkedin text-blue-700"></i>;
      case "telegram":
        return <i className="fab fa-telegram text-blue-500"></i>;
      default:
        return <i className="fas fa-globe text-gray-500"></i>;
    }
  };

  // Smart social media URL generator
  const getSocialMediaUrl = (platform, handle) => {
    const cleanHandle = handle.replace(/[@#]/g, ""); // Remove @ or # symbols

    switch (platform.toLowerCase()) {
      case "whatsapp":
        // Handle both phone numbers and WhatsApp links
        const phoneNumber = cleanHandle.replace(/\D/g, ""); // Remove non-digits
        return `https://wa.me/${phoneNumber}`;

      case "instagram":
        return `https://instagram.com/${cleanHandle}`;

      case "facebook":
        return `https://facebook.com/${cleanHandle}`;

      case "tiktok":
        return `https://tiktok.com/@${cleanHandle}`;

      case "twitter":
        return `https://twitter.com/${cleanHandle}`;

      case "youtube":
        return `https://youtube.com/@${cleanHandle}`;

      case "linkedin":
        return `https://linkedin.com/in/${cleanHandle}`;

      case "telegram":
        return `https://t.me/${cleanHandle}`;

      default:
        // If it looks like a URL, return as is, otherwise try to make it a URL
        if (handle.startsWith("http")) {
          return handle;
        } else {
          return `https://${cleanHandle}`;
        }
    }
  };

  // Check if contact info exists
  const hasPhone = umkm.telefon && umkm.telefon.trim() !== "";
  const hasWhatsApp =
    umkm.sosialMedia?.whatsapp && umkm.sosialMedia.whatsapp.trim() !== "";
  const hasSocialMedia =
    umkm.sosialMedia && Object.keys(umkm.sosialMedia).length > 0;

  return (
    <>
      {/* Font Awesome CDN */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />

      <div
        className={`fixed inset-0 z-50 flex items-start sm:items-center justify-center overflow-auto transition-all duration-300 ${
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
          className={`relative w-full sm:max-w-4xl max-h-screen sm:max-h-[90vh] bg-white rounded-none sm:rounded-2xl lg:rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-300 ease-out sm:m-4 ${
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
          <div className="flex flex-col h-full max-h-screen sm:max-h-[90vh]">
            {/* Header */}
            <div
              className={`relative bg-gradient-to-r from-green-500 to-emerald-600 p-4 sm:p-6 text-white transform transition-all duration-500 delay-100 flex-shrink-0 ${
                isVisible && !isClosing
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              <button
                onClick={handleClose}
                type="button"
                className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 hover:rotate-90 group z-10 touch-manipulation"
                aria-label="Close modal"
              >
                <XMarkIcon className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-200" />
              </button>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 pr-12 sm:pr-16">
                <div
                  className={`w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 transform transition-all duration-500 delay-200 ${
                    isVisible && !isClosing
                      ? "scale-100 rotate-0 opacity-100"
                      : "scale-50 rotate-45 opacity-0"
                  }`}
                >
                  <i className="fas fa-store text-lg sm:text-2xl"></i>
                </div>

                <div
                  className={`flex-1 min-w-0 transform transition-all duration-500 delay-300 ${
                    isVisible && !isClosing
                      ? "translate-x-0 opacity-100"
                      : "translate-x-4 opacity-0"
                  }`}
                >
                  <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2 leading-tight">
                    {umkm.nama}
                  </h2>
                  <p className="text-sm sm:text-lg opacity-90 mb-2 sm:mb-3">
                    Pemilik: {umkm.pemilik}
                  </p>

                  <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                    <span className="bg-white/20 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-semibold">
                      UMKM Kemayoran
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div
              className={`flex-1 overflow-y-auto p-4 sm:p-6 transform transition-all duration-700 delay-400 ${
                isVisible && !isClosing
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                {/* Main Info */}
                <div className="lg:col-span-2 space-y-4 sm:space-y-6">
                  {/* Description */}
                  <div
                    className={`transform transition-all duration-500 delay-500 ${
                      isVisible && !isClosing
                        ? "translate-x-0 opacity-100"
                        : "translate-x-8 opacity-0"
                    }`}
                  >
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                      Tentang Usaha
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
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
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                      Hubungi Sekarang
                    </h3>
                    <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                      {/* Phone Button */}
                      {hasPhone && (
                        <a
                          href={`tel:${umkm.telefon}`}
                          className="flex items-center justify-center bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 text-sm sm:text-base touch-manipulation"
                        >
                          <i className="fas fa-phone mr-2"></i>
                          Telepon
                        </a>
                      )}

                      {/* WhatsApp Button */}
                      {hasWhatsApp && (
                        <a
                          href={getSocialMediaUrl(
                            "whatsapp",
                            umkm.sosialMedia.whatsapp,
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 text-sm sm:text-base touch-manipulation"
                        >
                          <i className="fab fa-whatsapp mr-2"></i>
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
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                        Media Sosial
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {Object.entries(umkm.sosialMedia).map(
                          ([platform, handle], index) => (
                            <a
                              key={platform}
                              href={getSocialMediaUrl(platform, handle)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`flex items-center bg-gray-100 hover:bg-gray-200 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 transition-all duration-300 group hover:scale-105 transform cursor-pointer hover:shadow-md touch-manipulation ${
                                isVisible && !isClosing
                                  ? "translate-y-0 opacity-100"
                                  : "translate-y-4 opacity-0"
                              }`}
                              style={{
                                transitionDelay: `${800 + index * 100}ms`,
                              }}
                            >
                              <span className="text-lg sm:text-xl mr-2 sm:mr-3 group-hover:scale-110 transition-transform duration-200 flex-shrink-0">
                                {getSocialIcon(platform)}
                              </span>
                              <div className="min-w-0 flex-1">
                                <div className="text-xs sm:text-sm font-medium text-gray-700 capitalize truncate">
                                  {platform}
                                </div>
                                <div className="text-xs sm:text-sm text-green-600 group-hover:text-green-700 transition-colors duration-200 truncate">
                                  {handle}
                                </div>
                              </div>
                            </a>
                          ),
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Contact Info Sidebar */}
                <div
                  className={`space-y-4 sm:space-y-6 transform transition-all duration-500 delay-500 ${
                    isVisible && !isClosing
                      ? "translate-x-0 opacity-100"
                      : "translate-x-8 opacity-0"
                  }`}
                >
                  {/* Contact Card */}
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-green-100 hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-4 sm:mb-6">
                      Info Kontak
                    </h3>

                    {/* Address */}
                    <div
                      className={`bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 mb-3 sm:mb-4 border border-green-100 transition-all duration-300 hover:shadow-md transform ${
                        isVisible && !isClosing
                          ? "translate-y-0 opacity-100"
                          : "translate-y-4 opacity-0"
                      }`}
                      style={{ transitionDelay: "600ms" }}
                    >
                      <div className="flex items-start space-x-2 sm:space-x-3">
                        <i className="fas fa-map-marker-alt text-green-600 mt-1 text-sm sm:text-base flex-shrink-0"></i>
                        <div className="min-w-0 flex-1">
                          <div className="text-xs sm:text-sm font-medium text-gray-700 mb-1">
                            Alamat
                          </div>
                          <div className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                            {umkm.alamat}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Phone */}
                    {hasPhone && (
                      <div
                        className={`bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 mb-3 sm:mb-4 border border-green-100 transition-all duration-300 hover:shadow-md transform ${
                          isVisible && !isClosing
                            ? "translate-y-0 opacity-100"
                            : "translate-y-4 opacity-0"
                        }`}
                        style={{ transitionDelay: "700ms" }}
                      >
                        <div className="flex items-center space-x-2 sm:space-x-3">
                          <i className="fas fa-phone text-green-600 text-sm sm:text-base flex-shrink-0"></i>
                          <div className="min-w-0 flex-1">
                            <div className="text-xs sm:text-sm font-medium text-gray-700 mb-1">
                              Telepon
                            </div>
                            <a
                              href={`tel:${umkm.telefon}`}
                              className="text-xs sm:text-sm text-green-600 hover:text-green-700 font-medium transition-colors duration-200 touch-manipulation"
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
                        href={getSocialMediaUrl(
                          "whatsapp",
                          umkm.sosialMedia.whatsapp,
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full bg-green-600 hover:bg-green-700 text-white py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 text-sm sm:text-base touch-manipulation ${
                          isVisible && !isClosing
                            ? "translate-y-0 opacity-100"
                            : "translate-y-4 opacity-0"
                        }`}
                        style={{ transitionDelay: "800ms" }}
                      >
                        <i className="fab fa-whatsapp mr-2"></i>
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
    </>
  );
}
