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
      <ContactForm />

      {/* Location Section */}
      <section className="py-24 relative overflow-hidden bg-[#FAFAFA]">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-accent/10 blur-[80px]" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-accent/10 blur-[100px]" />
        </div>

        <div className="mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-accent text-sm font-black uppercase tracking-[0.3em] mb-4 bg-accent/10 px-4 py-2 rounded-full"
            >
              {isRtl ? "قم بزيارتنا" : "Visit Us"}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-[#0A2647] leading-tight"
            >
              {isRtl ? "تجدنا في قلب" : "Find Us in the Heart of"} <br />
              <span className="text-accent">
                {isRtl ? "الدوحة" : "Doha"}
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="relative rounded-[1.5rem] overflow-hidden shadow-2xl border-3 border-white flex flex-col lg:block group bg-slate-100"
          >
            {/* Map Iframe */}
            <div className="relative w-full h-[350px] lg:h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115455.86086842917!2d51.348833843359394!3d25.270731700000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485f95476520dff7%3A0x177b1e4b3376acb7!2sVaiga%20Consultancy%20Services%20W.L.L!5e0!3m2!1sen!2sin!4v1780572733738!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />

              {/* Overlay Gradient to blend map gracefully */}
              <div className={`hidden lg:block absolute inset-0 pointer-events-none transition-opacity duration-500 ${isRtl ? 'bg-gradient-to-r from-transparent via-white/10 to-white/80' : 'bg-gradient-to-r from-white/80 via-white/10 to-transparent'}`} />
            </div>

            {/* Floating Info Card */}
            <motion.div
              initial={{ opacity: 0, x: isRtl ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className={`relative lg:absolute lg:top-1/2 lg:-translate-y-1/2 ${isRtl ? 'lg:right-12' : 'lg:left-12'} w-full lg:w-[420px] bg-white lg:bg-white/90 lg:backdrop-blur-xl lg:rounded-[1.5rem] p-8 lg:p-10 lg:shadow-2xl lg:border lg:border-white/60 transition-all duration-500`}
            >
              <div className="space-y-8">
                {/* Office Info */}
                <div className={`flex gap-5 ${isRtl ? "flex-row-reverse text-right" : ""}`}>
                  <div className="w-14 h-14 rounded-2xl bg-blue-50/80 flex items-center justify-center flex-shrink-0 border border-blue-100/50 shadow-sm">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-black text-[#0A2647] mb-2 uppercase tracking-wider text-sm">{isRtl ? "المقر الرئيسي" : "Headquarters"}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed font-medium">
                      {siteConfig.address}
                    </p>
                  </div>
                </div>

                <div className="w-full h-px bg-gradient-to-r from-slate-200/0 via-slate-200 to-slate-200/0" />

                {/* Hours Info */}
                <div className={`flex gap-5 ${isRtl ? "flex-row-reverse text-right" : ""}`}>
                  <div className="w-14 h-14 rounded-2xl bg-orange-50/80 flex items-center justify-center flex-shrink-0 border border-orange-100/50 shadow-sm">
                    <Clock className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-black text-[#0A2647] mb-2 uppercase tracking-wider text-sm">{isRtl ? "ساعات العمل" : "Working Hours"}</h4>
                    <p className="text-slate-600 text-sm font-medium">
                      {isRtl ? "السبت — الخميس" : "Saturday — Thursday"} <br />
                      <span className="text-[#0A2647] font-bold mt-1 inline-block" dir="ltr">08:00 AM — 06:00 PM</span>
                    </p>
                  </div>
                </div>

                {/* Map Link */}
                <a
                  href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115455.86086842917!2d51.348833843359394!3d25.270731700000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485f95476520dff7%3A0x177b1e4b3376acb7!2sVaiga%20Consultancy%20Services%20W.L.L!5e0!3m2!1sen!2sin!4v1780572733738!5m2!1sen!2sin"
                  target="_blank"
                  className={`flex items-center justify-center gap-3 w-full bg-[#0A2647] hover:bg-accent text-white py-4 px-6 rounded-xl font-bold uppercase text-xs tracking-widest transition-all duration-300 shadow-xl hover:shadow-accent/40 hover:-translate-y-1 group/btn ${isRtl ? "flex-row-reverse" : ""}`}
                >
                  {isRtl ? "افتح في خرائط جوجل" : "Open in Google Maps"}
                  <ExternalLink className={`w-4 h-4 transition-transform duration-300 ${isRtl ? "group-hover/btn:-translate-x-1 group-hover/btn:-translate-y-1" : "group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"}`} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <FAQ />
    </div>
  );
}
