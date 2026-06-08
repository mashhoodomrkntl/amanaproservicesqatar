"use client";

import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import { useTranslations } from "@/lib/i18n";

export default function PrivacyPage() {
  const { t, locale, siteConfig } = useTranslations();
  const isRtl = locale === "ar";

  return (
    <>
      <PageHeader
        title={t("privacy.title")}
        breadcrumbs={[{ label: t("nav.home"), href: `/${locale}` }, { label: t("privacy.title") }]}
      />
      <section className="py-20 bg-white">
        <div className={`max-w-4xl mx-auto px-4 sm:px-6 ${isRtl ? "text-right" : ""}`}>
          <div className="prose prose-blue max-w-none">
            <p className="text-text-muted text-sm">{t("general.lastUpdated")}: {isRtl ? "٦ مايو ٢٠٢٦" : "May 6, 2026"}</p>

            {isRtl ? (
              <>
                <h2>١. المقدمة</h2>
                <p>مرحباً بكم في أمانة لخدمات الأعمال. نحن ملتزمون بحماية بياناتك الشخصية وصون حقك في الخصوصية.</p>
                <h2>٢. المعلومات التي نجمعها</h2>
                <p>نجمع المعلومات الشخصية التي تقدمها لنا عند اهتمامك بالحصول على معلومات حول شركتنا أو منتجاتنا وخدماتنا، مثل اسمك وعنوان بريدك الإلكتروني ورقم هاتفك.</p>
                <h2>٣. كيف نستخدم معلوماتك</h2>
                <p>نستخدم المعلومات الشخصية المجمّعة عبر موقعنا الإلكتروني لعدة أغراض، بما في ذلك توفير الخدمات التي تطلبها والتواصل معك.</p>
                <h2>٤. مشاركة معلوماتك</h2>
                <p>نشارك المعلومات فقط بموافقتك أو للامتثال للقوانين أو لتزويدك بالخدمات أو لحماية حقوقك أو للوفاء بالتزاماتنا التجارية.</p>
                <h2>٥. اتصل بنا</h2>
                <p>إذا كانت لديك أسئلة أو تعليقات حول هذه السياسة، يمكنك مراسلتنا على: {siteConfig.email}</p>
              </>
            ) : (
              <>
                <h2>1. Introduction</h2>
                <p>Welcome to Amanah Business Services. We are committed to protecting your personal data and your right to privacy.</p>
                <h2>2. Information We Collect</h2>
                <p>We collect personal information that you provide to us when you express an interest in obtaining information about us or our products and services, such as your name, email address, and phone number.</p>
                <h2>3. How We Use Your Information</h2>
                <p>We use personal information collected via our website for several purposes, including to provide and deliver the services you request, and to communicate with you.</p>
                <h2>4. Sharing Your Information</h2>
                <p>We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.</p>
                <h2>5. Contact Us</h2>
                <p>If you have questions or comments about this policy, you may email us at {siteConfig.email}.</p>
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
