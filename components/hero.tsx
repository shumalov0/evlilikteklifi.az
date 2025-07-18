"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export function Hero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <div className="relative h-screen">
      {/* Background Image (fallback if video not loaded yet) */}
      {!isVideoLoaded && (
        <Image
          src="/images/dekorm.jpg"
          alt="Background fallback"
          fill
          priority
          className="object-cover"
        />
      )}

      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={() => setIsVideoLoaded(true)}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://res.cloudinary.com/dfsvtimm8/video/upload/sowwbv2uoacnwqvforz1.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-6">
          Unudulmaz Evlilik Təklifi
        </h1>
        <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl">
          Sevdiyiniz insana xüsusi bir təklif etmək üçün professional
          xidmətlərimizdən yararlanın
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/proposal"
            className="bg-gold-400 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-gold-500 transition-colors"
          >
            Təklif Et
          </Link>
          <Link
            href="/packages"
            className="bg-white/10 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-white/20 transition-colors backdrop-blur-sm"
          >
            Paketləri Kəşf Et
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}


