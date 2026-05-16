"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${siteConfig.whatsapp.replace("+", "")}?text=Hello%20Amanah%20Business%20Services,%20I%20would%20like%20to%20inquire%20about%20your%20services.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-3 right-4 z-50 w-10 h-10 hover:scale-110 transition-all duration-300 cursor-pointer"
      aria-label="Chat with us on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
    >
      <Image
        src="/whtspp.png"
        alt="WhatsApp"
        fill
        className="object-contain object-left"
        priority
      />
    </motion.a>
  );
}
