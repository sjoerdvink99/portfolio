import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPost } from "@/lib/blog";
import SubpageLayout from "@/components/SubpageLayout";
import Link from "next/link";

export function generateStaticParams() {
  const posts = getAllPosts();
  // output: export requires at least one entry; placeholder is caught by notFound() below
  if (posts.length === 0) return [{ slug: "__empty" }];
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  return (
    <SubpageLayout>
      <article className="py-10">
        <p className="text-sm text-gray-500 mb-2">{post.date}</p>
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8">
          {post.title}
        </h1>
        <div className="prose prose-gray max-w-none">
          <MDXRemote source={post.content} />
        </div>
        <div className="mt-10 pt-6 border-t border-gray-200">
          <Link href="/blog/" className="text-blue-600 hover:underline text-sm">
            ← Back to blog
          </Link>
        </div>
      </article>
    </SubpageLayout>
  );
}
