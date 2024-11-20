"use client";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" }); // Reset form fields after submission
  };

  return (
    <main className="bg-black text-white font-custom">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-emerald-700 text-center text-white p-6 md:p-16">
        <h1 className="text-4xl font-bold md:text-5xl">Get in Touch with Us</h1>
        <p className="mt-4 text-lg md:text-2xl">
          Thank you for considering A Plus Truffles! We’d love to hear from you.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="p-6 md:p-16 bg-gradient-to-br from-black via-purple-900 to-emerald-700 text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">Contact Us</h2>
        <p className="text-base text-gray-300 mt-4 md:text-lg max-w-2xl mx-auto">
          Whether you’re interested in placing an order, learning more about our process, or simply want to say hello, we’re here to help. Fill out the form below, and we’ll get back to you soon.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 max-w-lg mx-auto bg-gradient-to-br from-purple-800 via-purple-600 to-emerald-700 p-6 md:p-10 rounded-lg shadow-2xl">
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
            />
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
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 px-6 font-semibold rounded-lg shadow-md bg-emerald-400 text-black hover:bg-white hover:text-emerald-400 transition duration-300"
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

