import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Shipping Info - A Plus Truffles",
  description: "Learn more about our shipping process, order deadlines, and delivery methods for A Plus Truffles.",
  openGraph: {
    title: "Shipping Info - A Plus Truffles",
    description: "All the details you need on how A Plus Truffles ships its handmade vegan confections.",
    url: "https://yourwebsite.com/shipping",
    images: [
      {
        url: "/truffle-shipping.webp",
        width: 1200,
        height: 630,
        alt: "A Plus Truffles Shipping Info",
      },
    ],
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const ShippingPage = () => {
  return (
    <main className="bg-black text-white font-custom" role="main">
      <Header />

      {/* Hero Section */}
      <section className="relative isolate overflow-hidden p-10 md:p-24 text-center bg-black">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-radial from-[#febf79] via-[#f8b870] to-[#ca8f70] opacity-80 animate-pulse-slow"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:40px_40px]"
        />

        <div className="relative z-10 flex flex-col items-center justify-center space-y-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
            Shipping & Fulfillment Details
          </h1>
          <p className="text-lg md:text-2xl text-white/90 max-w-2xl">
            How we ensure your handcrafted truffles arrive fresh, beautiful, and on time.
          </p>
          <hr className="border-[#FFD700] border-t-2 w-20 mx-auto mt-4" />
        </div>
      </section>

      {/* Shipping Details Section */}
      <section className="p-6 md:p-16 bg-black text-center">
        <h2 className="text-3xl text-white font-bold underline decoration-[#ca8f70] md:text-4xl">
          Important Shipping Info
        </h2>
        <div className="mt-12 max-w-3xl mx-auto text-white/90 text-lg md:text-xl space-y-10">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-2">Order Deadline</h3>
            <p>
              Orders must be placed by <strong>Sunday</strong> to ship or be picked up on <strong>Wednesday</strong>. Orders placed after Sunday will be fulfilled the following week.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white mb-2">Production Time</h3>
            <p>
              Our chocolates are crafted by hand in small batches and require approximately <strong>3 days</strong> to complete, ensuring the highest quality and freshness.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white mb-2">Shipping Method</h3>
            <p>
              We ship nationwide using <strong>USPS Priority Mail flat rate boxes</strong>. Each order includes a small handling fee to cover the packaging and insulation materials that protect your truffles in transit.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white mb-2">Pickup Option</h3>
            <p>
              Local pickup is available every <strong>Wednesday</strong> for orders placed by the prior Sunday.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white mb-2">Handling & Care</h3>
            <p>
              To ensure freshness, we package each order with care. For best results, store truffles in a cool, dry place and consume within 2 weeks.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        className="p-6 md:p-16 relative bg-gradient-to-br from-[#ca8f70] via-[#ca8f70] to-[#febf79] text-center"
        aria-labelledby="cta-heading"
      >
        <h2 id="cta-heading" className="text-2xl font-bold text-white md:text-3xl">
          Ready to place your order?
        </h2>
        <p className="text-white mt-4 text-lg md:text-xl">
          Visit our contact or shop page to get started. We&apos;re excited to create something special for you.
         </p>

        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <Link href="/contact">
            <button className="px-6 py-3 bg-white text-black font-semibold border border-[#FFD700] rounded-lg shadow-md hover:bg-[#ca8f70] hover:text-white transition duration-300">
              Contact Us
            </button>
          </Link>
          <Link href="/shop">
            <button className="px-6 py-3 bg-black text-white font-semibold border border-white rounded-lg shadow-md hover:bg-[#f8b870] hover:text-black transition duration-300">
              Visit Shop
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ShippingPage;