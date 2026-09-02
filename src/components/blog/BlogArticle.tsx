import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { BlogPost } from '@/types/blog';

interface BlogArticleProps {
    post: BlogPost;
    content: string;
    number: number;
}

export default function BlogArticle({ post, content, number }: BlogArticleProps) {
    return (
        <article className="max-w-3xl mx-auto">
            <Link
                href="/blogs"
                className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-accent transition-colors mb-10 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4"
            >
                <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" />
                All blogs
            </Link>

            <header className="mb-10 sm:mb-12">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-5 text-xs font-semibold tracking-widest uppercase">
                    <span className="text-accent">Essay {String(number).padStart(2, '0')}</span>
                    <span className="text-neutral-300 dark:text-neutral-700" aria-hidden="true">/</span>
                    <time dateTime={post.iso_date} className="text-neutral-500 tracking-normal normal-case font-medium">
                        {post.date}
                    </time>
                    <span className="text-neutral-300 dark:text-neutral-700" aria-hidden="true">·</span>
                    <span className="text-neutral-500 tracking-normal normal-case font-medium">{post.reading_time}</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-serif font-semibold text-primary leading-[1.08] tracking-tight text-balance">
                    {post.title}
                </h1>
                <div className="mt-8 h-px w-20 bg-accent" aria-hidden="true" />
            </header>

            <div className="text-[1.0625rem] sm:text-lg text-neutral-700 dark:text-neutral-600 leading-[1.85]">
                <ReactMarkdown
                    components={{
                        p: ({ children }) => <p className="mb-6 last:mb-0 text-pretty">{children}</p>,
                        h2: ({ children }) => <h2 className="text-2xl font-serif font-semibold text-primary mt-10 mb-4">{children}</h2>,
                        h3: ({ children }) => <h3 className="text-xl font-semibold text-primary mt-8 mb-3">{children}</h3>,
                        a: ({ ...props }) => (
                            <a
                                {...props}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-accent font-medium underline decoration-accent/40 underline-offset-4 hover:decoration-accent transition-colors"
                            />
                        ),
                        strong: ({ children }) => <strong className="font-semibold text-primary">{children}</strong>,
                        em: ({ children }) => <em className="font-serif text-[1.08em] italic text-primary">{children}</em>,
                        blockquote: ({ children }) => (
                            <blockquote className="border-l-2 border-accent pl-5 my-8 font-serif text-xl italic text-primary leading-relaxed">
                                {children}
                            </blockquote>
                        ),
                    }}
                >
                    {content}
                </ReactMarkdown>
            </div>
        </article>
    );
}
