import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

const SeasonalSection = () => {
  return (
    <section className="bg-black p-8 md:p-16 text-white">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-3xl font-bold text-white underline decoration-[#ca8f70] md:text-4xl">Seasonal Flavors & Events</h2>
        <p className="text-base text-gray-200 mt-2 md:text-lg">
          Discover limited-time flavors and catch us at our upcoming pop-up events!
        </p>
      </div>

      {/* Seasonal Flavors Card */}
      <div className="relative max-w-2xl mx-auto mb-12 p-6 bg-gradient-to-br from-[#ca8f70] via-[#ca8f70] to-[#febf79] rounded-xl border-2 border-[#FFD700] shadow-2xl transform transition-transform duration-300 hover:scale-105 hover:shadow-[0px_15px_30px_rgba(0,0,0,0.2)]">
        <h3 className="text-2xl font-extrabold text-white flex items-center justify-center md:text-3xl">
          🎄<span className="ml-2">Current Seasonal Flavors</span>🎄
        </h3>
        <p className="text-gray-200 mt-3 mb-5 text-center leading-relaxed text-sm md:text-lg">
          "Check out our December seasonal lineup of Bonbons"
        </p>
        <ul className="space-y-3 pl-5 text-gray-100 font-semibold text-base md:text-lg">
          <li className="flex items-center">
            <span className="mr-3 w-3 h-3 bg-[#FFD700] rounded-full"></span> 🍪 Biscoff - Spiced caramelized cookie crumble!
          </li>
          <li className="flex items-center">
            <span className="mr-3 w-3 h-3 bg-[#FFD700] rounded-full"></span> 🍒 Black Forest - Rich chocolate with cherry compote.
          </li>
          <li className="flex items-center">
            <span className="mr-3 w-3 h-3 bg-[#FFD700] rounded-full"></span> 🍞 French Toast - Maple and cinnamon indulgence.
          </li>
          <li className="flex items-center">
            <span className="mr-3 w-3 h-3 bg-[#FFD700] rounded-full"></span> 🍫 Peppermint in Milk Chocolate - Cool peppermint with creamy milk chocolate.
          </li>
          <li className="flex items-center">
            <span className="mr-3 w-3 h-3 bg-[#FFD700] rounded-full"></span> ☕ Cinnamon Chai - Warm and spiced chai-infused delight.
          </li>
        </ul>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-[#FFD700] rounded-full opacity-30 blur-2xl -translate-x-6 -translate-y-6"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#FFD700] rounded-full opacity-30 blur-2xl translate-x-6 translate-y-6"></div>
      </div>

      {/* Events Section with Instagram CTA */}
      <div className="text-center mt-8">
        <h3 className="text-xl font-semibold text-white underline decoration-[#ca8f70] md:text-2xl">Upcoming Events</h3>
        <p className="text-base text-gray-200 mt-2 md:text-lg">
          Join us at these exciting events this December:
        </p>
        <ul className="text-base font-bold text-gray-200 mt-4 space-y-4 md:text-lg">
          <li>
            📍 <strong>December 1st</strong> <br />
            American Legion Post 346 <br />
            21 Gully Road, Neptune, NJ <br />
            12 PM - 5 PM
          </li>
          <li>
            📍 <strong>December 14th</strong> <br />
            American Legion Post 346 <br />
            21 Gully Road, Neptune, NJ <br />
            12 PM - 5 PM
          </li>
        </ul>
        <Link href="https://www.instagram.com/aplustruffles" target="_blank">
          <div className="flex justify-center">
            <button className="mt-6 px-4 py-2 md:px-6 md:py-3 bg-[#febf79] border border-[#FFD700] text-white font-semibold rounded-lg shadow-md hover:bg-[#ca8f70] hover:text-white transition duration-300 flex items-center justify-center space-x-2 cursor-pointer text-sm md:text-base">
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













