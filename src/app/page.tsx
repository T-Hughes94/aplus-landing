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
    images: [
      {
        url: "/truffle2.webp", // Replace with the correct image path
        width: 1200,
        height: 630,
        alt: "Handcrafted vegan truffles",
      },
    ],
    url: "https://yourwebsite.com", // Replace with your website's actual URL
    type: "website",
  },
  icons: {
    icon: "/favicon.ico", // Replace with your favicon path
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



