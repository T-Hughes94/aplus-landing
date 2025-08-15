import Link from "next/link";
import { FaBoxOpen, FaGift, FaShippingFast } from "react-icons/fa";

const PricingSection = () => {
  const cards = [
    {
      icon: <FaBoxOpen className="text-black text-4xl mx-auto mb-3 md:text-5xl" />,
      title: "Box of 4",
      price: "$17",
      bg: "bg-[#ca8f70]",
    },
    {
      icon: <FaGift className="text-black text-4xl mx-auto mb-3 md:text-5xl" />,
      title: "Box of a Dozen",
      price: "$40",
      bg: "bg-[#febf79]",
    },
    {
      icon: <FaShippingFast className="text-black text-4xl mx-auto mb-3 md:text-5xl" />,
      title: "Trash Can Truffles",
      price: "$18",
      bg: "bg-[#ca8f70]",
    },
  ];

  return (
    <section className="relative bg-black p-4 md:p-8 lg:p-16 pt-12 md:pt-20 pb-8 md:pb-12 z-10">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-3xl font-bold text-white underline decoration-[#ca8f70] md:text-4xl">
          Pricing
        </h2>
        <p className="text-base text-white mt-2 md:text-lg">
          Choose your favorite truffles and have them delivered within 15 miles of Wayne, NJ – or opt for free pickup!
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto md:grid-cols-3 md:gap-8">
        {cards.map(({ icon, title, price, bg }, idx) => (
          <Link
            key={idx}
            href="/contact"
            aria-label={`Contact to order: ${title}`}
            className={`${bg} p-5 md:p-6 rounded-2xl border border-[#FFD700] shadow-lg text-center cursor-pointer transform hover:scale-[1.03] transition-transform duration-300 will-change-transform focus:outline-none focus:ring-2 focus:ring-[#FFD700]`}
          >
            {icon}
            <h3 className="text-xl font-semibold text-white md:text-2xl">{title}</h3>
            <p className="text-lg font-bold text-white mt-1 md:mt-2">{price}</p>
          </Link>
        ))}
      </div>

      {/* Delivery Note + CTA Buttons */}
      <div className="mt-10 md:mt-14 max-w-4xl mx-auto">
        <p className="text-center text-white text-base md:text-lg">
          Delivery is free within 15 miles of Wayne, NJ, or opt for free pickup!
        </p>

        {/* Buttons: roomy, balanced, not squished */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center">
          {/* Contact */}
          <Link
            href="/contact"
            aria-label="Contact us"
            className="inline-flex items-center justify-center w-full sm:w-56 md:w-60 px-6 py-3 rounded-xl border border-[#FFD700] bg-[#febf79] text-black font-semibold shadow-lg hover:-translate-y-0.5 hover:bg-[#ca8f70] hover:text-white transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD700]"
          >
            Contact
          </Link>

          {/* Shop */}
          <Link
            href="/shop"
            aria-label="Go to shop"
            className="inline-flex items-center justify-center w-full sm:w-56 md:w-60 px-6 py-3 rounded-xl border border-[#FFD700] bg-[#ca8f70] text-white font-semibold shadow-lg hover:-translate-y-0.5 hover:bg-[#febf79] hover:text-black transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD700]"
          >
            Shop
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[4px] bg-white" />
    </section>
  );
};

export default PricingSection;























