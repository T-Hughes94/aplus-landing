import Image from "next/legacy/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative bg-black px-4 py-10 md:py-20 md:px-16 text-center md:text-left">
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-20">
        
        {/* Left: Text Content */}
        <div className="text-white space-y-6 md:w-1/2">
          <h1 className="text-3xl font-extrabold underline decoration-[#febf79] leading-snug md:text-5xl">
            Handcrafted in Small Batches
          </h1>
          <p className="text-base text-white/90 md:text-lg">
            Elegantly airbrushed and hand-painted chocolates filled with delectable flavors and textures.
            Our bonbons are made using the freshest and most local ingredients with flavors that pair beautifully
            with our vegan dark, milk, and white chocolate.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:justify-center md:justify-start mt-4">
            <Link href="/gallery">
              <button className="w-full sm:w-auto px-5 py-3 bg-[#ca8f70] text-white font-semibold rounded-lg shadow-md hover:bg-black hover:text-[#febf79] transition duration-300">
                View Gallery
              </button>
            </Link>
            <Link href="/collections">
              <button className="w-full sm:w-auto px-5 py-3 bg-[#febf79] text-white font-semibold rounded-lg shadow-md hover:bg-black hover:text-[#febf79] transition duration-300">
                View Collections
              </button>
            </Link>
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto md:mx-0">
          <div className="transform hover:scale-105 transition-transform duration-300">
            <Image
              src="/truffle2.webp"
              alt="Hand-painted vegan truffles"
              width={500}
              height={500}
              className="rounded-lg shadow-lg w-full h-auto"
              priority
              style={{
                border: "4px solid white",
                borderRadius: "12px",
              }}
            />
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="absolute bottom-0 left-0 w-full h-[4px] bg-white"></div>
    </section>
  );
};

export default HeroSection;























