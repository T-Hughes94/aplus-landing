// src/app/components/SeasonalSection.tsx
"use client";

import Link from "next/link";
import Script from "next/script";

const SeasonalSection = () => {
  return (
    <section className="bg-black p-8 md:p-16 text-white">
      <Script src="https://static.elfsight.com/platform/platform.js" strategy="lazyOnload" />

      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold underline decoration-[#ca8f70] md:text-4xl">
          Follow Us On Instagram
        </h2>
        <p className="text-gray-200 mt-2 md:text-lg max-w-2xl mx-auto">
          Discover limited-time truffle drops and see what events we&apos;re popping up at next!
        </p>
      </div>

      <div className="w-full flex justify-center">
        <div className="w-full max-w-md flex flex-col items-center justify-center p-6 bg-[#111] rounded-xl border border-[#333] shadow-lg hover:scale-105 transition-transform duration-300">
          <div className="w-full">
            <div className="elfsight-app-572e4197-6396-4633-b520-afc838228efb" data-elfsight-app-lazy></div>
          </div>

          <p className="text-gray-400 mt-4 text-sm text-center">
            Can’t see the feed? Visit us directly on Instagram:
          </p>
          <Link
            href="https://www.instagram.com/aplustruffles"
            target="_blank"
            aria-label="Open @aplustruffles on Instagram (opens in a new tab)"
            className="mt-2 inline-flex items-center justify-center px-4 py-2 text-sm bg-[#ca8f70] text-white rounded border border-[#FFD700] hover:bg-[#febf79] hover:text-black transition"
          >
            @aplustruffles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SeasonalSection;


















