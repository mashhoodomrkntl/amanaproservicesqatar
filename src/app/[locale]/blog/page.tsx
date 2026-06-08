import type { Metadata } from "next";
import BlogPage from "./BlogPage";
import { getUiTranslations } from "@/lib/i18n-translations";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = getUiTranslations(locale);
  const isAr = locale === "ar";

  const title = isAr
    ? "المدونة | رؤى الأعمال وأخبار سوق قطر"
    : "Blog | Business Insights & Qatar Market Updates";
  const description = isAr
    ? "ابقَ على اطلاع بأحدث رؤى الأعمال وأدلة تأسيس الشركات وأخبار الاستثمار في قطر ونصائح الخدمات الحكومية من أمانة لخدمات الأعمال."
    : "Stay updated with the latest business insights, company formation guides, Qatar investment news, and PRO services tips from Amanah Business Services.";

  return {
    title,
    description,
    alternates: {
      canonical: `https://amanahbusiness.qa/${locale}/blog`,
      languages: {
        en: "https://amanahbusiness.qa/en/blog",
        ar: "https://amanahbusiness.qa/ar/blog",
      },
    },
    openGraph: {
      title: isAr
        ? "المدونة | خدمات أمانة للأعمال"
        : "Blog | Amanah Business Services",
      description: isAr
        ? "أحدث رؤى الأعمال وتحديثات سوق قطر."
        : "Latest business insights and Qatar market updates.",
      url: `https://amanahbusiness.qa/${locale}/blog`,
      locale: isAr ? "ar_QA" : "en_US",
    },
  };
}

export default function Page() {
  return <BlogPage />;
}
