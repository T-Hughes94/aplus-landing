"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/legacy/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="font-custom text-xl text-white shadow-lg sticky top-0 w-full z-50 bg-gradient-to-r from-purple-700 to-green-600">
      <div className="container mx-auto flex justify-between items-center px-8 py-4 h-24">
        
        {/* Clickable Company Logo */}
        <Link href="/">
          <div className="flex items-center space-x-3 cursor-pointer">
            <Image
              src="/Apluslogo.png"
              alt="A Plus Truffles Logo"
              width={140}  // Adjust width as needed to keep it centered without increasing header height
              height={140} // Adjust height as needed
              className="rounded-full"
              loading="lazy"
            />
            <div className="font-custom text-2xl font-bold">A Plus Truffles</div>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex flex-1 justify-center space-x-8 items-center">
          <Link href="/" className="hover:text-green-300 transition-colors duration-300">
            Home
          </Link>
          <Link href="/about" className="hover:text-green-300 transition-colors duration-300">
            About
          </Link>
          <Link href="/services" className="hover:text-green-300 transition-colors duration-300">
            Services
          </Link>
          <Link href="/gallery" className="hover:text-green-300 transition-colors duration-300">
            Gallery
          </Link>
        </nav>

        {/* Contact Button */}
        <Link
          href="/contact"
          className="hidden md:inline-block bg-white text-purple-700 hover:bg-green-500 hover:text-white transition-colors duration-300 px-4 py-2 rounded-md font-semibold"
        >
          Contact
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-gradient-to-r from-purple-700 to-green-600 px-4 py-6">
          <Link href="/" className="block px-4 py-3 text-white hover:bg-gray-500 rounded-md font-bold" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/about" className="block px-4 py-3 text-white hover:bg-gray-500 rounded-md font-bold" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link href="/services" className="block px-4 py-3 text-white hover:bg-gray-500 rounded-md font-bold" onClick={() => setIsOpen(false)}>
            Services
          </Link>
          <Link href="/gallery" className="block px-4 py-3 text-white hover:bg-gray-500 rounded-md font-bold" onClick={() => setIsOpen(false)}>
            Gallery
          </Link>
          <Link href="/contact" className="block px-4 py-3 text-white hover:bg-gray-500 rounded-md font-bold" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;







