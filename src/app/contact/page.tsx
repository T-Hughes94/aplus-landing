"use client";

import { useRef, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const collections = ["OG Collection", "Seasonal Collection (December)", "Trashcan Truffles"];
const boxOptions = ["Box of 4", "Box of Dozen"];

const ContactPage = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    collection: "",
    boxType: "",
    quantity: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  type FormField = keyof typeof formData;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          collection: "",
          boxType: "",
          quantity: "",
          message: "",
        });
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Nodemailer Error:", error);
      setStatus("error");
    }
  };

  return (
    <main className="bg-black text-white font-custom" role="main">
      <Header />

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
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight drop-shadow-lg">
            Get in Touch
          </h1>
          <p className="text-lg md:text-2xl text-white/90 max-w-2xl">
            Whether you’re placing an order or simply saying hello, we’d love to hear from you.
          </p>
          <hr className="border-[#FFD700] border-t-2 w-20 mx-auto mt-4" />
        </div>
      </section>

      <section className="p-10 md:p-20 bg-black text-center">
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="mt-8 max-w-lg mx-auto bg-gradient-to-br from-[#ca8f70] via-[#ca8f70] to-[#febf79] p-8 md:p-12 rounded-xl shadow-2xl"
          aria-label="Contact form for A Plus Truffles"
        >
          {["name", "email", "quantity"].map((field) => (
            <div className="mb-6" key={field}>
              <label htmlFor={field} className="block text-left font-semibold text-gray-300">
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                type={field === "email" ? "email" : field === "quantity" ? "number" : "text"}
                id={field}
                name={field}
                value={formData[field as FormField]}
                onChange={handleChange}
                required
                className="w-full mt-2 p-3 rounded-lg shadow-inner border border-gray-600 bg-black text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
                placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                aria-required="true"
              />
            </div>
          ))}

          {["collection", "boxType"].map((field) => (
            <div className="mb-6" key={field}>
              <label htmlFor={field} className="block text-left font-semibold text-gray-300">
                {field === "boxType" ? "Choose Your Box Size" : "Choose Your Collection"}
              </label>
              <select
                id={field}
                name={field}
                value={formData[field as FormField]}
                onChange={handleChange}
                required
                className="w-full mt-2 p-3 rounded-lg shadow-inner border border-gray-600 bg-black text-white"
              >
                <option value="">Select an option</option>
                {(field === "collection" ? collections : boxOptions).map((option, idx) => (
                  <option key={idx} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          ))}

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
              className="w-full mt-2 p-3 rounded-lg shadow-inner border border-gray-600 bg-black text-white"
              placeholder="Your Message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 font-semibold rounded-lg shadow-md bg-white border border-[#FFD700] text-black hover:bg-[#ca8f70] hover:text-white transition duration-300"
          >
            Send Message
          </button>

          {status === "success" && (
            <p className="mt-4 text-green-500 font-medium">Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="mt-4 text-red-500 font-medium">Message failed. Please try again.</p>
          )}
        </form>
      </section>

      <Footer />
    </main>
  );
};

export default ContactPage;







