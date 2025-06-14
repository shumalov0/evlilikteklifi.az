"use client"

import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-stone-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Logo and Description */}
          <div className="flex-1 min-w-[280px]">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/ringlogo.png"
                alt="Evlilik Təklifi"
                width={40}
                height={40}
                className="w-10 h-10"
                color="white"
              />
              <span className="ml-2 text-xl font-serif font-medium text-stone-400">Evliliktəklifi.az</span>
            </Link>
            <p className="text-stone-400 mb-4">
              Xüsusi anlarınızı unudulmaz etmək üçün professional xidmətlərimizdən yararlanın
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.instagram.com/evlilikteklifi.az/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-white transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://facebook.com/evlilikteklifi.az/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-white transition-colors"
              >
                Facebook
              </a>
              <a
                href="https://tiktok.com/evlilikteklifi.az/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-white transition-colors"
              >
                TikTok
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex-1 min-w-[200px]">
            <h3 className="text-lg font-serif font-medium mb-4">Sürətli Keçidlər</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-stone-400 hover:text-white transition-colors">
                  Ana Səhifə
                </Link>
              </li>
              {/* <li>
                <Link href="/about" className="text-stone-400 hover:text-white transition-colors">
                  Haqqımızda
                </Link>
              </li> */}
              <li>
                <Link href="/packages" className="text-stone-400 hover:text-white transition-colors">
                  Paketlər
                </Link>
              </li>
              {/* <li>
                <Link href="/gallery" className="text-stone-400 hover:text-white transition-colors">
                  Qalereya
                </Link>
              </li> */}
              <li>
                <Link href="/contact" className="text-stone-400 hover:text-white transition-colors">
                  Əlaqə
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex-1 min-w-[280px]">
            <h3 className="text-lg font-serif font-medium mb-4">Əlaqə</h3>
            <ul className="space-y-2">
              <li className="text-stone-400">
                <a href="tel:+994501234567" className="hover:text-white transition-colors">
                  +994 51 695 03 27
                </a>
              </li>
              <li className="text-stone-400">
                <a href="mailto:evlilikteklifi.az@gmail.com" className="hover:text-white transition-colors">
                  evlilikteklifi.az@gmail.com
                </a>
              </li>
              <li className="text-stone-400">
                Əhməd Rəcəbli küçəsi 19A. Khalili Plaza
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-12 pt-8 text-center text-stone-400">
          <p>&copy; {new Date().getFullYear()} Evlilik Təklifi. Bütün hüquqlar qorunur.</p>
        </div>
      </div>
    </footer>
  )
}
