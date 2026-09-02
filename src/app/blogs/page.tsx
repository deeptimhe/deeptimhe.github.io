import type { Metadata } from 'next';
import { getTomlContent } from '@/lib/content';
import BlogList from '@/components/blog/BlogList';
import { BlogsConfig } from '@/types/blog';

export const metadata: Metadata = {
    title: 'Blogs',
    description: 'Notes on ideas, observations, and discoveries along the way.',
};

export default function BlogsPage() {
    const config = getTomlContent<BlogsConfig>('blogs.toml');

    if (!config) {
        return null;
    }

    return (
        <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <BlogList config={config} />
        </div>
    );
}
