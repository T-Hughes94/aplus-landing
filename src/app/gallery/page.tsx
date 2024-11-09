// pages/gallery.tsx
"use client";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

const images = Array.from({ length: 13 }, (_, i) => `/gallery${i > 0 ? i : ""}.webp`);

const GalleryPage: React.FC = () => {
  return (
    <main className="bg-white text-gray-800 font-custom">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#f0ac9f] via-[#ffd4a7] to-[#ffe4c2] p-6 md:p-16 text-center text-white">
        <h1 className="text-3xl font-bold mb-4 md:text-5xl">Our Gallery</h1>
        <p className="text-lg mt-2 md:text-2xl">
          A showcase of our hand-painted, vegan truffles and our proudest creations.
        </p>
      </section>

      {/* Flexbox Masonry Gallery Section */}
      <section className="p-6 md:p-16 bg-white">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-4 justify-center">
          {images.map((src, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg shadow-md transform transition-transform hover:scale-105`}
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

      <Footer />
    </main>
  );
};

export default GalleryPage;


