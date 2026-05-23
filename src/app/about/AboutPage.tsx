"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import PageHeader from "@/components/PageHeader";
import {
  Award, Users, Target, Heart, CheckCircle, Globe, Shield,
  Clock, TrendingUp, Briefcase, Zap, Building2
} from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Trust & Transparency",
    desc: "We build lasting relationships through honest communication and transparent processes.",
    color: "from-blue-500 to-cyan-400"
  },
  {
    icon: Award,
    title: "Excellence",
    desc: "We strive for the highest standards in every service we deliver to our clients.",
    color: "from-amber-400 to-orange-500"
  },
  {
    icon: Heart,
    title: "Client-First Approach",
    desc: "Your success is our priority. We tailor our solutions to your unique business needs.",
    color: "from-rose-500 to-pink-500"
  },
  {
    icon: Globe,
    title: "Expert Knowledge",
    desc: "Deep understanding of Qatar's regulatory landscape and business environment.",
    color: "from-emerald-500 to-teal-400"
  },
];

const milestones = [
  { year: "2015", title: "Founded", desc: "Amanah Business Services established in Doha, Qatar." },
  { year: "2017", title: "500+ Projects", desc: "Reached 500 successfully completed business setup projects." },
  { year: "2019", title: "Team Growth", desc: "Expanded team to 50+ dedicated professionals." },
  { year: "2021", title: "2000+ Projects", desc: "Crossed 2000 projects with 98% client satisfaction." },
  { year: "2023", title: "100+ Team", desc: "Team grew to 100+ with new service verticals." },
  { year: "2025", title: "5000+ Projects", desc: "Milestone of 5000+ projects and 150+ team members." },
];

const highlights = [
  { icon: TrendingUp, label: "Success Rate", value: "99%" },
  { icon: Briefcase, label: "Corporate Clients", value: "800+" },
  { icon: Clock, label: "Response Time", value: "< 2h" },
  { icon: Zap, label: "Setup Speed", value: "Fastest" },
];

export default function AboutPage() {
  const storyRef = useRef(null);
  const valuesRef = useRef(null);
  const timelineRef = useRef(null);
  const whyRef = useRef(null);

  const isStoryInView = useInView(storyRef, { once: true, margin: "-100px" });
  const isValuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const isTimelineInView = useInView(timelineRef, { once: true, margin: "-100px" });
  const isWhyInView = useInView(whyRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"]
  });

  const timelineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="bg-[#FAFAFA]">
      <PageHeader
        title="Our Story"
        subtitle="Empowering your business journey in Qatar with trust and expertise since 2015."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />

      {/* Story Section */}
      <section className="py-24 lg:py-32 relative overflow-hidden" ref={storyRef}>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#002244]/[0.02] -skew-x-12" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-[1px] bg-accent" />
                <span className="text-accent text-xs font-black uppercase tracking-[0.3em]">Established 2015</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-black text-[#003366] mb-8 leading-[1.1]">
                Redefining Business <br />
                <span className="text-accent italic">Consultancy</span> in Qatar
              </h2>

              <div className="space-y-6 text-lg text-slate-600 leading-relaxed max-w-xl">
                <p>
                  Amanah Business Services was founded with a singular mission: to eliminate the complexities of business setup in Qatar and provide a foundation of absolute trust for international and local investors.
                </p>
                <p className="font-medium text-[#003366]">
                  "Amanah" isn't just our name — it's the Arabic word for "Trust." It's the core principle that guides every document we process and every partnership we form.
                </p>
                <p>
                  Today, we stand as one of Qatar's premier PRO and business setup agencies, managing the regional expansion of global brands and supporting the dreams of local entrepreneurs with a team of 150+ expert consultants.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12">
                {highlights.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isStoryInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    className="p-4 rounded-2xl bg-white shadow-sm border border-slate-100 group hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300"
                  >
                    <item.icon className="w-5 h-5 text-accent mb-3 group-hover:scale-110 transition-transform" />
                    <div className="text-xl font-black text-[#003366]">{item.value}</div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{item.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isStoryInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
                <div className="aspect-[4/5] bg-[#002244] relative group">
                  <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
                    alt="Amanah Office"
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002244] via-transparent to-transparent opacity-60" />
                </div>
              </div>

              {/* Floating Experience Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isStoryInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-8 -left-8 z-20 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100"
              >
                <div className="flex items-center gap-5">
                  <div className="text-5xl font-black text-accent">10+</div>
                  <div className="text-sm font-bold text-[#003366] leading-tight uppercase tracking-widest">
                    Years of <br />
                    Excellence
                  </div>
                </div>
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-[1px] border-accent/20 rounded-[4rem] rotate-3 -z-10" />
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
            <span className="text-accent text-xs font-black uppercase tracking-[0.4em] mb-4 block">Our DNA</span>
            <h2 className="text-4xl lg:text-5xl font-black text-[#003366] mb-6 tracking-tight">The Values that <span className="text-accent">Define Us</span></h2>
            <p className="text-slate-500 text-lg">We operate at the intersection of traditional values and modern business agility.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group relative"
              >
                <div className="h-full bg-[#FAFAFA] rounded-3xl p-8 border border-slate-100 group-hover:bg-white group-hover:border-accent/20 transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-2xl group-hover:shadow-accent/5 overflow-hidden">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${value.color} p-0.5 mb-8 rotate-3 group-hover:rotate-12 transition-transform duration-500`}>
                    <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                      <value.icon className="w-6 h-6 text-[#003366]" />
                    </div>
                  </div>

                  <h3 className="text-xl font-extrabold text-[#003366] mb-4 group-hover:text-accent transition-colors">{value.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm">
                    {value.desc}
                  </p>

                  {/* Background decoration */}
                  <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 opacity-0 group-hover:opacity-10 transition-opacity">
                    <value.icon className="w-32 h-32 text-accent" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section - Sleek Progress */}
      <section className="py-24 lg:py-32 bg-[#002244] relative overflow-hidden" ref={timelineRef}>
        <div className="absolute inset-0 hero-grid opacity-10" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isTimelineInView ? { opacity: 1, y: 0 } : {}}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <span className="text-accent text-xs font-black uppercase tracking-[0.4em] mb-4 block">Evolution</span>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">A Decade of <span className="text-accent">Milestones</span></h2>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            {/* Main Progress Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/10 hidden lg:block -translate-x-1/2">
              <motion.div
                style={{ height: timelineHeight }}
                className="w-full bg-gradient-to-b from-accent to-accent-light shadow-[0_0_15px_rgba(204,153,51,0.5)]"
              />
            </div>

            <div className="space-y-12 lg:space-y-0">
              {milestones.map((m, i) => (
                <div key={i} className={`relative flex items-center justify-between lg:h-48 ${i % 2 === 0 ? "lg:flex-row-reverse" : ""}`}>
                  <div className="w-full lg:w-[45%]">
                    <motion.div
                      initial={{ opacity: 0, x: i % 2 === 0 ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-colors group"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-3xl font-black text-accent">{m.year}</span>
                        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-accent" />
                        </div>
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">{m.title}</h4>
                      <p className="text-white/50 text-sm leading-relaxed">{m.desc}</p>
                    </motion.div>
                  </div>

                  {/* Central Node */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-accent shadow-[0_0_15px_rgba(204,153,51,1)] z-20" />
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
              initial={{ opacity: 0, x: -50 }}
              animate={isWhyInView ? { opacity: 1, x: 0 } : {}}
              className="lg:col-span-5"
            >
              <span className="text-accent text-xs font-black uppercase tracking-[0.4em] mb-4 block">The Amanah Edge</span>
              <h2 className="text-4xl lg:text-5xl font-black text-[#003366] mb-8 leading-tight">
                Why Industry Leaders <span className="text-accent italic">Choose</span> Us
              </h2>
              <p className="text-slate-500 text-lg mb-10">
                We combine deep-rooted local intelligence with international standards of operational excellence.
              </p>

              <div className="space-y-4">
                {[
                  { icon: Building2, text: "End-to-end setup ecosystems" },
                  { icon: Shield, text: "100% compliance guarantee" },
                  { icon: Users, text: "Dedicated strategic accounts" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-[#FAFAFA] border border-slate-100 group hover:border-accent/30 transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                      <item.icon className="w-5 h-5 text-accent group-hover:text-white" />
                    </div>
                    <span className="font-bold text-[#003366] text-sm uppercase tracking-wide">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              {[
                { title: "Fast-Track Processing", desc: "Proprietary networks and relationships with government bodies ensure record-breaking approval times." },
                { title: "Transparent Ecosystem", desc: "Real-time tracking of your applications and absolute clarity on pricing with zero hidden costs." },
                { title: "Strategic Advisory", desc: "We don't just fill forms; we provide strategic advice on corporate structure and market entry." },
                { title: "Multi-Lingual Experts", desc: "Our team consists of 150+ professionals fluent in Arabic, English, and 5+ other languages." }
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isWhyInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#FAFAFA] p-8 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500 group"
                >
                  <div className="w-12 h-[2px] bg-accent mb-6 group-hover:w-20 transition-all duration-500" />
                  <h4 className="text-lg font-black text-[#003366] mb-4 uppercase tracking-tighter">{card.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-accent rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-[#002244] opacity-0 group-hover:opacity-5 transition-opacity duration-700" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl lg:text-5xl font-black text-[#002244] mb-8 leading-tight">
                Ready to Start Your Success Story in Qatar?
              </h2>
              <p className="text-[#002244]/70 text-lg mb-12 font-medium">
                Join over 5,000 businesses that trusted Amanah with their vision.
              </p>
              <button className="px-12 py-5 bg-[#002244] text-white font-black rounded-full hover:shadow-[0_20px_50px_rgba(0,34,68,0.3)] hover:-translate-y-1 transition-all duration-300 uppercase text-sm tracking-[0.2em]">
                Partner With Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
