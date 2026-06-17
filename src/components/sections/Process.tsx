"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslations } from "@/lib/i18n";

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t, locale, processSteps } = useTranslations();

  return (
    <section className="py-24 lg:py-32 bg-surface relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 dot-pattern opacity-[0.4]" />
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-light text-accent text-[10px] font-bold uppercase tracking-[0.2em] mb-5">
            {t("process.badge")}
          </span>
          <h2 className="text-3xl lg:text-5xl font-black text-dark mb-6 leading-tight">
            {t("process.title")}
          </h2>
          <p className="text-base lg:text-lg text-text-secondary leading-relaxed">
            {t("process.subtitle")}
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative mt-16 lg:mt-24">
          {/* Desktop Horizontal Line */}
          <div className="hidden md:block absolute top-6 left-6 right-6 h-[2px] bg-primary/10 z-0 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-accent"
              initial={{ width: "0%" }}
              animate={isInView ? { width: "100%" } : {}}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
            />
          </div>

          {/* Mobile Vertical Line */}
          <div className="md:hidden absolute top-0 bottom-0 left-[23px] w-[2px] bg-primary/10 z-0 rounded-full overflow-hidden rtl:left-auto rtl:right-[23px]">
            <motion.div
              className="w-full bg-accent"
              initial={{ height: "0%" }}
              animate={isInView ? { height: "100%" } : {}}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 md:gap-6 xl:gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" as const }}
                className="relative group block h-full"
              >
                {/* Desktop Step Node */}
                <div className="hidden md:flex w-12 h-12 shrink-0 rounded-full bg-white border-4 border-surface shadow-[0_8px_30px_rgb(0,0,0,0.12)] items-center justify-center relative z-10 group-hover:scale-110 group-hover:border-accent transition-all duration-500">
                  <span className="text-sm font-black text-primary group-hover:text-accent transition-colors">
                    {String(step.step).padStart(2, "0")}
                  </span>
                  <div className="absolute inset-0 rounded-full bg-accent/20 scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </div>

                {/* Mobile: Step row with node + card */}
                <div className="flex md:hidden gap-4 items-start pb-8">
                  {/* Mobile Step Node */}
                  <div className="flex flex-col items-center shrink-0 pt-1">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-accent to-[#B8860B] text-white flex items-center justify-center relative z-10 shadow-[0_4px_20px_rgba(197,160,89,0.35)] ring-4 ring-accent/10">
                      <span className="text-xs font-black">
                        {String(step.step).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  {/* Mobile Card */}
                  <div className="flex-1 text-start bg-gradient-to-br from-white to-slate-50/80 rounded-2xl border border-slate-100/80 shadow-[0_4px_24px_rgba(0,0,0,0.06)] relative overflow-hidden">
                    {/* Accent top line */}
                    <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-accent via-[#D4A843] to-accent/40 rounded-t-2xl" />

                    <div className="p-5 pt-5">
                      {/* Step label */}
                      <span className="inline-block text-[10px] font-bold uppercase tracking-[0.15em] text-accent/70 mb-2">
                        {t("process.badge")} {String(step.step).padStart(2, "0")}
                      </span>

                      <h3 className="text-[17px] font-black text-dark mb-2 leading-snug relative z-10">
                        {step.title}
                      </h3>
                      <p className="text-[13px] text-text-secondary leading-relaxed relative z-10">
                        {step.description}
                      </p>
                    </div>

                    {/* Decorative background number */}
                    <div className="absolute -right-2 -bottom-2 text-7xl font-black text-slate-100/60 pointer-events-none select-none leading-none">
                      {String(step.step).padStart(2, "0")}
                    </div>
                  </div>
                </div>

                {/* Desktop Content */}
                <div className="hidden md:flex md:mt-8 flex-1 text-start bg-white rounded-[2rem] p-6 lg:p-8 border border-slate-100 shadow-sm group-hover:shadow-2xl group-hover:shadow-accent/5 group-hover:-translate-y-2 transition-all duration-500 relative overflow-hidden h-auto md:h-[calc(100%-4rem)] flex-col">
                  {/* Large background number */}
                  <div className="absolute -right-4 -bottom-4 text-9xl font-black text-slate-50 opacity-50 pointer-events-none group-hover:text-accent/5 transition-colors duration-500 select-none">
                    {String(step.step).padStart(2, "0")}
                  </div>
                  <h3 className="text-xl font-black text-dark mb-4 group-hover:text-primary transition-colors relative z-10">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed relative z-10">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
