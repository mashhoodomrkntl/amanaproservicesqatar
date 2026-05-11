"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, MessageCircleQuestion, HelpCircle } from "lucide-react";
import { faqs } from "@/lib/data";

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className="relative overflow-hidden py-24 lg:py-32 bg-white text-[#0A2647]"
      ref={ref}
      id="faq"
    >
      {/* Background visual elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] opacity-20" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] opacity-20" />
      </div>

      <div className="container mx-auto relative z-10 px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-widest mb-6">
            <HelpCircle className="w-4 h-4" />
            Knowledge Hub
          </div>
          <h2 className="text-4xl lg:text-6xl font-extrabold mb-8 tracking-tight text-[#0A2647]">
            Frequently Asked <span className="text-accent">Questions</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Everything you need to know about setting up and growing your business in Qatar. Can't find what you're looking for? Reach out to our consultants.
          </p>
        </motion.div>

        {/* FAQ Grid/List */}
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-4">
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
                      className="w-full flex items-center justify-between gap-6 p-6 lg:p-8 text-left transition-all"
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
                          <div className="px-6 pb-6 lg:px-8 lg:pb-8 lg:pl-20">
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
          </div>

          {/* CTA Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-500 mb-6 flex items-center justify-center gap-2">
              <MessageCircleQuestion className="w-5 h-5 text-accent" />
              Still have more questions?
            </p>
            <a
              href="#contact-form"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#001a3f] text-white font-black rounded-full hover:bg-accent hover:text-[#001a3f] transition-all shadow-xl shadow-blue-900/10 uppercase text-xs tracking-widest"
            >
              Contact Our Experts
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

