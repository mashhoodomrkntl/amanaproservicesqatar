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

  return (
    <section id="services" className="py-24 lg:py-32 bg-white relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-60" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-light rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-40" />

      <div className="container relative mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary text-xs font-bold mb-5 tracking-widest uppercase">
            Our Services
          </span>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-dark mb-6 leading-tight">
            Bespoke Business <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Solutions in Qatar</span>
          </h2>
          <p className="text-base lg:text-lg text-text-secondary leading-relaxed">
            From company formation to ongoing compliance, we provide end-to-end
            business services to help you establish and grow your business in Qatar.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={`/services/${service.id}`}
                  className="group flex flex-col h-full p-8 rounded-2xl bg-white border border-border hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="w-16 h-16 rounded-2xl bg-accent-light flex items-center justify-center mb-6 group-hover:bg-primary transition-all duration-500 shadow-sm">
                    <Icon className="w-8 h-8 text-accent group-hover:text-white transition-colors duration-500" />
                  </div>

                  <h3 className="text-xl font-bold text-dark mb-4 group-hover:text-primary transition-colors">
                    {service.shortTitle}
                  </h3>

                  <p className="text-sm text-text-secondary leading-relaxed mb-6 line-clamp-4">
                    {service.description}
                  </p>

                  <div className="mt-auto flex items-center text-primary text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-10 py-5 bg-primary text-white font-black rounded-2xl hover:bg-accent hover:text-dark hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 uppercase text-xs tracking-widest"
          >
            Explore All Solutions
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
