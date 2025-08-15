// src/app/components/Header.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-black border-b border-white shadow-md text-white font-custom">
      {/* Skip to content (visible on keyboard focus) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[1000] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-black shadow-md"
      >
        Skip to content
      </a>

      <div className="max-w-7xl mx-auto flex justify-between items-center h-20 px-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2" aria-label="Go to homepage">
          <Image
            src="/Apluslogo4.png"
            alt="A Plus Truffles logo"
            width={80}
            height={60}
            className="rounded-full"
            loading="lazy"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center space-x-6 text-lg">
          <Link href="/" className="hover:text-[#ca8f70] transition">Home</Link>
          <Link href="/about" className="hover:text-[#febf79] transition">About</Link>
          <Link href="/services" className="hover:text-[#ca8f70] transition">Services</Link>
          <Link href="/shop" className="hover:text-[#ca8f70] transition">Shop</Link>
          <Link href="/shipping" className="hover:text-[#ca8f70] transition">Shipping</Link>
          <Link href="/gallery" className="hover:text-[#febf79] transition">Gallery</Link>

          {/* Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center hover:text-[#ca8f70] font-semibold transition"
              aria-haspopup="menu"
              aria-expanded={dropdownOpen}
              aria-controls="collections-menu"
            >
              Collections
              <FaChevronDown
                className={`ml-2 transform transition-transform ${dropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                aria-hidden="true"
              />
            </button>
            {dropdownOpen && (
              <div id="collections-menu" role="menu" className="absolute mt-2 bg-black border border-[#FFD700] rounded-lg shadow-xl w-48">
                <Link href="/collections#og-collection" className="block px-4 py-2 hover:bg-[#ca8f70] transition" role="menuitem">
                  OG Collection
                </Link>
                <Link href="/collections#seasonal-collection" className="block px-4 py-2 hover:bg-[#ca8f70] transition" role="menuitem">
                  Seasonal Collection
                </Link>
                <Link href="/collections#advent-calendar" className="block px-4 py-2 hover:bg-[#ca8f70] transition" role="menuitem">
                  Advent Calendar
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* Contact Button (Desktop) */}
        <Link
          href="/contact"
          className="hidden md:inline-block bg-[#febf79] text-black px-4 py-2 rounded-md font-semibold hover:bg-black hover:text-white transition"
        >
          Contact
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav"
          type="button"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav id="mobile-nav" className="md:hidden bg-black px-4 pb-4 space-y-2" aria-label="Mobile navigation">
          <Link href="/" className="block py-2 hover:bg-[#febf79] rounded-md text-white">Home</Link>
          <Link href="/about" className="block py-2 hover:bg-[#febf79] rounded-md text-white">About</Link>
          <Link href="/services" className="block py-2 hover:bg-[#febf79] rounded-md text-white">Services</Link>
          <Link href="/shop" className="block py-2 hover:bg-[#febf79] rounded-md text-white">Shop</Link>
          <Link href="/shipping" className="block py-2 hover:bg-[#febf79] rounded-md text-white">Shipping</Link>
          <Link href="/gallery" className="block py-2 hover:bg-[#febf79] rounded-md text-white">Gallery</Link>
          <details className="bg-black rounded-md">
            <summary className="py-2 cursor-pointer hover:bg-[#ca8f70] text-white">Collections</summary>
            <div className="pl-4 space-y-1 mt-1">
              <Link href="/collections#og-collection" className="block py-1 hover:text-[#febf79]">OG Collection</Link>
              <Link href="/collections#seasonal-collection" className="block py-1 hover:text-[#febf79]">Seasonal</Link>
              <Link href="/collections#advent-calendar" className="block py-1 hover:text-[#febf79]">Advent Calendar</Link>
            </div>
          </details>
          <Link href="/contact" className="block py-2 bg-[#febf79] text-black rounded-md font-semibold text-center hover:bg-[#ca8f70]">
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;















