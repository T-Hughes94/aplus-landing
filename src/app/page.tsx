import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import PricingSection from './components/PricingSection';
import SeasonalSection from './components/SeasonalSection';
import Footer from './components/Footer';

export const metadata = {
  title: "A Plus Truffles - Handcrafted Vegan Chocolates",
  description:
    "Discover the finest handcrafted vegan chocolates with A Plus Truffles. From special occasions to everyday treats, our indulgent and ethical chocolates are perfect for all.",
  openGraph: {
    title: "A Plus Truffles - Handcrafted Vegan Chocolates",
    description:
      "Explore our collection of handcrafted vegan chocolates, perfect for every occasion.",
    images: ["/truffle2.webp"],
    url: "https://yourwebsite.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "A Plus Truffles - Handcrafted Vegan Chocolates",
    description:
      "Discover the finest handcrafted vegan chocolates with A Plus Truffles.",
    images: ["/truffle2.webp"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <PricingSection />
      <SeasonalSection />
      <Footer />
    </>
  );
}


