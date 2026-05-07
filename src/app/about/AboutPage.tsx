"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import PageHeader from "@/components/PageHeader";
import { Award, Users, Target, Heart, CheckCircle, Globe, Shield, Clock } from "lucide-react";

const values = [
  { icon: Shield, title: "Trust & Transparency", desc: "We build lasting relationships through honest communication and transparent processes." },
  { icon: Award, title: "Excellence", desc: "We strive for the highest standards in every service we deliver to our clients." },
  { icon: Heart, title: "Client-First Approach", desc: "Your success is our priority. We tailor our solutions to your unique business needs." },
  { icon: Globe, title: "Expert Knowledge", desc: "Deep understanding of Qatar's regulatory landscape and business environment." },
];

const milestones = [
  { year: "2015", title: "Founded", desc: "Amanah Business Services established in Doha, Qatar." },
  { year: "2017", title: "500+ Projects", desc: "Reached 500 successfully completed business setup projects." },
  { year: "2019", title: "Team Growth", desc: "Expanded team to 50+ dedicated professionals." },
  { year: "2021", title: "2000+ Projects", desc: "Crossed 2000 projects with 98% client satisfaction." },
  { year: "2023", title: "100+ Team", desc: "Team grew to 100+ with new service verticals." },
  { year: "2025", title: "5000+ Projects", desc: "Milestone of 5000+ projects and 150+ team members." },
];

export default function AboutPage() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isInView1 = useInView(ref1, { once: true, margin: "-100px" });
  const isInView2 = useInView(ref2, { once: true, margin: "-100px" });
  const isInView3 = useInView(ref3, { once: true, margin: "-100px" });

  return (
    <>
      <PageHeader
        title="About Us"
        subtitle="Qatar's trusted partner for business setup and PRO services since 2015"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />

      {/* Story Section */}
      <section className="py-20 lg:py-28 bg-white" ref={ref1}>
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} animate={isInView1 ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary text-sm font-semibold mb-4 tracking-wide uppercase">Our Story</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-6 leading-tight">Building Businesses in Qatar with <span className="gradient-text">Trust & Excellence</span></h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Founded in 2015, Amanah Business Services was born from a vision to simplify the business setup process in Qatar. We understood that entrepreneurs and investors needed more than just paperwork — they needed a trusted partner who could navigate the complex regulatory landscape with expertise and integrity.
              </p>
              <p className="text-text-secondary leading-relaxed mb-4">
                Today, with over 5,000 successfully completed projects and a team of 150+ dedicated professionals, we have earned the trust of businesses across industries. Our name &ldquo;Amanah&rdquo; means trust — and that&apos;s the foundation of everything we do.
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                From company formation to ongoing PRO services, legal consultation to financial management, we provide comprehensive business solutions that help our clients thrive in Qatar&apos;s dynamic market.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: "5000+", label: "Projects" },
                  { value: "150+", label: "Experts" },
                  { value: "98%", label: "Satisfaction" },
                ].map((stat, i) => (
                  <div key={i} className="text-center p-4 rounded-xl bg-primary-50">
                    <div className="text-2xl font-extrabold text-primary">{stat.value}</div>
                    <div className="text-xs text-text-secondary mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} animate={isInView1 ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}>
              <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-10 text-white relative overflow-hidden">
                <div className="absolute inset-0 hero-grid opacity-20" />
                <div className="absolute top-0 right-0 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
                <div className="relative space-y-6">
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                  <p className="text-white/70 leading-relaxed">To empower entrepreneurs and businesses with seamless, compliant, and trustworthy business setup services in Qatar — making their journey from concept to operation as smooth as possible.</p>
                  <div className="w-full h-px bg-white/10" />
                  <h3 className="text-2xl font-bold">Our Vision</h3>
                  <p className="text-white/70 leading-relaxed">To be the most trusted and preferred business services partner in the GCC region, known for our expertise, integrity, and unwavering commitment to client success.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-surface" ref={ref2}>
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView2 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary text-sm font-semibold mb-4 tracking-wide uppercase">Our Values</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-6">What Drives Us Every Day</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={isInView2 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-border hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2 transition-all duration-500 group text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary-50 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary transition-all duration-500">
                  <value.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-dark mb-2">{value.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28 bg-white" ref={ref3}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView3 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary text-sm font-semibold mb-4 tracking-wide uppercase">Our Journey</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-6">Key Milestones</h2>
          </motion.div>
          <div className="relative">
            <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={isInView3 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`relative flex items-center gap-6 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? "lg:text-right" : "lg:text-left"} hidden lg:block`}>
                    <div className="bg-white rounded-2xl p-5 border border-border shadow-md inline-block">
                      <div className="text-sm font-bold text-primary mb-1">{m.year}</div>
                      <div className="text-base font-bold text-dark mb-1">{m.title}</div>
                      <div className="text-sm text-text-secondary">{m.desc}</div>
                    </div>
                  </div>
                  <div className="absolute left-6 lg:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-md -translate-x-1/2 z-10" />
                  <div className="flex-1 pl-14 lg:pl-0 lg:hidden">
                    <div className="bg-white rounded-2xl p-5 border border-border shadow-md">
                      <div className="text-sm font-bold text-primary mb-1">{m.year}</div>
                      <div className="text-base font-bold text-dark mb-1">{m.title}</div>
                      <div className="text-sm text-text-secondary">{m.desc}</div>
                    </div>
                  </div>
                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Why Choose Amanah?</h2>
            <p className="text-lg text-white/60">We go beyond traditional consultancy to be your strategic business partner in Qatar.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "End-to-end business setup solutions",
              "100% regulatory compliance guaranteed",
              "Dedicated account manager for every client",
              "Fast-track processing capabilities",
              "Transparent pricing with no hidden costs",
              "Post-setup ongoing support and services",
              "Deep government relationships for smooth approvals",
              "Multi-language support team",
              "10+ years of proven track record",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 glass rounded-xl p-4 hover:bg-white/15 transition-all duration-300">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
