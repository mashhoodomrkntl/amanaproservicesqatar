"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Phone, Mail, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/lib/data";

export default function ContactForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate async send
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <section
      className="relative overflow-hidden py-24 bg-[#F9F6F1] text-[#003366]"
      ref={ref}
      id="contact-form"
    >
      {/* Background glass panels */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Left Side – Contact Info */}
          <div className="space-y-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold tracking-wider uppercase">
              Get In Touch
            </span>
            <h2 className="text-4xl font-extrabold text-[#003366]">
              Book Your Free Consultation
            </h2>
            <p className="text-gray-600 max-w-md">
              Share your business details and our Qatar consultants will guide you through company formation, licensing, and more – all within minutes.
            </p>
            <div className="grid gap-6">
              {[
                { icon: Phone, label: "Call Us", value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
                { icon: Mail, label: "Email Us", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
                { icon: MapPin, label: "Visit Us", value: siteConfig.address, href: "#" },
                { icon: Clock, label: "Hours", value: "Sun‑Thu: 8AM‑6PM", href: "#" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="flex items-center gap-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center transition-colors group-hover:bg-accent/10 group-hover:border-accent/20 shadow-sm">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">{item.label}</div>
                    <div className="text-sm font-semibold text-[#003366]">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

          </div>

          {/* Right Side – Form */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-green-500/20">
                  <Send className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-[#003366]">Thank You!</h3>
                <p className="text-gray-600">
                  We have received your request and will get back to you within 2 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-600 mb-1">
                      Full Name*
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2 rounded-xl bg-gray-50 border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none text-[#003366] placeholder-gray-400 transition"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">
                      Email*
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2 rounded-xl bg-gray-50 border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none text-[#003366] placeholder-gray-400 transition"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-600 mb-1">
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2 rounded-xl bg-gray-50 border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none text-[#003366] placeholder-gray-400 transition"
                      placeholder="+974 XXXX XXXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-600 mb-1">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-2 rounded-xl bg-gray-50 border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none text-[#003366] transition"
                    >
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
                  <label htmlFor="message" className="block text-sm font-medium text-gray-600 mb-1">
                    Message*
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2 rounded-xl bg-gray-50 border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none text-[#003366] placeholder-gray-400 transition resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 bg-accent text-[#002244] font-black rounded-xl hover:bg-white hover:shadow-[0_20px_50px_rgba(204,153,51,0.3)] hover:-translate-y-1 transition-all duration-300 uppercase text-xs tracking-widest"
                >
                  Send Message <Send className="w-4 h-4" />
                </button>
                <p className="text-xs text-gray-500 text-center mt-2">
                  ✓ Free consultation • ✓ 100% Confidential • ✓ Response within 2 hours
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
