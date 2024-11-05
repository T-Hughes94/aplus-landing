"use client";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-[#f0ac9f] text-white p-8 md:p-12">
      {/* Thin Gold Divider Line */}
      {/* <div className="w-full h-1 bg-[#ffd4a7] mb-8"></div> */}

      {/* Footer Content */}
      <div className="max-w-6xl mx-auto grid gap-8 text-center md:text-left md:grid-cols-3">
        
        {/* Company Info */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">A Plus Truffles</h2>
          <p className="text-sm md:text-base">
            Made from scratch, hand-painted vegan truffles. Experience the finest in flavor and craftsmanship.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="space-y-2 md:space-y-4">
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <div className="flex flex-col space-y-2 text-sm md:text-base">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        {/* Social & Contact */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Connect</h3>
          <p className="text-sm md:text-base">Follow us on social media for updates and events.</p>
          <div className="flex justify-center md:justify-start space-x-4">
            <Link href="https://www.instagram.com/aplustruffles" target="_blank">
              <FaInstagram className="text-2xl hover:text-[#ffd4a7] transition duration-300" />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="mt-8 text-center text-xs md:text-sm text-gray-200">
        &copy; {new Date().getFullYear()} A Plus Truffles. All rights reserved.
      </div>

      {/* SVG Wave Transition */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-[80px] md:h-[120px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,256 C60,288,120,320,180,320C240,320,300,288,360,256C420,224,480,192,540,192C600,192,660,224,720,256C780,288,840,320,900,320C960,320,1020,288,1080,256C1140,224,1200,192,1260,192C1320,192,1380,224,1440,256L1440,320L0,320Z"
          ></path>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;




