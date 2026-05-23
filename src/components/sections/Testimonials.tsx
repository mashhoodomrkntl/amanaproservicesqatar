"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });

  useEffect(() => {
    if (scrollRef.current) {
      const scrollWidth = scrollRef.current.scrollWidth;
      const clientWidth = scrollRef.current.offsetWidth;
      setConstraints({ left: -(scrollWidth - clientWidth), right: 0 });
    }
  }, []);

  return (
    <section id="testimonials" className="py-16 lg:py-20 bg-[#F9F6F1] relative overflow-hidden" ref={ref}>
      <div className="container relative z-10 mx-auto px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-1 rounded-lg border border-accent/60 bg-white text-accent text-[9px] font-black uppercase tracking-[0.2em] mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-[#003366] tracking-tight">
            Our trusted clients
          </h2>
        </motion.div>

        {/* Draggable Horizontal Container */}
        <div className="relative cursor-grab active:cursor-grabbing overflow-visible">
          <motion.div
            ref={scrollRef}
            drag="x"
            dragConstraints={constraints}
            className="flex gap-5 overflow-visible"
            style={{ touchAction: "none" }}
          >
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                className="min-w-[280px] md:min-w-[340px] bg-white rounded-[2rem] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-slate-100 flex flex-col h-[300px] transition-all duration-500"
              >
                {/* Compact Quote Icon */}
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center mb-4">
                  <svg width="16" height="11" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.71429 0C2.55714 0 0 2.55714 0 5.71429C0 8.87143 2.55714 11.4286 5.71429 11.4286H6.28571V15.2857L10.1429 11.4286H11.4286V5.71429C11.4286 2.55714 8.87143 0 5.71429 0ZM17.1429 0C13.9857 0 11.4286 2.55714 11.4286 5.71429C11.4286 8.87143 13.9857 11.4286 17.1429 11.4286H17.7143V15.2857L21.5714 11.4286H22.8571V5.71429C22.8571 2.55714 20.3 0 17.1429 0Z" fill="#CC9933" opacity="0.3" />
                  </svg>
                </div>

                {/* Minimal Testimonial Text */}
                <p className="text-[14px] text-slate-600 leading-relaxed mb-4 flex-grow line-clamp-3">
                  {testimonial.text}
                </p>

                {/* Subtle Divider */}
                <div className="w-full h-[1px] bg-slate-50 mb-5" />

                {/* Compact Profile */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-100 overflow-hidden border border-slate-100 flex-shrink-0">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="font-bold text-[#003366] text-[12px] leading-none mb-1 truncate">
                      {testimonial.name}
                    </h4>
                    <p className="text-[9px] text-slate-400 font-medium truncate uppercase tracking-tighter">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Minimal Interaction Indicator */}
        <div className="flex justify-center mt-8">
          <div className="w-8 h-[3px] bg-slate-200 rounded-full overflow-hidden">
            <motion.div
              animate={{ x: [-16, 16, -16] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="w-4 h-full bg-accent"
            />
          </div>
        </div>

      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
