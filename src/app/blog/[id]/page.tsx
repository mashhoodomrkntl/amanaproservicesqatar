import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/data";
import BlogPostDetailPage from "./BlogPostDetailPage";

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ id: post.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === id);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://amanahbusiness.qa/blog/${post.id}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://amanahbusiness.qa/blog/${post.id}`,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === id);
  if (!post) notFound();

  return <BlogPostDetailPage post={post} />;
}
