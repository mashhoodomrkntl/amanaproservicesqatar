import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPosts } from "@/lib/data";
import BlogPostDetailPage from "./BlogPostDetailPage";
import { getUiTranslations } from "@/lib/i18n-translations";

type Props = { params: Promise<{ locale: string; id: string }> };

export async function generateStaticParams() {
  // Generate for both locales
  const enPosts = getBlogPosts("en");
  const arPosts = getBlogPosts("ar");
  return [
    ...enPosts.map((post) => ({ locale: "en", id: post.id })),
    ...arPosts.map((post) => ({ locale: "ar", id: post.id })),
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, id } = await params;
  const posts = getBlogPosts(locale as "en" | "ar");
  const post = posts.find((p) => p.id === id);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `https://amanahbusiness.qa/${locale}/blog/${post.id}`,
      languages: {
        en: `https://amanahbusiness.qa/en/blog/${post.id}`,
        ar: `https://amanahbusiness.qa/ar/blog/${post.id}`,
      },
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://amanahbusiness.qa/${locale}/blog/${post.id}`,
      type: "article",
      publishedTime: post.date,
      locale: locale === "ar" ? "ar_QA" : "en_US",
    },
  };
}

export default async function Page({ params }: Props) {
  const { locale, id } = await params;
  const posts = getBlogPosts(locale as "en" | "ar");
  const post = posts.find((p) => p.id === id);
  if (!post) notFound();

  return <BlogPostDetailPage post={post} locale={locale} />;
}
