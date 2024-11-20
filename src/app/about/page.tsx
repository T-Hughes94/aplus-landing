"use client";
import Image from "next/legacy/image";
import Link from "next/link";
import { FaLeaf, FaHandHoldingHeart, FaPaintBrush, FaSeedling } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <main className="bg-white text-white font-custom">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-emerald-700 p-6 md:p-16 text-center">
        <h1 className="text-4xl font-bold mb-4 md:text-5xl">Crafting Sweet Experiences with Care</h1>
        <p className="text-lg mt-2 md:text-2xl">
          From the heart of NJ, creating hand-painted vegan truffles with ethical, fair-trade ingredients.
        </p>

        {/* Team Images */}
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {["/work.webp", "/work1.webp", "/work2.webp", "/work3.webp"].map((src, index) => (
            <Image
              key={index}
              src={src}
              alt="Team crafting truffles"
              width={300}
              height={200}
              className="rounded-lg shadow-lg"
            />
          ))}
        </div>
      </section>

      {/* Commitment to Quality Section */}
      <section className="p-6 md:p-16 bg-gradient-to-br from-purple-900 via-purple-800 to-black text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">Our Commitment to Quality</h2>
        <div className="grid grid-cols-1 gap-8 mt-8 max-w-4xl mx-auto md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: FaLeaf, title: "100% Vegan", text: "Plant-based ingredients in every truffle." },
            { icon: FaHandHoldingHeart, title: "Fair-Trade Sourced", text: "Supporting ethical sourcing practices." },
            { icon: FaPaintBrush, title: "Hand-Painted", text: "Every truffle an edible work of art." },
            { icon: FaSeedling, title: "Sustainably Sourced", text: "Crafted with respect for the environment." },
          ].map(({ icon: Icon, title, text }, index) => (
            <div
              key={index}
              className="relative pt-12 pb-6 bg-gradient-to-br from-emerald-700 via-emerald-500 to-emerald-800 rounded-lg shadow-lg border border-emerald-400 transform transition-transform hover:scale-105 hover:shadow-2xl flex flex-col items-center justify-center"
              style={{ minHeight: "250px" }}
            >
              <div className="absolute top-4 bg-emerald-500 rounded-full p-5 shadow-md border-2 border-white">
                <Icon className="text-3xl md:text-4xl text-white" />
              </div>
              <h3 className="text-lg font-bold mt-8 underline decoration-emerald-400">{title}</h3>
              <p className="text-sm md:text-base text-center mt-2">{text}</p>
            </div>
          ))}
        </div>
      </section>

      
      {/* Product Highlight Section */}
      <section className="p-6 md:p-16 bg-black text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">A Unique Take on Candy</h2>
        <p className="mt-4 text-base leading-relaxed max-w-2xl mx-auto md:text-lg">
          Our truffles aren’t just desserts; they’re an experience. With unique, indulgent flavors and hand-painted
          details, each piece is crafted to surprise and delight. Taste the difference with A Plus Truffles, where
          every flavor tells a story.
        </p>
        <div className="mt-8">
          <Image
            src="/truffle3.webp"
            alt="Close-up of a hand-painted truffle"
            width={700}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="p-6 md:p-16 bg-gradient-to-br from-purple-900 via-emerald-700 to-black text-center">
        <h2 className="text-2xl font-bold text-white md:text-3xl">Ready to Try Our Creations?</h2>
        <p className="text-white mt-4 text-base md:text-lg">
          Contact us to place an order or to learn more about our process.
        </p>
        <Link href="/contact">
          <button className="mt-6 px-4 py-2 bg-emerald-400 text-black font-semibold rounded-lg shadow-md hover:bg-white hover:text-emerald-400 transition duration-300 md:px-6 md:py-3">
            Contact Us
          </button>
        </Link>
      </section>

      <Footer />
    </main>
  );
};

export default AboutPage;



