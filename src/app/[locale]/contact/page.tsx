import type { Metadata } from "next";
import ContactPage from "./ContactPage";
import { getUiTranslations } from "@/lib/i18n-translations";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";

  return {
    title: isAr
      ? "اتصل بنا | استشارة أعمال مجانية في قطر"
      : "Contact Us | Get Free Business Consultation in Qatar",
    description: isAr
      ? "تواصل مع أمانة لخدمات الأعمال للحصول على استشارة مجانية حول تأسيس الشركات، خدمات العلاقات العامة، وإعداد الأعمال في قطر. اتصل بنا أو راسلنا أو زورنا في الدوحة."
      : "Contact Amanah Business Services for a free consultation on company formation, PRO services, and business setup in Qatar. Call, email, or visit us in Doha.",
    alternates: {
      canonical: `https://amanahbusiness.qa/${locale}/contact`,
      languages: {
        en: "https://amanahbusiness.qa/en/contact",
        ar: "https://amanahbusiness.qa/ar/contact",
      },
    },
    openGraph: {
      title: isAr
        ? "تواصل مع أمانة لخدمات الأعمال | استشارة مجانية"
        : "Contact Amanah Business Services | Free Consultation",
      description: isAr
        ? "تواصل معنا للحصول على إرشادات متخصصة حول إعداد الأعمال في قطر."
        : "Get in touch for expert guidance on business setup in Qatar.",
      url: `https://amanahbusiness.qa/${locale}/contact`,
      locale: isAr ? "ar_QA" : "en_US",
    },
  };
}

export default function Page() {
  return <ContactPage />;
}
