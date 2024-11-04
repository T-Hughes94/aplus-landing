import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "A Plus Truffles",
  description: "Vegan Truffles",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
