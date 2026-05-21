"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Building2,
  FileCheck,
  Handshake,
  Scale,
  Languages,
  TrendingUp,
  Calculator,
  ArrowRight,
} from "lucide-react";
import { services } from "@/lib/data";

const serviceIcons: Record<string, React.ReactNode> = {
  "company-formation": <Building2 className="w-5 h-5" />,
  "pro-services": <FileCheck className="w-5 h-5" />,
  "local-sponsorship": <Handshake className="w-5 h-5" />,
  "legal-consultation": <Scale className="w-5 h-5" />,
  "translation-attestation": <Languages className="w-5 h-5" />,
  "business-consultation": <TrendingUp className="w-5 h-5" />,
  "accounting-bookkeeping": <Calculator className="w-5 h-5" />,
};

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services", hasDropdown: true },
    { href: "/why-qatar", label: "Why Qatar" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? "bg-[#0A2647]/90 backdrop-blur-xl shadow-2xl shadow-black/20 py-2 border-b border-white/5"
        : "bg-transparent py-4 border-b border-white/5"
        }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" className="relative flex items-center shrink-0 group " aria-label="Amanah Business Services Home">
            <div className={`relative transition-all duration-500 scale-105 ${isScrolled ? "w-[275px] h-[95px]" : "w-[290px] h-[100px]"
              }`}>
              <Image
                src="/Amanah (H-light).png"
                alt="Amanah Business Services Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

              return (
                <div key={link.href} className="relative">
                  {link.hasDropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      <Link
                        href={link.href}
                        className={`px-4 py-2 text-[13px] font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 rounded-xl hover:bg-white/10 relative ${isActive || servicesOpen ? "text-accent bg-white/10" : "text-white"
                          }`}
                      >
                        {link.label}
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""
                            }`}
                        />
                        {isActive && (
                          <motion.div
                            layoutId="nav-underline"
                            className="absolute bottom-1 left-4 right-4 h-0.5 bg-accent rounded-full"
                            transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                          />
                        )}
                      </Link>

                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.98 }}
                            transition={{ duration: 0.25, ease: "circOut" }}
                            className="absolute top-full left-1/2 -translate-x-1/2 w-[560px] pt-4 z-[60]"
                          >
                            <div className="bg-[#0A2647]/95 backdrop-blur-3xl rounded-[2.5rem] shadow-[0_30px_70px_rgba(0,0,0,0.4)] border border-white/10 p-6 overflow-hidden">
                              <div className="grid grid-cols-2 gap-3">
                                {services.map((service) => (
                                  <Link
                                    key={service.id}
                                    href={`/services/${service.id}`}
                                    className="flex items-start gap-4 p-4 rounded-3xl hover:bg-white/5 transition-all duration-500 group/item"
                                  >
                                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-white/5 flex items-center justify-center text-accent group-hover/item:bg-accent group-hover/item:text-primary transition-all duration-500 shadow-sm">
                                      {serviceIcons[service.id]}
                                    </div>
                                    <div className="flex flex-col gap-1 mt-0.5">
                                      <span className="text-[14px] font-bold text-white group-hover/item:text-accent transition-colors leading-none">
                                        {service.shortTitle}
                                      </span>
                                      <p className="text-[11px] text-white/50 leading-tight line-clamp-2 mt-1">
                                        {service.subtitle}
                                      </p>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                              <div className="mt-5 pt-5 border-t border-white/5">
                                <Link
                                  href="/services"
                                  className="group/btn flex items-center justify-between px-6 py-3.5 bg-white/5 hover:bg-accent hover:text-primary rounded-2xl text-white text-[12px] font-bold transition-all duration-500"
                                >
                                  <span className="group-hover/btn:text-primary">Discover all our specialized business services</span>
                                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                                </Link>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className={`px-4 py-2 text-[13px] font-bold uppercase tracking-wider transition-all rounded-xl relative ${isActive ? "text-accent bg-white/10" : "text-white hover:text-accent hover:bg-white/10"
                        }`}
                    >
                      {link.label}
                      {isActive && (
                        <motion.div
                          layoutId="nav-underline"
                          className="absolute bottom-1 left-4 right-4 h-0.5 bg-accent rounded-full"
                          transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                        />
                      )}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <Link
              href="/contact"
              className="px-7 py-3 bg-accent text-[#0A2647] text-[12px] font-black rounded-xl shadow-lg shadow-accent/20 hover:shadow-accent/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 uppercase tracking-widest"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-white/10 transition-colors text-white"
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
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden border-t border-white/10 overflow-y-auto max-h-[calc(100dvh-5rem)] bg-[#0A2647]/98 backdrop-blur-2xl scrollbar-premium"
          >
            <div className="px-6 py-8 space-y-2">
              {navLinks.map((link) => (
                <div key={link.href}>
                  {link.hasDropdown ? (
                    <div className="space-y-1">
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className={`w-full flex items-center justify-between px-4 py-4 text-sm font-bold uppercase tracking-widest rounded-2xl transition-all ${servicesOpen ? "bg-accent text-[#0A2647] shadow-lg shadow-accent/20" : "text-white hover:bg-white/5"
                          }`}
                      >
                        {link.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""
                            }`}
                        />
                      </button>
                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden bg-white/5 rounded-3xl mt-2"
                          >
                            <div className="py-3 px-3 grid grid-cols-1 gap-1.5">
                              {services.map((service) => (
                                <Link
                                  key={service.id}
                                  href={`/services/${service.id}`}
                                  onClick={() => setIsOpen(false)}
                                  className="flex items-center gap-4 px-4 py-4 text-[14px] font-bold text-white/70 hover:text-accent transition-all"
                                >
                                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-accent shadow-sm">
                                    {serviceIcons[service.id]}
                                  </div>
                                  {service.shortTitle}
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
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-4 text-sm font-bold uppercase tracking-widest text-white hover:bg-white/5 rounded-2xl transition-all"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-6 mt-6 border-t border-white/10">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block text-center px-6 py-5 bg-accent text-[#0A2647] text-[13px] font-black uppercase tracking-widest rounded-2xl shadow-xl shadow-accent/25 active:scale-[0.98] transition-transform"
                >
                  Free Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
