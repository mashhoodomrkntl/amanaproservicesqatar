"use client";

import { useEffect } from "react";
import Script from "next/script";
import { useTranslations } from "@/lib/i18n";

export default function CookieConsent() {
  const { t } = useTranslations();

  useEffect(() => {
    // Fallback if onLoad doesn't fire fast enough or fires too early
    const checkAndInit = () => {
      if (window.silktideConsentManager && !window.silktideConsentManagerHasInitialized) {
        window.silktideConsentManagerHasInitialized = true;
        window.silktideConsentManager.init({
          consentTypes: [
            {
              id: "essential",
              label: t("cookie.essential"),
              description: t("cookie.essentialDesc"),
              required: true,
            },
            {
              id: "analytics",
              label: t("cookie.analytics"),
              description: t("cookie.analyticsDesc"),
              defaultValue: true,
            },
            {
              id: "marketing",
              label: t("cookie.marketing"),
              description: t("cookie.marketingDesc"),
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
  }, [t]);

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
