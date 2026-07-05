"use client";

import { useTranslations } from "@/lib/i18n";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  ChevronDown,
  FileCheck,
  Handshake,
  Languages,
  Menu,
  Scale,
  TrendingUp,
  X,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const serviceIcons: Record<string, React.ReactNode> = {
  "company-formation": <Building2 className="w-5 h-5" />,
  "pro-services": <FileCheck className="w-5 h-5" />,
  "local-sponsorship": <Handshake className="w-5 h-5" />,
  "legal-consultation": <Scale className="w-5 h-5" />,
  "translation": <Languages className="w-5 h-5" />,
  "attestation": <ShieldCheck className="w-5 h-5" />,
  "business-consultation": <TrendingUp className="w-5 h-5" />,
};

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const { t, locale, services } = useTranslations();

  const handleLanguageSwitch = () => {
    const nextLocale = locale === "en" ? "ar" : "en";
    const segments = pathname.split("/");
    if (segments[1] === "en" || segments[1] === "ar") {
      segments[1] = nextLocale;
    } else {
      segments.splice(1, 0, nextLocale);
    }
    const newPath = segments.join("/");
    window.location.href = newPath;
  };

  // Force solid background on pages without a dark hero section
  const forceSolidBg = pathname.includes('/thank-you');
  const headerSolid = isScrolled || forceSolidBg;

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
    { href: `/${locale}`, label: t("nav.home") },
    { href: `/${locale}/about`, label: t("nav.about") },
    { href: `/${locale}/services`, label: t("nav.services"), hasDropdown: true },
    { href: `/${locale}/why-qatar`, label: t("nav.whyQatar") },
    { href: `/${locale}/blog`, label: t("nav.blog") },
    { href: `/${locale}/contact`, label: t("nav.contact") },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerSolid
        ? "bg-[#0A2647]/90 backdrop-blur-xl shadow-2xl shadow-black/20 py-2 border-b border-white/5"
        : "bg-transparent py-4 border-b border-white/5"
        }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href={`/${locale}`} className="relative flex items-center shrink-0 group " aria-label="Amanah Business Services Home">
            <div className={`relative transition-all duration-500 scale-105 ${locale === 'ar' ? '-mr-4' : '-ml-4'}`}>
              <Image
                src="/Amanah-logo.png"
                alt="Amanah Business Services Logo"
                width={150}
                height={50}
                className={`transition-all duration-500 object-contain ${headerSolid ? "w-[140px]" : "w-[145px]"
                  } h-auto`}
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== `/${locale}` && pathname.startsWith(link.href));

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
                            <div className="bg-[#0A2647]/95 backdrop-blur-3xl rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.5)] border border-white/10 p-5 overflow-hidden">
                              <div className="grid grid-cols-2 gap-2">
                                {services.map((service) => (
                                  <Link
                                    key={service.id}
                                    href={`/${locale}/services/${service.id}`}
                                    className="flex items-start gap-3.5 p-3 rounded-lg hover:bg-white/5 transition-all duration-300 group/item border border-transparent hover:border-white/5"
                                  >
                                    <div className="w-10 h-10 shrink-0 rounded-lg bg-white/5 flex items-center justify-center text-accent group-hover/item:bg-accent group-hover/item:text-[#0A2647] transition-all duration-300 shadow-sm">
                                      {serviceIcons[service.id]}
                                    </div>
                                    <div className="flex flex-col gap-1 mt-0.5">
                                      <span className="text-[13px] font-bold text-white group-hover/item:text-accent transition-colors leading-tight">
                                        {service.shortTitle}
                                      </span>
                                      <p className="text-[11px] text-white/50 leading-snug line-clamp-2">
                                        {service.subtitle}
                                      </p>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                              <div className="mt-4 pt-4 border-t border-white/10">
                                <Link
                                  href={`/${locale}/services`}
                                  className="group/btn flex items-center justify-between px-5 py-3 bg-white/5 hover:bg-accent hover:text-[#0A2647] rounded-lg text-white text-[12px] font-bold uppercase tracking-wider transition-all duration-300 border border-white/5 hover:border-accent shadow-md"
                                >
                                  <span className="group-hover/btn:text-[#0A2647]">{t("nav.discoverServices")}</span>
                                  <ArrowRight className="w-4 h-4 rtl:rotate-180 transition-transform group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1" />
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

          {/* CTA & Language switcher Buttons */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <button
              onClick={handleLanguageSwitch}
              className="flex items-center gap-1.5 px-4 py-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white text-[12px] font-black rounded-xl transition-all duration-300 uppercase tracking-widest cursor-pointer"
            >
              <Languages className="w-4 h-4" />
              <span>{locale === "en" ? "العربية" : "English"}</span>
            </button>
            <Link
              href={`/${locale}/contact`}
              className="px-7 py-3 bg-accent text-[#0A2647] text-[12px] font-black rounded-xl shadow-lg shadow-accent/20 hover:shadow-accent/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 uppercase tracking-widest"
            >
              {t("nav.getStarted")}
            </Link>
          </div>

          {/* Mobile Toggle & Mobile Language switcher */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={handleLanguageSwitch}
              className="flex items-center gap-1 px-3 py-2 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-xl text-[11px] font-bold uppercase transition-all duration-300 cursor-pointer"
            >
              <Languages className="w-3.5 h-3.5" />
              <span>{locale === "en" ? "AR" : "EN"}</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl hover:bg-white/10 transition-colors text-white"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
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
                        className={`w-full flex items-center justify-between px-4 py-3.5 text-sm font-bold uppercase tracking-widest rounded-xl transition-all ${servicesOpen ? "bg-accent text-[#0A2647] shadow-lg shadow-accent/20" : "text-white hover:bg-white/5"
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
                            className="overflow-hidden bg-white/5 rounded-xl border border-white/10 mt-1.5"
                          >
                            <div className="py-2 px-2 grid grid-cols-1 gap-1">
                              {services.map((service) => (
                                <Link
                                  key={service.id}
                                  href={`/${locale}/services/${service.id}`}
                                  onClick={() => setIsOpen(false)}
                                  className="flex items-center gap-3.5 px-3.5 py-3 text-[13px] font-bold text-white/80 hover:text-[#0A2647] hover:bg-accent rounded-lg transition-all group/mob"
                                >
                                  <div className="w-8 h-8 rounded-md bg-white/10 flex items-center justify-center text-accent group-hover/mob:bg-[#0A2647] group-hover/mob:text-accent shadow-sm transition-colors">
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
                  href={`/${locale}/contact`}
                  onClick={() => setIsOpen(false)}
                  className="block text-center px-6 py-5 bg-accent text-[#0A2647] text-[13px] font-black uppercase tracking-widest rounded-2xl shadow-xl shadow-accent/25 active:scale-[0.98] transition-transform"
                >
                  {t("nav.freeConsultation")}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
