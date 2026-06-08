import type { Metadata } from "next";
import AboutPage from "./AboutPage";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";
  return {
    title: isAr ? "من نحن | خدمات أمانة للأعمال قطر" : "About Us | Amanah Business Services Qatar",
    description: isAr
      ? "تعرف على خدمات أمانة للأعمال - شريكك الموثوق لتأسيس الشركات والخدمات الحكومية في قطر مع أكثر من 10 سنوات من الخبرة وأكثر من 2000 مشروع منجز."
      : "Learn about Amanah Business Services — Qatar's trusted PRO services and business setup consultancy with 10+ years of experience, 2000+ completed projects, and 30+ expert professionals.",
    alternates: { canonical: `https://amanahbusiness.qa/${locale}/about` },
    openGraph: {
      title: isAr ? "عن أمانة لخدمات الأعمال | الاستشارات التجارية الرائدة في قطر" : "About Amanah Business Services | Qatar's Premier Business Consultancy",
      description: isAr ? "أكثر من عقد من التميز في الخدمات الحكومية وتأسيس الشركات في قطر." : "Over a decade of excellence in PRO services and company formation in Qatar.",
      url: `https://amanahbusiness.qa/${locale}/about`,
    },
  };
}

export default function Page() {
  return <AboutPage />;
}
