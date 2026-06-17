"use client";

import PageHeader from "@/components/PageHeader";
import { useTranslations } from "@/lib/i18n";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  Award,
  Briefcase,
  Building2,
  CheckCircle,
  Clock,
  Globe,
  Heart,
  Shield,
  Target,
  TrendingUp,
  Users,
  Zap
} from "lucide-react";
import { useRef } from "react";

const iconMap: Record<string, React.ElementType> = {
  Shield,
  Award,
  Heart,
  Globe,
  TrendingUp,
  Briefcase,
  Clock,
  Zap,
  Building2,
  Users,
  Target,
  CheckCircle
};

export default function AboutPage() {
  const storyRef = useRef(null);
  const valuesRef = useRef(null);
  const timelineRef = useRef(null);
  const whyRef = useRef(null);

  const isStoryInView = useInView(storyRef, { once: true, margin: "-100px" });
  const isValuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const isTimelineInView = useInView(timelineRef, { once: true, margin: "-100px" });
  const isWhyInView = useInView(whyRef, { once: true, margin: "-100px" });

  const { t, locale, values, milestones, highlights } = useTranslations();

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"]
  });

  const timelineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const highlightsData = highlights.map(item => {
    return {
      ...item,
      icon: iconMap[item.key === "rate" ? "TrendingUp" : item.key === "clients" ? "Briefcase" : item.key === "response" ? "Clock" : "Zap"]
    };
  });

  const whyChooseUsCards = [
    { title: locale === "ar" ? "إنجاز سريع للمعاملات" : "Fast-Track Processing", desc: locale === "ar" ? "تضمن شبكاتنا وعلاقاتنا المتميزة مع الجهات الحكومية سرعة قياسية في الحصول على الموافقات." : "Proprietary networks and relationships with government bodies ensure record-breaking approval times." },
    { title: locale === "ar" ? "منظومة عمل شفافة" : "Transparent Ecosystem", desc: locale === "ar" ? "متابعة لحظية لمعاملاتك ووضوح تام في التسعير مع انعدام التكاليف المخفية." : "Real-time tracking of your applications and absolute clarity on pricing with zero hidden costs." },
    { title: locale === "ar" ? "استشارات استراتيجية" : "Strategic Advisory", desc: locale === "ar" ? "نحن لا نملأ النماذج فقط؛ بل نقدم استشارات استراتيجية وافية حول هيكل الشركات ودخول السوق." : "We don't just fill forms; we provide strategic advice on corporate structure and market entry." },
    { title: locale === "ar" ? "خبراء متعددو اللغات" : "Multi-Lingual Experts", desc: locale === "ar" ? "يتكون فريقنا من أكثر من 30 متخصصاً يتقنون العربية والإنجليزية و5 لغات أخرى." : "Our team consists of 30+ professionals fluent in Arabic, English, and 5+ other languages." }
  ];

  return (
    <div className="bg-[#FAFAFA] overflow-x-clip">
      <PageHeader
        title={t("nav.about")}
        subtitle={locale === "ar" ? "تمكين رحلة عملك في قطر بالثقة والخبرة منذ عام 2015." : "Empowering your business journey in Qatar with trust and expertise since 2015."}
        breadcrumbs={[{ label: t("nav.home"), href: `/${locale}` }, { label: t("nav.about") }]}
      />

      {/* Story Section */}
      <section className="py-24 lg:py-32 relative overflow-hidden" ref={storyRef}>
        <div className="absolute top-0 right-0 rtl:right-auto rtl:left-0 w-1/3 h-full bg-[#001a3f]/[0.02] -skew-x-12 rtl:skew-x-12" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: locale === "ar" ? 50 : -50 }}
              animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-6 text-start"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-[1px] bg-accent" />
                <span className="text-accent text-xs font-black uppercase tracking-[0.3em]">{locale === "ar" ? "تأسست عام 2015" : "Established 2015"}</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-black text-[#0A2647] mb-8 leading-[1.1]">
                {locale === "ar" ? (
                  <>
                    إعادة تعريف <span className="text-accent italic">الاستشارات</span> <br />
                    التجارية في قطر
                  </>
                ) : (
                  <>
                    Redefining Business <br />
                    <span className="text-accent italic">Consultancy</span> in Qatar
                  </>
                )}
              </h2>

              <div className="space-y-6 text-lg text-slate-600 leading-relaxed max-w-xl">
                {locale === "ar" ? (
                  <>
                    <p>
                      تأسست أمانة لخدمات الأعمال بمهمة فريدة: إزالة التعقيدات من عملية تأسيس الشركات في قطر وتقديم ركيزة من الثقة المطلقة للمستثمرين المحليين والدوليين.
                    </p>
                    <p className="font-medium text-[#0A2647]">
                      \"أمانة\" ليست مجرد اسم لنا — بل هي الكلمة العربية التي تعني الأمانة والثقة. وهي المبدأ الأساسي الذي يوجه كل معاملة ننجزها وكل شراكة نعقدها.
                    </p>
                    <p>
                      اليوم، نقف كواحدة من أفضل وكالات الخدمات الحكومية (PRO) وتأسيس الأعمال في قطر، حيث ندير التوسع الإقليمي للعلامات التجارية العالمية وندعم أحلام رواد الأعمال المحليين بفريق يضم أكثر من 30 مستشاراً خبيراً.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      Amanah Business Services was founded with a singular mission: to eliminate the complexities of business setup in Qatar and provide a foundation of absolute trust for international and local investors.
                    </p>
                    <p className="font-medium text-[#0A2647]">
                      "Amanah" isn't just our name — it's the Arabic word for "Trust." It's the core principle that guides every document we process and every partnership we form.
                    </p>
                    <p>
                      Today, we stand as one of Qatar's premier PRO and business setup agencies, managing the regional expansion of global brands and supporting the dreams of local entrepreneurs with a team of 30+ expert consultants.
                    </p>
                  </>
                )}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12">
                {highlightsData.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isStoryInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    className="p-4 rounded-2xl bg-white shadow-sm border border-slate-100 group hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300"
                  >
                    <item.icon className="w-5 h-5 text-accent mb-3 group-hover:scale-110 transition-transform" />
                    <div className="text-xl font-black text-[#0A2647]" dir="ltr">{item.value}</div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{item.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isStoryInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
              className="lg:col-span-6 relative"
            >
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
                <div className="aspect-[4/5] bg-[#001a3f] relative group">
                  <img
                    src="/office.avif"
                    alt="Amanah Office"
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001a3f] via-transparent to-transparent opacity-60" />
                </div>
              </div>

              {/* Floating Experience Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isStoryInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-8 -left-8 rtl:-left-auto rtl:-right-8 z-20 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100"
              >
                <div className="flex items-center gap-5">
                  <div className="text-5xl font-black text-accent" dir="ltr">10+</div>
                  <div className="text-sm font-bold text-[#0A2647] leading-tight uppercase tracking-widest text-start">
                    {locale === "ar" ? (
                      <>
                        سنوات من <br />
                        التميز
                      </>
                    ) : (
                      <>
                        Years of <br />
                        Excellence
                      </>
                    )}
                  </div>
                </div>
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute -top-12 -right-12 rtl:-right-auto rtl:-left-12 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-[1px] border-accent/20 rounded-[4rem] rotate-3 rtl:-rotate-3 -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section - Premium Grid */}
      <section className="py-24 lg:py-32 bg-white relative" ref={valuesRef}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <span className="text-accent text-xs font-black uppercase tracking-[0.4em] mb-4 block">
              {locale === "ar" ? "قيمنا الجوهرية" : "Our DNA"}
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-[#0A2647] mb-6 tracking-tight">
              {locale === "ar" ? <>القيم التي <span className="text-accent">تميزنا</span></> : <>The Values that <span className="text-accent">Define Us</span></>}
            </h2>
            <p className="text-slate-500 text-lg">
              {locale === "ar" ? "نحن نعمل عند تقاطع القيم التقليدية والمرونة التجارية الحديثة." : "We operate at the intersection of traditional values and modern business agility."}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => {
              const Icon = iconMap[value.id === "trust" ? "Shield" : value.id === "excellence" ? "Award" : value.id === "client" ? "Heart" : "Globe"];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="group relative"
                >
                  <div className="h-full bg-[#FAFAFA] rounded-3xl p-8 border border-slate-100 group-hover:bg-white group-hover:border-accent/20 transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-2xl group-hover:shadow-accent/5 overflow-hidden text-start">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent p-0.5 mb-8 rotate-3 group-hover:rotate-12 transition-transform duration-500">
                      <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[#0A2647]" />
                      </div>
                    </div>

                    <h3 className="text-xl font-extrabold text-[#0A2647] mb-4 group-hover:text-accent transition-colors">{value.title}</h3>
                    <p className="text-slate-500 leading-relaxed text-sm">
                      {value.desc}
                    </p>

                    {/* Background decoration */}
                    <div className="absolute bottom-0 right-0 rtl:right-auto rtl:left-0 translate-x-1/4 translate-y-1/4 opacity-0 group-hover:opacity-10 transition-opacity">
                      <Icon className="w-32 h-32 text-accent" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section - Sleek Progress */}
      <section className="py-24 lg:py-32 bg-slate-50/60 relative" ref={timelineRef}>
        <div className="absolute inset-0 dot-pattern opacity-100" />

        {/* Glowing ambient lights */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        {/* Sticky Header at the top of the section */}
        <div className="sticky top-18 z-30 text-center mb-20 py-4 bg-slate-50/80 backdrop-blur-md rounded-2xl px-6">
          <span className="text-accent text-xs font-black uppercase tracking-[0.4em] mb-4 block">
            {locale === "ar" ? "مسيرة التطور" : "Evolution"}
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-[#0A2647] mb-2">
            {locale === "ar" ? (
              <>عشر سنوات من <span className="text-accent">الإنجازات</span></>
            ) : (
              <>A Decade of <span className="text-accent">Milestones</span></>
            )}
          </h2>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="relative max-w-5xl mx-auto">
            {/* Main Progress Line */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-[2px] bg-slate-200/80 -translate-x-1/2">
              <motion.div
                style={{ height: timelineHeight }}
                className="w-full bg-gradient-to-b from-accent to-accent-dark shadow-[0_0_10px_rgba(197,160,89,0.3)] origin-top"
              />
            </div>

            <div className="space-y-12 lg:space-y-0">
              {milestones.map((m, i) => (
                <div key={i} className={`relative flex items-center justify-between lg:h-48 ${i % 2 === 0 ? "lg:flex-row-reverse" : ""} pl-12 lg:pl-0 group`}>
                  <div className="w-full lg:w-[45%]">
                    <motion.div
                      initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50, scale: 0.96 }}
                      whileInView={{ opacity: 1, x: 0, scale: 1 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className={`bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl hover:shadow-[#C5A059]/5 hover:-translate-y-1 transition-all duration-300 text-start border border-slate-100 ${locale === "ar"
                        ? "border-r-2 border-r-accent"
                        : "border-l-2 border-l-accent"
                        }`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-3xl font-black text-accent">{m.year}</span>
                        <div className="w-10 h-10 rounded-full bg-accent/5 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                          <CheckCircle className="w-5 h-5 text-accent" />
                        </div>
                      </div>
                      <h4 className="text-xl font-bold text-[#0A2647] mb-2 group-hover:text-accent transition-colors">{m.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{m.desc}</p>
                    </motion.div>
                  </div>

                  {/* Central Node dot (desktop) / Left dot (mobile) */}
                  <div className="absolute left-4 lg:left-1/2 top-12 lg:top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-white border-4 border-accent shadow-sm group-hover:scale-125 group-hover:border-accent-dark group-hover:shadow-[0_0_10px_rgba(197,160,89,0.5)] transition-all duration-300 z-20" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise / Why Choose Us */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden" ref={whyRef}>
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: locale === "ar" ? 50 : -50 }}
              animate={isWhyInView ? { opacity: 1, x: 0 } : {}}
              className="lg:col-span-5 text-start"
            >
              <span className="text-accent text-xs font-black uppercase tracking-[0.4em] mb-4 block">
                {locale === "ar" ? "ميزة أمانة" : "The Amanah Edge"}
              </span>
              <h2 className="text-4xl lg:text-5xl font-black text-[#0A2647] mb-8 leading-tight">
                {locale === "ar" ? <>لماذا يختارنا <span className="text-accent italic">رواد الأعمال</span></> : <>Why Industry Leaders <span className="text-accent italic">Choose</span> Us</>}
              </h2>
              <p className="text-slate-500 text-lg mb-10">
                {locale === "ar" ? "نحن نجمع بين المعرفة المحلية العميقة والمعايير الدولية للتميز التشغيلي." : "We combine deep-rooted local intelligence with international standards of operational excellence."}
              </p>

              <div className="space-y-4">
                {[
                  { icon: Building2, text: locale === "ar" ? "منظومات تأسيس متكاملة" : "End-to-end setup ecosystems" },
                  { icon: Shield, text: locale === "ar" ? "ضمان الامتثال بنسبة 100٪" : "100% compliance guarantee" },
                  { icon: Users, text: locale === "ar" ? "دعم مخصص ومتواصل للعملاء" : "Dedicated Client Support" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-[#FAFAFA] border border-slate-100 group hover:border-accent/30 transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                      <item.icon className="w-5 h-5 text-accent group-hover:text-white" />
                    </div>
                    <span className="font-bold text-[#0A2647] text-sm uppercase tracking-wide">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6 text-start">
              {whyChooseUsCards.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isWhyInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#FAFAFA] p-8 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500 group"
                >
                  <div className="w-12 h-[2px] bg-accent mb-6 group-hover:w-20 transition-all duration-500" />
                  <h4 className="text-lg font-black text-[#0A2647] mb-4 uppercase tracking-tighter">{card.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
