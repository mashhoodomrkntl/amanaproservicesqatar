"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/sections/ContactForm";
import { services } from "@/lib/data";
import { CheckCircle, ArrowRight, Building2, FileCheck, Handshake, Scale, Languages, TrendingUp, Calculator } from "lucide-react";

const iconMap: Record<string, React.ElementType> = { Building2, FileCheck, Handshake, Scale, Languages, TrendingUp, Calculator };

interface ServiceDetailPageProps {
  service: (typeof services)[0];
}

export default function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const otherServices = services.filter((s) => s.id !== service.id);
  const Icon = iconMap[service.icon];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      name: "Amanah Business Services",
      url: "https://amanahbusiness.qa",
    },
    areaServed: { "@type": "Country", name: "Qatar" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHeader
        title={service.title}
        subtitle={service.subtitle}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.shortTitle },
        ]}
      />

      <section className="py-20 lg:py-28 bg-white" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-dark">{service.title}</h2>
                    <p className="text-sm text-text-secondary">{service.subtitle}</p>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none mb-12">
                  <p className="text-text-secondary leading-relaxed text-base">{service.description}</p>
                </div>

                {/* Features */}
                <div className="mb-12">
                  <h3 className="text-xl font-bold text-dark mb-6">What We Offer</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {service.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: i * 0.05 }}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-primary-50 transition-colors"
                      >
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-text-primary font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white relative overflow-hidden">
                  <div className="absolute inset-0 hero-grid opacity-20" />
                  <div className="relative">
                    <h3 className="text-xl font-bold mb-6">Why Choose Us for {service.shortTitle}</h3>
                    <div className="space-y-4">
                      {service.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle className="w-4 h-4 text-accent" />
                          </div>
                          <span className="text-white/80 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="sticky top-24 space-y-6"
              >
                {/* Quick Contact */}
                <div className="bg-primary-50 rounded-2xl p-6 border border-primary/10">
                  <h3 className="text-lg font-bold text-dark mb-3">Need Help?</h3>
                  <p className="text-sm text-text-secondary mb-4">
                    Get a free consultation from our {service.shortTitle} experts.
                  </p>
                  <Link
                    href="/contact"
                    className="block text-center py-3 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-xl hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Free Consultation
                  </Link>
                  <a
                    href="https://wa.me/97450000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center py-3 mt-3 bg-white text-primary font-semibold rounded-xl border border-primary/20 hover:bg-primary-50 transition-all duration-300"
                  >
                    WhatsApp Us
                  </a>
                </div>

                {/* Other Services */}
                <div className="bg-white rounded-2xl p-6 border border-border">
                  <h3 className="text-lg font-bold text-dark mb-4">Other Services</h3>
                  <div className="space-y-2">
                    {otherServices.map((s) => {
                      const SIcon = iconMap[s.icon];
                      return (
                        <Link
                          key={s.id}
                          href={`/services/${s.id}`}
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary-50 transition-colors group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                            <SIcon className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                          </div>
                          <span className="text-sm font-medium text-text-primary group-hover:text-primary transition-colors">
                            {s.shortTitle}
                          </span>
                          <ArrowRight className="w-3 h-3 text-text-muted ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
