import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BATAL – Custom Signage & Branding Solutions Dubai",
  description:
    "Top Dubai signage company offering illuminated signs, 3D letters, vinyl graphics, wayfinding, hoardings & vehicle branding services.",
  metadataBase: new URL("https://www.batalone.com"),
  alternates: {
    canonical: "/",
  },

  // Open Graph for social sharing (Facebook, LinkedIn)
  openGraph: {
    title: "BATAL – Custom Signage & Branding Solutions Dubai",
    description:
      "Top Dubai signage company offering illuminated signs, 3D letters, vinyl graphics, wayfinding, hoardings & vehicle branding services.",
    url: "https://www.batalone.com",
    siteName: "BATAL Signage Solutions",
    images: [
      {
        url: "https://www.batalone.com/images/Logos.svg",
        width: 1200,
        height: 630,
        alt: "BATAL Signage Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter card
  twitter: {
    card: "summary_large_image",
    title: "BATAL – Custom Signage & Branding Solutions Dubai",
    description:
      "Top Dubai signage company offering illuminated signs, 3D letters, vinyl graphics, wayfinding, hoardings & vehicle branding services.",
    images: ["https://www.batalone.com/images/Logos.svg"], // Same OG image
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "BATAL Signage Solutions",
    url: "https://www.batalone.com",
    logo: "https://www.batalone.com/images/Logos.svg",
    image: "https://www.batalone.com/images/Logos.svg",
    description:
      "Top Dubai signage company offering illuminated signs, 3D letters, vinyl graphics, wayfinding, hoardings & vehicle branding services.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Al Khabeesi",
      addressLocality: "Dubai",
      addressCountry: "UAE",
    },
    telephone: "+971501234567",
    priceRange: "$$",
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
