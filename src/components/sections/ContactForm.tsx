"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Phone, Mail, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/lib/data";

export default function ContactForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden" ref={ref} id="contact-form">
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50" />
      <div className="container relative mx-auto">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left Info */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }} className="lg:col-span-2">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary text-sm font-semibold mb-4 tracking-wide uppercase">Contact Us</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-6 leading-tight">Schedule a Free <span className="gradient-text">Consultation</span></h2>
            <p className="text-text-secondary leading-relaxed mb-8">Share your details and our Qatar business consultants will guide you through company formation, ownership options, licensing, and costs.</p>

            <div className="space-y-5">
              {[
                { icon: Phone, label: "Call Us", value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
                { icon: Mail, label: "Email Us", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
                { icon: MapPin, label: "Visit Us", value: siteConfig.address, href: "#" },
                { icon: Clock, label: "Working Hours", value: "Sun - Thu: 8AM - 6PM", href: "#" },
              ].map((item, i) => (
                <a key={i} href={item.href} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-xs text-text-muted font-medium uppercase tracking-wider">{item.label}</div>
                    <div className="text-sm font-semibold text-dark">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 p-4 rounded-2xl bg-primary-50 border border-primary/10">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-dark">Quick Response</span>
              </div>
              <p className="text-sm text-text-secondary">We respond to all inquiries within 2 hours during business hours.</p>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="lg:col-span-3">
            <div className="bg-white rounded-3xl border border-border shadow-xl shadow-primary/5 p-8 lg:p-10">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-success" />
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-2">Thank You!</h3>
                  <p className="text-text-secondary">We&apos;ve received your inquiry and will contact you within 2 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-dark mb-2">Full Name *</label>
                      <input id="name" type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all text-sm" placeholder="Your full name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-dark mb-2">Email Address *</label>
                      <input id="email" type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all text-sm" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-dark mb-2">Phone Number</label>
                      <input id="phone" type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all text-sm" placeholder="+974 XXXX XXXX" />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-dark mb-2">Service Needed</label>
                      <select id="service" value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all text-sm bg-white">
                        <option value="">Select a service</option>
                        <option value="company-formation">Company Formation</option>
                        <option value="pro-services">PRO Services</option>
                        <option value="local-sponsorship">Local Sponsorship</option>
                        <option value="legal-consultation">Legal Consultation</option>
                        <option value="translation">Translation & Attestation</option>
                        <option value="business-consultation">Business Consultation</option>
                        <option value="accounting">Accounting & Bookkeeping</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-dark mb-2">Your Message *</label>
                    <textarea id="message" required rows={4} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all text-sm resize-none" placeholder="Tell us about your business requirements..." />
                  </div>
                  <button type="submit" className="w-full py-4 bg-gradient-to-r from-primary to-primary-dark text-white font-bold rounded-xl hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2">
                    Send Message <Send className="w-4 h-4" />
                  </button>
                  <p className="text-xs text-text-muted text-center">✓ Free consultation · ✓ 100% Confidential · ✓ Response within 2 hours</p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
