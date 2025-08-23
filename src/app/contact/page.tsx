// src/app/contact/page.tsx
"use client";

import { useRef, useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { sendEmail } from "../lib/email";

type BoxSelection = { orderDate: string; quantity: string };

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement | null>(null);

  // --- form state ---
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    boxes: [{ orderDate: "", quantity: "" }] as BoxSelection[],
    eventInquiry: "",
    company: "", // honeypot
  });

  const [status, setStatus] =
    useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorText, setErrorText] = useState<string>("");

  const isSending = status === "sending";

  // anti-spam helpers
  const [startedAt] = useState(() => Date.now());
  const FORM_MIN_MS = 4000;

  const BLOCK_TERMS =
    /web.?design|redesign|b[se]o\b|backlinks?\b|guest.?post|sponsor(ed)?|crypto|forex|betting|link.?building/i;
  const BAD_DOMAINS =
    /(mailinator|yopmail|guerrillamail|10minutemail|tempmail|sharklasers|trashmail|dispostable|maildrop)/i;

  // Turnstile (optional toggle — only renders if a site key exists)
  const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const captchaEnabled = Boolean(SITE_KEY);

  // widget token
  const [tsToken, setTsToken] = useState<string | null>(null);

  // --- handlers ---
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBoxChange = (index: number, field: keyof BoxSelection, value: string) => {
    const updated = [...formData.boxes];
    updated[index][field] = value;
    setFormData((prev) => ({ ...prev, boxes: updated }));
  };

  const addBox = () => {
    setFormData((prev) => ({
      ...prev,
      boxes: [...prev.boxes, { orderDate: "", quantity: "" }],
    }));
  };

  const removeBox = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      boxes: prev.boxes.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorText("");

    // honeypot
    if (formData.company.trim()) {
      setStatus("success");
      return;
    }

    // dwell time
    if (Date.now() - startedAt < FORM_MIN_MS) {
      setStatus("error");
      setErrorText("Please take a moment to complete the form.");
      return;
    }

    // light content filters
    const haystack = `${formData.name}\n${formData.message}\n${formData.eventInquiry}`;
    if (BLOCK_TERMS.test(haystack)) {
      setStatus("error");
      setErrorText("Please remove promotional language and try again.");
      return;
    }

    // disposable domains
    const emailDomain = formData.email.split("@")[1]?.toLowerCase() ?? "";
    if (emailDomain && BAD_DOMAINS.test(emailDomain)) {
      setStatus("error");
      setErrorText("Please use a valid email address.");
      return;
    }

    // require captcha token if enabled
    if (captchaEnabled && !tsToken) {
      setStatus("error");
      setErrorText("Please complete the Turnstile check.");
      return;
    }

    setStatus("sending");
    try {
      // Verify token server-side (this gives you a clear error if Turnstile fails)
      if (captchaEnabled && tsToken) {
        const vr = await fetch("/api/turnstile", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token: tsToken }),
          cache: "no-store",
        });

        const vj = (await vr.json()) as { ok: boolean; error?: string };
        if (!vr.ok || !vj.ok) {
          throw new Error(vj.error || `Turnstile verification failed`);
        }
      }

      // Send the email
      await sendEmail({
        name: formData.name,
        email: formData.email,
        message: formData.message,
        boxes: formData.boxes,
        eventInquiry: formData.eventInquiry,
      });

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        message: "",
        boxes: [{ orderDate: "", quantity: "" }],
        eventInquiry: "",
        company: "",
      });
      setTsToken(null);
      formRef.current?.reset();
    } catch (err: any) {
      // eslint-disable-next-line no-console
      console.error(err);
      setStatus("error");
      setErrorText(
        typeof err?.message === "string" ? err.message : "Message failed. Please try again."
      );
    }
  };

  return (
    <main id="main-content" className="bg-black text-white font-sans" role="main">
      <Header />

      {/* Hero */}
      <section className="relative p-10 md:p-24 text-center" aria-labelledby="contact-hero-heading">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-[#febf79] via-[#f8b870] to-[#ca8f70] opacity-80 z-0 animate-pulse-slow"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:40px_40px] z-0"
        />
        <div className="relative z-10 flex flex-col items-center space-y-6 max-w-4xl mx-auto">
          <h1 id="contact-hero-heading" className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Get in Touch
          </h1>
          <p className="text-lg md:text-2xl text-white/90">
            Place an order or inquire about events — we’d love to hear from you.
          </p>
          <hr className="border-[#FFD700] border-t-2 w-20 mx-auto mt-4" />
        </div>
      </section>

      {/* Form */}
      <section className="p-10 md:p-20">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-white text-black p-8 md:p-12 rounded-xl shadow-2xl space-y-8"
          noValidate
          aria-describedby="contact-form-instructions"
        >
          <p id="contact-form-instructions" className="text-sm text-gray-600">
            Fields marked with <span aria-hidden="true">*</span> are required.
          </p>

          {/* Honeypot */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="company">Company</label>
            <input
              id="company"
              name="company"
              type="text"
              value={formData.company}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {/* Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                Name <span aria-hidden="true">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                aria-invalid={!!(status === "error" && !formData.name)}
                className="w-full mt-2 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ca8f70]"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                Email <span aria-hidden="true">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                inputMode="email"
                value={formData.email}
                onChange={handleChange}
                aria-invalid={!!(status === "error" && !formData.email)}
                className="w-full mt-2 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ca8f70]"
                placeholder="your@email.com"
              />
            </div>
          </div>

          {/* Box Orders */}
          <fieldset className="space-y-4">
            <legend className="text-base font-semibold text-gray-800">Box Orders (Optional)</legend>

            {formData.boxes.map((box, index) => {
              const dateId = `orderDate-${index}`;
              const qtyId = `quantity-${index}`;
              return (
                <div key={index} className="p-6 bg-gray-100 rounded-lg space-y-4">
                  <div>
                    <label htmlFor={dateId} className="block text-sm font-semibold text-gray-700">
                      Order Date (min. 3 week notice)
                    </label>
                    <input
                      id={dateId}
                      type="date"
                      value={box.orderDate}
                      onChange={(e) => handleBoxChange(index, "orderDate", e.target.value)}
                      className="w-full mt-2 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ca8f70]"
                    />
                  </div>

                  <div>
                    <label htmlFor={qtyId} className="block text-sm font-semibold text-gray-700">
                      Quantity (30+ chocolates)
                    </label>
                    <input
                      id={qtyId}
                      type="number"
                      min={30}
                      inputMode="numeric"
                      pattern="[0-9]*"
                      value={box.quantity}
                      onChange={(e) => handleBoxChange(index, "quantity", e.target.value)}
                      className="w-full mt-2 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ca8f70]"
                    />
                  </div>

                  {formData.boxes.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeBox(index)}
                      className="text-sm text-red-600 hover:underline"
                    >
                      Remove Box
                    </button>
                  )}
                </div>
              );
            })}

            <button
              type="button"
              onClick={addBox}
              className="w-full py-2 px-4 border border-[#ca8f70] text-[#ca8f70] font-medium rounded-md hover:bg-[#ca8f70] hover:text-white transition"
            >
              + Add Another Order
            </button>
          </fieldset>

          {/* Event Inquiry */}
          <div>
            <label htmlFor="eventInquiry" className="block text-sm font-semibold text-gray-700">
              Event Inquiry
            </label>
            <textarea
              id="eventInquiry"
              name="eventInquiry"
              value={formData.eventInquiry}
              onChange={handleChange}
              rows={4}
              placeholder="Tell us about your event, guest count, etc."
              className="w-full mt-2 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ca8f70]"
            />
          </div>

          {/* General Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
              General Message <span aria-hidden="true">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Any custom requests or notes?"
              className="w-full mt-2 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ca8f70]"
            />
          </div>

          {/* Turnstile */}
          {captchaEnabled && (
            <div className="pt-2">
              <Turnstile
                siteKey={SITE_KEY!}
                onSuccess={(token) => setTsToken(token)}
                onExpire={() => setTsToken(null)}
                onError={() => setTsToken(null)}
                options={{ retry: "auto" }}
              />
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={isSending || (captchaEnabled && !tsToken)}
            aria-disabled={isSending || (captchaEnabled && !tsToken)}
            aria-busy={isSending}
            className="w-full py-3 px-6 font-semibold rounded-lg bg-[#ca8f70] text-white hover:bg-[#a56a50] transition disabled:opacity-60"
          >
            {isSending ? "Sending…" : "Send Message"}
          </button>

          {/* Live region */}
          <div role="status" aria-live="polite" className="min-h-[1.5rem] pt-2">
            {status === "success" && <p className="text-green-700">Message sent successfully!</p>}
            {status === "error" && (
              <p className="text-red-700">
                {errorText || (
                  <>
                    Message failed. Please try again, or email us directly at{" "}
                    <a href="mailto:Aplustruffles@yahoo.com" className="underline">
                      Aplustruffles@yahoo.com
                    </a>.
                  </>
                )}
              </p>
            )}
          </div>
        </form>
      </section>

      <Footer />
    </main>
  );
}

















