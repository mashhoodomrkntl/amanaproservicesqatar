"use client";

import { useTranslations } from "@/lib/i18n";
import { motion } from "framer-motion";
import Image from "next/image";
import { pushGtmEvent } from "@/lib/gtm";

export default function WhatsAppButton() {
  const { locale, siteConfig } = useTranslations();
  
  const textMessage = locale === "ar" 
    ? "مرحباً أمانة لخدمات الأعمال، أود الاستفسار عن خدماتكم."
    : "Hello Amanah Business Services, I would like to inquire about your services.";

  const handleClick = () => {
    pushGtmEvent({
      event: "whatsapp_click",
      event_category: "engagement",
      event_label: "WhatsApp Floating Button",
    });
  };

  return (
    <motion.a
      href={`https://wa.me/${siteConfig.whatsapp.replace("+", "")}?text=${encodeURIComponent(textMessage)}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="fixed bottom-3 right-4 rtl:right-auto rtl:left-4 z-50 w-10 h-10 hover:scale-110 transition-all duration-300 cursor-pointer"
      aria-label="Chat with us on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
    >
      <Image
        src="/whtspp.png"
        alt="WhatsApp"
        fill
        className="object-contain"
        priority
      />
    </motion.a>
  );
}
