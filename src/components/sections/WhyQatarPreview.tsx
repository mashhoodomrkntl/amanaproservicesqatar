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
    <section className="py-24 lg:py-32 bg-[#0A2647] relative overflow-hidden" ref={ref}>
      {/* Background Visuals */}
      <div className="absolute inset-0 z-0">
        <img
          src="/qatar_night_skyline_premium_1778507387676.png"
          alt="Doha Night Skyline"
          className="w-full h-full object-cover opacity-20 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A2647] via-[#0A2647]/95 to-[#0A2647]" />
        <div className="absolute inset-0 hero-grid opacity-[0.03]" />
      </div>

      <div className="container relative z-10 mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-center">

          {/* Left Side: Strategic Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[1px] bg-accent" />
              <span className="text-xs font-black text-accent uppercase tracking-[0.4em]">Strategic Market Insights</span>
            </div>

            <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 leading-[1.1] tracking-tight">
              Why Invest In <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-light to-accent">Modern Qatar?</span>
            </h2>

            <div className="space-y-6 mb-10">
              <p className="text-lg text-slate-300 leading-relaxed font-medium">
                Qatar is the fastest-growing business hub in the Middle East, powered by a visionary national strategy and world-class infrastructure.
              </p>
              <p className="text-base text-slate-400 leading-relaxed">
                Whether you&apos;re looking to establish in energy, tech, or hospitality, Qatar offers a stable business landscape with high returns and minimal barriers.
              </p>
            </div>

            <Link href="/why-qatar" className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-[#0A2647] font-black rounded-2xl hover:bg-accent hover:text-white transition-all duration-500 uppercase text-[10px] tracking-widest shadow-2xl">
              Why Invest In Qatar <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
            </Link>
          </motion.div>

          {/* Right Side: The Bento Vision Matrix */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {whyQatar.slice(0, 4).map((item, index) => {
                const Icon = iconMap[item.icon];
                const isLarge = index === 0 || index === 3;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className={`group relative p-8 rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:bg-white/[0.08] hover:border-accent/30 transition-all duration-700 overflow-hidden ${isLarge ? "md:col-span-2" : ""}`}
                  >
                    {/* Glowing Accent */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                      <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center border border-accent/20 group-hover:bg-accent group-hover:border-accent transition-all duration-500 shrink-0">
                        <Icon className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h3 className="text-lg font-black text-white mb-2 group-hover:text-accent transition-colors tracking-tight">
                          {item.title}
                        </h3>
                        <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
