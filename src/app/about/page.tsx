import type { Metadata } from "next";
import AboutPage from "./AboutPage";

export const metadata: Metadata = {
  title: "About Us | Amanah Business Services Qatar",
  description:
    "Learn about Amanah Business Services — Qatar's trusted PRO services and business setup consultancy with 10+ years of experience, 2000+ completed projects, and 30+ expert professionals.",
  alternates: { canonical: "https://amanahbusiness.qa/about" },
  openGraph: {
    title: "About Amanah Business Services | Qatar's Premier Business Consultancy",
    description: "Over a decade of excellence in PRO services and company formation in Qatar.",
    url: "https://amanahbusiness.qa/about",
  },
};

export default function Page() {
  return <AboutPage />;
}
