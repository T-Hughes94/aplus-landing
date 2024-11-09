"use client";
import Image from "next/legacy/image";
import Link from "next/link";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaGift, FaHeart, FaBaby, FaBirthdayCake } from "react-icons/fa";

const ServicesPage = () => {
  return (
    <main className="bg-white text-gray-800 font-custom">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#f0ac9f] via-[#ffd4a7] to-[#ffe4c2] p-6 md:p-16 text-center text-white">
        <h1 className="text-3xl font-bold mb-4 md:text-5xl">Special Occasions & Gifting</h1>
        <p className="text-lg mt-2 md:text-2xl">
          Celebrate life’s sweetest moments with A Plus Truffles, handcrafted with care and perfect for any occasion.
        </p>
        <div className="mt-8">
          <Image
            src="/Apluslogo.jpg" // Replace with a celebratory or truffle image
            alt="Celebrations with A Plus Truffles"
            width={700}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="p-6 md:p-16 bg-white text-center">
        <h2 className="text-3xl font-bold text-[#f0ac9f] md:text-4xl">Perfect for Every Occasion</h2>
        <p className="mt-4 text-base text-gray-700 max-w-2xl mx-auto md:text-lg">
          Our beautifully crafted vegan truffles make a memorable addition to any event. Here are just a few of the special occasions where A Plus Truffles can add that perfect touch.
        </p>

        <div className="grid grid-cols-1 gap-8 mt-8 max-w-4xl mx-auto md:grid-cols-2 lg:grid-cols-4">
          {/* Wedding */}
          <div className="flex flex-col items-center justify-center space-y-2 bg-[#f0ac9f] text-white w-44 h-44 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 p-4">
            <FaHeart className="text-4xl md:text-5xl" />
            <h3 className="text-lg font-semibold">Weddings</h3>
            <p className="text-sm text-center">Elegant and delicious favors your guests will love.</p>
          </div>

          {/* Baby Shower */}
          <div className="flex flex-col items-center justify-center space-y-2 bg-[#ffd4a7] text-white w-44 h-44 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 p-4">
            <FaBaby className="text-4xl md:text-5xl" />
            <h3 className="text-lg font-semibold">Baby Showers</h3>
            <p className="text-sm text-center">Celebrate with treats as sweet as the new arrival.</p>
          </div>

          {/* Bridal Shower */}
          <div className="flex flex-col items-center justify-center space-y-2 bg-[#f0ac9f] text-white w-44 h-44 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 p-4">
            <FaGift className="text-4xl md:text-5xl" />
            <h3 className="text-lg font-semibold">Bridal Showers</h3>
            <p className="text-sm text-center">Add a touch of sweetness to pre-wedding celebrations.</p>
          </div>

          {/* Birthday */}
          <div className="flex flex-col items-center justify-center space-y-2 bg-[#ffd4a7] text-white w-44 h-44 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 p-4">
            <FaBirthdayCake className="text-4xl md:text-5xl" />
            <h3 className="text-lg font-semibold">Birthdays</h3>
            <p className="text-sm text-center">Make birthdays extra special with a truffle treat.</p>
          </div>
        </div>

        {/* Gift Box Highlight */}
        <div className="mt-12 max-w-xl mx-auto bg-[#f0ac9f] text-white p-8 rounded-lg shadow-2xl text-center transform transition-transform duration-300 hover:scale-105">
          <h3 className="text-2xl font-semibold">A Gift That Always Delights</h3>
          <p className="mt-4 text-sm md:text-base">
            Whether it's for a celebration or "just because," a box of A Plus Truffles is the perfect gift for anyone with a taste for the finer things.
          </p>
          <Link href="/gallery">
            <button className="mt-6 px-4 py-2 bg-white text-[#f0ac9f] font-semibold rounded-lg shadow-md hover:bg-[#ffd4a7] hover:text-white transition duration-300 md:px-6 md:py-3">
              Explore Our Flavors
            </button>
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <section className="p-6 md:p-16 bg-[#ffd4a7] text-center">
        <h2 className="text-2xl font-bold text-white md:text-3xl">Planning an Event?</h2>
        <p className="text-white mt-4 text-base md:text-lg">
          Contact us to discuss how A Plus Truffles can make your event unforgettable.
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

export default ServicesPage;
