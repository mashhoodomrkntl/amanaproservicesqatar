"use client";

import { motion } from "framer-motion";
import { blogPosts } from "@/lib/data";
import { Calendar, Clock, Tag, User, ArrowLeft, Share2, } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface BlogPostDetailPageProps {
  post: (typeof blogPosts)[0];
}

export default function BlogPostDetailPage({ post }: BlogPostDetailPageProps) {
  return (
    <>
      {/* Custom Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-900">
        <Image src={post.image} alt={post.title} fill className="object-cover opacity-30" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
        <div className="container mx-auto relative z-10 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Link href="/blog" className="inline-flex items-center gap-2 text-primary-200 hover:text-primary transition-colors mb-6 text-sm font-semibold">
                <ArrowLeft className="w-4 h-4" /> Back to Blog
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
              <div className="flex items-center justify-center gap-2 mb-6">
                <span className="px-3 py-1 rounded-full bg-primary text-white text-xs font-bold tracking-wider uppercase shadow-lg">
                  {post.category}
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {post.title}
              </h1>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-wrap items-center justify-center gap-6 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-primary" />
                <span>Amanah Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                <span>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>{post.readTime}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Social Share Floating (Desktop) */}
            <div className="hidden lg:flex flex-col gap-4 absolute -left-16 top-0">
              <button className="p-3 rounded-full bg-surface hover:bg-primary hover:text-white text-text-secondary transition-all shadow-sm">
                {/* <Facebook className="w-5 h-5" /> */}
              </button>
              <button className="p-3 rounded-full bg-surface hover:bg-primary hover:text-white text-text-secondary transition-all shadow-sm">
                {/* <Twitter className="w-5 h-5" /> */}
              </button>
              <button className="p-3 rounded-full bg-surface hover:bg-primary hover:text-white text-text-secondary transition-all shadow-sm">
                {/* <Linkedin className="w-5 h-5" /> */}
              </button>
            </div>

            {/* Content Placeholder */}
            <div className="prose prose-lg max-w-none text-text-secondary leading-relaxed mb-12">
              <p className="text-xl text-dark font-medium mb-8">
                {post.excerpt}
              </p>
              
              {/* In-content Layout */}
              <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
                <div className="relative w-full md:w-5/12 h-72 md:h-auto md:aspect-[4/5] rounded-3xl overflow-hidden shadow-xl shrink-0 mt-2">
                  <Image src={post.image} alt={post.title} fill className="object-cover" />
                </div>
                <div className="flex-1">
                  <p>
                    Setting up a business in Qatar requires a clear understanding of the local laws and regulations. Whether you are looking for 100% foreign ownership or a local sponsorship arrangement, the process involves several critical steps with various government ministries.
                  </p>
                  <h3 className="text-dark font-bold text-2xl mt-8 mb-4">Understanding the Legal Landscape</h3>
                  <p>
                    The Ministry of Commerce and Industry (MOCI) is the primary body responsible for company registrations. Recent reforms have made it easier than ever for international investors to enter the market, especially with the introduction of the new Investment Law which permits full ownership in several key sectors.
                  </p>
                </div>
              </div>
              <blockquote className="border-l-4 border-primary pl-6 py-2 my-8 italic text-dark bg-primary-50 rounded-r-xl">
                &quot;Qatar&apos;s business environment is designed to be investor-friendly, providing a stable and secure platform for global growth.&quot;
              </blockquote>
              <h3 className="text-dark font-bold text-2xl mt-10 mb-4">Key Steps to Success</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Identify your primary business activity and appropriate legal structure.</li>
                <li>Reserve your unique trade name and obtain initial approvals.</li>
                <li>Draft and notarize the Articles of Association (AOA).</li>
                <li>Secure a physical office space and obtain the Municipality trade license.</li>
                <li>Complete your tax registration and establish your corporate bank account.</li>
              </ul>
              <p className="mt-8">
                At Amanah Business Services, we specialize in handling these complexities so you can focus on your core business. Our team of experts provides end-to-end support, ensuring a smooth and compliant setup.
              </p>
            </div>

            {/* Footer / Share */}
            <div className="flex items-center justify-between pt-10 border-t border-border">
              <Link href="/blog" className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-text-secondary">Share:</span>
                <button className="p-2 rounded-full bg-surface hover:bg-primary-50 text-text-secondary hover:text-primary transition-colors">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
