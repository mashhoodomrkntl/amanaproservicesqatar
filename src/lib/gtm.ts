declare global {
  interface Window {
    dataLayer: Record<string, any>[];
  }
}

/**
 * Pushes custom events to Google Tag Manager dataLayer
 */
export const pushGtmEvent = (eventData: Record<string, any>) => {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(eventData);
  }
};
