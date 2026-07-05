"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Building2,
  FileCheck,
  Handshake,
  Scale,
  Languages,
  TrendingUp,
  Calculator,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { useTranslations } from "@/lib/i18n";

const iconMap: Record<string, React.ElementType> = {
  Building2,
  FileCheck,
  Handshake,
  Scale,
  Languages,
  TrendingUp,
  Calculator,
  ShieldCheck,
};

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t, locale, services } = useTranslations();

  const serviceImages = [
    "/company_formation.webp",
    "/pro.webp",
    "translation.webp",
    // "https://t3.ftcdn.net/jpg/03/47/46/86/360_F_347468662_7S9D5RgQb9iC8J98jH42O7EbJTREriOp.jpg",
    "/attestation.webp",
    "/sponsorship.webp",
    // "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop",
    "/legal.webp",
    "/consulting.webp",
  ];

  return (
    <section id="services" className="py-22 lg:py-14 bg-gradient-to-b from-[#fffefeff] to-[#F9F6F1] relative overflow-hidden" ref={ref}>
      <div className="container relative mx-auto z-10">
        {/* Section Header - Centered Editorial Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mt-8"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-6 h-[1px] bg-primary/20" />
            <span className="text-[10px] font-bold text-primary uppercase tracking-[0.3em]">{t("services.badge")}</span>
            <div className="w-6 h-[1px] bg-primary/20" />
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-[#0A2647] leading-[1.1] tracking-tight">
            {t("services.title")} <br />
            <span className="text-primary italic text-2xl lg:text-4xl block mt-2">{t("services.titleAccent")}</span>
          </h2>
        </motion.div>

        {/* Services Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.slice(0, 6).map((service, index) => {
            const Icon = iconMap[service.icon];
            const isHighlighted = index === 0;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  href={`/${locale}/services/${service.id}`}
                  className={`group block rounded-[2rem] p-4 transition-all duration-700 h-full shadow-sm hover:shadow-2xl hover:-translate-y-2 border border-slate-100 ${isHighlighted ? "bg-accent" : "bg-white"
                    }`}
                >
                  {/* Card Image Container (Inset Style) */}
                  <div className="relative aspect-[16/11] overflow-hidden rounded-[1.5rem] shadow-inner">
                    <img
                      src={serviceImages[index]}
                      alt={service.shortTitle}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    {isHighlighted && (
                      <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3 bg-[#0A2647] text-white text-[8px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                        {locale === "ar" ? "الأكثر طلباً" : "Most Requested"}
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="pt-6 pb-2 px-2 text-start">
                    <div className="flex items-center gap-2 mb-3">
                      <Icon className={`w-4 h-4 ${isHighlighted ? "text-[#0A2647]" : "text-primary"}`} />
                      <span className={`text-[9px] font-black uppercase tracking-[0.2em] ${isHighlighted ? "text-[#0A2647]/60" : "text-slate-400"}`}>
                        {index % 2 === 0
                          ? (locale === "ar" ? "شركات" : "Corporate")
                          : (locale === "ar" ? "عمليات" : "Operations")}
                      </span>
                    </div>

                    <h3 className={`text-xl font-black mb-6 leading-tight ${isHighlighted ? "text-[#0A2647]" : "text-[#0A2647]"}`}>
                      {service.shortTitle}
                    </h3>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-100/10">
                      <span className={`text-[9px] font-black uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all ${isHighlighted ? "text-[#0A2647]" : "text-primary"}`}>
                        {t("services.learnMore")} <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
