"use client";
import Image from "next/legacy/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaGift, FaHeart, FaBaby, FaBirthdayCake } from "react-icons/fa";

const ServicesPage = () => {
  return (
    <main className="bg-black text-white font-custom">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-emerald-700 p-6 md:p-16 text-center">
        <h1 className="text-4xl font-bold mb-4 md:text-5xl">Special Occasions & Gifting</h1>
        <p className="text-lg mt-2 md:text-2xl">
          Celebrate life’s sweetest moments with A Plus Truffles, handcrafted with care and perfect for any occasion.
        </p>
        <div className="mt-8">
          <Image
            src="/gallery6.webp" // Replace with a celebratory or truffle image
            alt="Celebrations with A Plus Truffles"
            width={700}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="p-6 md:p-16 bg-gradient-to-br from-black via-purple-900 to-purple-800 text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">Perfect for Every Occasion</h2>
        <p className="mt-4 text-base text-gray-300 max-w-2xl mx-auto md:text-lg">
          Our beautifully crafted vegan truffles make a memorable addition to any event. Here are just a few of the
          special occasions where A Plus Truffles can add that perfect touch.
        </p>

        <div className="grid grid-cols-1 gap-8 mt-8 max-w-4xl mx-auto md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: FaHeart, title: "Weddings", text: "Elegant and delicious favors your guests will love." },
            { icon: FaBaby, title: "Baby Showers", text: "Celebrate with treats that are as sweet as the new arrival." },
            { icon: FaGift, title: "Bridal Showers", text: "Add a touch of sweetness to pre-wedding celebrations." },
            { icon: FaBirthdayCake, title: "Birthdays", text: "Make birthdays extra special with a truffle treat." },
          ].map(({ icon: Icon, title, text }, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center space-y-2 bg-gradient-to-br from-emerald-700 via-emerald-500 to-emerald-800 text-white w-44 h-44 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 p-4"
            >
              <Icon className="text-4xl md:text-5xl" />
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-sm text-center">{text}</p>
            </div>
          ))}
        </div>

        {/* Gift Box Highlight */}
        <div className="mt-12 max-w-xl mx-auto bg-gradient-to-br from-purple-900 via-emerald-700 to-black text-white p-8 rounded-lg shadow-2xl text-center transform transition-transform duration-300 hover:scale-105">
          <h3 className="text-2xl font-semibold">A Gift That Always Delights</h3>
          <p className="mt-4 text-sm md:text-base">
            Whether it's for a celebration or "just because," a box of A Plus Truffles is the perfect gift for anyone
            with a taste for the finer things.
          </p>
          <Link href="/gallery">
            <button className="mt-6 px-4 py-2 bg-emerald-400 text-black font-semibold rounded-lg shadow-md hover:bg-white hover:text-emerald-400 transition duration-300 md:px-6 md:py-3">
              Explore Our Gallery
            </button>
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <section className="p-6 md:p-16 bg-gradient-to-br from-purple-900 via-emerald-700 to-black text-center">
        <h2 className="text-2xl font-bold text-white md:text-3xl">Planning an Event?</h2>
        <p className="text-white mt-4 text-base md:text-lg">
          Contact us to discuss how A Plus Truffles can make your event unforgettable.
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

export default ServicesPage;

