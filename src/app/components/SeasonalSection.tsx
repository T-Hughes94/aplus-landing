"use client";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

const SeasonalSection = () => {
  return (
    <section className="bg-[#f0ac9f] p-8 md:p-16 -mt-1 relative">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-3xl font-bold text-white md:text-4xl">Seasonal Flavors & Events</h2>
        <p className="text-base text-gray-100 mt-2 md:text-lg">
          Discover limited-time flavors and catch us at our upcoming pop-up events!
        </p>
      </div>

      {/* Seasonal Flavors */}
      <div className="max-w-2xl mx-auto mb-8 bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-gray-800 md:text-2xl">Current Seasonal Flavors</h3>
        <p className="text-gray-600 mt-2 mb-4 md:mb-6">
          Our truffle flavors change with the seasons, bringing new, fresh tastes to enjoy. Be sure to check back often for our latest seasonal offerings!
        </p>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>Spring Blossom - Floral and light with a hint of honey</li>
          <li>Summer Berry - Bursting with mixed berry flavors</li>
          <li>Autumn Spice - Classic spices with a cozy twist</li>
          <li>Winter Mint - Refreshing and cool with a dark chocolate finish</li>
        </ul>
      </div>

      {/* Events Section */}
      <div className="text-center mt-8">
        <h3 className="text-xl font-semibold text-white md:text-2xl">Upcoming Pop-Up Events</h3>
        <p className="text-base text-gray-100 mt-2 md:text-lg">
          Follow us on Instagram for the latest updates on our pop-up events and seasonal flavors!
        </p>
        <Link href="https://www.instagram.com/aplustruffles" target="_blank">
          <div className="flex justify-center">
            <button className="mt-4 px-4 py-2 md:px-6 md:py-3 bg-white text-[#f0ac9f] font-semibold rounded-lg shadow-md hover:bg-[#ffd4a7] hover:text-white transition duration-300 flex items-center justify-center space-x-2 cursor-pointer text-sm md:text-base">
              <FaInstagram className="text-lg md:text-2xl" />
              <span>Follow Us on Instagram</span>
            </button>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default SeasonalSection;







