import type { Metadata } from "next";
import ServicesPage from "./ServicesPage";

export const metadata: Metadata = {
  title: "Our Services | PRO Services & Business Setup in Qatar",
  description:
    "Explore Amanah Business Services' comprehensive solutions: company formation, PRO services, local sponsorship, legal consultation, translation & attestation, business consulting, and accounting in Qatar.",
  alternates: { canonical: "https://amanahbusiness.qa/services" },
  openGraph: {
    title: "Business Services in Qatar | Amanah Business Services",
    description: "Complete business setup and PRO services in Qatar. Company formation, sponsorship, legal, translation, consulting, and accounting.",
    url: "https://amanahbusiness.qa/services",
  },
};

export default function Page() {
  return <ServicesPage />;
}
