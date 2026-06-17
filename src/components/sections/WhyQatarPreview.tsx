"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Globe, Percent, Shield, Landmark, TrendingUp, Target, ArrowRight } from "lucide-react";
import { useTranslations } from "@/lib/i18n";

const iconMap: Record<string, React.ElementType> = { Globe, Percent, Shield, Landmark, TrendingUp, Target };

export default function WhyQatarPreview() {
  const { t, locale, whyQatar } = useTranslations();

  return (
    <section className="py-16 lg:py-20 bg-[#0A2647] relative overflow-hidden">
      {/* Background Visuals */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/qatar_night_skyline_premium_1778507387676.png"
          alt="Doha Night Skyline"
          className="w-full h-full object-cover opacity-10 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2647] via-[#0A2647]/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A2647] via-transparent to-[#0A2647]/50" />
        <div className="absolute inset-0 hero-grid opacity-[0.02]" />

        {/* Animated Glowing Orbs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-accent rounded-full blur-[150px] mix-blend-screen pointer-events-none"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[30%] -right-[10%] w-[50%] h-[50%] bg-blue-500 rounded-full blur-[150px] mix-blend-screen pointer-events-none"
        />
      </div>

      <div className="container relative z-10 mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-center">

          {/* Left Side: Strategic Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 text-start relative z-10"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-[10px] font-black text-white uppercase tracking-[0.3em]">{t("whyQatar.badge")}</span>
            </div>

            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-6 leading-[1.1] tracking-tight">
              {t("whyQatar.title")} <br />
              <span className="relative inline-block mt-2">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-accent via-[#FDE08B] to-accent">
                  {t("whyQatar.titleAccent")}
                </span>
                <div className="absolute -bottom-2 left-0 w-full h-[6px] bg-accent/20 rounded-full blur-[2px]" />
              </span>
            </h2>

            <div className="space-y-4 mb-8 relative">
              <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-gradient-to-b from-accent/50 via-accent/10 to-transparent rounded-full rtl:left-auto rtl:right-0" />
              <p className="text-lg text-slate-300 leading-relaxed font-medium pl-6 rtl:pl-0 rtl:pr-6">
                {t("whyQatar.desc1")}
              </p>
              <p className="text-base text-slate-400 leading-relaxed pl-6 rtl:pl-0 rtl:pr-6">
                {t("whyQatar.desc2")}
              </p>
            </div>

            <Link href={`/${locale}/why-qatar`} className="group relative inline-flex items-center gap-4 px-8 py-4 bg-white text-[#0A2647] font-black rounded-2xl overflow-hidden transition-all duration-500 shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_40px_rgba(197,160,89,0.3)] hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-[#FDE08B] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10 uppercase text-[11px] tracking-widest group-hover:text-[#0A2647] transition-colors duration-500">
                {t("whyQatar.cta")}
              </span>
              <div className="relative z-10 w-8 h-8 rounded-full bg-[#0A2647]/5 flex items-center justify-center group-hover:bg-[#0A2647]/20 transition-colors duration-500">
                <ArrowRight className="w-4 h-4 text-[#0A2647] transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
              </div>
            </Link>
          </motion.div>

          {/* Right Side: The Premium Bento Matrix */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {whyQatar.slice(0, 4).map((item, index) => {
                const Icon = iconMap[item.icon];

                if (index === 0) {
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-20px" }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="md:col-span-2 group relative p-6 md:p-8 rounded-[2rem] border border-white/10 bg-white/[0.02] backdrop-blur-xl hover:bg-white/[0.04] transition-all duration-700 overflow-hidden text-start"
                    >
                      <div className="absolute -right-20 -top-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-all duration-700" />
                      <div className="absolute right-0 bottom-0 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none translate-x-1/4 translate-y-1/4 rtl:-scale-x-100">
                      </div>

                      <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start md:items-center">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-[#B8860B] flex items-center justify-center shrink-0 shadow-[0_0_30px_rgba(197,160,89,0.3)]">
                          <Icon className="w-7 h-7 text-[#0A2647]" />
                        </div>
                        <div>
                          <h3 className="text-xl md:text-2xl font-black text-white mb-2 tracking-tight group-hover:text-accent transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-sm md:text-base text-slate-400 leading-relaxed max-w-xl">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                }

                if (index === 1) {
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-20px" }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="group relative p-6 md:p-8 rounded-[2rem] border border-white/10 bg-white/[0.02] backdrop-blur-xl hover:bg-white/[0.04] transition-all duration-700 overflow-hidden text-start"
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/[0.02] opacity-0 group-hover:opacity-100 transition-all duration-700" />
                      <div className="relative z-10">
                        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-accent/30 transition-all duration-500">
                          <Icon className="w-6 h-6 text-white group-hover:text-accent transition-colors" />
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-white mb-2 tracking-tight">
                          {item.title}
                        </h3>
                        <p className="text-sm text-slate-400 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                }

                if (index === 2) {
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-20px" }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="group relative p-6 md:p-8 rounded-[2rem] bg-accent border border-accent-light overflow-hidden shadow-[0_10px_40px_rgba(197,160,89,0.2)] hover:shadow-[0_10px_60px_rgba(197,160,89,0.4)] hover:-translate-y-2 transition-all duration-500 text-start"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-50" />
                      <div className="absolute -right-8 -top-8 w-32 h-32 border-4 border-[#0A2647]/10 rounded-full group-hover:scale-150 transition-transform duration-700" />
                      <div className="absolute -right-4 -top-4 w-16 h-16 border-4 border-[#0A2647]/10 rounded-full group-hover:scale-150 transition-transform duration-700 delay-75" />

                      <div className="relative z-10">
                        <div className="w-12 h-12 rounded-xl bg-[#0A2647]/10 backdrop-blur-md flex items-center justify-center mb-6 border border-[#0A2647]/10 group-hover:scale-110 transition-transform duration-500">
                          <Icon className="w-6 h-6 text-[#0A2647]" />
                        </div>
                        <h3 className="text-lg md:text-xl font-black text-[#0A2647] mb-2 tracking-tight">
                          {item.title}
                        </h3>
                        <p className="text-sm text-[#0A2647]/80 leading-relaxed font-medium">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                }

                if (index === 3) {
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-20px" }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="md:col-span-2 group relative p-6 md:p-8 rounded-[2rem] border border-white/10 bg-gradient-to-r from-white/[0.03] to-transparent backdrop-blur-xl hover:from-white/[0.06] transition-all duration-700 overflow-hidden text-start"
                    >
                      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-accent/50 group-hover:bg-accent/10 transition-all duration-500 shrink-0">
                          <Icon className="w-5 h-5 text-slate-300 group-hover:text-accent" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white tracking-tight mb-2 group-hover:text-accent transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-sm text-slate-400 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                }

                return null;
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
