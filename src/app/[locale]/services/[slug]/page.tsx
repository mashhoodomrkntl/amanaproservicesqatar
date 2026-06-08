import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServices } from "@/lib/data";
import ServiceDetailPage from "./ServiceDetailPage";

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  const enServices = getServices("en");
  const arServices = getServices("ar");
  return [
    ...enServices.map((s) => ({ locale: "en", slug: s.id })),
    ...arServices.map((s) => ({ locale: "ar", slug: s.id })),
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const services = getServices(locale as "en" | "ar");
  const service = services.find((s) => s.id === slug);
  if (!service) return {};

  return {
    title: service.seo?.title || service.title,
    description: service.seo?.description || service.subtitle,
    keywords: service.seo?.keywords,
    alternates: {
      canonical: `https://amanahbusiness.qa/${locale}/services/${service.id}`,
      languages: {
        en: `https://amanahbusiness.qa/en/services/${service.id}`,
        ar: `https://amanahbusiness.qa/ar/services/${service.id}`,
      },
    },
    openGraph: {
      title: service.seo?.title || service.title,
      description: service.seo?.description || service.subtitle,
      url: `https://amanahbusiness.qa/${locale}/services/${service.id}`,
      locale: locale === "ar" ? "ar_QA" : "en_US",
    },
  };
}

export default async function Page({ params }: Props) {
  const { locale, slug } = await params;
  const services = getServices(locale as "en" | "ar");
  const service = services.find((s) => s.id === slug);
  if (!service) notFound();

  return <ServiceDetailPage service={service} locale={locale} />;
}
