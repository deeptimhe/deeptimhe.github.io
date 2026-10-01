export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    iso_date: string;
    reading_time: string;
    excerpt: string;
    source: string;
}

export interface BlogsConfig {
    title: string;
    description?: string;
    posts: BlogPost[];
}
