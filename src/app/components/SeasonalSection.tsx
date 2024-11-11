"use client";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

const SeasonalSection = () => {
  return (
    <section className="bg-[#4b0082] p-8 md:p-16 -mt-1 relative text-white">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-3xl font-bold text-[#FFD700] md:text-4xl">Seasonal Flavors & Events</h2>
        <p className="text-base text-gray-200 mt-2 md:text-lg">
          Discover limited-time flavors and catch us at our upcoming pop-up events!
        </p>
      </div>

      {/* Seasonal Flavors Card with Enhanced Styles */}
      <div className="relative max-w-2xl mx-auto mb-12 p-6 bg-gradient-to-br from-[#4b0082] via-purple-700 to-emerald-700 rounded-xl border-2 border-[#FFD700] shadow-2xl transform transition-transform duration-300 hover:scale-105 hover:shadow-[0px_15px_30px_rgba(0,0,0,0.2)]">
        <h3 className="text-2xl font-extrabold text-[#FFD700] flex items-center justify-center md:text-3xl">
          🍁 <span className="ml-2">Current Seasonal Flavors</span> 🍁
        </h3>
        <p className="text-gray-200 mt-3 mb-5 text-center leading-relaxed text-sm md:text-lg">
          "Check out our current seasonal lineup of Bonbons"
        </p>

        {/* List of Flavors */}
        <ul className="space-y-3 pl-5 text-gray-100 font-semibold text-base md:text-lg">
          <li className="flex items-center">
            <span className="mr-3 w-3 h-3 bg-[#FFD700] rounded-full"></span> 🍏 Apple Pie - Sweet and tangy with a dash of cinnamon!
          </li>
          <li className="flex items-center">
            <span className="mr-3 w-3 h-3 bg-[#FFD700] rounded-full"></span> 🎃 Pumpkin Pecan - Creamy pumpkin with a nutty crunch.
          </li>
          <li className="flex items-center">
            <span className="mr-3 w-3 h-3 bg-[#FFD700] rounded-full"></span> 🫐 Blueberry Pie - A burst of berries with every bite!
          </li>
          <li className="flex items-center">
            <span className="mr-3 w-3 h-3 bg-[#FFD700] rounded-full"></span> 🥧 Pecan Pie - Rich and buttery with classic pecan flavor.
          </li>
        </ul>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-[#FFD700] rounded-full opacity-30 blur-2xl -translate-x-6 -translate-y-6"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#FFD700] rounded-full opacity-30 blur-2xl translate-x-6 translate-y-6"></div>
      </div>

      {/* Events Section with Centered Instagram Button */}
      <div className="text-center mt-8">
        <h3 className="text-xl font-semibold text-[#FFD700] md:text-2xl">Upcoming November Events</h3>
        <p className="text-base text-gray-200 mt-2 md:text-lg">
          Catch our November flavors at our next event:
        </p>
        <p className="text-base font-bold text-gray-200 mt-2 md:text-lg">
          November 16th at Anthropologie, Shrewsbury NJ <br />
          Hosted by @parmagiannipizza from 11 AM - 4 PM
        </p>
        <Link href="https://www.instagram.com/aplustruffles" target="_blank">
          <div className="flex justify-center">
            <button className="mt-4 px-4 py-2 md:px-6 md:py-3 bg-[#FFD700] text-black font-semibold rounded-lg shadow-md hover:bg-emerald-400 hover:text-white transition duration-300 flex items-center justify-center space-x-2 cursor-pointer text-sm md:text-base">
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









