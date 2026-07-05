"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, MessageCircleQuestion, HelpCircle, Phone, Mail } from "lucide-react";
import { useTranslations } from "@/lib/i18n";

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const { t, faqs, siteConfig } = useTranslations();

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section
      className="relative py-24 lg:py-32 bg-white text-[#0A2647]"
      ref={ref}
      id="faq"
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      {/* Background visual elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] opacity-20" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] opacity-20" />
      </div>

      <div className="container mx-auto relative z-10 px-4">
        {/* Removed items-start so columns stretch, enabling sticky scroll for left side */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Left Column: Image & Contact Info */}
          <div className="relative h-full">
            <div className="lg:sticky lg:top-32 flex flex-col gap-6">

              {/* Header moved to left column */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="max-w-xl"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-widest mb-6">
                  <HelpCircle className="w-4 h-4" />
                  {t("faq.badge")}
                </div>
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-6 tracking-tight text-[#0A2647] leading-tight">
                  {t("faq.title")}
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed">
                  {t("faq.subtitle")}
                </p>
              </motion.div>

              {/* Decorative Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hidden lg:block relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 w-full bg-[#0A2647]/55"
              >
                <div className="aspect-[4/3] w-full relative group">
                  <img
                    src="/faq.webp"
                    alt="Amanah Support"
                    className="w-full h-full object-cover mix-blend-overlay opacity-70 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2647]/90 via-[#0A2647]/40 to-transparent" />

                  {/* Company Info Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-10 z-10">
                    <div className="transform transition-transform duration-500 translate-y-2 group-hover:translate-y-0">
                      <h3 className="text-white font-extrabold text-2xl lg:text-3xl mb-3 tracking-tight">
                        Why Amanah?
                      </h3>
                      <p className="text-white/80 text-sm lg:text-base leading-relaxed mb-5">
                        We provide expert corporate services, seamless company formation, and reliable PRO solutions in Qatar. Your trusted partner for business success.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-white text-xs font-semibold border border-white/20">Expert Team</span>
                        <span className="px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-white text-xs font-semibold border border-white/20">Fast Setup</span>
                        <span className="px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-white text-xs font-semibold border border-white/20">Reliable</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Still have questions block */}
              <div className="hidden lg:block">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="bg-[#0A2647] rounded-3xl p-6 lg:p-8 text-center sm:text-start flex flex-col 2xl:flex-row items-center justify-between gap-6 w-full shadow-xl shadow-blue-900/10 mt-2"
                >
                  <div>
                    <p className="text-white font-bold text-lg mb-1 flex items-center justify-center sm:justify-start gap-2">
                      <MessageCircleQuestion className="w-5 h-5 text-accent" />
                      {t("faq.ctaText")}
                    </p>
                    <p className="text-white/60 text-sm text-center">Our support team is ready to help.</p>
                  </div>
                  <a
                    href="#contact-form"
                    className="inline-flex items-center justify-center whitespace-nowrap gap-2 px-6 py-3.5 bg-accent text-white font-bold rounded-full hover:bg-white hover:text-[#0A2647] transition-all text-xs uppercase tracking-widest shadow-lg flex-shrink-0"
                  >
                    {t("faq.ctaButton")}
                  </a>
                </motion.div>
              </div>

              {/* Support Info Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="hidden lg:grid grid-cols-2 gap-4 w-full mt-2"
              >
                <a href={`tel:${siteConfig.allPhones[0]?.replace(/\s/g, "")}`} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-accent/30 hover:bg-white transition-all group">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-4 text-accent group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-[#0A2647] mb-1">{t("footer.callUs") || "Call Us"}</h4>
                  <p className="text-sm text-gray-500 font-medium" dir="ltr">{siteConfig.allPhones[0]}</p>
                </a>
                <a href={`mailto:${siteConfig.email}`} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-accent/30 hover:bg-white transition-all group">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-4 text-accent group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-[#0A2647] mb-1">{t("footer.emailUs") || "Email Us"}</h4>
                  <p className="text-sm text-gray-500 font-medium">{siteConfig.email}</p>
                </a>
              </motion.div>

            </div>
          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="flex flex-col gap-8 h-full">
            {/* FAQs */}
            <div className="flex flex-col gap-4">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div
                      className={`group transition-all duration-500 rounded-2xl border ${isOpen
                        ? "bg-white border-accent shadow-[0_20px_50px_rgba(197,160,89,0.15)]"
                        : "bg-gray-50 border-gray-100 hover:border-accent/30 hover:bg-white"
                        } overflow-hidden`}
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                        className="w-full flex items-center justify-between gap-6 p-6 lg:p-8 text-start transition-all cursor-pointer outline-none"
                      >
                        <div className="flex items-center gap-4">
                          <span className={`text-lg font-mono transition-colors duration-300 ${isOpen ? "text-accent" : "text-gray-500"}`}>
                            {(index + 1).toString().padStart(2, '0')}
                          </span>
                          <h3 className={`text-lg lg:text-xl font-bold transition-colors duration-300 ${isOpen ? "text-[#0A2647]" : "text-gray-600 group-hover:text-[#0A2647]"
                            }`}>
                            {faq.question}
                          </h3>
                        </div>

                        <div className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-500 ${isOpen
                          ? "bg-accent border-accent text-white rotate-180"
                          : "bg-transparent border-gray-200 text-gray-400 group-hover:border-accent group-hover:text-accent"
                          }`}>
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                          >
                            <div className="px-6 pb-6 lg:px-8 lg:pb-8 lg:ps-20 text-start">
                              <div className="h-px w-full bg-gradient-to-r from-accent/30 to-transparent mb-6" />
                              <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                                {faq.answer}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                );
              })}

              {/* Mobile CTA Footer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 }}
                className="mt-8 lg:hidden text-center bg-gray-50 p-8 rounded-3xl border border-gray-100"
              >
                <p className="text-gray-600 font-medium mb-6 flex items-center justify-center gap-2">
                  <MessageCircleQuestion className=" hidden lg:block w-5 h-5 text-accent" />
                  {t("faq.ctaText")}
                </p>
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center w-full sm:w-auto gap-2 px-8 py-4 bg-[#0A2647] text-white font-bold rounded-full hover:bg-accent transition-all uppercase text-sm tracking-widest"
                >
                  {t("faq.ctaButton")}
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
