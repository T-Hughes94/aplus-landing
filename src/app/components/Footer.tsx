// src/app/components/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="relative bg-black border border-white text-white p-8 md:p-12">
      <div className="max-w-6xl mx-auto grid gap-8 text-center md:text-left md:grid-cols-3">
        {/* Company Info */}
        <div className="space-y-4">
          <h2 className="text-2xl text-[#febf79] font-bold">A Plus Truffles</h2>
          <p className="text-sm md:text-base">
            Made from scratch, hand-painted vegan truffles. Experience the finest in flavor and craftsmanship.
          </p>
          <div className="flex flex-col items-center md:items-start mt-4 space-y-2">
            <div className="flex items-center space-x-2 text-sm md:text-base">
              <HiOutlineMail className="text-xl" aria-hidden="true" />
              <span>Aplustruffles@yahoo.com</span>
            </div>
            <Link href="https://www.instagram.com/aplustruffles" target="_blank" aria-label="Open @aplustruffles on Instagram">
              <div className="flex items-center space-x-2 cursor-pointer hover:text-[#ffd4a7] transition duration-300">
                <FaInstagram className="text-xl" aria-hidden="true" />
                <span>@aplustruffles</span>
              </div>
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <nav className="space-y-2 md:space-y-4" aria-label="Footer">
          <h3 className="text-xl text-[#febf79] font-semibold">Quick Links</h3>
          <div className="flex flex-col space-y-2 text-sm md:text-base">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/shipping">Shipping</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/collections">Collections</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </nav>

        {/* Our Gallery */}
        <div className="space-y-4">
          <h3 className="text-xl text-[#febf79] font-semibold">Our Gallery</h3>
          <div className="grid grid-cols-3 gap-2">
            {["gallery1.webp", "gallery3.webp", "gallery5.webp", "gallery7.webp", "gallery9.webp", "gallery12.webp"].map((image, index) => (
              <div key={index} className="relative w-full h-20 md:h-24 overflow-hidden rounded-lg">
                <Image
                  src={`/${image}`}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  sizes="(min-width: 768px) 33vw, 50vw"
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-xs md:text-sm text-gray-200">
        &copy; {new Date().getFullYear()} A Plus Truffles. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;









