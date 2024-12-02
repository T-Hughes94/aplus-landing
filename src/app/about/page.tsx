"use client";
import Link from "next/link";
import Image from "next/image";
import { FaLeaf, FaHandHoldingHeart, FaPaintBrush, FaSeedling } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <main className="bg-white text-white font-custom">
      <Header />

      {/* Hero Section with Seamless Transition */}
      <section className="relative bg-gradient-to-br from-purple-900 to-emerald-700 p-10 md:p-24 text-center">
        <h1 className="text-4xl font-bold mb-4 md:text-5xl text-white">Crafting Sweet Experiences with Care</h1>
        <p className="text-lg mt-2 md:text-2xl text-gray-200">
          From the heart of NJ, creating hand-painted vegan truffles with ethical, fair-trade ingredients.
        </p>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            className="relative block w-full h-[100px] md:h-[150px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#000000"
              d="M0,224L48,240C96,256,192,288,288,293.3C384,299,480,277,576,240C672,203,768,149,864,128C960,107,1056,117,1152,149.3C1248,181,1344,235,1392,261.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Commitment to Quality Section */}
      <section className="p-6 md:p-16 bg-black text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">Our Commitment to Quality</h2>
        <div className="grid grid-cols-1 gap-8 mt-8 max-w-4xl mx-auto md:grid-cols-2">
          {[
            { icon: FaLeaf, title: "100% Vegan", text: "Plant-based ingredients in every truffle.", color: "emerald" },
            { icon: FaHandHoldingHeart, title: "Fair-Trade Sourced", text: "Supporting ethical sourcing practices.", color: "purple" },
            { icon: FaPaintBrush, title: "Hand-Painted", text: "Every truffle an edible work of art.", color: "emerald" },
            { icon: FaSeedling, title: "Sustainably Sourced", text: "Crafted with respect for the environment.", color: "purple" },
          ].map(({ icon: Icon, title, text, color }, index) => (
            <div
              key={index}
              className="relative pt-12 pb-6 bg-gradient-to-br from-purple-800 via-purple-700 to-purple-900 rounded-lg shadow-lg border border-purple-400 transform transition-transform hover:scale-105 hover:shadow-2xl flex flex-col items-center"
              style={{ minHeight: "250px" }}
            >
              <div
                className="absolute -top-8 bg-emerald-500 rounded-full p-5 shadow-md border-4 border-white"
                style={{ zIndex: 1 }}
              >
                <Icon className="text-4xl md:text-5xl text-white" />
              </div>
              <div className="mt-12">
                <h3 className="text-lg font-bold text-white underline decoration-purple-400">{title}</h3>
                <p className="text-sm md:text-base text-center mt-2 text-gray-200">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Product Highlight Section */}
      <section className="p-6 md:p-16 bg-black text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">A Unique Take on Candy</h2>
        <p className="mt-4 text-base leading-relaxed max-w-2xl mx-auto md:text-lg text-gray-300">
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
      <section className="p-6 md:p-16 relative bg-gradient-to-br from-purple-900 to-emerald-700 to-black text-center">
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







