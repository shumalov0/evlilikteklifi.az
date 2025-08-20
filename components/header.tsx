"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Handle body scroll lock
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: "Ana Səhifə" },
    { href: "/packages", label: "Paketlər" },
    { href: "/contact", label: "Əlaqə" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 mt-[6px]">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="relative z-50">
            <Image
              src="/ringlogo.png"
              alt="Evlilik Təklifi"
              width={40}
              height={20}
              className={`transition-all duration-300 ${
                isScrolled ? "brightness-0" : "brightness-0 invert"
              }`}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 h-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base font-medium transition-colors ${
                  isScrolled 
                    ? "text-stone-600 hover:text-gold-400" 
                    : "text-white hover:text-gold-400"
                } ${
                  pathname === link.href ? "text-gold-400" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/proposal"
              className="bg-gold-400 text-white px-6 py-2.5 rounded-lg hover:bg-gold-500 transition-colors font-medium"
            >
              Təklif Et
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative z-50 w-10 h-10 flex flex-col justify-center items-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                isScrolled ? "bg-stone-600" : "bg-white"
              } ${isMenuOpen ? "rotate-45 translate-y-0.5" : "-translate-y-1"}`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                isScrolled ? "bg-stone-600" : "bg-white"
              } ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                isScrolled ? "bg-stone-600" : "bg-white"
              } ${isMenuOpen ? "-rotate-45 -translate-y-0.5" : "translate-y-1"}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-gold-200 z-40 transition-all duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Mobile Menu Content */}
          <nav className="flex-1 flex flex-col justify-center items-center space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-2xl font-medium text-stone-800 hover:text-gold-400 transition-colors ${
                  pathname === link.href ? "text-gold-400" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/proposal"
              className="bg-gold-400 text-white px-8 py-3 rounded-lg text-xl font-medium hover:bg-gold-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Təklif Et
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
