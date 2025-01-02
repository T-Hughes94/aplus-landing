// src/app/gallery/layout.tsx
export const metadata = {
    title: "Gallery - A Plus Truffles",
    description: "Explore our gallery showcasing hand-painted vegan truffles and other proud creations.",
    openGraph: {
      title: "Gallery - A Plus Truffles",
      description: "Take a look at our finest handcrafted vegan truffles displayed in stunning detail.",
      url: "https://yourwebsite.com/gallery",
      images: [
        {
          url: "/gallery1.webp", // Replace with a relevant image
          width: 1200,
          height: 630,
          alt: "Gallery of A Plus Truffles",
        },
      ],
      type: "website",
    },
    icons: {
      icon: "/favicon.ico",
    },
  };
  
  export default function GalleryLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return <>{children}</>;
  }
  