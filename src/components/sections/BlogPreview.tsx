"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, ChevronRight } from "lucide-react";
import { blogPosts } from "@/lib/data";

const blogImages = [
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
];

export default function BlogPreview() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#001a3f]/[0.02] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-accent" />
              <span className="text-accent text-[10px] font-black uppercase tracking-[0.4em]">Insights & News</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-[#0A2647] leading-tight uppercase tracking-tighter">
              Latest from our <br />
              <span className="text-accent italic">Knowledge Hub</span>
            </h2>
          </div>
          
          <Link 
            href="/blog" 
            className="group flex items-center gap-3 text-[#0A2647] font-black text-[10px] uppercase tracking-widest hover:text-accent transition-colors"
          >
            View All Posts <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-accent group-hover:bg-accent transition-all">
              <ChevronRight className="w-4 h-4 group-hover:text-white" />
            </div>
          </Link>
        </div>

        {/* Mobile Horizontal Scroll Container / Desktop Grid */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto pb-8 -mx-6 px-6 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:pb-0 scrollbar-hide snap-x snap-mandatory"
        >
          {blogPosts.slice(0, 3).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="min-w-[85vw] sm:min-w-[450px] md:min-w-0 snap-center mr-6 md:mr-0"
            >
              <Link href={`/blog/${post.id}`} className="group block h-full">
                <div className="bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-accent/5 hover:-translate-y-2 transition-all duration-500 h-full flex flex-col">
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={blogImages[index % blogImages.length]} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute top-6 left-6">
                      <span className="bg-white/90 backdrop-blur-md text-[#0A2647] text-[9px] font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-lg">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 mb-4 text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-accent" />
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-accent" />
                        {post.readTime}
                      </div>
                    </div>

                    <h3 className="text-xl font-black text-[#0A2647] mb-4 group-hover:text-accent transition-colors leading-tight uppercase tracking-tighter line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0A2647]">Read Full Article</span>
                      <ArrowRight className="w-4 h-4 text-accent transition-transform duration-500 group-hover:translate-x-2" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
