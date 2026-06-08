import type { Metadata } from "next";
import ServicesPage from "./ServicesPage";
import { getUiTranslations } from "@/lib/i18n-translations";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";

  const title = isAr
    ? "خدماتنا | خدمات العلاقات العامة وتأسيس الشركات في قطر"
    : "Our Services | PRO Services & Business Setup in Qatar";
  const description = isAr
    ? "استكشف الحلول الشاملة لخدمات أمانة للأعمال: تأسيس الشركات، خدمات العلاقات العامة، الكفالة المحلية، الاستشارات القانونية، الترجمة والتصديق، واستشارات الأعمال في قطر."
    : "Explore Amanah Business Services' comprehensive solutions: company formation, PRO services, local sponsorship, legal consultation, translation & attestation, and business consulting in Qatar.";

  return {
    title,
    description,
    alternates: {
      canonical: `https://amanahbusiness.qa/${locale}/services`,
      languages: {
        en: "https://amanahbusiness.qa/en/services",
        ar: "https://amanahbusiness.qa/ar/services",
      },
    },
    openGraph: {
      title: isAr
        ? "خدمات الأعمال في قطر | خدمات أمانة للأعمال"
        : "Business Services in Qatar | Amanah Business Services",
      description: isAr
        ? "إعداد شامل للأعمال وخدمات العلاقات العامة في قطر."
        : "Complete business setup and PRO services in Qatar.",
      url: `https://amanahbusiness.qa/${locale}/services`,
      locale: isAr ? "ar_QA" : "en_US",
    },
  };
}

export default function Page() {
  return <ServicesPage />;
}
