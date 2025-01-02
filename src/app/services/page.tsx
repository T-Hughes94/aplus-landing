import Image from "next/legacy/image";
import Link from "next/link";
import { FaGift, FaHeart, FaBaby, FaBirthdayCake } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Metadata for the Services Page
export const metadata = {
  title: "Services - A Plus Truffles",
  description:
    "Discover how A Plus Truffles can add sweetness to your special occasions. Perfect for weddings, birthdays, baby showers, and more.",
  openGraph: {
    title: "Services - A Plus Truffles",
    description:
      "Handcrafted vegan truffles to celebrate life's sweetest moments, from weddings to birthdays.",
    url: "https://yourwebsite.com/services", // Replace with your actual URL
    images: [
      {
        url: "/gallery6.webp",
        width: 1200,
        height: 630,
        alt: "Celebrations with A Plus Truffles",
      },
    ],
    type: "website",
  },
  icons: {
    icon: "/favicon.ico", // Ensure this path matches your favicon
  },
};

const ServicesPage = () => {
  return (
    <main className="bg-black text-white font-custom" role="main">
      <Header />

      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-br from-[#febf79] via-[#febf79] to-[#ca8f70] p-10 md:p-24 text-center"
        aria-labelledby="services-hero-heading"
      >
        <h1 id="services-hero-heading" className="text-4xl font-bold mb-4 md:text-5xl text-black">
          Special Occasions & Gifting
        </h1>
        <p className="text-lg mt-2 md:text-2xl text-white">
          Celebrate life’s sweetest moments with A Plus Truffles, handcrafted with care and perfect for any occasion.
        </p>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <hr className="border-[#FFD700] border-t-2" />
        </div>
      </section>

      {/* Photo Highlight Section */}
      <section className="p-6 md:p-16 bg-black text-center" aria-labelledby="photo-highlight-heading">
        <h2 id="photo-highlight-heading" className="sr-only">
          Celebrations with A Plus Truffles
        </h2>
        <div className="mt-8 flex justify-center">
          <Image
            src="/gallery6.webp"
            alt="Celebrations with A Plus Truffles"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
            priority
          />
        </div>
        <p className="mt-4 text-lg text-white max-w-2xl mx-auto md:text-xl">
          A glimpse of our beautifully crafted truffles, made to delight and elevate every occasion.
        </p>
      </section>

      {/* Services Section */}
      <section className="p-6 md:p-16 bg-black text-center" aria-labelledby="services-heading">
        <h2 id="services-heading" className="text-3xl font-bold text-white underline decoration-[#ca8f70] md:text-4xl">
          Perfect for Every Occasion
        </h2>
        <p className="mt-4 text-lg text-white max-w-2xl mx-auto md:text-xl">
          Our beautifully crafted vegan truffles make a memorable addition to any event. Here are just a few of the
          special occasions where A Plus Truffles can add that perfect touch.
        </p>

        <div className="grid grid-cols-1 gap-8 mt-12 max-w-4xl mx-auto md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: FaHeart, title: "Weddings", text: "Elegant and delicious favors your guests will love.", color: "#ca8f70" },
            { icon: FaBaby, title: "Baby Showers", text: "Celebrate with treats that are as sweet as the new arrival.", color: "#febf79" },
            { icon: FaGift, title: "Bridal Showers", text: "Add a touch of sweetness to pre-wedding celebrations.", color: "#ca8f70" },
            { icon: FaBirthdayCake, title: "Birthdays", text: "Make birthdays extra special with a truffle treat.", color: "#febf79" },
          ].map(({ icon: Icon, title, text, color }, index) => (
            <div
              key={index}
              className="relative pt-14 pb-8 bg-black text-white rounded-lg shadow-lg border transform transition-transform hover:scale-105 hover:shadow-2xl flex flex-col items-center"
              style={{ borderColor: color, borderWidth: "2px" }}
              aria-labelledby={`service-title-${index}`}
            >
              <div
                className="absolute -top-10 bg-black rounded-full p-5 shadow-md border-2"
                style={{ borderColor: color }}
                aria-hidden="true"
              >
                <Icon className="text-5xl" style={{ color: color }} />
              </div>
              <div className="mt-16 text-center">
                <h3 id={`service-title-${index}`} className="text-xl font-bold" style={{ color: color }}>
                  {title}
                </h3>
                <p className="mt-2 text-gray-300">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gift Box Highlight */}
      <section
        className="p-6 md:p-16 bg-black to-black text-center"
        aria-labelledby="gift-highlight-heading"
      >
        <h3 id="gift-highlight-heading" className="text-3xl font-bold text-white underline decoration-[#ca8f70] md:text-4xl">
          A Gift That Always Delights
        </h3>
        <p className="mt-4 text-lg text-white max-w-2xl mx-auto">
          It&apos;s a simple process to &quot;choose&quot; the best options for your needs.
        </p>
        <div className="mt-8">
          <Link href="/gallery">
            <button
              className="px-6 py-3 bg-[#ca8f70] text-white font-semibold rounded-lg shadow-md hover:bg-[#febf79] hover:text-black border border-[#FFD700] transition duration-300"
              aria-label="Explore our gallery"
            >
              Explore Our Gallery
            </button>
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <section
        className="p-6 md:p-16 bg-gradient-to-br from-[#ca8f70] via-[#ca8f70] to-[#febf79] text-center"
        aria-labelledby="cta-heading"
      >
        <h2 id="cta-heading" className="text-3xl font-bold text-white md:text-4xl">
          Planning an Event?
        </h2>
        <p className="mt-4 text-lg text-white">
          Contact us to discuss how A Plus Truffles can make your event unforgettable.
        </p>
        <div className="mt-8">
          <Link href="/contact">
            <button
              className="px-6 py-3 bg-white text-black font-semibold rounded-lg border border-[#FFD700] shadow-md hover:bg-[#ca8f70] hover:text-white transition duration-300"
              aria-label="Contact us to plan your event"
            >
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




