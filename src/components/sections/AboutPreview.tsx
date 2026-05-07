"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Award, Users, Clock, Shield } from "lucide-react";

export default function AboutPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { icon: Award, label: "Licensed & Certified", desc: "Fully accredited by Qatar authorities" },
    { icon: Users, label: "150+ Expert Team", desc: "Dedicated professionals at your service" },
    { icon: Clock, label: "Since 2015", desc: "Over a decade of trusted expertise" },
    { icon: Shield, label: "100% Compliant", desc: "Full regulatory compliance guaranteed" },
  ];

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(0,71,171,0.03),transparent_70%)]" />
      
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="bg-gradient-to-br from-[#001a3f] to-[#0047AB] rounded-[2.5rem] p-10 lg:p-14 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 hero-grid opacity-10" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                
                <div className="relative z-10">
                  <h3 className="text-2xl lg:text-4xl font-black mb-6 leading-tight">
                    Qatar&apos;s Premier <br />
                    <span className="text-accent">Business Setup</span> Consultancy
                  </h3>
                  <p className="text-white/70 text-base lg:text-lg leading-relaxed mb-10 max-w-lg">
                    We simplify the complexity of doing business in Qatar. From legal structures to government relations, our experts ensure your journey is seamless and compliant.
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-10">
                    <div className="flex flex-col">
                      <div className="text-4xl lg:text-5xl font-black text-accent">5000+</div>
                      <div className="text-[10px] text-white/50 mt-1 uppercase tracking-[0.2em] font-bold">Projects Done</div>
                    </div>
                    <div className="w-px h-12 bg-white/10 hidden sm:block" />
                    <div className="flex flex-col">
                      <div className="text-4xl lg:text-5xl font-black text-accent">10+</div>
                      <div className="text-[10px] text-white/50 mt-1 uppercase tracking-[0.2em] font-bold">Years Exp.</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-8 right-0 lg:-right-8 bg-white rounded-3xl shadow-2xl p-8 border border-border hidden md:block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-text-secondary uppercase tracking-widest font-bold mb-1">Success Rate</div>
                    <div className="text-2xl font-black text-dark">99.9%</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
              Who We Are
            </span>
            <h2 className="text-3xl lg:text-5xl font-black text-dark mb-8 leading-tight">
              Your Reliable Partner in <br />
              <span className="text-primary">Qatari Expansion</span>
            </h2>
            <p className="text-base lg:text-lg text-text-secondary leading-relaxed mb-6">
              Welcome to Amanah Business Services — Qatar&apos;s leading consultancy for 
              PRO services and company formation. We don&apos;t just provide services; 
              we build the foundation for your success in the region.
            </p>
            <p className="text-base text-text-secondary leading-relaxed mb-10">
              Our deep understanding of local regulations and strong government relations 
              allow us to expedite processes that others find challenging. Whether you&apos;re 
              a small startup or a global corporation, we scale our solutions to meet your needs.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-2"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0 text-primary">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-base font-bold text-dark mb-1">{item.label}</div>
                    <div className="text-xs text-text-secondary leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-white font-black rounded-2xl hover:bg-primary-dark hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 uppercase text-xs tracking-widest"
            >
              Learn Our Story
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
