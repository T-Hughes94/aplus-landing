"use client";
import Image from "next/legacy/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative bg-black p-6 md:p-16 text-center md:text-left">
      <div className="relative z-10 flex flex-col items-center justify-between md:flex-row">
        {/* Left Side: Text Content */}
        <div className="text-white space-y-4 md:w-1/2">
          <h1 className="text-3xl font-bold underline decoration-[#febf79] md:text-5xl">
            Handcrafted in Small Batches
          </h1>
          <p className="text-base mt-4 md:text-xl">
            Elegantly airbrushed and hand-painted chocolates filled with delectable flavors and textures. Our bonbons
            are made using the freshest and most local ingredients with flavors that pair beautifully with our vegan
            dark, milk, and white chocolate.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-6">
            <Link href="/gallery">
              <button className="px-4 py-2 bg-[#ca8f70] text-white font-semibold rounded-lg shadow-md hover:bg-black hover:text-[#febf79] transition duration-300 md:px-6 md:py-3">
                View Gallery
              </button>
            </Link>
            <Link href="/collections">
              <button className="px-4 py-2 bg-[#febf79] text-white font-semibold rounded-lg shadow-md hover:bg-black hover:text-[#febf79] transition duration-300 md:px-6 md:py-3">
                View Collections
              </button>
            </Link>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="relative mt-8 md:mt-0 md:w-1/2 flex justify-center">
          <div className="relative transform hover:scale-105 transition-transform duration-300">
            <Image
              src="/truffle2.webp"
              alt="Hand-painted vegan truffles"
              width={500}
              height={500}
              className="rounded-lg shadow-lg w-40 h-40 sm:w-60 sm:h-60 md:w-[500px] md:h-[500px]" // Smaller size for mobile
              priority={true}
              style={{
                border: "4px solid white",
                borderRadius: "12px",
              }}
            />
          </div>
        </div>
      </div>

      {/* Thin Gold Line Transition */}
      <div className="absolute bottom-0 left-0 w-full h-[4px] bg-[#FFD700]"></div>
    </section>
  );
};

export default HeroSection;






















