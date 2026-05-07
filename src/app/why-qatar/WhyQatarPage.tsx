"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { whyQatar } from "@/lib/data";
import { Globe, Percent, Shield, Landmark, TrendingUp, Target, ArrowRight, CheckCircle, Building2, Briefcase, GraduationCap, Heart, Cpu, Zap } from "lucide-react";

const iconMap: Record<string, React.ElementType> = { Globe, Percent, Shield, Landmark, TrendingUp, Target };

const sectors = [
  { icon: Zap, name: "Energy & Oil/Gas", desc: "World's largest LNG exporter with massive energy sector." },
  { icon: Building2, name: "Construction & Real Estate", desc: "Booming infrastructure projects and property development." },
  { icon: Cpu, name: "Technology & IT", desc: "Growing digital economy with smart city initiatives." },
  { icon: Heart, name: "Healthcare", desc: "Expanding healthcare sector with world-class facilities." },
  { icon: GraduationCap, name: "Education", desc: "Education City and growing international institutions." },
  { icon: Briefcase, name: "Finance & Banking", desc: "Qatar Financial Centre with international standards." },
];

export default function WhyQatarPage() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isInView1 = useInView(ref1, { once: true, margin: "-100px" });
  const isInView2 = useInView(ref2, { once: true, margin: "-100px" });
  const isInView3 = useInView(ref3, { once: true, margin: "-100px" });

  return (
    <>
      <PageHeader
        title="Why Qatar"
        subtitle="Discover why Qatar is the ideal destination for your business"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Why Qatar" }]}
      />

      {/* Advantages Grid */}
      <section className="py-20 lg:py-28 bg-white" ref={ref1}>
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView1 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary text-sm font-semibold mb-4 tracking-wide uppercase">Investment Advantages</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-6">Why Businesses Choose Qatar</h2>
            <p className="text-lg text-text-secondary">Qatar offers a unique combination of strategic advantages that make it one of the most attractive business destinations in the world.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyQatar.map((item, i) => {
              const Icon = iconMap[item.icon];
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={isInView1 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-white border border-border hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-500 group">
                  <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center mb-5 group-hover:bg-primary transition-all duration-500">
                    <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-dark mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 100% Ownership Section */}
      <section className="py-20 lg:py-28 gradient-dark relative overflow-hidden" ref={ref2}>
        <div className="absolute inset-0 hero-grid opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} animate={isInView2 ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-accent text-sm font-semibold mb-4 tracking-wide uppercase border border-white/10">Foreign Investment</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">100% Foreign Ownership in Qatar</h2>
              <p className="text-white/70 leading-relaxed mb-6">
                Qatar now permits full foreign ownership across a wide range of commercial and professional activities, eliminating the need for a local partner in many sectors. This is a game-changer for international investors looking to maintain full control of their business.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Agriculture, Manufacturing, IT & Digital sectors eligible",
                  "Healthcare, Education, Tourism & Energy sectors open",
                  "Construction, Consultancy & Trading activities included",
                  "No requirement for local Qatari partner in eligible sectors",
                  "Full operational control and profit retention",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white/80">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-semibold rounded-xl hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                Get Expert Guidance <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} animate={isInView2 ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "0%", label: "Personal Income Tax" },
                  { value: "10%", label: "Corporate Tax Rate" },
                  { value: "100%", label: "Foreign Ownership" },
                  { value: "#1", label: "GDP Per Capita (Region)" },
                ].map((stat, i) => (
                  <div key={i} className="glass rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300">
                    <div className="text-3xl font-extrabold text-accent mb-2">{stat.value}</div>
                    <div className="text-xs text-white/60">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Sectors */}
      <section className="py-20 lg:py-28 bg-surface" ref={ref3}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView3 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary text-sm font-semibold mb-4 tracking-wide uppercase">Key Sectors</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-6">Thriving Industries in Qatar</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sector, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={isInView3 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white border border-border hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 group">
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-4 group-hover:bg-primary transition-all duration-500">
                  <sector.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-base font-bold text-dark mb-2">{sector.name}</h3>
                <p className="text-sm text-text-secondary">{sector.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-1 transition-all duration-300">
              Start Your Qatar Business Journey <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
