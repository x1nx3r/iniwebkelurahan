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

  // Calculate total slides (3 cards per slide)
  const cardsPerSlide = 3;
  const totalSlides = Math.ceil(aparatur.length / cardsPerSlide);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying || totalSlides <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000); // Change slide every 5 seconds

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

  // Your CDN photo URLs
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
      className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-green-50"
    >
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
            Struktur kepemimpinan yang melayani kebutuhan masyarakat
          </p>
        </div>

        {/* Sliding Cards Container */}
        <div className="relative">
          {/* Main Slider */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slideCards, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {slideCards.map((person) => (
                      <div key={person.id} className="group">
                        <div className="bg-white rounded-3xl p-6 shadow-xl card-hover border border-gray-100 relative overflow-hidden h-full">
                          {/* Background decoration */}
                          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded-bl-3xl opacity-50"></div>

                          {/* Portrait Photo - 3:4 Aspect Ratio Container */}
                          <div className="mb-6">
                            <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-lg bg-gray-100">
                              <img
                                src={getPhotoUrl(person.id)}
                                alt={person.nama}
                                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                                onError={(e) => {
                                  e.target.style.display = "none";
                                  e.target.nextSibling.style.display = "flex";
                                }}
                              />
                              {/* Fallback */}
                              <div
                                className="w-full h-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center"
                                style={{ display: "none" }}
                              >
                                <UserIcon className="w-16 h-16 text-white" />
                              </div>
                            </div>
                          </div>

                          {/* Info */}
                          <div className="text-center">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 leading-tight">
                              {person.nama}
                            </h3>

                            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-3">
                              <p className="text-green-800 font-medium text-sm leading-relaxed">
                                {person.jabatan}
                              </p>
                            </div>
                          </div>

                          {/* Corner decoration */}
                          <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-green-300/50 rounded-br-lg"></div>
                        </div>
                      </div>
                    ))}

                    {/* Fill empty slots if last slide has less than 3 cards */}
                    {slideCards.length < cardsPerSlide &&
                      Array.from({
                        length: cardsPerSlide - slideCards.length,
                      }).map((_, index) => (
                        <div
                          key={`empty-${index}`}
                          className="hidden lg:block"
                        ></div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows - Only show if more than one slide */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group z-10"
              >
                <ChevronLeftIcon className="w-6 h-6 text-gray-600 group-hover:text-green-600 transition-colors duration-300" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group z-10"
              >
                <ChevronRightIcon className="w-6 h-6 text-gray-600 group-hover:text-green-600 transition-colors duration-300" />
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center mt-8 space-x-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "bg-green-600 w-8"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Contact CTA */}
        <div className="mt-20 text-center">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              Informasi Lebih Lanjut
            </h3>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              Untuk informasi lebih lanjut mengenai layanan kelurahan, silakan
              hubungi kantor kelurahan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+62311234567"
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Hubungi Kantor Kelurahan
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
