"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Phone,
  Mail,
  ChevronDown,
  Building2,
  FileCheck,
  Handshake,
  Scale,
  Languages,
  TrendingUp,
  Calculator,
} from "lucide-react";
import { siteConfig, services } from "@/lib/data";

const serviceIcons: Record<string, React.ReactNode> = {
  "company-formation": <Building2 className="w-4 h-4" />,
  "pro-services": <FileCheck className="w-4 h-4" />,
  "local-sponsorship": <Handshake className="w-4 h-4" />,
  "legal-consultation": <Scale className="w-4 h-4" />,
  "translation-attestation": <Languages className="w-4 h-4" />,
  "business-consultation": <TrendingUp className="w-4 h-4" />,
  "accounting-bookkeeping": <Calculator className="w-4 h-4" />,
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services", hasDropdown: true },
    { href: "/why-qatar", label: "Why Qatar" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-[#0A1628] text-white/60 text-[10px] font-bold tracking-[0.1em] uppercase border-b border-white/5">
        <div className="container mx-auto py-3 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2.5 hover:text-accent transition-colors">
              <Phone className="w-3.5 h-3.5 text-accent" />
              {siteConfig.phone}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2.5 hover:text-accent transition-colors">
              <Mail className="w-3.5 h-3.5 text-accent" />
              {siteConfig.email}
            </a>
          </div>
          <div className="flex items-center gap-6">
            {Object.entries(siteConfig.socialLinks).map(([platform, url]) => (
              <a key={platform} href={url} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label={`Follow us on ${platform}`}>
                {platform}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-2xl shadow-primary/10 border-b border-primary/5 py-2"
            : "bg-white border-b border-border/50 py-4"
        }`}
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-4 group shrink-0" aria-label="Amanah Business Services Home">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-black text-xl shadow-xl group-hover:shadow-primary/40 transition-all duration-500 group-hover:rotate-6">
                A
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-dark tracking-tight">
                  AMANAH
                </span>
                <span className="text-[9px] text-text-secondary font-bold tracking-[0.2em] uppercase -mt-1">
                  Business Services
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-4">
              {navLinks.map((link) => (
                <div key={link.href} className="relative group">
                  {link.hasDropdown ? (
                    <div
                      className="relative py-2"
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      <Link
                        href={link.href}
                        className="px-4 py-2 text-[13px] font-bold text-text-primary hover:text-primary transition-all flex items-center gap-1.5 rounded-xl hover:bg-primary-50"
                      >
                        {link.label}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} />
                      </Link>

                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-2xl border border-border p-3 overflow-hidden z-[60]"
                          >
                            <div className="grid gap-1">
                              {services.map((service) => (
                                <Link
                                  key={service.id}
                                  href={`/services/${service.id}`}
                                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary-50 transition-colors group/item"
                                >
                                  <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-white transition-colors">
                                    <div className="w-1 h-1 bg-current rounded-full" />
                                  </div>
                                  <span className="text-sm font-bold text-text-primary">
                                    {service.shortTitle}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className="px-4 py-2 text-[13px] font-bold text-text-primary hover:text-primary transition-all rounded-xl hover:bg-primary-50"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4 shrink-0">
              <Link
                href="/contact"
                className="px-7 py-3.5 bg-[#0047AB] text-white text-[13px] font-black rounded-2xl shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 uppercase tracking-wider"
              >
                Free Consultation
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl hover:bg-surface transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-border overflow-hidden bg-white"
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link) => (
                  <div key={link.href}>
                    {link.hasDropdown ? (
                      <>
                        <button
                          onClick={() => setServicesOpen(!servicesOpen)}
                          className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-text-primary hover:bg-primary-50 rounded-xl transition-colors"
                        >
                          {link.label}
                          <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                        </button>
                        <AnimatePresence>
                          {servicesOpen && (
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: "auto" }}
                              exit={{ height: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 space-y-1 mt-1">
                                {services.map((service) => (
                                  <Link
                                    key={service.id}
                                    href={`/services/${service.id}`}
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-text-secondary hover:text-primary hover:bg-primary-50 rounded-lg transition-colors"
                                  >
                                    {serviceIcons[service.id]}
                                    {service.shortTitle}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-3 text-sm font-medium text-text-primary hover:bg-primary-50 rounded-xl transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-3 border-t border-border">
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="block text-center px-6 py-3 bg-gradient-to-r from-primary to-primary-dark text-white text-sm font-semibold rounded-xl"
                  >
                    Free Consultation
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
