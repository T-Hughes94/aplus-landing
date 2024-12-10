"use client";
import Image from "next/legacy/image";
import Link from "next/link";
import { FaGift, FaHeart, FaBaby, FaBirthdayCake } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ServicesPage = () => {
  return (
    <main className="bg-black text-white font-custom">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-emerald-700 p-10 md:p-24 text-center">
        <h1 className="text-4xl font-bold mb-4 md:text-5xl text-[#FFD700]">Special Occasions & Gifting</h1>
        <p className="text-lg mt-2 md:text-2xl text-gray-200">
          Celebrate life’s sweetest moments with A Plus Truffles, handcrafted with care and perfect for any occasion.
        </p>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <hr className="border-[#FFD700] border-t-2" />
        </div>
      </section>

      {/* Photo Highlight Section */}
      <section className="p-6 md:p-16 bg-black text-center">
        <div className="mt-8 flex justify-center">
          <Image
            src="/gallery6.webp" // Replace with the celebratory image
            alt="Celebrations with A Plus Truffles"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto md:text-xl">
          A glimpse of our beautifully crafted truffles, made to delight and elevate every occasion.
        </p>
      </section>

      {/* Services Section */}
      <section className="p-6 md:p-16 bg-black text-center">
        <h2 className="text-3xl font-bold text-[#FFD700] md:text-4xl">Perfect for Every Occasion</h2>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto md:text-xl">
          Our beautifully crafted vegan truffles make a memorable addition to any event. Here are just a few of the
          special occasions where A Plus Truffles can add that perfect touch.
        </p>

        <div className="grid grid-cols-1 gap-8 mt-12 max-w-4xl mx-auto md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: FaHeart, title: "Weddings", text: "Elegant and delicious favors your guests will love." },
            { icon: FaBaby, title: "Baby Showers", text: "Celebrate with treats that are as sweet as the new arrival." },
            { icon: FaGift, title: "Bridal Showers", text: "Add a touch of sweetness to pre-wedding celebrations." },
            { icon: FaBirthdayCake, title: "Birthdays", text: "Make birthdays extra special with a truffle treat." },
          ].map(({ icon: Icon, title, text }, index) => (
            <div
              key={index}
              className="relative pt-10 pb-6 bg-gradient-to-br from-purple-800 via-purple-700 to-purple-900 rounded-full shadow-lg border border-purple-500 transform transition-transform hover:scale-105 hover:shadow-2xl flex flex-col items-center"
              style={{ minHeight: "250px", maxWidth: "250px", margin: "0 auto" }}
            >
              <div
                className="absolute -top-10 bg-emerald-500 rounded-full p-5 shadow-md border-4 border-white"
                style={{ zIndex: 1 }}
              >
                <Icon className="text-5xl text-white" />
              </div>
              <div className="mt-16 text-center">
                <h3 className="text-xl font-bold text-white">{title}</h3>
                <p className="mt-2 text-gray-300 text-base">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gift Box Highlight */}
      <section className="p-6 md:p-16 bg-black to-black text-center">
        <h3 className="text-3xl font-bold text-[#FFD700] md:text-4xl">A Gift That Always Delights</h3>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          Whether it's for a celebration or "just because," a box of A Plus Truffles is the perfect gift for anyone
          with a taste for the finer things.
        </p>
        <div className="mt-8">
          <Link href="/gallery">
            <button className="px-6 py-3 bg-[#FFD700] text-black font-semibold rounded-lg shadow-md hover:bg-white hover:text-[#FFD700] transition duration-300">
              Explore Our Gallery
            </button>
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <section className="p-6 md:p-16 bg-gradient-to-br from-purple-900 via-purple-800 to-emerald-700 text-center">
        <h2 className="text-3xl font-bold text-[#FFD700] md:text-4xl">Planning an Event?</h2>
        <p className="mt-4 text-lg text-gray-300">
          Contact us to discuss how A Plus Truffles can make your event unforgettable.
        </p>
        <div className="mt-8">
          <Link href="/contact">
            <button className="px-6 py-3 bg-[#FFD700] text-black font-semibold rounded-lg shadow-md hover:bg-white hover:text-[#FFD700] transition duration-300">
              Contact Us
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ServicesPage;



