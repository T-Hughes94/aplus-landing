import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

const SeasonalSection = () => {
  return (
    <section className="bg-black p-8 md:p-16 text-white">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold underline decoration-[#ca8f70] md:text-4xl">
          Seasonal Flavors & Events
        </h2>
        <p className="text-gray-200 mt-2 md:text-lg">
          Discover limited-time flavors and catch us at our upcoming pop-up events!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column: Seasonal Flavors */}
        <div className="relative p-6 bg-gradient-to-br from-[#ca8f70] to-[#febf79] rounded-xl border-2 border-[#FFD700] shadow-2xl hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl md:text-3xl font-extrabold text-white flex items-center justify-center mb-4">
            🎄 <span className="ml-2">Seasonal Flavors</span> 🎄
          </h3>
          <ul className="space-y-3 pl-5 text-gray-100 font-semibold text-base md:text-lg">
            <li className="flex items-center">
              <span className="mr-3 w-3 h-3 bg-[#FFD700] rounded-full" /> 🍪 Biscoff  — Spiced caramelized cookie crumble!
            </li>
            <li className="flex items-center">
              <span className="mr-3 w-3 h-3 bg-[#FFD700] rounded-full" /> 🍒 Black Forest  — Rich chocolate with cherry compote.
            </li>
            <li className="flex items-center">
              <span className="mr-3 w-3 h-3 bg-[#FFD700] rounded-full" /> 🍞 French Toast  — Maple and cinnamon indulgence.
            </li>
            <li className="flex items-center">
              <span className="mr-3 w-3 h-3 bg-[#FFD700] rounded-full" /> 🍫 Peppermint in Milk Chocolate  — Cool peppermint with creamy milk chocolate.
            </li>
            <li className="flex items-center">
              <span className="mr-3 w-3 h-3 bg-[#FFD700] rounded-full" /> ☕ Cinnamon Chai  — Warm and spiced chai-infused delight.
            </li>
          </ul>
          <div className="absolute top-0 right-0 w-16 h-16 bg-[#FFD700] rounded-full opacity-30 blur-2xl -translate-x-4 -translate-y-4" />
          <div className="absolute bottom-0 left-0 w-20 h-20 bg-[#FFD700] rounded-full opacity-30 blur-2xl translate-x-4 translate-y-4" />
        </div>

        {/* Center Column: Upcoming Events */}
        <div className="p-6 bg-[#111] rounded-xl border border-[#333] shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold underline decoration-[#ca8f70] mb-4">
            Upcoming Events
          </h3>
          <p className="text-gray-200 mb-4 md:text-lg">
            Join us at these pop-up events this December:
          </p>
          <ul className="space-y-6 text-base md:text-lg">
            <li className="space-y-1">
              <p>
                <strong>📍 December 1st</strong>
              </p>
              <p>American Legion Post 346</p>
              <p>21 Gully Road, Neptune, NJ</p>
              <p>12 PM – 5 PM</p>
            </li>
            <li className="space-y-1">
              <p>
                <strong>📍 December 14th</strong>
              </p>
              <p>American Legion Post 346</p>
              <p>21 Gully Road, Neptune, NJ</p>
              <p>12 PM – 5 PM</p>
            </li>
          </ul>
        </div>

        {/* Right Column: Instagram Portal */}
        <div className="flex flex-col items-center justify-center p-6 bg-[#111] rounded-xl border border-[#333] shadow-lg hover:scale-105 transition-transform duration-300">
          <div className="p-6 bg-black rounded-full border-4 border-[#FFD700] shadow-xl mb-4">
            <FaInstagram className="text-6xl text-[#ca8f70]" />
          </div>
          <h3 className="text-xl md:text-2xl font-semibold mb-2">Follow Us on Instagram</h3>
          <p className="text-gray-200 text-center mb-4">
            For behind-the-scenes, flavor drops, and more sweet inspiration!
          </p>
          <Link href="https://www.instagram.com/aplustruffles" target="_blank" passHref>
            <button className="px-6 py-3 bg-[#febf79] border border-[#FFD700] text-black font-semibold rounded-lg shadow-md hover:bg-[#ca8f70] hover:text-white transition duration-300">
              Visit Our Feed
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SeasonalSection;














