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
      <section className="py-20 lg:py-28 bg-white" ref={ref}>
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon];
              return (
                <motion.div key={service.id} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }}>
                  <Link href={`/services/${service.id}`} className="group block h-full p-8 rounded-2xl bg-white border border-border hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-500">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center mb-6 group-hover:from-primary group-hover:to-primary-dark transition-all duration-500">
                      <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-500" />
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed mb-6">{service.description}</p>
                    <div className="flex items-center text-primary text-sm font-semibold">
                      Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
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
