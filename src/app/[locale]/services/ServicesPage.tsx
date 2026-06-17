"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { useTranslations } from "@/lib/i18n";
import {
  Building2, FileCheck, Handshake, Scale, Languages,
  TrendingUp, Calculator, ArrowRight, CheckCircle,
  Star, ShieldCheck, Zap
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

const serviceImages: Record<string, string> = {
  "company-formation": "/company_formation.webp",
  "pro-services": "/pro.webp",
  "translation": "/translation.webp",
  "attestation": "/attestation.webp",
  "local-sponsorship": "/sponsorship.webp",
  "legal-consultation": "/legal.webp",
  "business-consultation": "/consulting.webp",
};

export default function ServicesPage() {
  const { t, locale, services } = useTranslations();
  const ref = useRef(null);
  const whyRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isWhyInView = useInView(whyRef, { once: true, margin: "-100px" });
  const isRtl = locale === "ar";

  const whyPillars = [
    {
      icon: ShieldCheck,
      title: isRtl ? "امتثال لا تهاون فيه" : "Uncompromising Compliance",
      desc: isRtl
        ? "كل خدمة تخضع للتحقق وفق أحدث القوانين واللوائح القطرية."
        : "Every service is vetted against the latest Qatari laws and regulations.",
    },
    {
      icon: Zap,
      title: isRtl ? "معالجة سريعة ومرنة" : "Agile Processing",
      desc: isRtl
        ? "نستفيد من شبكات متخصصة لتسليم الموافقات بسرعة تفوق متوسطات الصناعة."
        : "We leverage proprietary networks to deliver approvals faster than industry averages.",
    },
    {
      icon: Star,
      title: isRtl ? "نهج يضع العميل أولاً" : "Client-Centric Approach",
      desc: isRtl
        ? "أهدافك التجارية هي أولويتنا. نوفر دعماً شاملاً من البداية إلى النهاية."
        : "Your business goals are our priority. We provide end-to-end support.",
    },
  ];

  return (
    <div className="bg-[#FAFAFA]">
      <PageHeader
        title={isRtl ? "خبراتنا المتخصصة" : "Our Expertise"}
        subtitle={
          isRtl
            ? "حلول شاملة لتأسيس الأعمال مصممة للنجاح في السوق القطري الديناميكي."
            : "End-to-end business solutions engineered for success in Qatar's dynamic market."
        }
        breadcrumbs={[
          { label: t("nav.home"), href: `/${locale}` },
          { label: t("nav.services") },
        ]}
      />

      <section className="py-24 lg:py-32 relative overflow-hidden" ref={ref}>
        {/* Decorative Background */}
        <div className={`absolute top-0 ${isRtl ? "left-0 skew-x-12" : "right-0 -skew-x-12"} w-1/3 h-full bg-[#001a3f]/[0.02]`} />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group"
                >
                  <Link
                    href={`/${locale}/services/${service.id}`}
                    className="relative flex flex-col h-[400px] rounded-[2.5rem] bg-white border border-slate-100 hover:border-accent/30 shadow-sm hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500 overflow-hidden"
                  >
                    {/* Image Area */}
                    <div className="h-56 relative">
                      <img
                        src={serviceImages[service.id]}
                        alt={service.shortTitle}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-[#001a3f]/10 group-hover:bg-transparent transition-colors duration-500" />

                      {/* Floating Icon */}
                      <div className={`absolute -bottom-7 ${isRtl ? "right-8" : "left-8"} w-14 h-14 rounded-2xl bg-[#001a3f] flex items-center justify-center shadow-2xl group-hover:bg-accent group-hover:scale-110 transition-all duration-500 z-20`}>
                        {Icon && <Icon className="w-7 h-7 text-white" />}
                      </div>
                    </div>

                    <div className={`p-8 pt-12 flex flex-col h-full relative z-10 ${isRtl ? "items-end text-right" : ""}`}>
                      <h3 className="text-lg font-black text-[#0A2647] mb-2 group-hover:text-accent transition-colors leading-tight uppercase tracking-tighter">
                        {service.shortTitle}
                      </h3>

                      <p className="text-[13px] text-slate-500 leading-relaxed mb-4 line-clamp-2">
                        {service.subtitle}
                      </p>

                      <div className={`mt-auto flex items-center gap-2 text-[#0A2647] text-[10px] font-black uppercase tracking-[0.2em] ${isRtl ? "flex-row-reverse" : ""}`}>
                        <span className="relative overflow-hidden">
                          <span className="inline-block transition-transform duration-500 group-hover:-translate-y-full font-bold">
                            {isRtl ? "استعرض الخدمة" : "Explore Service"}
                          </span>
                          <span className="absolute top-0 left-0 inline-block transition-transform duration-500 translate-y-full group-hover:translate-y-0 text-accent font-bold">
                            {isRtl ? "عرض التفاصيل" : "Go To Details"}
                          </span>
                        </span>
                        <ArrowRight className={`w-4 h-4 transition-transform duration-500 group-hover:translate-x-2 text-accent ${isRtl ? "rotate-180 group-hover:-translate-x-2 group-hover:translate-x-0" : ""}`} />
                      </div>
                    </div>

                    {/* Background Index */}
                    <div className={`absolute top-4 ${isRtl ? "left-8" : "right-8"} text-5xl font-black text-[#0A2647]/[0.05] italic select-none group-hover:text-accent/[0.1] transition-colors`}>
                      0{i + 1}
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Service Ecosystem */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden" ref={whyRef}>
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
              animate={isWhyInView ? { opacity: 1, x: 0 } : {}}
              className={isRtl ? "order-2 text-right" : ""}
            >
              <span className="text-accent text-xs font-black uppercase tracking-[0.4em] mb-4 block">
                {isRtl ? "معيار التميز لدينا" : "Our Standard"}
              </span>
              <h2 className="text-4xl lg:text-5xl font-black text-[#0A2647] mb-8 leading-tight">
                {isRtl ? (
                  <>التميز في كل <br />
                    <span className="text-accent italic">معاملة</span></>
                ) : (
                  <>The Excellence in
                    Every <span className="text-accent italic">Transaction</span></>
                )}
              </h2>
              <p className="text-slate-500 text-lg mb-10 leading-relaxed">
                {isRtl
                  ? "أمانة لخدمات الأعمال لا تعالج الأوراق فحسب. نحن نصنع النجاح لعملائنا من خلال التزامنا بثلاثة ركائز تشغيلية أساسية."
                  : "Amanah Business Services doesn't just process paperwork. We engineer success for our clients through a commitment to three core operational pillars."}
              </p>

              <div className="space-y-6">
                {whyPillars.map((item, i) => (
                  <div key={i} className={`flex gap-5 group ${isRtl ? "flex-row-reverse" : ""}`}>
                    <div className="w-12 h-12 rounded-xl bg-[#FAFAFA] border border-slate-100 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                      <item.icon className="w-5 h-5 text-accent group-hover:text-white" />
                    </div>
                    <div className={isRtl ? "text-right" : ""}>
                      <h4 className="font-bold text-[#0A2647] mb-1">{item.title}</h4>
                      <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isWhyInView ? { opacity: 1, scale: 1 } : {}}
              className={`relative ${isRtl ? "order-1" : ""}`}
            >
              <div className="rounded-[3rem] overflow-hidden shadow-2xl relative aspect-square">
                <img
                  src="/trust.avif"
                  alt="Business Team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#001a3f]/20" />

                {/* Floating Achievement */}
                <div className={`absolute top-10 ${isRtl ? "left-10" : "right-10"} bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white/20 flex items-center gap-4`}>
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div className={isRtl ? "text-right" : ""}>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                      {isRtl ? "ثقة العملاء" : "Client Trust"}
                    </div>
                    <div className="text-lg font-black text-[#0A2647]">
                      {isRtl ? "٩٩.٨٪ نجاح" : "99.8% Success"}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
