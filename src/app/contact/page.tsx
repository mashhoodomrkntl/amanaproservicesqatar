import type { Metadata } from "next";
import ContactPage from "./ContactPage";

export const metadata: Metadata = {
  title: "Contact Us | Get Free Business Consultation in Qatar",
  description:
    "Contact Amanah Business Services for a free consultation on company formation, PRO services, and business setup in Qatar. Call, email, or visit us in Doha.",
  alternates: { canonical: "https://amanahbusiness.qa/contact" },
  openGraph: {
    title: "Contact Amanah Business Services | Free Consultation",
    description: "Get in touch for expert guidance on business setup in Qatar.",
    url: "https://amanahbusiness.qa/contact",
  },
};

export default function Page() {
  return <ContactPage />;
}
