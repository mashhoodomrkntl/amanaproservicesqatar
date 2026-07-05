import { Locale } from "@/lib/i18n";
import { getUiTranslations } from "@/lib/i18n-translations";
import { getSiteConfig, getServices } from "@/lib/data";
import {
  Mail,
  MapPin,
  Phone
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface FooterProps {
  locale?: string;
}

export default function Footer({ locale = "en" }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const t = getUiTranslations(locale as Locale);
  const services = getServices(locale as Locale);
  const siteConfig = getSiteConfig(locale as Locale);

  const quickLinks = [
    { href: `/${locale}`, label: t("nav.home") },
    { href: `/${locale}/about`, label: t("nav.about") },
    { href: `/${locale}/why-qatar`, label: t("nav.whyQatar") },
    { href: `/${locale}/blog`, label: t("nav.blog") },
    { href: `/${locale}/contact`, label: t("nav.contact") },
    { href: `/${locale}/terms`, label: t("terms.title") },
    { href: `/${locale}/privacy`, label: t("privacy.title") },
  ];

  return (
    <footer className="text-white/80" role="contentinfo">
      {/* CTA Banner */}
      <div className="pt-2 pb-10" >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto bg-primary rounded-[2rem] p-8 lg:p-14 relative overflow-hidden shadow-2xl border border-white/5">
            <div className="absolute inset-0 hero-grid opacity-20" />

            <div className="relative flex flex-col items-center justify-center text-center">
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-4 leading-tight max-w-3xl">
                {t("footer.ctaTitle")} <br className="hidden sm:block" />
                <span className="text-accent">{t("footer.ctaAccent")}</span>
              </h2>
              <p className="text-base lg:text-lg text-white/70 mb-10 max-w-2xl font-medium leading-relaxed">
                {t("footer.ctaDesc")}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href={`/${locale}/contact`}
                  className="px-10 py-4 bg-accent text-dark font-black rounded-full hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 uppercase text-[10px] sm:text-xs tracking-widest whitespace-nowrap"
                >
                  {t("footer.ctaButton")}
                </Link>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp.replace("+", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-4 bg-white/5 text-white font-black rounded-full border border-white/20 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 uppercase text-[10px] sm:text-xs tracking-widest whitespace-nowrap"
                >
                  {t("footer.ctaWhatsapp")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Content Wrapper */}
      <div className="bg-[#050B16]">
        {/* Main Footer */}
        <div className="container mx-auto py-20 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Company Info */}
            <div className="lg:col-span-4">
              <Link href={`/${locale}`} className="flex items-center group mb-4 -mt-5" aria-label="Amanah Business Services Home">
                <div className={`relative w-56 h-26 transition-transform duration-500 scale-105`}>
                  <img
                    src="/Amanah_logo_abv.png"
                    alt="Amanah Business Services"
                    className={`w-full h-full object-contain ${locale === 'ar' ? 'object-right' : 'object-left'}`}
                  />
                </div>
              </Link>
              <p className="text-white/50 text-base leading-relaxed mb-8 max-w-sm">
                {t("footer.desc")}
              </p>
              <div className="flex items-center gap-4">
                {[
                  { icon: "/facebook.png", href: siteConfig.socialLinks.facebook, label: "Facebook" },
                  { icon: "/instagram.png", href: siteConfig.socialLinks.instagram, label: "Instagram" },
                  { icon: "/linkedin (1).png", href: siteConfig.socialLinks.linkedin, label: "LinkedIn" },
                  { icon: "/twitter.png", href: siteConfig.socialLinks.twitter, label: "Twitter" },
                  { icon: "/youtube.png", href: siteConfig.socialLinks.youtube, label: "YouTube" },
                  { icon: "/tiktok.png", href: siteConfig.socialLinks.tiktok, label: "tiktok" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-2xl bg-white/5 hover:bg-primary flex items-center justify-center transition-all duration-500 hover:-translate-y-2 border border-white/5"
                    aria-label={`Follow us on ${social.label}`}
                  >
                    <Image src={social.icon} alt={social.label} className="w-7 h-7" width={50} height={50} />
                  </a>
                ))}
              </div>
            </div>

            {/* Our Services */}
            <div className="lg:col-span-3">
              <h3 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-8">
                {t("footer.titleServices")}
              </h3>
              <ul className="space-y-4">
                {services.slice(0, 5).map((service) => (
                  <li key={service.id}>
                    <Link
                      href={`/${locale}/services/${service.id}`}
                      className="text-sm text-white/40 hover:text-accent transition-all duration-300"
                    >
                      {service.shortTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <h3 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-8">
                {t("footer.titleExplore")}
              </h3>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/40 hover:text-accent transition-all duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-3">
              <h3 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-8">
                {t("footer.titleOffice")}
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4 text-sm text-white/50 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-4 h-4 text-accent" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white/30 text-[10px] font-bold uppercase tracking-widest mb-1">{t("footer.callUs")}</span>
                    {siteConfig.allPhones.map((phone, idx) => (
                      <a key={idx} href={`tel:${phone.replace(/\s/g, "")}`} className="font-bold hover:text-accent transition-colors text-right" dir="ltr">
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-4 text-sm text-white/50 hover:text-accent transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-4 h-4 text-accent" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white/30 text-[10px] font-bold uppercase tracking-widest mb-1">{t("footer.emailUs")}</span>
                    <span className="font-bold text-right" dir="ltr">{siteConfig.email}</span>
                  </div>
                </a>
                <div className="flex items-start gap-4 text-sm text-white/50">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-accent" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white/30 text-[10px] font-bold uppercase tracking-widest mb-1">{t("footer.visitUs")}</span>
                    <span className="font-bold leading-relaxed">{siteConfig.address}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 py-10">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <p className="text-[11px] font-bold text-white/20 uppercase tracking-[0.2em]">
              © {currentYear} {t("footer.copyright")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
