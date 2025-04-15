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
        <h2 className="text-3xl font-bold text-white underline decoration-[#ca8f70] md:text-4xl">Pricing</h2>
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
            className={`${bg} p-4 md:p-6 rounded-lg border border-[#FFD700] shadow-lg text-center cursor-pointer transform transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#FFD700]`}
            aria-label={`Order ${title}`}
          >
            {icon}
            <h3 className="text-xl font-semibold text-white md:text-2xl">{title}</h3>
            <p className="text-lg font-bold text-white mt-1 md:mt-2">{price}</p>
          </Link>
        ))}
      </div>

      {/* Delivery and CTA */}
      <div className="text-center mt-8 md:mt-12 relative z-20">
        <p className="text-white text-base md:text-lg">
          Delivery is free within 15 miles of Wayne, NJ, or opt for free pickup!
        </p>
        <Link
          href="/contact"
          className="inline-block mt-4 px-4 py-2 md:px-6 md:py-3 border border-[#FFD700] bg-[#febf79] text-white font-semibold rounded-lg shadow-md hover:bg-[#ca8f70] hover:text-white transition duration-300 text-sm md:text-base"
          aria-label="Contact us to place an order"
        >
          Contact Us to Order
        </Link>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[4px] bg-white"></div>
    </section>
  );
};

export default PricingSection;




















