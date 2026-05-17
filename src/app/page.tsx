import { Metadata } from "next";
import Hero from "@/components/sections/Hero";

export const metadata: Metadata = {
  title: "Qatar's Best PRO Services & Company Formation | Amanah",
  description: "Looking for the best PRO services in Qatar? Amanah Business Services provides expert company formation, visa processing, and corporate sponsorship. 100% foreign ownership support.",
  alternates: {
    canonical: "https://amanahbusiness.qa/",
  },
};
import Services from "@/components/sections/Services";
import AboutPreview from "@/components/sections/AboutPreview";
import Process from "@/components/sections/Process";
import WhyQatarPreview from "@/components/sections/WhyQatarPreview";
import Testimonials from "@/components/sections/Testimonials";
import BlogPreview from "@/components/sections/BlogPreview";
import FAQ from "@/components/sections/FAQ";
import ContactForm from "@/components/sections/ContactForm";

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

