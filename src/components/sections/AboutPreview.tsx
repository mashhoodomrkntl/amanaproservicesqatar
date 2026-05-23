"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 lg:py-20 bg-[#F9F6F1] relative overflow-hidden" ref={ref}>
      <div className="container mx-auto">
        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-[2px] bg-primary" />
              <span className="text-xs font-bold text-primary uppercase tracking-widest">About Our Agency</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-[#003366] leading-[1.1] tracking-tight">
              Premium PRO & Business <br />
              Solutions For Growth
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-sm lg:text-right"
          >
            <p className="text-sm text-slate-600 leading-relaxed italic">
              Where strategic expertise meets unparalleled local knowledge.
              We specialize in bridging the gap between global vision and local success.
            </p>
          </motion.div>
        </div>

        {/* Main Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:h-[520px]">

          {/* Left - Large Image Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative h-full rounded-[2rem] overflow-hidden shadow-xl group min-h-[400px] lg:min-h-0"
          >
            <img
              src="https://images.unsplash.com/photo-1550350505-553196f2a527?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Qatar Business Office"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </motion.div>

          {/* Right Column - Modular Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-rows-2 gap-6 h-full">

            {/* Top Left Card - Expertise */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-[1.5rem] p-6 lg:p-8 flex flex-col justify-between shadow-sm border border-slate-100"
            >
              <div>
                <h3 className="text-xl font-black text-primary mb-3 leading-tight">
                  Strategic <br />Expert Guidance
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  We specialize in connecting businesses with efficient pathways in the Qatari region.
                </p>
              </div>
              <Link href="/services" className="inline-flex items-center gap-2 text-primary font-black uppercase text-[9px] tracking-widest group">
                Learn More <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Top Right Card - Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-[#F0EEE9] rounded-[1.5rem] p-6 lg:p-8 flex flex-col justify-center items-center text-center gap-4 shadow-sm border border-slate-200/20"
            >
              <div className="space-y-1">
                <div className="text-3xl font-black text-primary tracking-tighter">5,000<span className="text-accent">+</span></div>
                <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Projects Completed</div>
              </div>
              <div className="w-10 h-[1px] bg-slate-300/50" />
              <div className="space-y-1">
                <div className="text-3xl font-black text-primary tracking-tighter">10<span className="text-accent">+</span></div>
                <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Years Experience</div>
              </div>
            </motion.div>

            {/* Bottom Wide Card - Business Growth */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="sm:col-span-2 bg-[#003366] rounded-[1.5rem] p-8 lg:p-10 flex flex-col sm:flex-row justify-between items-end gap-6 text-white relative overflow-hidden shadow-xl"
            >
              <div className="relative z-10 max-w-md">
                <h3 className="text-2xl font-black text-accent mb-4">Business Growth</h3>
                <p className="text-xs text-white/50 leading-relaxed mb-6">
                  We focus on scaling your operations through strategic governmental compliance
                  and operational efficiency. Our dedicated team ensures you remain competitive.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 text-accent font-black uppercase text-[9px] tracking-widest group">
                  Start Your Journey <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="flex gap-3 relative z-10">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group cursor-pointer hover:bg-white/5 transition-colors">
                  <ArrowRight className="w-5 h-5 text-white -rotate-45" />
                </div>
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center group cursor-pointer hover:bg-accent-light transition-colors">
                  <ArrowRight className="w-5 h-5 text-[#003366]" />
                </div>
              </div>

              {/* Decorative Subtle Grid */}
              <div className="absolute inset-0 hero-grid opacity-[0.02] pointer-events-none" />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
