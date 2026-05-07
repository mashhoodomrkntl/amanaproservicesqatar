"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Globe, Percent, Shield, Landmark, TrendingUp, Target, ArrowRight } from "lucide-react";
import { whyQatar } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = { Globe, Percent, Shield, Landmark, TrendingUp, Target };

export default function WhyQatarPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden" ref={ref}>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-light rounded-full blur-3xl translate-x-1/2 translate-y-1/2 opacity-40" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary text-xs font-bold mb-5 tracking-widest uppercase">Why Qatar</span>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-dark mb-6 leading-tight">
              Why Invest in <span className="gradient-text">Qatar?</span>
            </h2>
            <p className="text-base lg:text-lg text-text-secondary leading-relaxed mb-6">
              Qatar is one of the fastest-growing business hubs in the Middle East, powered by its long-term national vision, world-class infrastructure, tax-friendly policies, and a legal framework that welcomes global investors.
            </p>
            <p className="text-base text-text-secondary leading-relaxed mb-8">
              Whether you&apos;re looking to establish in energy, hospitality, technology, trading, construction, or emerging sectors, Qatar offers a stable business landscape with high returns and minimal barriers.
            </p>
            <Link href="/why-qatar" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              Learn More About Qatar <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }} className="grid grid-cols-2 gap-5">
            {whyQatar.map((item, index) => {
              const Icon = iconMap[item.icon];
              return (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className={`p-6 rounded-2xl border border-border hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 bg-white group ${index === 0 ? "col-span-2" : ""}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-5 group-hover:bg-primary transition-all duration-500">
                    <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-base font-extrabold text-dark mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
