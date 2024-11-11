"use client";
import Image from "next/legacy/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-500 to-emerald-800 p-6 md:p-16">
      <div className="flex flex-col items-center justify-between md:flex-row">
        {/* Left Side: Text Content */}
        <div className="text-white space-y-4 md:w-1/2">
          <h1 className="text-3xl font-bold underline decoration-[#FFD700] md:text-5xl">
            Handcrafted in small batches
          </h1>
          <p className="text-base mt-4 md:text-xl">
            Elegantly airbrushed and hand-painted chocolates filled with delectable flavors and textures. Our bonbons are made using the freshest and most local ingredients with flavors that pair beautifully with our vegan dark, milk, and white chocolate.
          </p>

          {/* View Gallery Button */}
          <Link href="/gallery">
            <div className="inline-block mt-6 px-4 py-2 bg-white text-purple-900 font-semibold rounded-lg shadow-md hover:bg-[#FFD700] hover:text-white transition duration-300 md:px-6 md:py-3 cursor-pointer">
              View Gallery
            </div>
          </Link>
        </div>

        {/* Right Side: Image with Sticker Effect */}
        <div className="relative mt-8 md:mt-0 md:w-1/2">
          <div className="relative transform hover:scale-105 transition-transform duration-300">
            <Image
              src="/truffle2.webp"
              alt="Hand-painted vegan truffles"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
              priority={true}
              style={{
                border: "4px solid white",
                borderRadius: "12px",
              }}
            />
          </div>
        </div>
      </div>

      {/* SVG Wave Transition */}
      <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-[0] z-10">
        <svg
          className="relative block w-full h-[140px] md:h-[180px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,256 C60,288,120,320,180,320C240,320,300,288,360,256C420,224,480,192,540,192C600,192,660,224,720,256C780,288,840,320,900,320C960,320,1020,288,1080,256C1140,224,1200,192,1260,192C1320,192,1380,224,1440,256L1440,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
















