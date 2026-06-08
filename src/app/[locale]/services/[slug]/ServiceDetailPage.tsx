"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { getServices, siteConfig } from "@/lib/data";
import { getUiTranslations } from "@/lib/i18n-translations";
import {
  CheckCircle, ArrowRight, Building2, FileCheck, Handshake,
  Scale, Languages, TrendingUp, Calculator, ShieldCheck,
  Clock, Zap, MessageSquare, Phone
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Building2,
  FileCheck,
  Handshake,
  Scale,
  Languages,
  TrendingUp,
  Calculator,
  ShieldCheck
};

interface ServiceDetailPageProps {
  service: ReturnType<typeof getServices>[0];
  locale: string;
}

export default function ServiceDetailPage({ service, locale }: ServiceDetailPageProps) {
  const t = getUiTranslations(locale);
  const isRtl = locale === "ar";
  const ref = useRef(null);
  const sidebarRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const allServices = getServices(locale);
  const otherServices = allServices.filter((s) => s.id !== service.id);
  const Icon = iconMap[service.icon];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      name: "Amanah Business Services",
      url: "https://amanahbusiness.qa",
    },
    areaServed: { "@type": "Country", name: "Qatar" },
  };

  return (
    <div className="bg-[#FAFAFA]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHeader
        title={service.title}
        subtitle={service.subtitle}
        breadcrumbs={[
          { label: t("nav.home"), href: `/${locale}` },
          { label: t("nav.services"), href: `/${locale}/services` },
          { label: service.shortTitle },
        ]}
      />

      <section className="py-24 lg:py-32 relative overflow-hidden" ref={ref}>
        {/* Subtle Background Pattern */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#001a3f]/[0.01] pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Main Content Area */}
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                {/* Intro Section */}
                <div className="mb-16">
                  <div className={`flex items-center gap-6 mb-10 ${isRtl ? "flex-row-reverse" : ""}`}>
                    <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-2xl md:rounded-[2rem] bg-[#001a3f] flex items-center justify-center shadow-2xl shadow-blue-900/20 group">
                      <Icon className="w-8 h-8 md:w-10 md:h-10 text-accent transition-transform group-hover:scale-110" />
                    </div>
                    <div className={isRtl ? "text-right" : ""}>
                      <span className="text-accent text-[10px] font-black uppercase tracking-[0.4em] mb-2 block">{isRtl ? "خدمة متميزة" : "Premium Service"}</span>
                      <h2 className="text-3xl lg:text-5xl font-black text-[#0A2647] tracking-tight uppercase">{service.title}</h2>
                    </div>
                  </div>

                  <div className={`prose prose-lg max-w-none text-slate-500 leading-relaxed mb-12 py-2 ${isRtl ? "border-r-4 border-accent/20 pr-8 text-right" : "border-l-4 border-accent/20 pl-8"}`}>
                    <p className="text-lg">{service.description}</p>
                  </div>
                </div>

                {/* Key Features / Offerings */}
                <div className="mb-8">
                  <div className={`flex items-center gap-3 mb-10 ${isRtl ? "flex-row-reverse" : ""}`}>
                    <div className="w-10 h-[1px] bg-accent" />
                    <h3 className="text-xl font-black text-[#0A2647] uppercase tracking-tighter">{isRtl ? "الخدمات الجوهرية" : "Core Offerings"}</h3>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    {service.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.05 }}
                        className={`flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 group ${isRtl ? "flex-row-reverse text-right" : ""}`}
                      >
                        <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-accent transition-colors">
                          <CheckCircle className="w-4 h-4 text-accent group-hover:text-white" />
                        </div>
                        <span className="text-sm text-slate-600 font-bold uppercase tracking-wide group-hover:text-[#0A2647] transition-colors">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Value Proposition Banner */}
                <div className="relative rounded-[3rem] overflow-hidden bg-[#001a3f] p-12 lg:p-16 text-white group mb-8">
                  <div className="absolute inset-0 hero-grid opacity-10" />
                  <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[100px] -z-0 translate-x-1/3 -translate-y-1/3" />

                  <div className="relative z-10">
                    <h3 className="text-2xl lg:text-3xl font-black mb-10 tracking-tight uppercase">
                      {isRtl ? (
                        <>ميزة أمانة لخدمة <span className="text-accent">{service.shortTitle}</span></>
                      ) : (
                        <>The Amanah Advantage for <span className="text-accent">{service.shortTitle}</span></>
                      )}
                    </h3>

                    <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8">
                      {service.benefits.map((benefit, i) => (
                        <div key={i} className={`flex items-start gap-4 group/item ${isRtl ? "flex-row-reverse" : ""}`}>
                          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-accent transition-colors">
                            <ShieldCheck className="w-5 h-5 text-accent group-hover/item:text-[#001a3f]" />
                          </div>
                          <span className={`text-white/70 text-sm font-medium leading-relaxed group-hover/item:text-white transition-colors ${isRtl ? "text-right" : ""}`}>
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Security Spotlight (Conditional for Translation & Attestation) - MOBILE ONLY */}
                {(service.id === "translation" || service.id === "attestation") && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-8 rounded-[2.5rem] bg-accent/5 border border-accent/20 relative overflow-hidden lg:hidden"
                  >
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                      <ShieldCheck className="w-32 h-32 text-accent" />
                    </div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 rounded-lg bg-accent text-white">
                          <ShieldCheck className="w-5 h-5" />
                        </div>
                        <h4 className="text-lg font-black text-[#0A2647] uppercase tracking-tighter">Secure Document Protocol</h4>
                      </div>
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        At Amanah, we understand that your documents often contain sensitive corporate or personal data. Our document handling process is governed by strict **ISO-standard confidentiality protocols**. Every digital file is encrypted, and physical documents are handled within a secure, monitored environment.
                      </p>
                      <ul className="grid sm:grid-cols-2 gap-4">
                        {[
                          "Non-Disclosure Agreements (NDA) with all linguists",
                          "End-to-end encryption for all digital transmissions",
                          "Secure data deletion post-project completion",
                          "Restricted access to sensitive legal documents"
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-sm font-bold text-[#0A2647]">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </div>

            {/* Sidebar Controls */}
            <div className="lg:col-span-4" ref={sidebarRef}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="sticky top-32 space-y-8"
              >
                {/* Premium Contact Widget */}
                <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-2xl shadow-slate-200/50 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2" />

                  <div className={`relative z-10 ${isRtl ? "text-right" : ""}`}>
                    <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                      <Zap className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-black text-[#0A2647] mb-4 uppercase tracking-tighter">{isRtl ? "بدء سريع" : "Fast-Track Setup"}</h3>
                    <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                      {isRtl
                        ? `تشاور مع خبرائنا في ${service.shortTitle} اليوم وتخلص من التأخيرات البيروقراطية.`
                        : `Consult with our ${service.shortTitle} experts today and skip the bureaucratic delays.`}
                    </p>

                    <div className="space-y-4">
                      <Link
                        href={`/${locale}/contact`}
                        className={`flex items-center justify-center gap-3 w-full py-4 bg-[#001a3f] text-white font-black rounded-2xl hover:bg-accent transition-all duration-300 uppercase text-[10px] tracking-widest shadow-xl shadow-blue-900/10 ${isRtl ? "flex-row-reverse" : ""}`}
                      >
                        {isRtl ? "استشارة مجانية" : "Free Consultation"} <ArrowRight className={`w-4 h-4 ${isRtl ? "rotate-180" : ""}`} />
                      </Link>

                      <div className="grid grid-cols-2 gap-3">
                        <a
                          href={`https://wa.me/${siteConfig.whatsapp.replace("+", "")}`}
                          target="_blank"
                          className="flex items-center justify-center gap-2 py-3 bg-[#FAFAFA] text-[#0A2647] font-bold rounded-xl border border-slate-100 hover:border-accent/30 transition-all text-[10px] tracking-wide"
                        >
                          <MessageSquare className="w-3.5 h-3.5 text-accent" /> {isRtl ? "واتساب" : "WhatsApp"}
                        </a>
                        <a
                          href={`tel:${siteConfig.phone}`}
                          className="flex items-center justify-center gap-2 py-3 bg-[#FAFAFA] text-[#0A2647] font-bold rounded-xl border border-slate-100 hover:border-accent/30 transition-all text-[10px] tracking-wide"
                        >
                          <Phone className="w-3.5 h-3.5 text-accent" /> {isRtl ? "اتصل بنا" : "Call Us"}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Vertical Service Navigation */}
                <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-xl shadow-slate-200/40">
                  <div className={`flex items-center gap-3 mb-8 ${isRtl ? "flex-row-reverse" : ""}`}>
                    <div className="w-8 h-[2px] bg-accent" />
                    <h3 className="text-sm font-black text-[#0A2647] uppercase tracking-widest">{isRtl ? "خدمات أخرى" : "More Solutions"}</h3>
                  </div>

                  <div className="space-y-3">
                    {otherServices.map((s) => {
                      const SIcon = iconMap[s.icon];
                      return (
                        <Link
                          key={s.id}
                          href={`/${locale}/services/${s.id}`}
                          className={`flex items-center gap-4 p-4 rounded-2xl bg-[#FAFAFA] border border-transparent hover:border-accent/20 hover:bg-white hover:shadow-xl hover:shadow-accent/5 transition-all duration-500 group ${isRtl ? "flex-row-reverse" : ""}`}
                        >
                          <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center group-hover:bg-[#001a3f] transition-all">
                            <SIcon className="w-5 h-5 text-accent group-hover:text-white transition-colors" />
                          </div>
                          <span className="text-xs font-black text-[#0A2647] uppercase tracking-tighter group-hover:text-accent transition-colors">
                            {s.shortTitle}
                          </span>
                          <ArrowRight className={`w-3.5 h-3.5 text-accent ${isRtl ? "mr-auto rotate-180 translate-x-4 group-hover:-translate-x-0" : "ml-auto -translate-x-4 group-hover:translate-x-0"} opacity-0 group-hover:opacity-100 transition-all`} />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Security Spotlight (Conditional for Translation & Attestation) - DESKTOP ONLY */}
          {(service.id === "translation" || service.id === "attestation") && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 p-8 lg:p-12 rounded-[2.5rem] bg-accent/5 border border-accent/20 relative overflow-hidden max-w-4xl mx-auto hidden lg:block"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <ShieldCheck className="w-32 h-32 text-accent" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-accent text-white">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-black text-[#0A2647] uppercase tracking-tighter">Secure Document Protocol</h4>
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  At Amanah, we understand that your documents often contain sensitive corporate or personal data. Our document handling process is governed by strict **ISO-standard confidentiality protocols**. Every digital file is encrypted, and physical documents are handled within a secure, monitored environment.
                </p>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Non-Disclosure Agreements (NDA) with all linguists",
                    "End-to-end encryption for all digital transmissions",
                    "Secure data deletion post-project completion",
                    "Restricted access to sensitive legal documents"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm font-bold text-[#0A2647]">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
