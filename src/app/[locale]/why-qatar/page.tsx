import type { Metadata } from "next";
import WhyQatarPage from "./WhyQatarPage";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";
  return {
    title: isAr ? "لماذا قطر | فرص الأعمال والاستثمار" : "Why Qatar | Business & Investment Opportunities",
    description: isAr
      ? "اكتشف لماذا تعد قطر الوجهة المثالية لعملك التجاري. تملك أجنبي بنسبة 100٪، بيئة معفاة من الضرائب، موقع استراتيجي، بنية تحتية قوية، وفرص رؤية قطر 2030."
      : "Discover why Qatar is the ideal destination for your business. 100% foreign ownership, tax-friendly environment, strategic location, world-class infrastructure, and Vision 2030 opportunities.",
    alternates: { canonical: `https://amanahbusiness.qa/${locale}/why-qatar` },
    openGraph: {
      title: isAr ? "لماذا الاستثمار في قطر | خدمات أمانة للأعمال" : "Why Invest in Qatar | Amanah Business Services",
      description: isAr
        ? "تقدم قطر تملكاً أجنبياً بنسبة 100٪، عدم وجود ضرائب على الدخل الشخصي، موقعاً استراتيجياً ممتازاً، ومنظومة أعمال مزدهرة."
        : "Qatar offers 100% foreign ownership, no personal income tax, strategic location, and a thriving business ecosystem.",
      url: `https://amanahbusiness.qa/${locale}/why-qatar`,
    },
  };
}

export default function Page() {
  return <WhyQatarPage />;
}
