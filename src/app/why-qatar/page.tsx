import type { Metadata } from "next";
import WhyQatarPage from "./WhyQatarPage";

export const metadata: Metadata = {
  title: "Why Qatar | Business & Investment Opportunities",
  description:
    "Discover why Qatar is the ideal destination for your business. 100% foreign ownership, tax-friendly environment, strategic location, world-class infrastructure, and Vision 2030 opportunities.",
  alternates: { canonical: "https://amanahbusiness.qa/why-qatar" },
  openGraph: {
    title: "Why Invest in Qatar | Amanah Business Services",
    description: "Qatar offers 100% foreign ownership, no personal income tax, strategic location, and a thriving business ecosystem.",
    url: "https://amanahbusiness.qa/why-qatar",
  },
};

export default function Page() {
  return <WhyQatarPage />;
}
