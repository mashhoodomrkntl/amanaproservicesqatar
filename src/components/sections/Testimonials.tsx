"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [index, setIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsPerPage(1);
      else if (window.innerWidth < 1024) setItemsPerPage(2);
      else setItemsPerPage(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.ceil(testimonials.length / itemsPerPage) - 1;

  const next = () => setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  const prev = () => setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));

  if (!mounted) return null;

  return (
    <section className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl lg:text-5xl font-black text-dark mb-6 leading-tight">
              Trusted by Hundreds of <span className="text-primary">Businesses</span>
            </h2>
            <p className="text-base lg:text-lg text-text-secondary leading-relaxed">
              Don&apos;t just take our word for it. Here&apos;s what our clients have
              to say about their experience with Amanah Business Services.
            </p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={prev}
              className="w-14 h-14 rounded-2xl bg-white border border-border flex items-center justify-center text-dark hover:bg-primary hover:text-white hover:border-primary hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={next}
              className="w-14 h-14 rounded-2xl bg-white border border-border flex items-center justify-center text-dark hover:bg-primary hover:text-white hover:border-primary hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: `-${index * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="w-full shrink-0"
                style={{ width: `calc(${100 / itemsPerPage}% - ${(24 * (itemsPerPage - 1)) / itemsPerPage}px)` }}
              >
                <div className="bg-white p-8 rounded-3xl border border-border h-full flex flex-col hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500">
                  <div className="flex gap-1 mb-6 text-yellow-400">
                    {[...Array(5)].map((_, star) => (
                      <Star
                        key={star}
                        className="w-4 h-4 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-text-primary italic leading-relaxed mb-8 flex-grow">
                    &quot;{testimonial.text}&quot;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-dark">{testimonial.name}</div>
                      <div className="text-xs text-text-secondary">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-12 gap-3">
          {[...Array(maxIndex + 1)].map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === i ? "w-10 bg-primary" : "w-2.5 bg-border hover:bg-primary/30"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
