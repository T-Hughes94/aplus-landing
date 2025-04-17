"use client";

import { useRef, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const collections = ["OG Collection", "Seasonal Collection (December)", "Trashcan Truffles"];
const boxOptions = ["Box of 4", "Box of Dozen"];

type BoxSelection = {
  collection: string;
  boxType: string;
  quantity: string;
};

const ContactPage = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    boxes: [
      { collection: "", boxType: "", quantity: "" },
    ] as BoxSelection[],
  });

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBoxChange = (
    index: number,
    field: keyof BoxSelection,
    value: string
  ) => {
    const updatedBoxes = [...formData.boxes];
    updatedBoxes[index][field] = value;
    setFormData((prev) => ({ ...prev, boxes: updatedBoxes }));
  };

  const addBox = () => {
    setFormData((prev) => ({
      ...prev,
      boxes: [...prev.boxes, { collection: "", boxType: "", quantity: "" }],
    }));
  };

  const removeBox = (index: number) => {
    const updatedBoxes = formData.boxes.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, boxes: updatedBoxes }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          message: "",
          boxes: [{ collection: "", boxType: "", quantity: "" }],
        });
      } else throw new Error("Network response was not ok");
    } catch (error) {
      console.error("Nodemailer Error:", error);
      setStatus("error");
    }
  };

  return (
    <main className="bg-black text-white font-custom">
      <Header />

      <section className="relative isolate overflow-hidden p-10 md:p-24 text-center bg-black">
        <div className="absolute inset-0 bg-gradient-radial from-[#febf79] via-[#f8b870] to-[#ca8f70] opacity-80 animate-pulse-slow" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:40px_40px]" />
        <div className="relative z-10 flex flex-col items-center space-y-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">Get in Touch</h1>
          <p className="text-lg md:text-2xl text-white/90">Place an order or just say hello — we’d love to hear from you.</p>
          <hr className="border-[#FFD700] border-t-2 w-20 mx-auto mt-4" />
        </div>
      </section>

      <section className="p-10 md:p-20 bg-black text-center">
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-gradient-to-br from-[#ca8f70] via-[#ca8f70] to-[#febf79] p-8 md:p-12 rounded-xl shadow-2xl text-black space-y-6"
        >
          {/* Name & Email */}
          <div>
            <label className="block text-left font-semibold text-gray-800">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="w-full mt-2 p-3 rounded-lg border border-gray-600 bg-white focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-left font-semibold text-gray-800">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className="w-full mt-2 p-3 rounded-lg border border-gray-600 bg-white focus:outline-none"
            />
          </div>

          {/* Dynamic Box Selections */}
          {formData.boxes.map((box, index) => (
            <div key={index} className="border border-white rounded-lg p-4 bg-black text-white mb-4">
              <div className="mb-4">
                <label className="block text-left font-semibold">Collection</label>
                <select
                  value={box.collection}
                  onChange={(e) => handleBoxChange(index, "collection", e.target.value)}
                  required
                  className="w-full mt-2 p-3 rounded-lg border bg-black text-white"
                >
                  <option value="">Select Collection</option>
                  {collections.map((c, i) => (
                    <option key={i} value={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-left font-semibold">Box Size</label>
                <select
                  value={box.boxType}
                  onChange={(e) => handleBoxChange(index, "boxType", e.target.value)}
                  required
                  className="w-full mt-2 p-3 rounded-lg border bg-black text-white"
                >
                  <option value="">Select Size</option>
                  {boxOptions.map((o, i) => (
                    <option key={i} value={o}>{o}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-left font-semibold">Quantity</label>
                <input
                  type="number"
                  value={box.quantity}
                  onChange={(e) => handleBoxChange(index, "quantity", e.target.value)}
                  required
                  placeholder="How many?"
                  className="w-full mt-2 p-3 rounded-lg border bg-black text-white"
                />
              </div>

              {formData.boxes.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeBox(index)}
                  className="mt-4 text-sm text-red-500 hover:underline"
                >
                  Remove
                </button>
              )}
            </div>
          ))}

          <button
            type="button"
            onClick={addBox}
            className="mb-6 px-4 py-2 border border-white rounded-full text-white hover:bg-white hover:text-black transition"
          >
            + Add Another Box
          </button>

          {/* Message */}
          <div>
            <label className="block text-left font-semibold text-gray-800">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Any custom requests or notes?"
              className="w-full mt-2 p-3 rounded-lg border border-gray-600 bg-white focus:outline-none"
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 px-6 font-semibold rounded-lg bg-white border border-[#FFD700] text-black hover:bg-[#ca8f70] hover:text-white transition"
          >
            Send Message
          </button>

          {status === "success" && <p className="text-green-500 mt-4">Message sent successfully!</p>}
          {status === "error" && <p className="text-red-500 mt-4">Message failed. Please try again.</p>}
        </form>
      </section>

      <Footer />
    </main>
  );
};

export default ContactPage;









