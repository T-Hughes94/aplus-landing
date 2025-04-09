import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Playwrite England SemiJoined", "sans-serif"], // fallback for better robustness
      },
      colors: {
        primary: "#ca8f70",
        secondary: "#febf79",
        gold: "#FFD700",
      },
      animation: {
        "pulse-slow": "pulse-slow 8s ease-in-out infinite",
      },
      keyframes: {
        "pulse-slow": {
          "0%, 100%": { opacity: "0.9" },
          "50%": { opacity: "1" },
        },
      },
      backgroundImage: {
        "radial-dots": "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        "dot-pattern": "40px 40px",
      },
    },
  },
  plugins: [],
};

export default config;

