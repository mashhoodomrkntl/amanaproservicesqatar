import type { Metadata } from "next";
import BlogPage from "./BlogPage";

export const metadata: Metadata = {
  title: "Blog | Business Insights & Qatar Market Updates",
  description:
    "Stay updated with the latest business insights, company formation guides, Qatar investment news, and PRO services tips from Amanah Business Services.",
  alternates: { canonical: "https://amanahbusiness.qa/blog" },
  openGraph: {
    title: "Blog | Amanah Business Services",
    description: "Latest business insights and Qatar market updates.",
    url: "https://amanahbusiness.qa/blog",
  },
};

export default function Page() {
  return <BlogPage />;
}
