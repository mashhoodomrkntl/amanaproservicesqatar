"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Building2,
  FileCheck,
  Handshake,
  Scale,
  Languages,
  TrendingUp,
  Calculator,
  ArrowRight,
} from "lucide-react";
import { services } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Building2,
  FileCheck,
  Handshake,
  Scale,
  Languages,
  TrendingUp,
  Calculator,
};

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const serviceImages = [
    "https://plus.unsplash.com/premium_photo-1661501701943-bc3742c01830?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29tcGFueSUyMGZvcm1hdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1605152276897-4f618f831968?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvJTIwc2VydmljZXN8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1673515335152-f2589ba8bb7a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhbnNsYXRpb258ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1712903276360-20f76efac6f9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BvbnNvcnNoaXB8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1661383943532-e68a663322ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29uc3VsdGluZyUyMGltZ3xlbnwwfHwwfHx8MA%3D%3D"
  ];

  return (
    <section id="services" className="py-22 lg:py-30 bg-gradient-to-b from-[#fffefeff] to-[#F9F6F1] relative overflow-hidden" ref={ref}>
      {/* Premium White Wave & Blend Divider */}
      {/* <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 rotate-180">
        <svg className="relative block w-full h-[60px] lg:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#fffefeff"></path>
        </svg>
      </div> */}

      <div className="container relative mx-auto z-10">
        {/* Section Header - Centered Editorial Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mt-8"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-6 h-[1px] bg-primary/20" />
            <span className="text-[10px] font-bold text-primary uppercase tracking-[0.3em]">Services & Solutions</span>
            <div className="w-6 h-[1px] bg-primary/20" />
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-[#0A2647] leading-[1.1] tracking-tight">
            Comprehensive Support For <br />
            <span className="text-primary italic text-2xl lg:text-4xl block mt-2">Every Business Milestone.</span>
          </h2>
        </motion.div>

        {/* Services Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.slice(0, 6).map((service, index) => {
            const Icon = iconMap[service.icon];
            const isHighlighted = index === 0;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  href={`/services/${service.id}`}
                  className={`group block rounded-[2rem] p-4 transition-all duration-700 h-full shadow-sm hover:shadow-2xl hover:-translate-y-2 border border-slate-100 ${isHighlighted ? "bg-accent" : "bg-white"
                    }`}
                >
                  {/* Card Image Container (Inset Style) */}
                  <div className="relative aspect-[16/11] overflow-hidden rounded-[1.5rem] shadow-inner">
                    <img
                      src={serviceImages[index]}
                      alt={service.shortTitle}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    {isHighlighted && (
                      <div className="absolute top-3 left-3 bg-[#0A2647] text-white text-[8px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                        Most Requested
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="pt-6 pb-2 px-2">
                    <div className="flex items-center gap-2 mb-3">
                      <Icon className={`w-4 h-4 ${isHighlighted ? "text-[#0A2647]" : "text-primary"}`} />
                      <span className={`text-[9px] font-black uppercase tracking-[0.2em] ${isHighlighted ? "text-[#0A2647]/60" : "text-slate-400"}`}>
                        {index % 2 === 0 ? "Corporate" : "Operations"}
                      </span>
                    </div>

                    <h3 className={`text-xl font-black mb-6 leading-tight ${isHighlighted ? "text-[#0A2647]" : "text-[#0A2647]"}`}>
                      {service.shortTitle}
                    </h3>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-100/10">
                      <span className={`text-[9px] font-black uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all ${isHighlighted ? "text-[#0A2647]" : "text-primary"}`}>
                        Learn More <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
