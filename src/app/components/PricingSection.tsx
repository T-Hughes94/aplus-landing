import Link from "next/link";
import { FaBoxOpen, FaGift, FaShippingFast } from "react-icons/fa";

const PricingSection = () => {
  return (
    <section className="relative bg-black p-4 md:p-8 lg:p-16 pt-12 md:pt-20 pb-8 md:pb-12 z-10">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-3xl font-bold text-white underline decoration-[#ca8f70] md:text-4xl">Pricing</h2>
        <p className="text-base text-white mt-2 md:text-lg">
          Choose your favorite truffles and have them delivered within 15 miles of Piscataway, NJ – or opt for free pickup!
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto md:grid-cols-3 md:gap-8">
        <div className="bg-[#ca8f70] p-4 rounded-lg border border-[#FFD700] shadow-lg text-center md:p-6">
          <FaBoxOpen className="text-black text-4xl mx-auto mb-3 md:text-5xl" />
          <h3 className="text-xl font-semibold text-white md:text-2xl">Box of 4</h3>
          <p className="text-lg font-bold text-white mt-1 md:mt-2">$15</p>
        </div>

        <div className="bg-[#febf79] p-4 rounded-lg border border-[#FFD700] shadow-lg text-center md:p-6">
          <FaGift className="text-black text-4xl mx-auto mb-3 md:text-5xl" />
          <h3 className="text-xl font-semibold text-white md:text-2xl">Box of a Dozen</h3>
          <p className="text-lg font-bold text-white mt-1 md:mt-2">$38</p>
        </div>

        <div className="bg-[#ca8f70] p-4 rounded-lg border border-[#FFD700] shadow-lg text-center md:p-6">
          <FaShippingFast className="text-black text-4xl mx-auto mb-3 md:text-5xl" />
          <h3 className="text-xl font-semibold text-white md:text-2xl">Trash Can Truffles</h3>
          <p className="text-lg font-bold text-white mt-1 md:mt-2">$18</p>
        </div>
      </div>

      {/* Delivery and CTA */}
      <div className="text-center mt-8 md:mt-12 relative z-20">
        <p className="text-white text-base md:text-lg">
          Delivery is free within 15 miles of Wayne, NJ, or opt for free pickup!
        </p>
        <Link href="/contact" legacyBehavior>
          <a className="inline-block mt-4 px-4 py-2 md:px-6 md:py-3 border border-[#FFD700] bg-[#febf79] text-white font-semibold rounded-lg shadow-md hover:bg-[#ca8f70] hover:border-[#FFD700] hover:text-white transition duration-300 cursor-pointer text-sm md:text-base">
            Contact Us to Order
          </a>
        </Link>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[4px] bg-[#FFD700]"></div>
    </section>
  );
};

export default PricingSection;


















