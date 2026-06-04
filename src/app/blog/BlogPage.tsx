"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import { blogPosts } from "@/lib/data";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";

const categoryColors: Record<string, string> = {
  "Company Formation": "bg-primary/10 text-primary",
  Investment: "bg-accent/10 text-accent-dark",
  "PRO Services": "bg-green-50 text-green-700",
  Translation: "bg-amber-50 text-amber-700",
};

export default function BlogPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <>
      <PageHeader
        title="Blog"
        subtitle="Business insights, guides, and Qatar market updates"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />

      <section className="py-20 lg:py-28 bg-white" ref={ref}>
        <div className="container mx-auto">
          {/* Featured Post */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-16">
            <Link href={`/blog/${featured.id}`} className="group block rounded-3xl overflow-hidden relative hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 min-h-[400px] flex items-end">
              <Image src={featured.image} alt={featured.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/20" />
              <div className="absolute inset-0 hero-grid opacity-20" />
              <div className="relative p-8 lg:p-12 w-full z-10">
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-3 py-1 rounded-full bg-primary text-white text-xs font-semibold">
                    <Tag className="w-3 h-3 inline mr-1" />{featured.category}
                  </span>
                  <span className="text-white/80 text-xs flex items-center gap-1">
                    <Calendar className="w-3 h-3" />{new Date(featured.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                  </span>
                  <span className="text-white/80 text-xs flex items-center gap-1">
                    <Clock className="w-3 h-3" />{featured.readTime}
                  </span>
                </div>
                <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4 group-hover:text-primary-100 transition-colors max-w-3xl">{featured.title}</h2>
                <p className="text-white/80 leading-relaxed mb-6 max-w-2xl">{featured.excerpt}</p>
                <div className="inline-flex items-center gap-2 text-primary-200 font-semibold text-sm">
                  Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Blog Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post, i) => (
              <motion.div key={post.id} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <Link href={`/blog/${post.id}`} className="group block h-full bg-white rounded-2xl border border-border hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col">
                  {/* Image Header */}
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1.5 rounded-full text-xs font-bold shadow-md ${categoryColors[post.category] || "bg-white text-gray-800"}`}>
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-text-muted text-xs flex items-center gap-1">
                        <Clock className="w-3 h-3" />{post.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-dark mb-3 group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed mb-6 line-clamp-3 flex-grow">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-xs text-text-muted flex items-center gap-1">
                        <Calendar className="w-3 h-3" />{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                      </span>
                      <span className="text-primary text-sm font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        Read <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
