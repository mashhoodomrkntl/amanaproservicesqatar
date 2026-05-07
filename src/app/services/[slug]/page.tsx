import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/lib/data";
import ServiceDetailPage from "./ServiceDetailPage";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);
  if (!service) return {};

  return {
    title: service.seo.title,
    description: service.seo.description,
    keywords: service.seo.keywords,
    alternates: { canonical: `https://amanahbusiness.qa/services/${service.id}` },
    openGraph: {
      title: service.seo.title,
      description: service.seo.description,
      url: `https://amanahbusiness.qa/services/${service.id}`,
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);
  if (!service) notFound();

  return <ServiceDetailPage service={service} />;
}
