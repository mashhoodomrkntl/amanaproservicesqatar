"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import { blogPosts } from "@/lib/data";
import { Calendar, Clock, Tag, User, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";

interface BlogPostDetailPageProps {
  post: (typeof blogPosts)[0];
}

export default function BlogPostDetailPage({ post }: BlogPostDetailPageProps) {
  return (
    <>
      <PageHeader
        title={post.title}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Article" },
        ]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Post Meta */}
            <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-border">
              <div className="flex items-center gap-2 text-text-secondary text-sm">
                <User className="w-4 h-4 text-primary" />
                <span>By Amanah Team</span>
              </div>
              <div className="flex items-center gap-2 text-text-secondary text-sm">
                <Calendar className="w-4 h-4 text-primary" />
                <span>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
              </div>
              <div className="flex items-center gap-2 text-text-secondary text-sm">
                <Clock className="w-4 h-4 text-primary" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center gap-2 text-text-secondary text-sm">
                <Tag className="w-4 h-4 text-primary" />
                <span className="px-2 py-0.5 rounded bg-primary-50 text-primary text-xs font-semibold">{post.category}</span>
              </div>
            </div>

            {/* Content Placeholder */}
            <div className="prose prose-lg max-w-none text-text-secondary leading-relaxed mb-12">
              <p className="text-xl text-dark font-medium mb-8">
                {post.excerpt}
              </p>
              <p>
                Setting up a business in Qatar requires a clear understanding of the local laws and regulations. Whether you are looking for 100% foreign ownership or a local sponsorship arrangement, the process involves several critical steps with various government ministries.
              </p>
              <h3 className="text-dark font-bold text-2xl mt-10 mb-4">Understanding the Legal Landscape</h3>
              <p>
                The Ministry of Commerce and Industry (MOCI) is the primary body responsible for company registrations. Recent reforms have made it easier than ever for international investors to enter the market, especially with the introduction of the new Investment Law which permits full ownership in several key sectors.
              </p>
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
