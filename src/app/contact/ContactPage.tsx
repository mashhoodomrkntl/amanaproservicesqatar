"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/sections/ContactForm";
import FAQ from "@/components/sections/FAQ";
import { Phone, Mail, MapPin, Clock, MessageSquare, ExternalLink } from "lucide-react";
import { siteConfig } from "@/lib/data";

export default function ContactPage() {
  const contactCards = [
    {
      icon: Phone,
      title: "Call Our Experts",
      value: siteConfig.allPhones.join(" / "),
      desc: "Available Sun-Thu, 8AM-6PM",
      href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
      color: "bg-blue-500",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Us",
      value: "Chat Now",
      desc: "Quick response for inquiries",
      href: `https://wa.me/${siteConfig.whatsapp.replace("+", "")}`,
      color: "bg-green-500",
    },
    {
      icon: Mail,
      title: "Email Support",
      value: siteConfig.email,
      desc: "We reply within 2 hours",
      href: `mailto:${siteConfig.email}`,
      color: "bg-accent",
    },
  ];

  return (
    <div className="bg-[#FAFAFA]">
      <PageHeader
        title="Contact Us"
        subtitle="Your journey to business excellence in Qatar starts with a simple conversation."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />

      {/* Quick Contact Cards */}
      <section className="py-20 -mt-16 relative z-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {contactCards.map((card, i) => (
              <motion.a
                key={i}
                href={card.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-accent/5 hover:-translate-y-2 transition-all duration-500 group"
              >
                <div className={`w-14 h-14 rounded-2xl ${card.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  <card.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-black text-[#0A2647] mb-2">{card.title}</h3>
                <div className="text-accent font-bold mb-1">{card.value}</div>
                <p className="text-slate-500 text-sm">{card.desc}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <div className="pb-24">
        <ContactForm />
      </div>

      {/* Location Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-4">
              <span className="text-accent text-xs font-black uppercase tracking-[0.4em] mb-4 block">Visit Us</span>
              <h2 className="text-4xl lg:text-5xl font-black text-[#0A2647] mb-8 leading-tight">
                Find Us in <br />
                <span className="text-accent">Doha</span>
              </h2>
              
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-xl bg-[#FAFAFA] flex items-center justify-center flex-shrink-0 border border-slate-100">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0A2647] mb-2 uppercase tracking-wide text-sm">Headquarters</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {siteConfig.address}
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-xl bg-[#FAFAFA] flex items-center justify-center flex-shrink-0 border border-slate-100">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0A2647] mb-2 uppercase tracking-wide text-sm">Working Hours</h4>
                    <p className="text-slate-500 text-sm">
                      Sunday — Thursday <br />
                      <span className="text-[#0A2647] font-semibold">08:00 AM — 06:00 PM</span>
                    </p>
                  </div>
                </div>

                <a 
                  href="https://maps.google.com/?q=Amanah+Business+Services+Doha+Qatar" 
                  target="_blank"
                  className="inline-flex items-center gap-2 text-accent font-black uppercase text-xs tracking-widest hover:gap-4 transition-all"
                >
                  Open in Google Maps <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white aspect-[16/9] lg:aspect-auto lg:h-[500px] group">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.447547466858!2d51.5204487!3d25.2891393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c53198038e47%3A0x6b4a3a1f4a3a1f4a!2sDoha%2C%20Qatar!5e0!3m2!1sen!2sqa!4v1715440000000!5m2!1sen!2sqa"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 pointer-events-none border-[1px] border-black/5 rounded-[2.5rem]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
    </div>
  );
}
