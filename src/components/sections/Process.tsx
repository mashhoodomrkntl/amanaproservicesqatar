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
          <div className="hidden md:block absolute top-6 left-6 right-6 h-px border-t-2 border-dashed border-primary/20 z-0" />
          
          {/* Mobile Vertical Line */}
          <div className="md:hidden absolute top-6 bottom-6 left-6 rtl:left-auto rtl:right-6 w-px border-l-2 border-dashed border-primary/20 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group flex md:block items-start gap-6 md:gap-0"
              >
                {/* Step Node */}
                <div className="w-12 h-12 shrink-0 rounded-full bg-white border-[3px] border-surface shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center justify-center relative z-10 group-hover:scale-110 group-hover:border-accent transition-all duration-500">
                  <span className="text-sm font-black text-primary">
                    {String(step.step).padStart(2, "0")}
                  </span>
                  <div className="absolute inset-0 rounded-full bg-accent/20 scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </div>

                {/* Content (Borderless Infographic Style) */}
                <div className="mt-1 md:mt-8 flex-1 text-start">
                  <h3 className="text-xl font-black text-dark mb-3 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
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
