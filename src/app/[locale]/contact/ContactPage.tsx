"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/sections/ContactForm";
import FAQ from "@/components/sections/FAQ";
import { Phone, Mail, MapPin, Clock, MessageSquare, ExternalLink } from "lucide-react";
import { useTranslations } from "@/lib/i18n";

export default function ContactPage() {
  const { t, locale, siteConfig } = useTranslations();
  const isRtl = locale === "ar";
  const contactCards = [
    {
      icon: Phone,
      title: isRtl ? "تحدث مع خبرائنا" : "Call Our Experts",
      value: siteConfig.allPhones.join(" / "),
      desc: isRtl ? "متاح من الأحد للخميس، 8ص-6م" : "Available S-Thu, 8AM-6PM",
      href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
      color: "bg-blue-500",
    },
    {
      icon: MessageSquare,
      title: isRtl ? "واتساب" : "WhatsApp Us",
      value: isRtl ? "تحدث معنا الآن" : "Chat Now",
      desc: isRtl ? "رد سريع للاستفسارات" : "Quick response for inquiries",
      href: `https://wa.me/${siteConfig.whatsapp.replace("+", "")}`,
      color: "bg-green-500",
    },
    {
      icon: Mail,
      title: isRtl ? "الدعم عبر البريد" : "Email Support",
      value: siteConfig.email,
      desc: isRtl ? "نرد خلال ساعتين" : "We reply within 2 hours",
      href: `mailto:${siteConfig.email}`,
      color: "bg-accent",
    },
  ];

  return (
    <div className="bg-[#FAFAFA]">
      <PageHeader
        title={t("nav.contact")}
        subtitle={isRtl ? "رحلتك نحو التميز في الأعمال في قطر تبدأ بمحادثة بسيطة." : "Your journey to business excellence in Qatar starts with a simple conversation."}
        breadcrumbs={[{ label: t("nav.home"), href: `/${locale}` }, { label: t("nav.contact") }]}
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
                <div className={`w-14 h-14 rounded-2xl ${card.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform ${isRtl ? "ml-auto" : ""}`}>
                  <card.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className={`text-xl font-black text-[#0A2647] mb-2 ${isRtl ? "text-right" : ""}`}>{card.title}</h3>
                <div className={`text-accent font-bold mb-1 ${isRtl ? "text-right" : ""}`} dir={card.icon === Phone || card.icon === Mail ? "ltr" : "auto"}>{card.value}</div>
                <p className={`text-slate-500 text-sm ${isRtl ? "text-right" : ""}`}>{card.desc}</p>
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
              <span className={`text-accent text-xs font-black uppercase tracking-[0.4em] mb-4 block ${isRtl ? "text-right" : ""}`}>{isRtl ? "قم بزيارتنا" : "Visit Us"}</span>
              <h2 className={`text-4xl lg:text-5xl font-black text-[#0A2647] mb-8 leading-tight ${isRtl ? "text-right" : ""}`}>
                {isRtl ? "تجدنا في" : "Find Us in"} <br />
                <span className="text-accent">{isRtl ? "الدوحة" : "Doha"}</span>
              </h2>

              <div className="space-y-8">
                <div className={`flex gap-5 ${isRtl ? "flex-row-reverse text-right" : ""}`}>
                  <div className="w-12 h-12 rounded-xl bg-[#FAFAFA] flex items-center justify-center flex-shrink-0 border border-slate-100">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0A2647] mb-2 uppercase tracking-wide text-sm">{isRtl ? "المقر الرئيسي" : "Headquarters"}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {siteConfig.address}
                    </p>
                  </div>
                </div>

                <div className={`flex gap-5 ${isRtl ? "flex-row-reverse text-right" : ""}`}>
                  <div className="w-12 h-12 rounded-xl bg-[#FAFAFA] flex items-center justify-center flex-shrink-0 border border-slate-100">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0A2647] mb-2 uppercase tracking-wide text-sm">{isRtl ? "ساعات العمل" : "Working Hours"}</h4>
                    <p className="text-slate-500 text-sm">
                      {isRtl ? "السبت — الخميس" : "Saturday — Thursday"} <br />
                      <span className="text-[#0A2647] font-semibold" dir="ltr">08:00 AM — 06:00 PM</span>
                    </p>
                  </div>
                </div>
                <a
                  href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115455.86086842917!2d51.348833843359394!3d25.270731700000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485f95476520dff7%3A0x177b1e4b3376acb7!2sVaiga%20Consultancy%20Services%20W.L.L!5e0!3m2!1sen!2sin!4v1780572733738!5m2!1sen!2sin"
                  target="_blank"
                  className={`inline-flex items-center gap-2 text-accent font-black uppercase text-xs tracking-widest hover:gap-4 transition-all ${isRtl ? "flex-row-reverse float-right" : ""}`}
                >
                  {isRtl ? "افتح في خرائط جوجل" : "Open in Google Maps"} <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white aspect-[16/9] lg:aspect-auto lg:h-[500px] group">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115455.86086842917!2d51.348833843359394!3d25.270731700000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485f95476520dff7%3A0x177b1e4b3376acb7!2sVaiga%20Consultancy%20Services%20W.L.L!5e0!3m2!1sen!2sin!4v1780572733738!5m2!1sen!2sin"
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
