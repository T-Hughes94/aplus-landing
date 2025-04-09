import Link from "next/link";
import Image from "next/image";
import { FaLeaf, FaHandHoldingHeart, FaPaintBrush, FaSeedling } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "About Us - A Plus Truffles",
  description: "Learn more about A Plus Truffles, our commitment to quality, and how we craft hand-painted vegan truffles using ethical and fair-trade ingredients.",
  openGraph: {
    title: "About Us - A Plus Truffles",
    description: "Explore our unique approach to vegan truffles, ethical sourcing, and hand-painted designs.",
    url: "https://yourwebsite.com/about",
    images: [
      {
        url: "/truffle2.webp",
        width: 1200,
        height: 630,
        alt: "Handcrafted vegan truffles",
      },
    ],
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const AboutPage = () => {
  return (
    <main className="bg-black text-white font-custom" role="main">
      <Header />

      {/* Hero Section */}
      <section
          className="relative isolate overflow-hidden p-10 md:p-24 text-center bg-black"
          aria-labelledby="services-hero-heading"
        >
          <div className="relative z-10 flex flex-col items-center justify-center space-y-6 max-w-4xl mx-auto">
            <h1
              id="services-hero-heading"
              className="text-4xl md:text-5xl font-extrabold text-white tracking-tight"
            >
              Special Occasions & Gifting
            </h1>
            <p className="text-lg md:text-2xl text-white/90 max-w-2xl">
              Celebrate life’s sweetest moments with A Plus Truffles — handcrafted with care and perfect for any occasion.
            </p>
            <hr className="border-[#FFD700] border-t-2 w-20 mx-auto mt-4" />
          </div>
        </section>


      {/* Commitment to Quality Section */}
      <section
        className="p-6 md:p-16 bg-black text-center"
        aria-labelledby="quality-heading"
      >
        <h2
          id="quality-heading"
          className="text-3xl text-white font-bold underline decoration-[#ca8f70] md:text-4xl"
        >
          Our Commitment to Quality
        </h2>
        <div className="grid grid-cols-1 gap-16 mt-20 max-w-4xl mx-auto md:grid-cols-2">
          {[
            { icon: FaLeaf, title: "100% Vegan", text: "Plant-based ingredients in every truffle.", color: "#febf79" },
            { icon: FaHandHoldingHeart, title: "Fair-Trade Sourced", text: "Supporting ethical sourcing practices.", color: "#febf79" },
            { icon: FaPaintBrush, title: "Hand-Painted", text: "Every truffle an edible work of art.", color: "#febf79" },
            { icon: FaSeedling, title: "Sustainably Sourced", text: "Crafted with respect for the environment.", color: "#febf79" },
          ].map(({ icon: Icon, title, text, color }, index) => (
            <div
              key={index}
              className="relative pt-16 pb-12 bg-[#ca8f70] rounded-lg shadow-lg border border-[#FFD700] transform transition-transform hover:scale-105 hover:shadow-2xl flex flex-col items-center"
              style={{ minHeight: "250px" }}
            >
              <div
                className="absolute -top-12 bg-black rounded-full p-5 shadow-md border-4"
                style={{ borderColor: color, zIndex: 1 }}
                aria-hidden="true"
              >
                <Icon className="text-5xl md:text-6xl" style={{ color: color }} />
              </div>
              <div className="mt-16 text-center">
                <h3 className="text-2xl font-bold text-white">{title}</h3>
                <p className="text-lg md:text-xl mt-3 text-black">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Product Highlight Section */}
      <section
        className="p-12 md:p-16 bg-black text-center"
        aria-labelledby="highlight-heading"
      >
        <h2
          id="highlight-heading"
          className="text-3xl font-bold underline decoration-[#ca8f70] text-white md:text-4xl"
        >
          A Unique Take on Candy
        </h2>
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
      <section
        className="p-6 md:p-16 relative bg-gradient-to-br from-[#ca8f70] via-[#ca8f70] to-[#febf79] text-center"
        aria-labelledby="cta-heading"
      >
        <h2 id="cta-heading" className="text-2xl font-bold text-white md:text-3xl">
          Ready to Try Our Creations?
        </h2>
        <p className="text-white mt-4 text-lg md:text-xl">
          Contact us to place an order or to learn more about our process.
        </p>
        <Link href="/contact">
          <button
            className="mt-6 px-6 py-3 bg-white text-black font-semibold border border-[#FFD700] rounded-lg shadow-md hover:bg-[#ca8f70] hover:text-white transition duration-300"
            aria-label="Contact us to place an order or learn more about A Plus Truffles"
          >
            Contact Us
          </button>
        </Link>
      </section>

      <Footer />
    </main>
  );
};

export default AboutPage;












