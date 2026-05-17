"use client";

import { useEffect } from "react";
import Script from "next/script";
import Head from "next/head";

export default function CookieConsent() {
  useEffect(() => {
    // Fallback if onLoad doesn't fire fast enough or fires too early
    const checkAndInit = () => {
      if (window.silktideConsentManager && !window.silktideConsentManagerHasInitialized) {
        window.silktideConsentManagerHasInitialized = true;
        window.silktideConsentManager.init({
          consentTypes: [
            {
              id: "essential",
              label: "Essential",
              description: "Necessary for the website to function.",
              required: true,
            },
            {
              id: "analytics",
              label: "Analytics",
              description: "Helps us understand site interaction.",
              defaultValue: true,
            },
            {
              id: "marketing",
              label: "Marketing",
              description: "Used to deliver personalized advertisements.",
              defaultValue: false,
            },
          ],
        });
      }
    };

    // Check periodically in case script loads late
    const interval = setInterval(() => {
      if (window.silktideConsentManager) {
        checkAndInit();
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/gh/silktide/consent-manager@v2.0.0/silktide-consent-manager.js"
        strategy="lazyOnload"
      />
    </>
  );
}

declare global {
  interface Window {
    silktideConsentManager: any;
    silktideConsentManagerHasInitialized?: boolean;
  }
}
