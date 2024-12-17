"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import Image from "next/legacy/image";
import { FaChevronDown } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [collectionsDropdown, setCollectionsDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCollectionsDropdown, setMobileCollectionsDropdown] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown if clicked outside (desktop)
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setCollectionsDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  // Close dropdown if clicked outside (mobile)
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (mobileDropdownRef.current && !mobileDropdownRef.current.contains(event.target as Node)) {
        setMobileCollectionsDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <header className="font-custom text-xl text-white shadow-lg sticky top-0 w-full z-50 border border-[#FFD700] bg-black">
      <div className="container mx-auto flex justify-between items-center px-4 py-4 h-24">
        {/* Clickable Company Logo */}
        <Link href="/">
          <div
            className="flex items-center space-x-3 cursor-pointer"
            style={{ marginLeft: "clamp(-15px, -5vw, -10px)" }}
          >
            <Image
              src="/Apluslogo4.png"
              alt="A Plus Truffles Logo"
              width={110}
              height={80}
              className="rounded-full"
              loading="lazy"
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex flex-1 justify-center space-x-8 items-center relative">
          <Link href="/" className="hover:text-[#ca8f70] transition-colors duration-300">
            Home
          </Link>
          <Link href="/about" className="hover:text-[#febf79] transition-colors duration-300">
            About
          </Link>
          <Link href="/services" className="hover:text-[#ca8f70] transition-colors duration-300">
            Services
          </Link>
          <Link href="/gallery" className="hover:text-[#febf79] transition-colors duration-300">
            Gallery
          </Link>

          {/* Collections Dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setCollectionsDropdown(!collectionsDropdown)}
              className="flex items-center hover:text-[#ca8f70] transition-colors duration-300 font-semibold"
            >
              Collections
              <FaChevronDown
                className={`ml-2 transform transition-transform ${
                  collectionsDropdown ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {collectionsDropdown && (
              <div className="absolute left-0 mt-2 bg-black text-white rounded-lg shadow-lg border border-[#FFD700] z-20 w-56">
                <Link
                  href="/collections#og-collection"
                  className="block px-4 py-3 hover:bg-[#ca8f70] transition duration-300"
                >
                  OG Collection
                </Link>
                <Link
                  href="/collections#seasonal-collection"
                  className="block px-4 py-3 hover:bg-[#ca8f70] transition duration-300"
                >
                  Seasonal Collection
                </Link>
                <Link
                  href="/collections#advent-calendar"
                  className="block px-4 py-3 hover:bg-[#ca8f70] transition duration-300"
                >
                  Advent Calendar
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* Contact Button */}
        <Link
          href="/contact"
          className="hidden md:inline-block bg-[#febf79] text-black hover:bg-black hover:text-white transition-colors duration-300 px-4 py-2 rounded-md font-semibold"
        >
          Contact
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
      {mobileMenuOpen && (
        <nav ref={mobileDropdownRef} className="md:hidden bg-black">
          <Link
            href="/"
            className="block px-4 py-3 text-white hover:bg-[#febf79] rounded-md font-bold"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block px-4 py-3 text-white hover:bg-[#febf79] rounded-md font-bold"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/services"
            className="block px-4 py-3 text-white hover:bg-[#febf79] rounded-md font-bold"
            onClick={() => setMobileMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/gallery"
            className="block px-4 py-3 text-white hover:bg-[#febf79] rounded-md font-bold"
            onClick={() => setMobileMenuOpen(false)}
          >
            Gallery
          </Link>

          {/* Mobile Collections Dropdown */}
          <div>
            <button
              onClick={() => setMobileCollectionsDropdown(!mobileCollectionsDropdown)}
              className="block px-4 py-3 text-white font-bold hover:bg-[#ca8f70] rounded-md w-full text-left flex items-center"
            >
              Collections
              <FaChevronDown
                className={`ml-2 transform transition-transform ${
                  mobileCollectionsDropdown ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {mobileCollectionsDropdown && (
              <div className="pl-4 bg-black">
                <Link
                  href="/collections#og-collection"
                  className="block px-4 py-3 text-white hover:bg-[#febf79] rounded-md font-bold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  OG Collection
                </Link>
                <Link
                  href="/collections#seasonal-collection"
                  className="block px-4 py-3 text-white hover:bg-[#febf79] rounded-md font-bold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Seasonal Collection
                </Link>
                <Link
                  href="/collections#advent-calendar"
                  className="block px-4 py-3 text-white hover:bg-[#febf79] rounded-md font-bold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Advent Calendar
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className="block px-4 py-3 text-white hover:bg-[#febf79] rounded-md font-bold"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;












