"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { services } from "@/lib/data";
import { Building2, FileCheck, Handshake, Scale, Languages, TrendingUp, Calculator, ArrowRight } from "lucide-react";

const iconMap: Record<string, React.ElementType> = { Building2, FileCheck, Handshake, Scale, Languages, TrendingUp, Calculator };

export default function ServicesPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive business solutions to help you establish and grow in Qatar"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />
      <section className="py-20 lg:py-28 bg-slate-50/50 relative overflow-hidden" ref={ref}>
        {/* Premium Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
        <div className="absolute inset-0 dot-pattern opacity-[0.1]" />

        <div className="container relative mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon];
              return (
                <motion.div 
                  key={service.id} 
                  initial={{ opacity: 0, y: 40 }} 
                  animate={isInView ? { opacity: 1, y: 0 } : {}} 
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                >
                  <Link
                    href={`/services/${service.id}`}
                    className="group relative flex flex-col h-full p-8 rounded-[2.5rem] bg-white border border-border/50 hover:border-primary/20 hover:shadow-[0_20px_60px_-15px_rgba(10,38,71,0.1)] transition-all duration-500 overflow-hidden"
                  >
                    {/* Subtle Background Pattern */}
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-500" />
                    
                    <div className="relative z-10">
                      <div className="w-16 h-16 rounded-3xl bg-primary-50 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary transition-all duration-500 shadow-sm group-hover:shadow-primary/30">
                        <Icon className="w-8 h-8 text-primary group-hover:text-white transition-all duration-500" />
                      </div>

                      <h3 className="text-xl font-black text-dark mb-4 group-hover:text-primary transition-colors leading-tight">
                        {service.shortTitle}
                      </h3>

                      <p className="text-[13px] text-text-secondary leading-relaxed mb-8 line-clamp-3 group-hover:text-text-primary transition-colors">
                        {service.subtitle}
                      </p>

                      <div className="flex items-center gap-2 text-primary text-xs font-black uppercase tracking-widest pt-2 mt-auto">
                        <span className="relative overflow-hidden inline-block">
                          <span className="inline-block transition-transform duration-500 group-hover:-translate-y-full">View Details</span>
                          <span className="absolute top-0 left-0 inline-block transition-transform duration-500 translate-y-full group-hover:translate-y-0 text-accent">Learn More</span>
                        </span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2" />
                      </div>
                    </div>

                    {/* Decorative Number */}
                    <div className="absolute -bottom-6 -right-4 text-8xl font-black text-primary/[0.03] select-none group-hover:text-primary/[0.05] transition-colors duration-500 italic">
                      0{i + 1}
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
