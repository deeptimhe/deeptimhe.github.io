import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogArticle from '@/components/blog/BlogArticle';
import { getMarkdownContent, getTomlContent } from '@/lib/content';
import { BlogsConfig } from '@/types/blog';

function getBlogsConfig() {
    return getTomlContent<BlogsConfig>('blogs.toml');
}

export function generateStaticParams() {
    const config = getBlogsConfig();
    return config?.posts.map(post => ({ slug: post.slug })) ?? [];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = getBlogsConfig()?.posts.find(item => item.slug === slug);

    if (!post) {
        return {};
    }

    return {
        title: post.title,
        description: post.excerpt,
        alternates: {
            canonical: `/blogs/${post.slug}/`,
        },
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const config = getBlogsConfig();
    const postIndex = config?.posts.findIndex(item => item.slug === slug) ?? -1;
    const post = postIndex >= 0 ? config?.posts[postIndex] : undefined;

    if (!post) {
        notFound();
    }

    const content = getMarkdownContent(post.source);

    return (
        <div className="px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
            <BlogArticle post={post} content={content} number={postIndex + 1} />
        </div>
    );
}
