"use client";

import React, { createContext, useContext } from "react";
import { getUiTranslations } from "./i18n-translations";
import {
  getSiteConfig,
  getServices,
  getStats,
  getProcessSteps,
  getTestimonials,
  getFaqs,
  getWhyQatar,
  getBlogPosts,
} from "./data";

export type Locale = "en" | "ar";

const LocaleContext = createContext<Locale>("en");

export function LocaleProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  return (
    <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}

// Client-side hook resolving translation and data
export function useTranslations() {
  const locale = useLocale();
  return getTranslations(locale);
}

// Core helper that resolves translations and datasets
export function getTranslations(locale: Locale) {
  const t = getUiTranslations(locale);
  const isAr = locale === "ar";

  // About page specific structures
  const aboutData = {
    values: [
      {
        id: "trust",
        title: isAr ? "الثقة والشفافية" : "Trust & Transparency",
        desc: isAr
          ? "نبني علاقات طويلة الأمد من خلال التواصل الصادق والعمليات الشفافة."
          : "We build lasting relationships through honest communication and transparent processes.",
        color: "from-blue-500 to-cyan-400",
      },
      {
        id: "excellence",
        title: isAr ? "التميز" : "Excellence",
        desc: isAr
          ? "نسعى لتحقيق أعلى المعايير في كل خدمة نقدمها لعملائنا."
          : "We strive for the highest standards in every service we deliver to our clients.",
        color: "from-amber-400 to-orange-500",
      },
      {
        id: "client",
        title: isAr ? "العميل أولاً" : "Client-First Approach",
        desc: isAr
          ? "نجاحك هو أولويتنا. نحن نصمم حلولنا لتناسب احتياجات عملك الفريدة."
          : "Your success is our priority. We tailor our solutions to your unique business needs.",
        color: "from-rose-500 to-pink-500",
      },
      {
        id: "knowledge",
        title: isAr ? "المعرفة بالأنظمة" : "Expert Knowledge",
        desc: isAr
          ? "فهم عميق وتحليلي للإطار القانوني والتنظيمي وبيئة الأعمال في قطر."
          : "Deep understanding of Qatar's regulatory landscape and business environment.",
        color: "from-emerald-500 to-teal-400",
      },
    ],
    milestones: [
      {
        year: "2015",
        title: isAr ? "التأسيس" : "Founded",
        desc: isAr
          ? "تأسيس أمانة لخدمات الأعمال في الدوحة، قطر."
          : "Amanah Business Services established in Doha, Qatar.",
      },
      {
        year: "2017",
        title: isAr ? "500+ مشروع" : "500+ Projects",
        desc: isAr
          ? "الوصول إلى إنجاز 500 مشروع تأسيس أعمال بنجاح."
          : "Reached 500 successfully completed business setup projects.",
      },
      {
        year: "2019",
        title: isAr ? "نمو الفريق" : "Team Growth",
        desc: isAr
          ? "توسيع فريق العمل ليضم أكثر من 30 متخصصاً خبيراً."
          : "Expanded team to 30+ dedicated professionals.",
      },
      {
        year: "2021",
        title: isAr ? "1000+ مشروع" : "1000+ Projects",
        desc: isAr
          ? "تجاوز 1000 مشروع منجز بنسبة رضا عملاء بلغت 98٪."
          : "Crossed 1000 projects with 98% client satisfaction.",
      },
      {
        year: "2023",
        title: isAr ? "فريق عمل 50+" : "50+ Team",
        desc: isAr
          ? "نمو الفريق لأكثر من 50 عضواً مع إطلاق خدمات جديدة متكاملة."
          : "Team grew to 50+ with new service verticals.",
      },
      {
        year: "2025",
        title: isAr ? "2000+ مشروع" : "2000+ Projects",
        desc: isAr
          ? "الوصول لإنجاز أكثر من 2000 مشروع بنجاح مع فريق يضم 50+ متخصصاً."
          : "Milestone of 2000+ projects and 50+ team members.",
      },
    ],
    highlights: [
      { key: "rate", label: isAr ? "معدل النجاح" : "Success Rate", value: "99%" },
      { key: "clients", label: isAr ? "العملاء من الشركات" : "Corporate Clients", value: "2000+" },
      { key: "response", label: isAr ? "سرعة الاستجابة" : "Response Time", value: isAr ? "< ساعتين" : "< 2h" },
      { key: "speed", label: isAr ? "سرعة التأسيس" : "Setup Speed", value: isAr ? "الأسرع" : "Fastest" },
    ],
  };

  return {
    t,
    locale,
    siteConfig: getSiteConfig(locale),
    services: getServices(locale),
    stats: getStats(locale),
    processSteps: getProcessSteps(locale),
    testimonials: getTestimonials(locale),
    faqs: getFaqs(locale),
    whyQatar: getWhyQatar(locale),
    blogPosts: getBlogPosts(locale),
    ...aboutData,
  };
}
