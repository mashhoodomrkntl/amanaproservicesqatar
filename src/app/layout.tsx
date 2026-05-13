import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://amanahbusiness.qa"),
  title: {
    default: "Amanah Business Services | PRO Services & Company Formation in Qatar",
    template: "%s | Amanah Business Services",
  },
  description:
    "Amanah Business Services is Qatar's premier PRO services and business setup consultancy. Company formation, local sponsorship, legal consultation, translation & attestation, accounting services. 100% foreign ownership support.",
  keywords: [
    "pro services qatar",
    "company formation qatar",
    "business setup qatar",
    "qatar company registration",
    "local sponsorship qatar",
    "100% foreign ownership qatar",
    "PRO services doha",
    "translation services qatar",
    "legal consultation qatar",
    "business consultancy qatar",
    "accounting services qatar",
  ],
  authors: [{ name: "Amanah Business Services" }],
  creator: "Amanah Business Services",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://amanahbusiness.qa",
    siteName: "Amanah Business Services",
    title: "Amanah Business Services | PRO Services & Company Formation in Qatar",
    description:
      "Qatar's premier PRO services and business setup consultancy. Company formation with 100% foreign ownership, local sponsorship, legal consultation, and more.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Amanah Business Services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amanah Business Services | PRO Services & Company Formation in Qatar",
    description: "Qatar's premier PRO services and business setup consultancy.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  alternates: { canonical: "https://amanahbusiness.qa" },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Amanah Business Services",
    description: "Qatar's premier PRO services and business setup consultancy.",
    url: "https://amanahbusiness.qa",
    telephone: "+974 5000 0000",
    email: "info@amanahbusiness.qa",
    address: { "@type": "PostalAddress", addressLocality: "Doha", addressCountry: "QA" },
    openingHours: "Su-Th 08:00-18:00",
    sameAs: [
      "https://facebook.com/amanahbusiness",
      "https://instagram.com/amanahbusiness",
      "https://linkedin.com/company/amanahbusiness",
    ],
    priceRange: "$$",
    areaServed: { "@type": "Country", name: "Qatar" },
  };

  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
