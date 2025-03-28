import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Collections - A Plus Truffles",
  description:
    "Explore our handcrafted vegan truffle collections. Indulge in exquisite flavors, ethical ingredients, and unique designs. Find your favorite today!",
  openGraph: {
    title: "Collections - A Plus Truffles",
    description:
      "Discover the unique flavors of our handcrafted vegan truffles. From seasonal delights to classic favorites, there's something for everyone.",
    url: "https://yourwebsite.com/collections",
    images: [
      {
        url: "/Apluslogo4.png", // Update to the appropriate collection image
        width: 1200,
        height: 630,
        alt: "A Plus Truffles Collection",
      },
    ],
    type: "website",
  },
  icons: {
    icon: "/favicon.ico", // Ensure your favicon path is correct
  },
};

type Collections = {
  id: string;
  title: string;
  flavors: { name: string; emoji: string; description: string }[];
  image: string;
};

const collections: Collections[] = [
  {
    id: "og-collection",
    title: "OG Collection",
    flavors: [
      { name: "Peanutbutter Cups", emoji: "🥜", description: "Rich peanut butter encased in creamy chocolate." },
      { name: "Sea Salt Caramel", emoji: "🌊", description: "Sweet caramel with a hint of sea salt." },
      { name: "Chocolate Lovers", emoji: "🍫", description: "A dream for chocolate aficionados." },
      { name: "Cookies n Cream", emoji: "🍪", description: "Crunchy cookie bits in velvety white chocolate." },
    ],
    image: "/Apluslogo4.png",
  },
  {
    id: "seasonal-collection",
    title: "Seasonal Collection (December)",
    flavors: [
      { name: "Biscoff", emoji: "☕", description: "Speculoos cookie flavor with a creamy finish." },
      { name: "Black Forest", emoji: "🍒", description: "Dark chocolate with cherry undertones." },
      { name: "French Toast", emoji: "🍞", description: "Warm cinnamon with maple sweetness." },
      { name: "Peppermint in Milk Chocolate", emoji: "🍬", description: "Cool peppermint wrapped in milk chocolate." },
      { name: "Cinnamon Chai", emoji: "☕", description: "Spiced chai flavors with a cinnamon kick." },
    ],
    image: "/Apluslogo4.png",
  },
  {
    id: "advent-calendar",
    title: "Advent Calendar",
    flavors: [
      { name: "Hot Cocoa", emoji: "☕", description: "Classic hot cocoa in truffle form." },
      { name: "Creme Brule", emoji: "🍮", description: "Caramelized sugar with a creamy center." },
      { name: "Peppermint in Dark", emoji: "🍬", description: "Bold dark chocolate with a peppermint burst." },
      { name: "Peppermint in White", emoji: "🍬", description: "Cool peppermint in smooth white chocolate." },
      { name: "Cinnamon Caramel Crunch", emoji: "🍬", description: "Crispy caramel with a hint of cinnamon." },
      { name: "No Egg Nog", emoji: "🥚", description: "Non-dairy twist on the holiday classic." },
      { name: "PB Cups in White", emoji: "🥜", description: "Peanut butter in creamy white chocolate." },
      { name: "PB Cups in Dark", emoji: "🥜", description: "Peanut butter encased in bold dark chocolate." },
      { name: "Peppermint Patties", emoji: "🍬", description: "Refreshing peppermint covered in chocolate." },
      { name: "Cranberry Caramel", emoji: "🍇", description: "Tangy cranberry meets smooth caramel." },
      { name: "Fruit & Nut Mendiants", emoji: "🍎", description: "A medley of fruits and nuts in chocolate." },
    ],
    image: "/Apluslogo4.png",
  },
];

const CollectionsPage: React.FC = () => {
  return (
    <main className="bg-black text-white font-custom" role="main">
      <Header />

      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-br from-[#febf79] via-[#febf79] to-[#ca8f70] p-10 md:p-24 text-center"
        aria-labelledby="collections-hero-heading"
      >
        <h1 id="collections-hero-heading" className="text-4xl font-bold mb-4 md:text-5xl text-black">
          Explore Our Collections
        </h1>
        <p className="text-lg mt-2 md:text-2xl text-white">
          Indulge in the exquisite flavors of our handcrafted vegan chocolates.
        </p>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <hr className="border-[#FFD700] border-t-2" />
        </div>
      </section>

      {/* Collection Sections */}
      {collections.map((collection, idx) => (
        <section
          id={collection.id}
          key={idx}
          className="p-10 md:p-20 bg-black"
          aria-labelledby={`${collection.id}-heading`}
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
            {/* Image */}
            <div className="md:w-1/2">
              <Image
                src={collection.image}
                alt={`${collection.title} image`}
                width={500}
                height={400}
                className="rounded-lg shadow-lg transform transition-transform hover:scale-105"
              />
            </div>
            {/* Text */}
            <div className="md:w-1/2">
              <h2
                id={`${collection.id}-heading`}
                className="text-3xl font-bold text-white underline decoration-[#ca8f70] mb-6"
              >
                {collection.title}
              </h2>
              <div className="relative p-6 bg-gradient-to-br from-[#febf79] via-[#febf79] to-[#ca8f70] rounded-xl border-2 border-[#FFD700] shadow-2xl transform transition-transform duration-300 hover:scale-105">
                <ul className="space-y-4">
                  {collection.flavors.map((flavor, flavorIdx) => (
                    <li key={flavorIdx} className="flex items-start">
                      <span className="mr-4 text-2xl">{flavor.emoji}</span>
                      <div>
                        <h3 className="text-xl font-bold text-black">{flavor.name}</h3>
                        <p className="text-lg text-white">{flavor.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#FFD700] rounded-full opacity-30 blur-2xl -translate-x-6 -translate-y-6"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#FFD700] rounded-full opacity-30 blur-2xl translate-x-6 translate-y-6"></div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Call to Action */}
      <section
        className="p-10 md:p-20 bg-gradient-to-br from-[#ca8f70] via-[#ca8f70] to-[#febf79] text-center"
        aria-labelledby="collections-cta-heading"
      >
        <h2 id="collections-cta-heading" className="text-3xl font-bold text-white md:text-4xl">
          Discover Your Favorites
        </h2>
        <p className="mt-4 text-base text-gray-200 md:text-lg">
          Ready to treat yourself? Explore our collections and find your new favorite truffles.
        </p>
        <Link href="/contact">
          <button
            className="mt-6 px-4 py-2 bg-white border border-[#FFD700] text-black font-semibold rounded-lg shadow-md hover:bg-[#ca8f70] hover:text-white transition duration-300 md:px-6 md:py-3"
            aria-label="Contact us to place an order or learn more about A Plus Truffles"
          >
            Contact Us to Order
          </button>
        </Link>
      </section>

      <Footer />
    </main>
  );
};

export default CollectionsPage;
















