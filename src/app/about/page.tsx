"use client";
import Link from "next/link";
import Image from "next/image";
import { FaLeaf, FaHandHoldingHeart, FaPaintBrush, FaSeedling } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <main className="bg-black text-white font-custom">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-emerald-700 p-10 md:p-24 text-center">
        <h1 className="text-4xl font-bold mb-4 md:text-5xl text-[#FFD700]">Crafting Sweet Experiences with Care</h1>
        <p className="text-lg mt-2 md:text-2xl text-gray-200">
          From the heart of NJ, creating hand-painted vegan truffles with ethical, fair-trade ingredients.
        </p>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <hr className="border-[#FFD700] border-t-2" />
        </div>
      </section>

      {/* Commitment to Quality Section */}
      <section className="p-6 md:p-16 bg-black text-center">
        <h2 className="text-3xl font-bold text-gradient-to-br from-purple-900 via-purple-800 to-emerald-700 md:text-4xl">Our Commitment to Quality</h2>
        <div className="grid grid-cols-1 gap-8 mt-20 max-w-4xl mx-auto md:grid-cols-2">
          {[
            { icon: FaLeaf, title: "100% Vegan", text: "Plant-based ingredients in every truffle." },
            { icon: FaHandHoldingHeart, title: "Fair-Trade Sourced", text: "Supporting ethical sourcing practices." },
            { icon: FaPaintBrush, title: "Hand-Painted", text: "Every truffle an edible work of art." },
            { icon: FaSeedling, title: "Sustainably Sourced", text: "Crafted with respect for the environment." },
          ].map(({ icon: Icon, title, text }, index) => (
            <div
              key={index}
              className="relative pt-12 pb-12 bg-gradient-to-br from-purple-800 via-purple-700 to-purple-900 rounded-lg shadow-lg border border-[#FFD700] transform transition-transform hover:scale-105 hover:shadow-2xl flex flex-col items-center"
              style={{ minHeight: "200px" }}
            >
              <div
                className="absolute -top-6 bg-emerald-600 rounded-full p-5 shadow-md border-4 border-white"
                style={{ zIndex: 1 }}
              >
                <Icon className="text-5xl md:text-6xl text-white" />
              </div>
              <div className="mt-16">
                <h3 className="text-2xl font-bold text-white">{title}</h3>
                <p className="text-lg md:text-xl text-center mt-3 text-gray-300">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Product Highlight Section */}
      <section className="p-12 md:p-16 bg-black text-center">
        <h2 className="text-3xl font-bold text-[#FFD700] md:text-4xl">A Unique Take on Candy</h2>
        <p className="mt-4 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-white">
          Our truffles aren’t just desserts; they’re an experience. With unique, indulgent flavors and hand-painted
          details, each piece is crafted to surprise and delight. Taste the difference with A Plus Truffles, where
          every flavor tells a story.
        </p>
        <div className="mt-12 flex justify-center">
          <Image
            src="/truffle3.webp"
            alt="Close-up of a hand-painted truffle"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="p-6 md:p-16 relative bg-gradient-to-br from-emerald-700 via-purple-900 to-purple-700 text-center">
        <h2 className="text-2xl font-bold text-white md:text-3xl">Ready to Try Our Creations?</h2>
        <p className="text-white mt-4 text-lg md:text-xl">
          Contact us to place an order or to learn more about our process.
        </p>
        <Link href="/contact">
          <button className="mt-6 px-6 py-3 bg-[#FFD700] text-black font-semibold rounded-lg shadow-md hover:bg-white hover:text-[#FFD700] transition duration-300">
            Contact Us
          </button>
        </Link>
      </section>

      <Footer />
    </main>
  );
};

export default AboutPage;









