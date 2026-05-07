"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/data";

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-50 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 opacity-60" />

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-5">
            Knowledge Base
          </span>
          <h2 className="text-3xl lg:text-5xl font-black text-dark mb-6 leading-tight">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-base lg:text-lg text-text-secondary leading-relaxed">
            Find answers to common questions about starting and operating a
            business in Qatar.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-5 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <div
                className={`bg-white rounded-2xl border transition-all duration-300 ${
                  openIndex === index
                    ? "border-primary/20 shadow-lg shadow-primary/5"
                    : "border-border hover:border-primary/10"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between gap-6 p-6 lg:p-8 text-left group/btn"
                  aria-expanded={openIndex === index}
                >
                  <h3 className={`text-base lg:text-lg font-bold transition-colors ${
                    openIndex === index ? "text-primary" : "text-dark group-hover/btn:text-primary"
                  }`}>
                    {faq.question}
                  </h3>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    openIndex === index ? "bg-primary text-white rotate-180 shadow-lg shadow-primary/20" : "bg-primary-50 text-primary group-hover/btn:bg-primary/10"
                  }`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 lg:px-8 lg:pb-8">
                    <p className="text-text-secondary leading-relaxed text-sm lg:text-base border-t border-border/50 pt-4">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
