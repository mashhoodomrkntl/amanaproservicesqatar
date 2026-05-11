"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { whyQatar } from "@/lib/data";
import {
  Globe, Percent, Shield, Landmark, TrendingUp, Target,
  ArrowRight, CheckCircle, Building2, Briefcase,
  GraduationCap, Heart, Cpu, Zap, Star, MapPin
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = { Globe, Percent, Shield, Landmark, TrendingUp, Target };

const sectors = [
  { icon: Zap, name: "Energy & Oil/Gas", desc: "World's largest LNG exporter with massive energy sector growth.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" },
  { icon: Building2, name: "Real Estate", desc: "Booming infrastructure and luxury property development.", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" },
  { icon: Cpu, name: "Technology & IT", desc: "Growing digital economy with smart city initiatives like Msheireb.", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" },
  { icon: Heart, name: "Healthcare", desc: "Expanding healthcare sector with world-class facilities and insurance.", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbHRoY2FyZXxlbnwwfHwwfHx8MA%3D%3D" },
  { icon: GraduationCap, name: "Education", desc: "Education City and growing international academic institutions.", image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { icon: Briefcase, name: "Finance", desc: "Qatar Financial Centre (QFC) offering international standards.", image: "https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?auto=format&fit=crop&q=80&w=800" },
];

export default function WhyQatarPage() {
  const advantagesRef = useRef(null);
  const ownershipRef = useRef(null);
  const sectorsRef = useRef(null);
  const statsRef = useRef(null);

  const isAdvantagesInView = useInView(advantagesRef, { once: true, margin: "-100px" });
  const isOwnershipInView = useInView(ownershipRef, { once: true, margin: "-100px" });
  const isSectorsInView = useInView(sectorsRef, { once: true, margin: "-100px" });
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });

  return (
    <div className="bg-[#FAFAFA]">
      <PageHeader
        title="Why Qatar"
        subtitle="Experience the gateway to global business excellence in the heart of the Middle East."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Why Qatar" }]}
      />

      {/* Advantages Grid */}
      <section className="py-24 lg:py-32 relative overflow-hidden" ref={advantagesRef}>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent opacity-50" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isAdvantagesInView ? { opacity: 1, y: 0 } : {}}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <span className="text-accent text-xs font-black uppercase tracking-[0.4em] mb-4 block">Strategic Edge</span>
            <h2 className="text-4xl lg:text-5xl font-black text-[#0A2647] mb-6">The Qatar <span className="text-accent italic">Advantage</span></h2>
            <p className="text-slate-500 text-lg">Position your business in a thriving economy with world-class infrastructure and investor-friendly policies.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyQatar.map((item, i) => {
              const Icon = iconMap[item.icon];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isAdvantagesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="p-8 rounded-3xl bg-white border border-slate-100 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/5 hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#FAFAFA] flex items-center justify-center mb-6 group-hover:bg-accent transition-all duration-500">
                    <Icon className="w-8 h-8 text-accent group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-extrabold text-[#0A2647] mb-4 group-hover:text-accent transition-colors">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm">{item.description}</p>

                  {/* Decorative background number */}
                  <div className="absolute -bottom-4 -right-4 text-8xl font-black text-[#0A2647]/[0.03] select-none">
                    0{i + 1}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 100% Ownership Hero Section */}
      <section className="py-24 lg:py-40 bg-[#001a3f] relative overflow-hidden" ref={ownershipRef}>
        <div className="absolute inset-0 hero-grid opacity-10" />
        <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1578895101408-1a36b834405b?auto=format&fit=crop&q=80&w=1200"
            alt="Doha Skyline"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001a3f] via-[#001a3f]/40 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isOwnershipInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-[2px] bg-accent" />
                <span className="text-accent text-xs font-black uppercase tracking-[0.3em]">New Era of Investment</span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 leading-[1.1]">
                100% Foreign <br />
                <span className="text-accent">Ownership</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-xl">
                Qatar has revolutionized its business landscape, allowing international investors to maintain absolute control across most commercial sectors. No local partner required.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                {[
                  "Full operational control",
                  "100% profit repatriation",
                  "No Qatari partner needed",
                  "Fast-track ministry approval",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-white/80 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-4 px-10 py-5 bg-accent text-[#001a3f] font-black rounded-full hover:bg-white hover:shadow-[0_20px_50px_rgba(197,160,89,0.3)] hover:-translate-y-1 transition-all duration-300 uppercase text-xs tracking-widest"
              >
                Get Expert Guidance <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strategic Stats Banner */}
      <section className="py-12 bg-white border-y border-slate-100" ref={statsRef}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "0%", label: "Income Tax", icon: Percent },
              { value: "10%", label: "Corporate Tax", icon: TrendingUp },
              { value: "#1", label: "GDP Per Capita", icon: Star },
              { value: "100%", label: "Ownership", icon: Shield },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isStatsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="text-4xl font-black text-[#0A2647] mb-2 group-hover:text-accent transition-colors">{stat.value}</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Thriving Sectors */}
      <section className="py-24 lg:py-32 bg-[#FAFAFA] relative overflow-hidden" ref={sectorsRef}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isSectorsInView ? { opacity: 1, y: 0 } : {}}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <span className="text-accent text-xs font-black uppercase tracking-[0.4em] mb-4 block">Opportunities</span>
            <h2 className="text-4xl lg:text-5xl font-black text-[#0A2647] mb-6 tracking-tight">Thriving <span className="text-accent">Industries</span></h2>
            <p className="text-slate-500 text-lg">Qatar's National Vision 2030 is driving massive growth across multiple sectors.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={isSectorsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative h-[400px] rounded-[2.5rem] overflow-hidden bg-[#001a3f]"
              >
                <img
                  src={sector.image}
                  alt={sector.name}
                  className="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-40 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001a3f] via-[#001a3f]/20 to-transparent p-8 flex flex-col justify-end">
                  <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center mb-6 -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <sector.icon className="w-6 h-6 text-[#001a3f]" />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-3">{sector.name}</h3>
                  <p className="text-white/60 text-sm leading-relaxed max-w-[240px] translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    {sector.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="bg-[#001a3f] rounded-[3rem] p-12 lg:p-20 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200"
                alt="Global Map"
                className="w-full h-full object-cover grayscale"
              />
            </div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-black text-white mb-8">Ready to <span className="text-accent">Globalize</span>?</h2>
                <p className="text-white/60 text-lg mb-10 leading-relaxed">
                  Start your journey in Qatar today and unlock the gateway to the Middle East, Asia, and beyond. Our experts are ready to handle the complexity while you focus on growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <Link
                    href="/contact"
                    className="px-10 py-5 bg-accent text-[#001a3f] font-black rounded-full hover:bg-white transition-all text-center uppercase text-xs tracking-widest"
                  >
                    Speak with a Consultant
                  </Link>
                  <div className="flex items-center gap-4 px-6 py-4 rounded-full border border-white/10 text-white/80">
                    <MapPin className="w-5 h-5 text-accent" />
                    <span className="text-sm font-bold uppercase tracking-widest">Doha, Qatar</span>
                  </div>
                </div>
              </div>

              <div className="relative hidden lg:block">
                <div className="aspect-square bg-accent/10 rounded-full border border-accent/20 flex items-center justify-center animate-pulse">
                  <Globe className="w-48 h-48 text-accent opacity-30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
