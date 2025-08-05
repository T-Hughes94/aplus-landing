"use client";

import { useRef, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { sendEmail } from "../lib/email";

type BoxSelection = {
  orderDate: string;
  quantity: string;
};

const ContactPage = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    boxes: [{ orderDate: "", quantity: "" }] as BoxSelection[],
    eventInquiry: "",
  });

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBoxChange = (index: number, field: keyof BoxSelection, value: string) => {
    const updatedBoxes = [...formData.boxes];
    updatedBoxes[index][field] = value;
    setFormData((prev) => ({ ...prev, boxes: updatedBoxes }));
  };

  const addBox = () => {
    setFormData((prev) => ({
      ...prev,
      boxes: [...prev.boxes, { orderDate: "", quantity: "" }],
    }));
  };

  const removeBox = (index: number) => {
    const updatedBoxes = formData.boxes.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, boxes: updatedBoxes }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await sendEmail(formData);
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        message: "",
        boxes: [{ orderDate: "", quantity: "" }],
        eventInquiry: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    }
  };

  return (
    <main className="bg-black text-white font-sans">
      <Header />

      <section className="relative p-10 md:p-24 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#febf79] via-[#f8b870] to-[#ca8f70] opacity-80 z-0 animate-pulse-slow" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:40px_40px] z-0" />
        <div className="relative z-10 flex flex-col items-center space-y-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Get in Touch</h1>
          <p className="text-lg md:text-2xl text-white/90">Place an order or inquire about events — we’d love to hear from you.</p>
          <hr className="border-[#FFD700] border-t-2 w-20 mx-auto mt-4" />
        </div>
      </section>

      <section className="p-10 md:p-20">
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-white text-black p-8 md:p-12 rounded-xl shadow-2xl space-y-8"
        >
          {/* Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="w-full mt-2 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ca8f70]"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your Email"
                className="w-full mt-2 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ca8f70]"
              />
            </div>
          </div>

          {/* Box Orders */}
          {formData.boxes.map((box, index) => (
            <div key={index} className="p-6 bg-gray-100 rounded-lg space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700">Order Date (Min. 1 Week Notice)</label>
                <input
                  type="date"
                  value={box.orderDate}
                  onChange={(e) => handleBoxChange(index, "orderDate", e.target.value)}
                  required
                  className="w-full mt-2 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ca8f70]"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700">Quantity (30+ Chocolates)</label>
                <input
                  type="number"
                  min={30}
                  value={box.quantity}
                  onChange={(e) => handleBoxChange(index, "quantity", e.target.value)}
                  required
                  className="w-full mt-2 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ca8f70]"
                />
              </div>

              {formData.boxes.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeBox(index)}
                  className="text-sm text-red-500 hover:underline"
                >
                  Remove Box
                </button>
              )}
            </div>
          ))}

          <button
            type="button"
            onClick={addBox}
            className="w-full py-2 px-4 border border-[#ca8f70] text-[#ca8f70] font-medium rounded-md hover:bg-[#ca8f70] hover:text-white transition"
          >
            + Add Another Order
          </button>

          {/* Event Inquiry */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">Event Inquiry</label>
            <textarea
              name="eventInquiry"
              value={formData.eventInquiry}
              onChange={handleChange}
              rows={4}
              placeholder="Tell us about your event, guest count, etc."
              className="w-full mt-2 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ca8f70]"
            />
          </div>

          {/* General Message */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">General Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              placeholder="Any custom requests or notes?"
              className="w-full mt-2 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ca8f70]"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 px-6 font-semibold rounded-lg bg-[#ca8f70] text-white hover:bg-[#a56a50] transition"
          >
            Send Message
          </button>

          {status === "success" && <p className="text-green-600 mt-4">Message sent successfully!</p>}
          {status === "error" && <p className="text-red-600 mt-4">Message failed. Please try again.</p>}
        </form>
      </section>

      <Footer />
    </main>
  );
};

export default ContactPage;












