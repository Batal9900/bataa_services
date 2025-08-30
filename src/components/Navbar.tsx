"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative min-h-[80px]">
      {/* Background Image Container */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url('/images/Fancy Strip.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: -2
        }}
      ></div>
      
      {/* Lighter overlay for better visibility */}
      <div className="absolute inset-0 bg-white/20" style={{ zIndex: -1 }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" style={{ zIndex: 10 }}>
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/images/Logos.svg"
                alt="BATAL Logo"
                width={140}
                height={25}
                className="h-12 w-[170px] cursor-pointer"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            <Link href="/" className="text-gray-800 hover:text-green-600 font-semibold text-sm tracking-wide transition-colors">
              HOME
            </Link>
            <Link href="/about" className="text-gray-800 hover:text-green-600 font-semibold text-sm tracking-wide transition-colors">
              ABOUT US
            </Link>
            <Link href="/projects" className="text-gray-800 hover:text-green-600 font-semibold text-sm tracking-wide transition-colors">
              PROJECTS
            </Link>
            <Link href="/services" className="text-gray-800 hover:text-green-600 font-semibold text-sm tracking-colors">
              SERVICES
            </Link>
            <Link href="/contact" className="text-gray-800 hover:text-green-600 font-semibold text-sm tracking-wide transition-colors">
              CONTACT
            </Link>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Link href="/contact">
              <button className="bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-full font-medium text-sm transition-colors flex items-center gap-2 shadow-md">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
                A Quick Quote?
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex items-center p-2 text-gray-800 hover:text-green-600 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-lg z-50">
            <nav className="px-4 py-6 space-y-4">
              <Link 
                href="/" 
                className="block text-gray-800 hover:text-green-600 font-semibold text-lg py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                HOME
              </Link>
              <Link 
                href="/about" 
                className="block text-gray-800 hover:text-green-600 font-semibold text-lg py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT US
              </Link>
              <Link 
                href="/projects" 
                className="block text-gray-800 hover:text-green-600 font-semibold text-lg py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                PROJECTS
              </Link>
              <Link 
                href="/services" 
                className="block text-gray-800 hover:text-green-600 font-semibold text-lg py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                SERVICES
              </Link>
              <Link 
                href="/contact" 
                className="block text-gray-800 hover:text-green-600 font-semibold text-lg py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT
              </Link>
              
              {/* Mobile CTA Button */}
              <div className="pt-4">
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  <button className="w-full bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full font-medium text-sm transition-colors flex items-center justify-center gap-2 shadow-md">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                    </svg>
                    A Quick Quote?
                  </button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
