"use client";
import Link from "next/link";
import { FaShippingFast, FaBoxOpen, FaGift } from "react-icons/fa";

const PricingSection = () => {
  return (
    <section className="bg-gray-100 p-8 md:p-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#f0ac9f]">Pricing</h2>
        <p className="text-lg text-gray-700 mt-4">
          Choose your favorite truffles and have them delivered within 15 miles of Piscataway, NJ – or opt for free pickup!
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {/* Box of 4 */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <FaBoxOpen className="text-[#f0ac9f] text-5xl mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-gray-800">Box of 4</h3>
          <p className="text-xl font-bold text-gray-800 mt-2">$15</p>
          <p className="text-gray-600 mt-2">Pick your own flavors</p>
        </div>

        {/* Box of a Dozen */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <FaGift className="text-[#f0ac9f] text-5xl mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-gray-800">Box of a Dozen</h3>
          <p className="text-xl font-bold text-gray-800 mt-2">$38</p>
          <p className="text-gray-600 mt-2">Pick your own flavors</p>
        </div>

        {/* Trash Can Truffles */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <FaShippingFast className="text-[#f0ac9f] text-5xl mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-gray-800">Trash Can Truffles</h3>
          <p className="text-xl font-bold text-gray-800 mt-2">$18</p>
          <p className="text-gray-600 mt-2">Random assortment of flavors</p>
        </div>
      </div>

      {/* Delivery and CTA */}
      <div className="text-center mt-12">
        <p className="text-gray-700 text-lg">
          Delivery is free within 15 miles of Piscataway, NJ, or opt for free pickup!
        </p>
        <Link href="/contact">
          <button className="mt-6 px-8 py-3 bg-[#ffd4a7] text-[#f0ac9f] font-semibold rounded-lg shadow-md hover:bg-[#f0ac9f] hover:text-white transition duration-300">
            Contact Us to Order
          </button>
        </Link>
      </div>
    </section>
  );
};

export default PricingSection;
