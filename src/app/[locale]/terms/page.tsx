"use client";

import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import { useTranslations } from "@/lib/i18n";

export default function TermsPage() {
  const { t, locale } = useTranslations();
  const isRtl = locale === "ar";

  return (
    <>
      <PageHeader
        title={t("terms.title")}
        breadcrumbs={[{ label: t("nav.home"), href: `/${locale}` }, { label: t("terms.title") }]}
      />
      <section className="py-20 bg-white">
        <div className={`max-w-4xl mx-auto px-4 sm:px-6 ${isRtl ? "text-right" : ""}`}>
          <div className="prose prose-blue max-w-none">
            <p className="text-text-muted text-sm">{t("general.lastUpdated")}: {isRtl ? "٦ مايو ٢٠٢٦" : "May 6, 2026"}</p>

            {isRtl ? (
              <>
                <h2>١. الموافقة على الشروط</h2>
                <p>بالوصول إلى موقعنا الإلكتروني، فإنك توافق على الالتزام بهذه الشروط والأحكام وجميع القوانين واللوائح المعمول بها.</p>
                <h2>٢. الخدمات</h2>
                <p>تقدم أمانة لخدمات الأعمال خدمات استشارية لتأسيس الشركات والخدمات الحكومية في قطر. تخضع جميع الخدمات لشروط اتفاقية الخدمة المنفصلة.</p>
                <h2>٣. الملكية الفكرية</h2>
                <p>المحتوى الموجود على هذا الموقع، بما في ذلك النصوص والرسومات والشعارات، هو ملك لأمانة لخدمات الأعمال ومحمي بموجب قوانين حقوق الطبع والنشر.</p>
                <h2>٤. تحديد المسؤولية</h2>
                <p>لن تكون أمانة لخدمات الأعمال مسؤولة في أي حال عن الأضرار الناجمة عن استخدام أو عدم القدرة على استخدام المواد الموجودة على موقعنا.</p>
                <h2>٥. القانون الحاكم</h2>
                <p>تخضع هذه الشروط والأحكام وتُفسَّر وفقاً لقوانين دولة قطر.</p>
              </>
            ) : (
              <>
                <h2>1. Agreement to Terms</h2>
                <p>By accessing our website, you agree to be bound by these Terms and Conditions and all applicable laws and regulations.</p>
                <h2>2. Services</h2>
                <p>Amanah Business Services provides PRO and business setup consultancy services in Qatar. All services are subject to the terms of a separate service agreement.</p>
                <h2>3. Intellectual Property</h2>
                <p>The content on this website, including text, graphics, and logos, is the property of Amanah Business Services and is protected by copyright laws.</p>
                <h2>4. Limitation of Liability</h2>
                <p>In no event shall Amanah Business Services be liable for any damages arising out of the use or inability to use the materials on our website.</p>
                <h2>5. Governing Law</h2>
                <p>These terms and conditions are governed by and construed in accordance with the laws of the State of Qatar.</p>
              </>
            )}
          </div>

          <div className="mt-10">
            <Link
              href={`/${locale}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors"
            >
              {t("general.backToHome")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
