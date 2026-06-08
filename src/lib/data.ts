import * as dataEn from "./data-en";
import * as dataAr from "./data-ar";

export function getSiteConfig(locale: string) {
  return locale === "ar" ? dataAr.siteConfig : dataEn.siteConfig;
}

export function getServices(locale: string) {
  return locale === "ar" ? dataAr.services : dataEn.services;
}

export function getStats(locale: string) {
  return locale === "ar" ? dataAr.stats : dataEn.stats;
}

export function getProcessSteps(locale: string) {
  return locale === "ar" ? dataAr.processSteps : dataEn.processSteps;
}

export function getTestimonials(locale: string) {
  return locale === "ar" ? dataAr.testimonials : dataEn.testimonials;
}

export function getFaqs(locale: string) {
  return locale === "ar" ? dataAr.faqs : dataEn.faqs;
}

export function getWhyQatar(locale: string) {
  return locale === "ar" ? dataAr.whyQatar : dataEn.whyQatar;
}

export function getBlogPosts(locale: string) {
  return locale === "ar" ? dataAr.blogPosts : dataEn.blogPosts;
}

// Keep static exports for backwards compatibility/fallback or build compilation steps where locale isn't dynamic.
export const siteConfig = dataEn.siteConfig;
export const services = dataEn.services;
export const stats = dataEn.stats;
export const processSteps = dataEn.processSteps;
export const testimonials = dataEn.testimonials;
export const faqs = dataEn.faqs;
export const whyQatar = dataEn.whyQatar;
export const blogPosts = dataEn.blogPosts;
