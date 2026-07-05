"use client";

import { motion } from "framer-motion";
import { getBlogPosts } from "@/lib/data";
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getUiTranslations } from "@/lib/i18n-translations";

interface BlogPostDetailPageProps {
  post: ReturnType<typeof getBlogPosts>[0];
  locale: string;
}

export default function BlogPostDetailPage({ post, locale }: BlogPostDetailPageProps) {
  const t = getUiTranslations(locale);
  const isRtl = locale === "ar";
  const dateLocale = isRtl ? "ar-QA" : "en-US";

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          url: window.location.href,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert(isRtl ? "تم نسخ الرابط بنجاح!" : "Link copied to clipboard!");
      } catch (error) {
        console.error("Error copying link:", error);
      }
    }
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    image: [post.image],
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "Amanah Business Services",
    },
    publisher: {
      "@type": "Organization",
      name: "Amanah Business Services",
      logo: {
        "@type": "ImageObject",
        url: "https://amanahbusiness.qa/Amanah Icon.png",
      },
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* Custom Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-900">
        <Image src={post.image} alt={post.title} fill className="object-cover opacity-30" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
        <div className="container mx-auto relative z-10 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Link href={`/${locale}/blog`} className="inline-flex items-center gap-2 text-primary-200 hover:text-primary transition-colors mb-6 text-sm font-semibold">
                <ArrowLeft className={`w-4 h-4 ${isRtl ? "rotate-180" : ""}`} /> {t("blog.backToBlog")}
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
              <div className="flex items-center justify-center gap-2 mb-6">
                <span className="px-3 py-1 rounded-full bg-primary text-white text-xs font-bold tracking-wider uppercase shadow-lg">
                  {post.category}
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {post.title}
              </h1>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-wrap items-center justify-center gap-6 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-primary" />
                <span>{t("blog.team")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                <span>{new Date(post.date).toLocaleDateString(dateLocale, { month: "long", day: "numeric", year: "numeric" })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>{post.readTime}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:pt-24 lg:pb-12 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Content Placeholder */}
            <div className={`prose prose-lg max-w-none text-text-secondary leading-relaxed mb-12 ${isRtl ? "text-right" : ""}`}>
              <p className="text-xl text-dark font-medium mb-8">
                {post.excerpt}
              </p>

              {/* In-content Layout */}
              <div className={`flex flex-col md:flex-row gap-8 items-start mb-12 ${isRtl ? "md:flex-row-reverse" : ""}`}>
                <div className="relative w-full md:w-5/12 h-72 md:h-auto md:aspect-[4/5] rounded-3xl overflow-hidden shadow-xl shrink-0 mt-2">
                  <Image src={post.image} alt={post.title} fill className="object-cover" />
                </div>
                <div className="flex-1">
                  <p>
                    {isRtl
                      ? "يتطلب إنشاء شركة في قطر فهماً واضحاً للقوانين واللوائح المحلية. سواء كنت تبحث عن ملكية أجنبية بنسبة 100٪ أو ترتيب رعاية محلية، فإن العملية تتضمن عدة خطوات حاسمة مع وزارات حكومية مختلفة."
                      : "Setting up a business in Qatar requires a clear understanding of the local laws and regulations. Whether you are looking for 100% foreign ownership or a local sponsorship arrangement, the process involves several critical steps with various government ministries."}
                  </p>
                  <h3 className="text-dark font-bold text-2xl mt-8 mb-4">
                    {isRtl ? "فهم البيئة القانونية" : "Understanding the Legal Landscape"}
                  </h3>
                  <p>
                    {isRtl
                      ? "تعتبر وزارة التجارة والصناعة (MOCI) الجهة الرئيسية المسؤولة عن تسجيل الشركات. أتاحت الإصلاحات الأخيرة للمستثمرين الدوليين الدخول إلى السوق بسهولة أكبر، لا سيما مع إصدار قانون الاستثمار الجديد الذي يتيح الملكية الكاملة في قطاعات رئيسية عديدة."
                      : "The Ministry of Commerce and Industry (MOCI) is the primary body responsible for company registrations. Recent reforms have made it easier than ever for international investors to enter the market, especially with the introduction of the new Investment Law which permits full ownership in several key sectors."}
                  </p>
                </div>
              </div>
              <blockquote className={`border-primary pl-6 py-2 my-8 italic text-dark bg-primary-50 rounded-r-xl ${isRtl ? "border-r-8 pr-6 pl-0 rounded-r-none rounded-l-xl" : "border-l-8"}`}>
                {isRtl
                  ? "«بيئة الأعمال في قطر مصممة لتكون صديقة للمستثمر، وتوفر منصة مستقرة وآمنة للنمو العالمي.»"
                  : "\"Qatar's business environment is designed to be investor-friendly, providing a stable and secure platform for global growth.\""}
              </blockquote>
              <h3 className="text-dark font-bold text-2xl mt-10 mb-4">
                {isRtl ? "خطوات أساسية للنجاح" : "Key Steps to Success"}
              </h3>
              <ul className={`list-disc space-y-2 ${isRtl ? "pr-6 pl-0" : "pl-6"}`}>
                <li>{isRtl ? "حدد نشاطك التجاري الأساسي والهيكل القانوني المناسب." : "Identify your primary business activity and appropriate legal structure."}</li>
                <li>{isRtl ? "احجز اسم تجارتك المميز واحصل على الموافقات الأولية." : "Reserve your unique trade name and obtain initial approvals."}</li>
                <li>{isRtl ? "أعد وثائق التأسيس ووقّعها أمام كاتب العدل." : "Draft and notarize the Articles of Association (AOA)."}</li>
                <li>{isRtl ? "احصل على مقر تجاري فعلي ورخصة التجارة من البلدية." : "Secure a physical office space and obtain the Municipality trade license."}</li>
                <li>{isRtl ? "أكمل التسجيل الضريبي وافتح حسابك المصرفي التجاري." : "Complete your tax registration and establish your corporate bank account."}</li>
              </ul>
              <p className="mt-8">
                {isRtl
                  ? "في أمانة لخدمات الأعمال، نتخصص في التعامل مع هذه التعقيدات حتى تتمكن من التركيز على جوهر عملك. يقدم فريقنا من الخبراء الدعم الشامل من البداية إلى النهاية، لضمان انطلاقة سلسة ومتوافقة مع جميع الأنظمة."
                  : "At Amanah Business Services, we specialize in handling these complexities so you can focus on your core business. Our team of experts provides end-to-end support, ensuring a smooth and compliant setup."}
              </p>
            </div>

            {/* Footer / Share */}
            <div className={`flex items-center justify-between pt-10 border-t border-border ${isRtl ? "flex-row-reverse" : ""}`}>
              <Link href={`/${locale}/blog`} className={`flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all ${isRtl ? "flex-row-reverse" : ""}`}>
                <ArrowLeft className={`w-4 h-4 ${isRtl ? "rotate-180" : ""}`} />
                {t("blog.backToBlog")}
              </Link>
              <div className={`flex items-center gap-4 ${isRtl ? "flex-row-reverse" : ""}`}>
                <span className="text-sm font-medium text-text-secondary">{t("blog.share")}</span>
                <button
                  onClick={handleShare}
                  title={t("blog.share")}
                  className="p-2 rounded-full bg-surface hover:bg-primary-50 text-text-secondary hover:text-primary transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
