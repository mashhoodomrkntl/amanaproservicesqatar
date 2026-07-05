"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { useTranslations } from "@/lib/i18n";
import {
  Globe, Percent, Shield, Landmark, TrendingUp, Target,
  ArrowRight, CheckCircle, Building2, Briefcase,
  GraduationCap, Heart, Cpu, Zap, Star, MapPin
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = { Globe, Percent, Shield, Landmark, TrendingUp, Target };

export default function WhyQatarPage() {
  const advantagesRef = useRef(null);
  const ownershipRef = useRef(null);
  const sectorsRef = useRef(null);
  const statsRef = useRef(null);

  const isAdvantagesInView = useInView(advantagesRef, { once: true, margin: "-100px" });
  const isOwnershipInView = useInView(ownershipRef, { once: true, margin: "-100px" });
  const isSectorsInView = useInView(sectorsRef, { once: true, margin: "-100px" });
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });

  const { t, locale, whyQatar } = useTranslations();

  const sectors = [
    { icon: Zap, name: locale === "ar" ? "الطاقة والنفط/الغاز" : "Energy & Oil/Gas", desc: locale === "ar" ? "أكبر مصدر للغاز الطبيعي المسال في العالم مع نمو هائل في قطاع الطاقة." : "World's largest LNG exporter with massive energy sector growth.", image: "/oilgas.webp" },
    { icon: Building2, name: locale === "ar" ? "العقارات" : "Real Estate", desc: locale === "ar" ? "بنية تحتية مزدهرة وتطوير عقاري فاخر للعديد من المشاريع الكبرى." : "Booming infrastructure and luxury property development.", image: "/realestate.webp" },
    { icon: Cpu, name: locale === "ar" ? "التكنولوجيا والاتصالات" : "Technology & IT", desc: locale === "ar" ? "اقتصاد رقمي متنامٍ مع مبادرات مدن ذكية رائدة مثل مشيرب ولوسيل." : "Growing digital economy with smart city initiatives like Msheireb.", image: "/tech.webp" },
    { icon: Heart, name: locale === "ar" ? "الرعاية الصحية" : "Healthcare", desc: locale === "ar" ? "قطاع رعاية صحية متوسع بمرافق حديثة وضمان صحي للجميع." : "Expanding healthcare sector with world-class facilities and insurance.", image: "/health.webp" },
    { icon: GraduationCap, name: locale === "ar" ? "التعليم" : "Education", desc: locale === "ar" ? "المدينة التعليمية ومؤسسات أكاديمية دولية متنامية ومرموقة." : "Education City and growing international academic institutions.", image: "/edu.webp" },
    { icon: Briefcase, name: locale === "ar" ? "الخدمات المالية" : "Finance", desc: locale === "ar" ? "يوفر مركز قطر للمال (QFC) منصة خدمات ببيئة عمل دولية متميزة." : "Qatar Financial Centre (QFC) offering international standards.", image: "/fin.webp" },
  ];

  const ownershipFeatures = [
    t("whyQatar.ownershipFeature1"),
    t("whyQatar.ownershipFeature2"),
    t("whyQatar.ownershipFeature3"),
    t("whyQatar.ownershipFeature4"),
  ];

  const strategicStats = [
    { value: "0%", label: locale === "ar" ? "ضريبة الدخل" : "Income Tax", icon: Percent },
    { value: "10%", label: locale === "ar" ? "ضريبة الشركات" : "Corporate Tax", icon: TrendingUp },
    { value: "#1", label: locale === "ar" ? "الدخل الفردي" : "GDP Per Capita", icon: Star },
    { value: "100%", label: locale === "ar" ? "نسبة التملك" : "Ownership", icon: Shield },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: t("nav.whyQatar"),
    description: locale === "ar" ? "اختبر بوابة التميز في الأعمال العالمية في قلب الشرق الأوسط." : "Experience the gateway to global business excellence in the heart of the Middle East.",
    publisher: {
      "@type": "Organization",
      name: "Amanah Business Services",
      url: "https://amanahbusiness.qa",
    },
  };

  return (
    <div className="bg-[#FAFAFA]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHeader
        title={t("nav.whyQatar")}
        subtitle={locale === "ar" ? "اختبر بوابة التميز في الأعمال العالمية في قلب الشرق الأوسط." : "Experience the gateway to global business excellence in the heart of the Middle East."}
        breadcrumbs={[{ label: t("nav.home"), href: `/${locale}` }, { label: t("nav.whyQatar") }]}
      />

      {/* Advantages Grid */}
      <section className="py-24 lg:py-16 relative overflow-hidden" ref={advantagesRef}>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent opacity-50" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isAdvantagesInView ? { opacity: 1, y: 0 } : {}}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <span className="text-accent text-xs font-black uppercase tracking-[0.4em] mb-4 block">{t("whyQatar.advantagesBadge")}</span>
            <h2 className="text-4xl lg:text-5xl font-black text-[#0A2647] mb-6">
              {locale === "ar" ? <>المزايا الاستثمارية في <span className="text-accent">دولة قطر</span></> : <>The Qatar <span className="text-accent">Advantage</span></>}
            </h2>
            <p className="text-slate-500 text-lg">{t("whyQatar.advantagesSubtitle")}</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyQatar.map((item, i) => {
              const Icon = iconMap[item.icon];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isAdvantagesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="p-8 rounded-3xl bg-white border border-slate-100 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/5 hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden text-start"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#FAFAFA] flex items-center justify-center mb-6 group-hover:bg-accent transition-all duration-500">
                    <Icon className="w-8 h-8 text-accent group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-extrabold text-[#0A2647] mb-4 group-hover:text-accent transition-colors">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm">{item.description}</p>

                  {/* Decorative background number */}
                  <div className="absolute -bottom-4 -right-4 rtl:-right-auto rtl:-left-4 text-8xl font-black text-[#0A2647]/[0.03] select-none pointer-events-none">
                    0{i + 1}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 100% Ownership Hero Section */}
      <section className="py-16 lg:py-12 bg-[#001a3f] relative overflow-hidden" ref={ownershipRef}>
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/ownership.webp"
            alt="Doha Skyline"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#001a3f]/88" />
        </div>
        <div className="absolute inset-0 hero-grid opacity-10" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isOwnershipInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto flex flex-col items-center text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-accent" />
              <span className="text-accent text-xs font-black uppercase tracking-[0.3em]">{t("whyQatar.ownershipBadge")}</span>
              <div className="w-8 h-[2px] bg-accent" />
            </div>

            <h2 className="text-4xl lg:text-5xl lg:leading-[1.2] font-black text-white mb-6">
              {locale === "ar" ? (
                <>
                  تملك أجنبي بنسبة <span className="text-accent">100٪</span>
                </>
              ) : (
                <>
                  100% Foreign <span className="text-accent">Ownership</span>
                </>
              )}
            </h2>

            <p className="text-white/70 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
              {t("whyQatar.ownershipDesc")}
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 w-full">
              {ownershipFeatures.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isOwnershipInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
                  className="flex flex-col items-center justify-center text-center gap-4 p-6 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-md hover:bg-white/[0.06] hover:border-accent/30 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <CheckCircle className="w-5 h-5 text-accent group-hover:text-[#001a3f] transition-colors" />
                  </div>
                  <span className="text-white/90 text-sm font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-4 px-10 py-5 bg-accent text-[#001a3f] font-black rounded-full hover:bg-white hover:shadow-[0_20px_50px_rgba(197,160,89,0.3)] hover:-translate-y-1 transition-all duration-300 uppercase text-xs tracking-widest group"
            >
              {t("whyQatar.ownershipCta")}
              <ArrowRight className="w-4 h-4 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Strategic Stats Banner */}
      <section className="py-12 bg-white border-y border-slate-100" ref={statsRef}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {strategicStats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isStatsInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="text-4xl font-black text-[#0A2647] mb-2 group-hover:text-accent transition-colors">{stat.value}</div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Thriving Sectors */}
      <section className="py-24 lg:py-16 bg-[#FAFAFA] relative overflow-hidden" ref={sectorsRef}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isSectorsInView ? { opacity: 1, y: 0 } : {}}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <span className="text-accent text-xs font-black uppercase tracking-[0.4em] mb-4 block">{t("whyQatar.statsBadge")}</span>
            <h2 className="text-4xl lg:text-5xl font-black text-[#0A2647] mb-6 tracking-tight">
              {locale === "ar" ? <>القطاعات <span className="text-accent">المزدهرة</span></> : <>Thriving <span className="text-accent">Industries</span></>}
            </h2>
            <p className="text-slate-500 text-lg">{t("whyQatar.statsSubtitle")}</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, i) => {
              const SectorIcon = sector.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isSectorsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group relative h-[400px] rounded-[2.5rem] overflow-hidden bg-[#001a3f]"
                >
                  <img
                    src={sector.image}
                    alt={sector.name}
                    className="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-40 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001a3f] via-[#001a3f]/20 to-transparent p-8 flex flex-col justify-end text-start">
                    <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center mb-6 lg:-translate-y-4 lg:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <SectorIcon className="w-6 h-6 text-[#001a3f]" />
                    </div>
                    <h3 className="text-2xl font-black text-white mb-3">{sector.name}</h3>
                    <p className="text-white/60 text-sm leading-relaxed max-w-[240px] lg:translate-y-4 lg:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                      {sector.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Map Section */}
      {/* <section className="py-8 bg-white relative overflow-hidden ">
        <div className="container mx-auto px-6">
          <div className="bg-[#001a3f] rounded-[1.5rem] lg:rounded-[3rem] p-8 lg:px-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200"
                alt="Global Map"
                className="w-full h-full object-cover grayscale"
              />
            </div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="text-start">
                <h2 className="text-3xl lg:text-4xl font-black text-white mb-6">
                  {locale === "ar" ? <>جاهز <span className="text-accent">للتوسع العالمي</span>؟</> : <>Ready to <span className="text-accent">Globalize</span>?</>}
                </h2>
                <p className="text-white/60 text-lg mb-8 leading-relaxed">
                  {t("whyQatar.globalDesc")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
                  <Link
                    href={`/${locale}/contact`}
                    className="px-8 py-4 bg-accent text-[#001a3f] font-black rounded-full hover:bg-white transition-all text-center uppercase text-xs tracking-widest"
                  >
                    {t("whyQatar.globalCta")}
                  </Link>
                  <div className="flex items-center gap-4 px-6 py-4 rounded-full border border-white/10 text-white/80">
                    <MapPin className="w-5 h-5 text-accent" />
                    <span className="text-sm font-bold uppercase tracking-widest">{locale === "ar" ? "الدوحة، قطر" : "Doha, Qatar"}</span>
                  </div>
                </div>
              </div>

              <div className="relative hidden lg:flex justify-center">
                <div className="w-64 h-64 lg:w-72 lg:h-72 bg-accent/10 rounded-full border border-accent/20 flex items-center justify-center animate-pulse">
                  <Globe className="w-32 h-32 text-accent opacity-30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
