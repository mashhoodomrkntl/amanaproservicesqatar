import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieConsent from "@/components/CookieConsent";
import { siteConfig } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://amanahbusiness.qa"),
  title: {
    default: "Qatar's Best PRO Services & Company Formation | Amanah Business Services",
    template: "%s | Amanah Business Services",
  },
  description:
    "Amanah Business Services is recognized as Qatar's best PRO services provider and business setup consultancy. We specialize in company formation, local sponsorship, and legal consultation.",
  keywords: [
    "best pro services in qatar",
    "pro services qatar",
    "qatar best pro service",
    "top pro services qatar",
    "company formation qatar",
    "business setup qatar",
    "qatar company registration",
    "local sponsorship qatar",
    "100% foreign ownership qatar",
    "PRO services doha",
    "translation services qatar",
    "legal consultation qatar",
    "business consultancy qatar",
    "translation and attestation qatar",
    "business setup services in qatar",
    "trados certified translation qatar"
  ],
  authors: [{ name: "Amanah Business Services" }],
  creator: "Amanah Business Services",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://amanahbusiness.qa",
    siteName: "Amanah Business Services",
    title: "Qatar's Best PRO Services & Company Formation | Amanah",
    description:
      "Recognized as Qatar's best PRO services and business setup consultancy. Expert company formation with 100% foreign ownership and reliable corporate sponsorship.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Amanah Business Services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Qatar's Best PRO Services & Company Formation | Amanah",
    description: "Recognized as Qatar's best PRO services and business setup consultancy.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  alternates: { canonical: "https://amanahbusiness.qa" },
  icons: {
    icon: [
      { url: "/Amanah Icon.png", media: "(prefers-color-scheme: light)" },
      { url: "/Amanah Icon (light).png", media: "(prefers-color-scheme: dark)" },
    ],
    apple: "/Amanah Icon.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Amanah Business Services",
    description: "Qatar's premier PRO services and business setup consultancy.",
    url: "https://amanahbusiness.qa",
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: { "@type": "PostalAddress", addressLocality: "Doha", addressCountry: "QA", streetAddress: "Office 6, 2nd Floor, Building No. 67, Opposite Liverpool John Moores University" },
    openingHours: "Su-Th 08:00-18:00",
    sameAs: [
      "https://facebook.com/amanahbusiness",
      "https://instagram.com/amanahbusiness",
      "https://linkedin.com/company/amanahbusiness",
    ],
    priceRange: "$$",
    areaServed: { "@type": "Country", name: "Qatar" },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "128"
    },
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 25.2854,
        longitude: 51.5310
      },
      geoRadius: "50000"
    }
  };

  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KRL6HS9W');`,
          }}
        />
        {/* End Google Tag Manager */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/silktide/consent-manager@v2.0.0/silktide-consent-manager.css" integrity="sha384-IO1E/jCrQXyH5rwcI0SXP7OXw47JFqQNDQcKhbFvqnL2IunBxxwE2Ne5XyAmCqKs" crossOrigin="anonymous" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KRL6HS9W"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <CookieConsent />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
