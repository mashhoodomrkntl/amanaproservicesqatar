"use client";

import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useTranslations } from "@/lib/i18n";

export default function ThankYouPage() {
  const { t, locale } = useTranslations();
  const isRtl = locale === "ar";

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[#FAFAFA] pt-32 pb-20">
      <div className={`container mx-auto px-6 max-w-2xl text-center ${isRtl ? "direction-rtl" : ""}`}>
        <div className="w-24 h-24 mx-auto bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-8 relative shadow-[0_0_40px_rgba(34,197,94,0.2)]">
          <CheckCircle2 className="w-12 h-12 relative z-10" />
        </div>

        <h1 className="text-4xl lg:text-5xl font-black text-[#0A2647] mb-6 tracking-tight">
          {t("thankyou.title")} <span className="text-accent italic">
            {isRtl ? "على تواصلك معنا!" : "for Reaching Out!"}
          </span>
        </h1>

        <p className="text-slate-600 text-lg mb-10 leading-relaxed">
          {t("thankyou.subtitle")}
        </p>

        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${isRtl ? "sm:flex-row-reverse" : ""}`}>
          <Link
            href={`/${locale}`}
            className="px-8 py-4 bg-[#0A2647] text-white text-sm font-black uppercase tracking-widest rounded-2xl hover:bg-accent transition-all duration-300 shadow-xl shadow-[#0A2647]/10 w-full sm:w-auto text-center"
          >
            {t("thankyou.button")}
          </Link>
          <Link
            href={`/${locale}/services`}
            className={`px-8 py-4 bg-white text-[#0A2647] border border-slate-200 text-sm font-black uppercase tracking-widest rounded-2xl hover:border-accent hover:text-accent transition-all duration-300 w-full sm:w-auto text-center flex items-center justify-center gap-2 group ${isRtl ? "flex-row-reverse" : ""}`}
          >
            {isRtl ? "استعرض خدماتنا" : "Explore Services"}
            <ArrowRight className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${isRtl ? "rotate-180 group-hover:-translate-x-1 group-hover:translate-x-0" : ""}`} />
          </Link>
        </div>
      </div>
    </div>
  );
}
