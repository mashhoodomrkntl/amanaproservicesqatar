import { services, siteConfig } from "@/lib/data";
import {
  Mail,
  MapPin,
  Phone
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050B16] text-white/80" role="contentinfo">
      {/* CTA Banner */}
      <div className="relative overflow-hidden">
        <div className="bg-primary py-20 lg:py-24">
          <div className="absolute inset-0 hero-grid opacity-20" />
          <div className="container relative mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-6 leading-tight">
              Ready to Start Your <br />
              <span className="text-accent">Business in Qatar?</span>
            </h2>
            <p className="text-base lg:text-lg text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
              Get a free consultation from our experts. We&apos;ll guide you through
              every step of your business setup journey with absolute transparency.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-5">
              <Link
                href="/contact"
                className="px-10 py-5 bg-accent text-dark font-black rounded-2xl hover:bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 uppercase text-xs tracking-widest"
              >
                Schedule Consultation
              </Link>
              <a
                href={`https://wa.me/${siteConfig.whatsapp.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 bg-white/5 text-white font-black rounded-2xl border border-white/20 hover:bg-white/10 transition-all duration-300 uppercase text-xs tracking-widest"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto py-20 lg:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Company Info */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center group mb-4 -mt-5" aria-label="Amanah Business Services Home">
              <div className="relative w-56 h-26 transition-transform duration-500 scale-105 ">
                <img
                  src="/Amanah_logo_abv.png"
                  alt="Amanah Business Services"
                  className="w-full h-full object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-white/50 text-base leading-relaxed mb-8 max-w-sm">
              Qatar&apos;s trusted partner for company formation, PRO services, Translation & Attestation
              and business consultancy. Over a decade of excellence since{" "}
              {siteConfig.foundedYear}.
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
              Expert Services
            </h3>
            <ul className="space-y-4">
              {services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.id}`}
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
              Explore
            </h3>
            <ul className="space-y-4">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "Our Story" },
                { href: "/why-qatar", label: "Why Qatar" },
                { href: "/blog", label: "Journal" },
                { href: "/contact", label: "Contact" },
                { href: "/terms", label: "Terms and Conditions" },
                { href: "/privacy", label: "Privacy Policy" },
              ].map((link) => (
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
              Office
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4 text-sm text-white/50 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-4 h-4 text-accent" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white/30 text-[10px] font-bold uppercase tracking-widest mb-1">Call Us</span>
                  {siteConfig.allPhones.map((phone, idx) => (
                    <a key={idx} href={`tel:${phone.replace(/\s/g, "")}`} className="font-bold hover:text-accent transition-colors">
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
                  <span className="text-white/30 text-[10px] font-bold uppercase tracking-widest mb-1">Email Us</span>
                  <span className="font-bold">{siteConfig.email}</span>
                </div>
              </a>
              <div className="flex items-start gap-4 text-sm text-white/50">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-accent" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white/30 text-[10px] font-bold uppercase tracking-widest mb-1">Visit Us</span>
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
            © {currentYear} Amanah Business Services. Built for Excellence.
          </p>
        </div>
      </div>
    </footer>
  );
}
