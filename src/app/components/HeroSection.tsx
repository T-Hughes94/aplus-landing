"use client";
import Image from "next/legacy/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative bg-[#f0ac9f] p-8 md:p-16">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Left Side: Text Content */}
        <div className="md:w-1/2 text-white space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold underline decoration-[#ffd4a7]">
            Made from scratch, hand-painted vegan truffles
          </h1>
          <p className="text-lg md:text-xl mt-4">
            Discover the art of handcrafted vegan truffles, meticulously made with premium ingredients and painted by hand to perfection. A luxurious and delightful experience that embodies the finest taste and craftsmanship.
          </p>

          {/* View Gallery Button */}
          <Link href="/gallery">
            <div className="inline-block mt-6 px-6 py-3 bg-[#ffd4a7] text-[#f0ac9f] font-semibold rounded-lg shadow-md hover:bg-[#f0ac9f] hover:text-white transition duration-300">
              View Gallery
            </div>
          </Link>
        </div>

        {/* Right Side: Image with Sticker Effect */}
        <div className="md:w-1/2 mt-8 md:mt-0 relative">
          <div className="relative transform md:scale-105 hover:scale-110 transition-transform duration-300">
            <Image
              src="/truffle2.png" // Replace with the path to your truffle image
              alt="Hand-painted vegan truffles"
              width={700}
              height={700}
              className="rounded-lg shadow-lg"
              priority={true}
              style={{
                border: "4px solid white", // Sticker-like border
                borderRadius: "12px",
              }}
            />
          </div>
        </div>
      </div>

      {/* Rounded SVG Wave Transition */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] bg-[#f0ac9f]">
        <svg
          className="relative block w-full h-[180px]" // Slightly taller height for seamless edge
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff" // Transition color to match the About section background
            d="M0,256 C60,288,120,320,180,320C240,320,300,288,360,256C420,224,480,192,540,192C600,192,660,224,720,256C780,288,840,320,900,320C960,320,1020,288,1080,256C1140,224,1200,192,1260,192C1320,192,1380,224,1440,256L1440,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;











