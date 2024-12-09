"use client";
import Image from "next/legacy/image";
import { FaLeaf, FaHandHoldingHeart, FaGlobe, FaSeedling } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section className="relative z-20 bg-black p-6 md:p-16 pb-12 md:pb-20">
      <div className="flex flex-col items-center space-y-8 md:space-y-0 md:flex-row md:justify-between">
        
        {/* Left Side: Image */}
        <div className="relative transform transition-transform duration-300 hover:scale-105 md:w-1/2">
          <Image
            src="/Apluslogo4.png"
            alt="Our Story - Handcrafted Vegan Truffles"
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side: About Text */}
        <div className="space-y-4 md:w-1/2 md:space-y-6">
          <h2 className="text-3xl font-bold text-[#FFD700] md:text-4xl">
            Our Story
          </h2>
          <p className="text-base leading-relaxed text-white md:text-lg">
            At A Plus Truffles, we are passionate about creating vegan truffles that are both indulgent and ethically made. Our products are crafted with love, using premium ingredients that are both fair-trade and sustainably sourced. Every truffle is hand-painted and made from scratch, ensuring a luxurious experience with every bite.
          </p>

          {/* Key Values */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-center space-x-4">
              <FaLeaf className="text-purple-700 text-2xl md:text-3xl" />
              <div>
                <h3 className="text-base font-semibold text-white md:text-lg">100% Vegan</h3>
                <p className="text-sm text-white">Committed to plant-based ingredients.</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaHandHoldingHeart className="text-emerald-700 text-2xl md:text-3xl" />
              <div>
                <h3 className="text-base font-semibold text-white md:text-lg">Fair-Trade</h3>
                <p className="text-sm text-white">Supporting ethical sourcing and fair practices.</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaGlobe className="text-emerald-700 text-2xl md:text-3xl" />
              <div>
                <h3 className="text-base font-semibold text-white md:text-lg">Sustainably Sourced</h3>
                <p className="text-sm text-white">Environmentally responsible ingredients.</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaSeedling className="text-purple-700 text-2xl md:text-3xl" />
              <div>
                <h3 className="text-base font-semibold text-white md:text-lg">Handcrafted with Care</h3>
                <p className="text-sm text-white">Each truffle is individually painted and crafted.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;















