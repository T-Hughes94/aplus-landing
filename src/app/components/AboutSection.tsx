"use client";
import Image from "next/legacy/image";
import { FaLeaf, FaHandHoldingHeart, FaGlobe, FaSeedling } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section className="bg-white p-8 md:p-16">
      <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
        
        {/* Left Side: Image */}
        <div className="md:w-1/2 relative transform hover:scale-105 transition-transform duration-300">
          <Image
            src="/Apluslogo.jpg" // Replace with a relevant about image
            alt="Our Story - Handcrafted Vegan Truffles"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side: About Text */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-[#f0ac9f]">
            Our Story
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At A Plus Truffles, we are passionate about creating vegan truffles that are both indulgent and ethically made. Our products are crafted with love, using premium ingredients that are both fair-trade and sustainably sourced. Every truffle is hand-painted and made from scratch, ensuring a luxurious experience with every bite.
          </p>

          {/* Key Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-4">
              <FaLeaf className="text-[#f0ac9f] text-3xl" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">100% Vegan</h3>
                <p className="text-gray-600 text-sm">Committed to plant-based ingredients.</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaHandHoldingHeart className="text-[#f0ac9f] text-3xl" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Fair-Trade</h3>
                <p className="text-gray-600 text-sm">Supporting ethical sourcing and fair practices.</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaGlobe className="text-[#f0ac9f] text-3xl" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Sustainably Sourced</h3>
                <p className="text-gray-600 text-sm">Environmentally responsible ingredients.</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaSeedling className="text-[#f0ac9f] text-3xl" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Handcrafted with Care</h3>
                <p className="text-gray-600 text-sm">Each truffle is individually painted and crafted.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;





