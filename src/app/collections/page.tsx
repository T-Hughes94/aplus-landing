"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";

type Collections = {
  title: string;
  flavors: string[];
};

const collections: Collections[] = [
  {
    title: "OG Collection",
    flavors: ["Peanutbutter Cups", "Sea Salt Caramel", "Chocolate Lovers", "Cookies n Cream"],
  },
  {
    title: "Seasonal Collection (December)",
    flavors: ["Biscoff", "Black Forest", "French Toast", "Peppermint in Milk Chocolate", "Cinnamon Chai"],
  },
  {
    title: "Advent Calendar",
    flavors: [
      "Hot Cocoa",
      "Creme Brule",
      "Peppermint in Dark",
      "Peppermint in White",
      "Cinnamon Caramel Crunch",
      "No Egg Nog",
      "PB Cups in White",
      "PB Cups in Dark",
      "Peppermint Patties",
      "Cranberry Caramel",
      "Fruit & Nut Mendiants",
    ],
  },
];

const CollectionsPage: React.FC = () => {
  return (
    <main className="bg-gradient-to-br from-emerald-900 via-emerald-600 to-emerald-800 text-white font-custom">
      <Header />

      {/* Hero Section */}
      <section className="p-6 md:p-16 text-center">
        <h1 className="text-4xl font-bold text-[#FFD700] md:text-5xl">
          Explore Our Collections
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-200">
          Indulge in the exquisite flavors of our handcrafted vegan chocolates.
        </p>
      </section>

      {/* Collection Sections */}
      <div className="space-y-12 md:space-y-16">
        {collections.map((collection, idx) => (
          <section
            key={idx}
            className={`p-6 md:p-16 ${
              idx % 2 === 0 ? "bg-gradient-to-br from-purple-800 via-purple-600 to-emerald-700" : "bg-gradient-to-br from-emerald-700 via-emerald-600 to-purple-800"
            }`}
          >
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
              <div
                className={`md:w-1/2 ${
                  idx % 2 === 0 ? "order-last md:order-first text-left" : "text-left"
                }`}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-[#FFD700] mb-4">
                  {collection.title}
                </h2>
                <ul className="space-y-2">
                  {collection.flavors.map((flavor, flavorIdx) => (
                    <li
                      key={flavorIdx}
                      className="text-lg md:text-xl text-gray-200 leading-relaxed"
                    >
                      {flavor}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:w-1/2 flex items-center justify-center">
                {/* Placeholder for collection image or illustration */}
                <div className="w-3/4 h-64 bg-[#FFD700] rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                  {/* Replace with image or icon */}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <Footer />
    </main>
  );
};

export default CollectionsPage;

