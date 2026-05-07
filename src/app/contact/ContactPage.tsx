"use client";

import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/sections/ContactForm";
import FAQ from "@/components/sections/FAQ";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Get a free consultation from our Qatar business experts"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />
      <ContactForm />
      <FAQ />
    </>
  );
}
