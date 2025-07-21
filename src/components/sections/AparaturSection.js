"use client";
import { useState, useEffect } from "react";
import {
  UserIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

export default function AparaturSection({ aparatur }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);

  // Responsive cards per slide
  useEffect(() => {
    const updateCardsPerSlide = () => {
      if (window.innerWidth < 640) {
        setCardsPerSlide(1); // Mobile: 1 card
      } else if (window.innerWidth < 1024) {
        setCardsPerSlide(2); // Tablet: 2 cards
      } else {
        setCardsPerSlide(3); // Desktop: 3 cards
      }
    };

    updateCardsPerSlide();
    window.addEventListener("resize", updateCardsPerSlide);
    return () => window.removeEventListener("resize", updateCardsPerSlide);
  }, []);

  // Calculate total slides based on current cards per slide
  const totalSlides = Math.ceil(aparatur.length / cardsPerSlide);

  // Reset slide when layout changes
  useEffect(() => {
    setCurrentSlide(0);
  }, [cardsPerSlide]);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying || totalSlides <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides, isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // Photo URLs mapping
  const getPhotoUrl = (id) => {
    const photos = {
      1: "https://cdn.x1nx3r.uk/free-bucket/27e16085-b109-473a-8b43-3278c715ba00.jpg",
      2: "https://cdn.x1nx3r.uk/free-bucket/ea900de6-2a21-4aad-8ff8-540272f3128d.jpg",
      3: "https://cdn.x1nx3r.uk/free-bucket/ed3f63ed-3207-4bb5-b733-12e51f96f99a.jpg",
      4: "https://cdn.x1nx3r.uk/free-bucket/c2c1bc0d-b63a-4d97-a4ef-71dbc8517890.jpg",
      5: "https://cdn.x1nx3r.uk/free-bucket/bf71fb31-d276-44c7-a30f-3dad7df73bcc.jpg",
    };
    return photos[id] || photos[1];
  };

  // Group aparatur into slides
  const slides = [];
  for (let i = 0; i < aparatur.length; i += cardsPerSlide) {
    slides.push(aparatur.slice(i, i + cardsPerSlide));
  }

  return (
    <section
      id="struktur"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-green-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="inline-block bg-emerald-100 text-emerald-800 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            Struktur Organisasi
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Aparatur Kelurahan
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Struktur kepemimpinan yang melayani kebutuhan masyarakat
          </p>
        </div>

        {/* Sliding Cards Container */}
        <div className="relative">
          {/* Main Slider */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slideCards, slideIndex) => (
                <div
                  key={slideIndex}
                  className="w-full flex-shrink-0 px-2 sm:px-4"
                >
                  <div
                    className={`grid gap-4 sm:gap-6 lg:gap-8 ${
                      cardsPerSlide === 1
                        ? "grid-cols-1"
                        : cardsPerSlide === 2
                          ? "grid-cols-2"
                          : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                    }`}
                  >
                    {slideCards.map((person) => (
                      <div key={person.id} className="group">
                        <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden h-full transform hover:-translate-y-1">
                          {/* Background decoration */}
                          <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded-bl-2xl sm:rounded-bl-3xl opacity-50"></div>

                          {/* Portrait Photo Container */}
                          <div className="mb-4 sm:mb-6">
                            <div className="w-full aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden shadow-md bg-gray-100 relative">
                              <img
                                src={getPhotoUrl(person.id)}
                                alt={person.nama}
                                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300 absolute inset-0"
                                loading="lazy"
                                onError={(e) => {
                                  e.target.style.display = "none";
                                  e.target.parentElement.querySelector(
                                    ".fallback-avatar",
                                  ).style.display = "flex";
                                }}
                              />
                              {/* Fallback Avatar */}
                              <div
                                className="fallback-avatar absolute inset-0 w-full h-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center"
                                style={{ display: "none" }}
                              >
                                <UserIcon className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
                              </div>
                            </div>
                          </div>

                          {/* Person Info */}
                          <div className="text-center">
                            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight px-2">
                              {person.nama}
                            </h3>

                            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg sm:rounded-xl p-2 sm:p-3">
                              <p className="text-green-800 font-medium text-xs sm:text-sm leading-relaxed">
                                {person.jabatan}
                              </p>
                            </div>
                          </div>

                          {/* Corner decoration */}
                          <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-r-2 border-green-300/50 rounded-br-lg"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows - Only show if more than one slide */}
          {totalSlides > 1 && (
            <>
              {/* Left Arrow */}
              <button
                onClick={prevSlide}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 hover:bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group z-10 touch-manipulation"
                aria-label="Previous slide"
              >
                <ChevronLeftIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 group-hover:text-green-600 transition-colors duration-300" />
              </button>

              {/* Right Arrow */}
              <button
                onClick={nextSlide}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 hover:bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group z-10 touch-manipulation"
                aria-label="Next slide"
              >
                <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 group-hover:text-green-600 transition-colors duration-300" />
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center mt-6 sm:mt-8 space-x-2 sm:space-x-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-2.5 sm:h-3 rounded-full transition-all duration-300 touch-manipulation ${
                      index === currentSlide
                        ? "bg-green-600 w-6 sm:w-8"
                        : "bg-gray-300 hover:bg-gray-400 w-2.5 sm:w-3"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/50 shadow-xl">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              Informasi Lebih Lanjut
            </h3>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
              Untuk informasi lebih lanjut mengenai layanan kelurahan, silakan
              hubungi kantor kelurahan
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="tel:+62313522396"
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center text-sm sm:text-base touch-manipulation"
              >
                Hubungi Kantor Kelurahan
              </a>
              <a
                href="mailto:kelurahankemayoran72@gmail.com"
                className="bg-white text-green-600 border-2 border-green-200 hover:border-green-300 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 hover:bg-green-50 text-center text-sm sm:text-base touch-manipulation"
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
