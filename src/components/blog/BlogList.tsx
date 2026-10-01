import Link from 'next/link';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { BlogsConfig } from '@/types/blog';

export default function BlogList({ config }: { config: BlogsConfig }) {
    return (
        <div className="max-w-4xl mx-auto">
            <header className="mb-12">
                <h1 className="text-4xl font-serif font-bold text-primary mb-4">{config.title}</h1>
                {config.description && (
                    <p className="text-lg text-neutral-600 dark:text-neutral-500 max-w-2xl leading-relaxed">
                        {config.description}
                    </p>
                )}
            </header>

            <div className="space-y-6">
                {config.posts.map((post, index) => (
                    <article
                        key={post.slug}
                        className="group relative overflow-hidden bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                    >
                        <div className="absolute inset-y-0 left-0 w-1 bg-accent" aria-hidden="true" />
                        <Link
                            href={`/blogs/${post.slug}`}
                            className="block p-6 sm:p-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent"
                        >
                            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-4 text-xs font-semibold tracking-widest uppercase">
                                <span className="text-accent">Essay {String(index + 1).padStart(2, '0')}</span>
                                <span className="text-neutral-300 dark:text-neutral-700" aria-hidden="true">/</span>
                                <time dateTime={post.iso_date} className="text-neutral-500 tracking-normal normal-case font-medium">
                                    {post.date}
                                </time>
                                <span className="text-neutral-300 dark:text-neutral-700" aria-hidden="true">·</span>
                                <span className="text-neutral-500 tracking-normal normal-case font-medium">{post.reading_time}</span>
                            </div>

                            <div className="flex items-start justify-between gap-6">
                                <div>
                                    <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-primary leading-tight mb-3 text-balance group-hover:text-accent transition-colors duration-200">
                                        {post.title}
                                    </h2>
                                    <p className="text-neutral-600 dark:text-neutral-500 leading-relaxed max-w-2xl">
                                        {post.excerpt}
                                    </p>
                                </div>
                                <ArrowUpRightIcon className="hidden sm:block h-5 w-5 flex-none text-neutral-400 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" aria-hidden="true" />
                            </div>
                        </Link>
                    </article>
                ))}
            </div>
        </div>
    );
}
