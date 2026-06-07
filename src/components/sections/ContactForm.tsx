"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Send, Phone, Mail, MapPin, Clock, ChevronDown, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/lib/data";

export default function ContactForm() {
  const ref = useRef(null);
  const router = useRouter();
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const services = [
    { value: "", label: "Select a service" },
    { value: "company-formation", label: "Company Formation" },
    { value: "pro-services", label: "PRO Services" },
    { value: "local-sponsorship", label: "Local Sponsorship" },
    { value: "legal-consultation", label: "Legal Consultation" },
    { value: "translation", label: "Translation" },
    { value: "attestation", label: "Attestation" },
    { value: "business-consultation", label: "Business Consultation" },
    { value: "others", label: "Others" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const submissionData = new FormData();
      submissionData.append("access_key", "42c36b9d-d1b8-4535-9bfb-4fecbed2b4b9");
      submissionData.append("name", formData.name);
      submissionData.append("email", formData.email);
      if (formData.phone) submissionData.append("phone", formData.phone);

      const serviceLabel = services.find(s => s.value === formData.service)?.label;
      if (serviceLabel && formData.service !== "") {
        submissionData.append("service", serviceLabel);
      }

      submissionData.append("message", formData.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submissionData
      });

      const data = await response.json();

      if (data.success) {
        router.push("/thank-you");
      } else {
        setErrorMessage(data.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      setErrorMessage("Something went wrong. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="relative overflow-hidden py-24 bg-[#F9F6F1] text-[#0A2647]"
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
            <h2 className="text-4xl font-extrabold text-[#0A2647]">
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
                { icon: Clock, label: "Hours", value: "Saturday‑Thursday: 8AM‑6PM", href: "#" },
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
                    <div className="text-sm font-semibold text-[#0A2647]">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

          </div>

          {/* Right Side – Form */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
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
                    className="w-full px-4 py-2 rounded-xl bg-gray-50 border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none text-[#0A2647] placeholder-gray-400 transition"
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
                    className="w-full px-4 py-2 rounded-xl bg-gray-50 border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none text-[#0A2647] placeholder-gray-400 transition"
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
                    className="w-full px-4 py-2 rounded-xl bg-gray-50 border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none text-[#0A2647] placeholder-gray-400 transition"
                    placeholder="+974 XXXX XXXX"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-600 mb-1">
                    Service Needed
                  </label>
                  <div className="relative" ref={dropdownRef}>
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className={`w-full px-4 py-2 flex items-center justify-between rounded-xl bg-gray-50 border transition cursor-pointer text-left outline-none ${isDropdownOpen
                        ? "border-accent ring-2 ring-accent/20 bg-white"
                        : "border-gray-200 hover:bg-white hover:border-accent/50"
                        }`}
                    >
                      <span className={formData.service ? "text-[#0A2647]" : "text-gray-400"}>
                        {services.find(s => s.value === formData.service)?.label || "Select a service"}
                      </span>
                      <ChevronDown className={`w-4 h-4 text-accent transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} />
                    </button>

                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute z-50 w-full mt-2 py-2 bg-white rounded-xl border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.08)] overflow-hidden"
                        >
                          {services.slice(1).map((service) => (
                            <button
                              type="button"
                              key={service.value}
                              onClick={() => {
                                setFormData({ ...formData, service: service.value });
                                setIsDropdownOpen(false);
                              }}
                              className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${formData.service === service.value
                                ? "bg-accent/10 text-accent font-medium"
                                : "text-gray-600 hover:bg-gray-50 hover:text-[#0A2647]"
                                }`}
                            >
                              {service.label}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
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
                  className="w-full px-4 py-2 rounded-xl bg-gray-50 border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none text-[#0A2647] placeholder-gray-400 transition resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              {errorMessage && (
                <p className="text-sm text-red-500 font-medium text-center">{errorMessage}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-4 bg-accent text-[#001a3f] font-black rounded-xl hover:bg-white hover:shadow-[0_20px_50px_rgba(197,160,89,0.3)] hover:-translate-y-1 transition-all duration-300 uppercase text-xs tracking-widest disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:bg-accent disabled:hover:shadow-none"
              >
                {isSubmitting ? "Sending..." : <>Send Message <Send className="w-4 h-4" /></>}
              </button>
              <p className="text-xs text-gray-500 text-center mt-2">
                ✓ Free consultation • ✓ 100% Confidential • ✓ Response within 2 hours
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
