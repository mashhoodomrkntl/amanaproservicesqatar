import { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import AboutPreview from "@/components/sections/AboutPreview";
import Process from "@/components/sections/Process";
import WhyQatarPreview from "@/components/sections/WhyQatarPreview";
import Testimonials from "@/components/sections/Testimonials";
import BlogPreview from "@/components/sections/BlogPreview";
import FAQ from "@/components/sections/FAQ";
import ContactForm from "@/components/sections/ContactForm";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";
  return {
    title: isAr
      ? "أفضل خدمات العلاقات العامة وتأسيس الشركات في قطر | خدمات أمانة للأعمال"
      : "Qatar's Best PRO Services & Company Formation | Amanah",
    description: isAr
      ? "تبحث عن أفضل خدمات العلاقات العامة في قطر؟ توفر أمانة لخدمات الأعمال تأسيس شركات خبير، تخليص معاملات، تأشيرات، وكفالة محلية. دعم كامل للتملك الأجنبي بنسبة 100٪."
      : "Looking for the best PRO services in Qatar? Amanah Business Services provides expert company formation, visa processing, and corporate sponsorship. 100% foreign ownership support.",
    alternates: {
      canonical: `https://amanahbusiness.qa/${locale}/`,
    },
  };
}

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <AboutPreview />
      <Process />
      <WhyQatarPreview />
      <Testimonials />
      <ContactForm />
      <BlogPreview />
      <FAQ />
    </>
  );
}
