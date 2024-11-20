"use client";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

const images = Array.from({ length: 13 }, (_, i) => `/gallery${i > 0 ? i : ""}.webp`);

const GalleryPage: React.FC = () => {
  return (
    <main className="bg-black text-white font-custom">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-emerald-700 p-6 md:p-16 text-center">
        <h1 className="text-4xl font-bold mb-4 md:text-5xl">Our Gallery</h1>
        <p className="text-lg mt-2 md:text-2xl">
          A showcase of our hand-painted, vegan truffles and our proudest creations.
        </p>
      </section>

      {/* Masonry Gallery Section */}
      <section className="p-6 md:p-16 bg-gradient-to-br from-black via-purple-900 to-emerald-700">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-4 justify-center">
          {images.map((src, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg shadow-lg transform transition-transform hover:scale-105`}
              style={{
                width: `${index % 5 === 0 ? "45%" : "30%"}`, // Adjusts the width for variety
                aspectRatio: `${index % 3 === 0 ? "3 / 4" : "4 / 3"}`, // Controls aspect ratio
              }}
            >
              <Image
                src={src}
                alt={`A Plus Truffles gallery image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="p-6 md:p-16 bg-gradient-to-br from-emerald-700 via-purple-900 to-black text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">Experience the Difference</h2>
        <p className="mt-4 text-base text-gray-300 md:text-lg">
          Want to see more? Explore our gallery and place your order today to indulge in the artistry of A Plus Truffles.
        </p>
        <button className="mt-6 px-4 py-2 bg-emerald-400 text-black font-semibold rounded-lg shadow-md hover:bg-white hover:text-emerald-400 transition duration-300 md:px-6 md:py-3">
          Contact Us to Order
        </button>
      </section>

      <Footer />
    </main>
  );
};

export default GalleryPage;



