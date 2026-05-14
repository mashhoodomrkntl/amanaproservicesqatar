import Hero from "@/components/sections/Hero";
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
      <BlogPreview />
      <ContactForm />
      <FAQ />
    </>
  );
}

