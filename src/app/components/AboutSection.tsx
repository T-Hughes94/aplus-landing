import Image from "next/image";
import { FaLeaf, FaHandHoldingHeart, FaGlobe, FaSeedling } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section className="relative z-20 bg-black p-6 md:p-16 pb-12 md:pb-20">
      <div className="flex flex-col items-center space-y-8 md:space-y-0 md:flex-row md:justify-between">
        
        {/* Left: Logo Image */}
        <div className="relative transform hover:scale-105 transition-transform duration-300 will-change-transform md:w-1/2">
          <Image
            src="/Apluslogo4.png"
            alt="Our Story - Handcrafted Vegan Truffles"
            width={500}
            height={400}
            className="rounded-lg shadow-lg object-contain"
            loading="lazy"
          />
        </div>

        {/* Right: Text Content */}
        <div className="space-y-4 md:w-1/2 md:space-y-6">
          <h1 className="text-3xl font-bold text-white underline decoration-[#ca8f70] md:text-4xl">
            Our Story
          </h1>
          <p className="text-base leading-relaxed text-white md:text-lg">
            At A Plus Truffles, we are passionate about creating vegan truffles that are both indulgent and ethically made.
            Our products are crafted with love, using premium ingredients that are both fair-trade and sustainably sourced.
            Every truffle is hand-painted and made from scratch, ensuring a luxurious experience with every bite.
          </p>

          {/* Key Values */}
          <div className="grid gap-4 md:grid-cols-2">
            <ValueItem
              icon={<FaLeaf className="text-[#ca8f70] text-2xl md:text-3xl" />}
              title="100% Vegan"
              subtitle="Committed to plant-based ingredients."
            />
            <ValueItem
              icon={<FaHandHoldingHeart className="text-[#febf79] text-2xl md:text-3xl" />}
              title="Fair-Trade"
              subtitle="Supporting ethical sourcing and fair practices."
            />
            <ValueItem
              icon={<FaGlobe className="text-[#febf79] text-2xl md:text-3xl" />}
              title="Sustainably Sourced"
              subtitle="Environmentally responsible ingredients."
            />
            <ValueItem
              icon={<FaSeedling className="text-[#ca8f70] text-2xl md:text-3xl" />}
              title="Handcrafted with Care"
              subtitle="Each truffle is individually painted and crafted."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const ValueItem = ({
  icon,
  title,
  subtitle,
}: {
  icon: JSX.Element;
  title: string;
  subtitle: string;
}) => (
  <div className="flex items-center space-x-4">
    {icon}
    <div>
      <h3 className="text-base font-semibold text-white md:text-lg">{title}</h3>
      <p className="text-sm text-white">{subtitle}</p>
    </div>
  </div>
);

export default AboutSection;
















