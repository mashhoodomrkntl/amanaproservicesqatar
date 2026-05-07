"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 lg:pt-15 lg:pb-32 overflow-hidden bg-[#001a3f]">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#001a3f] via-[#003380] to-[#001a3f] opacity-90" />
        <div className="absolute inset-0 hero-grid opacity-90" />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/20 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Main Content */}
          <div className="lg:col-span-7 xl:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-[11px] font-bold uppercase tracking-widest mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Trusted PRO Services Since 2015
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-white leading-[1.1] mb-8"
            >
              Your Trusted Partner for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">
                Business Excellence
              </span>{" "}
              in Qatar
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-lg text-white/70 mb-10 max-w-2xl leading-relaxed"
            >
              From company formation to PRO services, we simplify your business
              journey in Qatar with expert guidance, full compliance, and
              end-to-end support.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex flex-wrap items-center gap-5 mb-12">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-accent text-[#001a3f] font-black rounded-2xl hover:bg-white hover:shadow-[0_20px_50px_rgba(197,160,89,0.3)] hover:-translate-y-1 transition-all duration-300 uppercase text-xs tracking-widest"
                >
                  Start Your Journey
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 bg-white/5 text-white font-black rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 uppercase text-xs tracking-widest"
                >
                  Our Services
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="flex flex-wrap items-center gap-8 py-8 border-t border-white/10">
                {[
                  { label: "Founded", value: "2015" },
                  { label: "Projects Done", value: "5000+" },
                  { label: "Expert Team", value: "150+" },
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-accent font-black text-lg">{stat.value}</span>
                    <span className="text-white/40 text-[10px] font-bold uppercase tracking-wider">{stat.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Stats Cards */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Projects Completed", value: "5000+" },
                { label: "Years Experience", value: "10+" },
                { label: "Client Satisfaction", value: "98%" },
                { label: "Expert Team", value: "150+" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors group"
                >
                  <div className="text-3xl font-extrabold text-accent mb-1 group-hover:scale-110 transition-transform origin-left">
                    {stat.value}
                  </div>
                  <div className="text-[10px] text-white/50 uppercase tracking-widest font-bold">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,80 C360,120 720,40 1080,80 C1260,100 1380,90 1440,80 L1440,120 L0,120 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
