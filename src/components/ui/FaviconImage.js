// src/components/ui/FaviconImage.js
"use client";
import Image from "next/image";

export default function FaviconImage({ src, alt, fallbackDomain, className }) {
  const handleError = (e) => {
    e.target.src = `https://www.google.com/s2/favicons?domain=${fallbackDomain}&sz=16`;
  };

  return (
    <img src={src} alt={alt} className={className} onError={handleError} />
  );
}
