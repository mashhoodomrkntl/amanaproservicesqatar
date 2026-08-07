import CookieConsent from "@/components/CookieConsent";
import CursorFollower from "@/components/CursorFollower";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getSiteConfig } from "@/lib/data";
import { Locale, LocaleProvider } from "@/lib/i18n";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";

  return {
    metadataBase: new URL("https://amanahbusiness.qa"),
    title: {
      default: isAr
        ? "أفضل خدمات العلاقات العامة وتأسيس الشركات في قطر | خدمات أمانة للأعمال"
        : "Qatar's Best PRO Services & Company Formation | Amanah Business Services",
      template: isAr
        ? "%s | خدمات أمانة للأعمال"
        : "%s | Amanah Business Services",
    },
    description: isAr
      ? "تعتبر خدمات أمانة للأعمال الشريك الرائد لتأسيس الشركات والخدمات الحكومية والعلاقات العامة في قطر. نحن متخصصون في تأسيس الشركات، الكفالة المحلية والاستشارات القانونية والترجمة."
      : "Amanah Business Services is recognized as Qatar's best PRO services provider and business setup consultancy. We specialize in company formation, local sponsorship, and legal consultation.",
    keywords: isAr
      ? [
        "تأسيس الشركات في قطر",
        "خدمات العلاقات العامة قطر",
        "تخليص معاملات قطر",
        "أفضل خدمات برو قطر",
        "رخصة تجارية قطر",
        "شريك قطري محلي",
        "ترجمة معتمدة في قطر",
        "تصديق المستندات قطر",
        "الاستشارات القانونية قطر",
        "تأسيس الأعمال الدوحة"
      ]
      : [
        "amanah business services",
        "amanah business qatar",
        "amanah doha qatar",
        "amanah qatar",
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
    authors: [{ name: isAr ? "خدمات أمانة للأعمال" : "Amanah Business Services" }],
    creator: isAr ? "خدمات أمانة للأعمال" : "Amanah Business Services",
    openGraph: {
      type: "website",
      locale: isAr ? "ar_QA" : "en_US",
      url: `https://amanahbusiness.qa/${locale}`,
      siteName: isAr ? "خدمات أمانة للأعمال" : "Amanah Business Services",
      title: isAr
        ? "أفضل خدمات العلاقات العامة وتأسيس الشركات في قطر | خدمات أمانة للأعمال"
        : "Qatar's Best PRO Services & Company Formation | Amanah",
      description: isAr
        ? "تعتبر خدمات أمانة للأعمال الشريك الرائد لتأسيس الشركات والخدمات الحكومية والعلاقات العامة في قطر. تأسيس شركات بملكية أجنبية 100٪ وكفالة محلية موثوقة."
        : "Recognized as Qatar's best PRO services and business setup consultancy. Expert company formation with 100% foreign ownership and reliable corporate sponsorship.",
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Amanah Business Services" }],
    },
    twitter: {
      card: "summary_large_image",
      title: isAr
        ? "أفضل خدمات العلاقات العامة وتأسيس الشركات في قطر | خدمات أمانة للأعمال"
        : "Qatar's Best PRO Services & Company Formation | Amanah",
      description: isAr
        ? "تعتبر خدمات أمانة للأعمال الشريك الرائد لتأسيس الشركات والخدمات الحكومية في قطر."
        : "Recognized as Qatar's best PRO services and business setup consultancy.",
      images: ["/og-image.jpg"],
    },
    alternates: {
      canonical: `https://amanahbusiness.qa/${locale}`,
      languages: {
        en: "https://amanahbusiness.qa/en",
        ar: "https://amanahbusiness.qa/ar",
      },
    },
    icons: {
      icon: [
        { url: "/icon.png", type: "image/png" },
        { url: "/icon.png", sizes: "192x192", type: "image/png" },
        { url: "/icon.png", sizes: "512x512", type: "image/png" },
      ],
      shortcut: "/icon.png",
      apple: [
        { url: "/icon.png", sizes: "180x180", type: "image/png" },
      ],
    },
  };
}

export default async function RootLayout({ children, params }: Readonly<Props>) {
  const { locale } = await params;
  const activeLocale = (locale === "ar" || locale === "en") ? locale : "en";
  const siteConfig = getSiteConfig(activeLocale as Locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: "https://amanahbusiness.qa/icon.png",
    image: "https://amanahbusiness.qa/icon.png",
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Doha",
      addressCountry: "QA",
      streetAddress: activeLocale === "ar"
        ? "المكتب رقم 6، الطابق الثاني، مبنى رقم 67، مقابل جامعة ليفربول جون مورز"
        : "Office 6, 2nd Floor, Building No. 67, Opposite Liverpool John Moores University"
    },
    openingHours: "Sat-Th 08:00-18:00",
    sameAs: [
      "https://facebook.com/amanahbusiness",
      "https://instagram.com/amanahbusiness",
      "https://linkedin.com/company/amanahbusiness",
    ],
    priceRange: "$$",
    areaServed: { "@type": "Country", name: activeLocale === "ar" ? "قطر" : "Qatar" },
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
    <html lang={activeLocale} dir={activeLocale === "ar" ? "rtl" : "ltr"} className={`${inter.variable} h-full antialiased`}>
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
        <link rel="icon" href="/icon.png" type="image/png" sizes="any" />
        <link rel="shortcut icon" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/silktide/consent-manager@v2.0.0/silktide-consent-manager.css" integrity="sha384-IO1E/jCrQXyH5rwcI0SXP7OXw47JFqQNDQcKhbFvqnL2IunBxxwE2Ne5XyAmCqKs" crossOrigin="anonymous" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning>
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
        <LocaleProvider locale={activeLocale as Locale}>
          <CookieConsent />
          <CursorFollower />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer locale={activeLocale} />
          <WhatsAppButton />
        </LocaleProvider>
      </body>
    </html>
  );
}
