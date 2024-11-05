"use client";
import Image from "next/legacy/image";
import { FaLeaf, FaHandHoldingHeart, FaGlobe, FaSeedling } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section className="relative z-20 bg-white p-6 md:p-16">
      <div className="flex flex-col items-center space-y-8 md:space-y-0 md:flex-row md:justify-between">
        
        {/* Left Side: Image */}
        <div className="relative transform transition-transform duration-300 hover:scale-105 md:w-1/2">
          <Image
            src="/Apluslogo.jpg"
            alt="Our Story - Handcrafted Vegan Truffles"
            width={500}
            height={350}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side: About Text */}
        <div className="space-y-4 md:w-1/2 md:space-y-6">
          <h2 className="text-3xl font-bold text-[#f0ac9f] md:text-4xl">
            Our Story
          </h2>
          <p className="text-base leading-relaxed text-gray-700 md:text-lg">
            At A Plus Truffles, we are passionate about creating vegan truffles that are both indulgent and ethically made. Our products are crafted with love, using premium ingredients that are both fair-trade and sustainably sourced. Every truffle is hand-painted and made from scratch, ensuring a luxurious experience with every bite.
          </p>

          {/* Key Values */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-center space-x-4">
              <FaLeaf className="text-[#f0ac9f] text-2xl md:text-3xl" />
              <div>
                <h3 className="text-base font-semibold text-gray-800 md:text-lg">100% Vegan</h3>
                <p className="text-sm text-gray-600">Committed to plant-based ingredients.</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaHandHoldingHeart className="text-[#f0ac9f] text-2xl md:text-3xl" />
              <div>
                <h3 className="text-base font-semibold text-gray-800 md:text-lg">Fair-Trade</h3>
                <p className="text-sm text-gray-600">Supporting ethical sourcing and fair practices.</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaGlobe className="text-[#f0ac9f] text-2xl md:text-3xl" />
              <div>
                <h3 className="text-base font-semibold text-gray-800 md:text-lg">Sustainably Sourced</h3>
                <p className="text-sm text-gray-600">Environmentally responsible ingredients.</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaSeedling className="text-[#f0ac9f] text-2xl md:text-3xl" />
              <div>
                <h3 className="text-base font-semibold text-gray-800 md:text-lg">Handcrafted with Care</h3>
                <p className="text-sm text-gray-600">Each truffle is individually painted and crafted.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;








