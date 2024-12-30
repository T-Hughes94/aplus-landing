"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const collections = ["OG Collection", "Seasonal Collection (December)", "Advent Calendar"];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    collection: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", collection: "", message: "" });
  };

  return (
    <main className="bg-black text-white font-custom" role="main">
      <Header />

      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-br from-[#febf79] via-[#febf79] to-[#ca8f70] text-center p-10 md:p-24"
        aria-labelledby="contact-hero-heading"
      >
        <h1 id="contact-hero-heading" className="text-4xl font-bold mb-4 md:text-5xl text-black">
          Get in Touch
        </h1>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <hr className="border-[#FFD700] border-t-2" />
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        className="p-10 md:p-20 bg-black text-center"
        aria-labelledby="contact-form-heading"
      >
        <h2 id="contact-form-heading" className="text-3xl font-bold text-white underline decoration-[#ca8f70] md:text-4xl">
          Reach Out to Us
        </h2>
        <p className="text-base text-white mt-4 md:text-lg max-w-2xl mx-auto">
          Whether you’re interested in placing an order, learning more about our process, or simply saying hello,
          we’re here to help. Fill out the form below, and we’ll get back to you as soon as possible.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 max-w-lg mx-auto bg-gradient-to-br from-[#ca8f70] via-[#ca8f70] to-[#febf79] p-8 md:p-12 rounded-xl shadow-2xl"
          aria-label="Contact form for A Plus Truffles"
        >
          <div className="mb-6">
            <label htmlFor="name" className="block text-left font-semibold text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full mt-2 p-3 rounded-lg shadow-inner border border-gray-600 bg-black text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
              placeholder="Your Name"
              aria-required="true"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-left font-semibold text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mt-2 p-3 rounded-lg shadow-inner border border-gray-600 bg-black text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
              placeholder="Your Email"
              aria-required="true"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="collection" className="block text-left font-semibold text-gray-300">
              Which Collection Are You Interested In?
            </label>
            <select
              id="collection"
              name="collection"
              value={formData.collection}
              onChange={handleChange}
              required
              className="w-full mt-2 p-3 rounded-lg shadow-inner border border-gray-600 bg-black text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
              aria-required="true"
            >
              <option value="">Select a Collection</option>
              {collections.map((collection, idx) => (
                <option key={idx} value={collection}>
                  {collection}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-left font-semibold text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full mt-2 p-3 rounded-lg shadow-inner border border-gray-600 bg-black text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
              placeholder="Your Message"
              aria-required="true"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 px-6 font-semibold rounded-lg shadow-md bg-white border border-[#FFD700] text-black hover:bg-[#ca8f70] hover:text-white transition duration-300"
            aria-label="Submit the contact form"
          >
            Send Message
          </button>
        </form>
      </section>

      <Footer />
    </main>
  );
};

export default ContactPage;





