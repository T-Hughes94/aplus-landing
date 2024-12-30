// src/app/contact/layout.tsx
export const metadata = {
    title: "Contact Us - A Plus Truffles",
    description:
      "Get in touch with A Plus Truffles. Place an order, ask about our process, or simply say hello. We’d love to hear from you!",
    openGraph: {
      title: "Contact Us - A Plus Truffles",
      description:
        "Reach out to A Plus Truffles for inquiries, orders, or to learn more about our handcrafted vegan truffles.",
      url: "https://yourwebsite.com/contact",
      images: [
        {
          url: "/Apluslogo4.png",
          width: 1200,
          height: 630,
          alt: "Contact A Plus Truffles",
        },
      ],
      type: "website",
    },
    icons: {
      icon: "/favicon.ico",
    },
  };
  
  export default function ContactLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return <>{children}</>;
  }
  