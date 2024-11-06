"use client";
import Image from "next/legacy/image";
import Link from "next/link";
import { FaLeaf, FaHandHoldingHeart, FaPaintBrush, FaSeedling } from "react-icons/fa";
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <main className="bg-white text-gray-800 font-custom">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#f0ac9f] via-[#ffd4a7] to-[#ffe4c2] p-6 md:p-16 text-center text-white">
        <h1 className="text-3xl font-bold mb-4 md:text-5xl">Crafting Sweet Experiences with Care</h1>
        <p className="text-lg mt-2 md:text-2xl">
          From the heart of NJ, creating hand-painted vegan truffles with ethical, fair-trade ingredients.
        </p>

        {/* Team Images (Responsive Grid) */}
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          <Image
            src="/work.png"
            alt="Team crafting truffles"
            width={300}
            height={200}
            className="rounded-lg shadow-lg"
          />
          <Image
            src="/work1.png"
            alt="Team crafting truffles"
            width={300}
            height={200}
            className="rounded-lg shadow-lg"
          />
          <Image
            src="/work2.png"
            alt="Team crafting truffles"
            width={300}
            height={200}
            className="rounded-lg shadow-lg"
          />
          <Image
            src="/work3.png"
            alt="Team crafting truffles"
            width={300}
            height={200}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

        {/* Commitment to Quality Section */}
      <section className="p-6 md:p-16 bg-white text-center">
        <h2 className="text-3xl font-bold text-[#f0ac9f] md:text-4xl">Our Commitment to Quality</h2>
        <div className="grid grid-cols-2 gap-6 mt-8 max-w-4xl mx-auto md:grid-cols-4">
          <div className="flex flex-col items-center space-y-3">
            <FaLeaf className="text-4xl text-[#f0ac9f] md:text-5xl" />
            <h3 className="text-lg font-semibold">100% Vegan</h3>
            <p className="text-gray-600 text-sm md:text-base">Plant-based ingredients in every truffle.</p>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <FaHandHoldingHeart className="text-4xl text-[#f0ac9f] md:text-5xl" />
            <h3 className="text-lg font-semibold">Fair-Trade Sourced</h3>
            <p className="text-gray-600 text-sm md:text-base">Supporting fair, ethical sourcing practices.</p>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <FaPaintBrush className="text-4xl text-[#f0ac9f] md:text-5xl" />
            <h3 className="text-lg font-semibold">Hand-Painted</h3>
            <p className="text-gray-600 text-sm md:text-base">Every truffle is an edible work of art.</p>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <FaSeedling className="text-4xl text-[#f0ac9f] md:text-5xl" />
            <h3 className="text-lg font-semibold">Sustainably Sourced</h3>
            <p className="text-gray-600 text-sm md:text-base">Crafted with respect for the environment.</p>
          </div>
        </div>
      </section>

      {/* Meet the Makers Section */}
      <section className="p-6 md:p-16 bg-[#ffe4c2] text-center">
        <h2 className="text-3xl font-bold text-[#f0ac9f] md:text-4xl">Meet the Makers</h2>
        <p className="mt-4 text-base text-gray-700 leading-relaxed max-w-2xl mx-auto md:text-lg">
          Our team is passionate about creating vegan truffles that bring joy with every bite. Driven by a commitment to quality and ethics, we craft each truffle by hand, ensuring it’s as beautiful as it is delicious.
        </p>
        <div className="mt-8">
          {/* <Image
            src="/team-photo.jpg"
            alt="The makers behind A Plus Truffles"
            width={700}
            height={400}
            className="rounded-lg shadow-lg"
          /> */}
        </div>
      </section>

      {/* Product Highlight Section */}
      <section className="p-6 md:p-16 bg-white text-center">
        <h2 className="text-3xl font-bold text-[#f0ac9f] md:text-4xl">A Unique Take on Candy</h2>
        <p className="mt-4 text-base text-gray-700 leading-relaxed max-w-2xl mx-auto md:text-lg">
          Our truffles aren’t just desserts; they’re an experience. With unique, indulgent flavors and hand-painted details, each piece is crafted to surprise and delight. Taste the difference with A Plus Truffles, where every flavor tells a story.
        </p>
        <div className="mt-8">
          <Image
            src="/truffle3.png"
            alt="Close-up of a hand-painted truffle"
            width={700}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="p-6 md:p-16 bg-[#ffd4a7] text-center">
        <h2 className="text-2xl font-bold text-white md:text-3xl">Ready to Try Our Creations?</h2>
        <p className="text-white mt-4 text-base md:text-lg">
          Contact us to place an order or to learn more about our process.
        </p>
        <Link href="/contact">
          <button className="mt-6 px-4 py-2 bg-white text-[#f0ac9f] font-semibold rounded-lg shadow-md hover:bg-[#f0ac9f] hover:text-white transition duration-300 md:px-6 md:py-3">
            Contact Us
          </button>
        </Link>
      </section>

      <Footer />
    </main>
  );
};

export default AboutPage;

