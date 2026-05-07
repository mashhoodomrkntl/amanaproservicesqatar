"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { processSteps } from "@/lib/data";

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-5">
            The Roadmap
          </span>
          <h2 className="text-3xl lg:text-5xl font-black text-dark mb-6 leading-tight">
            4 Simple Steps to <br />
            <span className="text-primary">Company Formation</span>
          </h2>
          <p className="text-base lg:text-lg text-text-secondary leading-relaxed">
            Our streamlined process ensures your business setup in Qatar is
            predictable, efficient, and fully compliant.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden xl:block absolute top-1/2 left-12 right-12 h-px border-t border-dashed border-primary/20 -translate-y-1/2" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative group h-full"
              >
                <div className="bg-white rounded-3xl p-10 border border-border hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 relative z-10 h-full flex flex-col items-center text-center">
                  {/* Step Number */}
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mb-8 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-primary/30 transition-all duration-500 group-hover:rotate-6">
                    <span className="text-3xl font-black text-white leading-none">
                      {String(step.step).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-dark mb-4 group-hover:text-primary transition-colors">
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
