// src/app/components/HeroSection.tsx
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative bg-black px-4 py-10 md:py-20 md:px-16 text-center md:text-left overflow-hidden">
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-20">
        {/* Text Section */}
        <div className="text-white space-y-6 md:w-1/2">
          <h1 className="text-3xl font-extrabold underline decoration-[#febf79] leading-snug md:text-5xl">
            Handcrafted in Small Batches
          </h1>
          <p className="text-base text-white/90 md:text-lg">
            Elegantly airbrushed and hand-painted chocolates filled with delectable flavors and textures. 
            Our bonbons are made using the freshest and most local ingredients with flavors that pair beautifully 
            with our vegan dark, milk, and white chocolate.
          </p>

          {/* Buttons (Link-as-button) */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:justify-center md:justify-start mt-4">
            <Link
              href="/shop"
              aria-label="Shop A Plus Truffles online"
              className="w-full sm:w-auto px-5 py-3 bg-[#febf79] text-white font-semibold rounded-lg shadow-md hover:bg-black hover:text-[#febf79] transition duration-300 text-center"
            >
              Shop Now
            </Link>
            
            <Link
              href="/gallery"
              aria-label="View our gallery of hand-painted truffles"
              className="w-full sm:w-auto px-5 py-3 bg-[#ca8f70] text-white font-semibold rounded-lg shadow-md hover:bg-black hover:text-[#febf79] transition duration-300 text-center"
            >
              View Gallery
            </Link>
            <Link
              href="/collections"
              aria-label="Explore our truffle collections"
              className="w-full sm:w-auto px-5 py-3 bg-[#febf79] text-white font-semibold rounded-lg shadow-md hover:bg-black hover:text-[#febf79] transition duration-300 text-center"
            >
              View Collections
            </Link>
            <Link
              href="/contact"
              aria-label="Contact A Plus Truffles"
              className="w-full sm:w-auto px-5 py-3 bg-[#ca8f70] text-white font-semibold rounded-lg shadow-md hover:bg-black hover:text-[#febf79] transition duration-300 text-center"
            >
              Contact Us
            </Link>
          
          </div>
        </div>
        
        {/* Image Section */}
        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto md:mx-0">
          <div className="transform hover:scale-105 transition-transform duration-300 will-change-transform">
            <Image
              src="/truffle2.webp"
              alt="Hand-painted vegan truffles"
              width={300}
              height={300}
              priority
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[4px] bg-white" />
    </section>
  );
};

export default HeroSection;


























