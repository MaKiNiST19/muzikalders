import { notFound } from 'next/navigation';
import { getPostBySlug, blogPosts } from '@/lib/blog';
import { constructMetadata } from '@/lib/seo';
import Link from 'next/link';
import Image from 'next/image';

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata(
    { params }: { params: Promise<{ slug: string }> } // Updated for Next.js 15
) {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) {
        return;
    }
    return constructMetadata({
        title: post.title,
        description: post.excerpt,
        image: post.image,
    });
}

export default async function BlogPostPage(
    { params }: { params: Promise<{ slug: string }> } // Updated for Next.js 15
) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    // Simple "Markdown" to HTML parser for MVP
    const content = post.content.split('\n').map((line, index) => {
        const trimmed = line.trim();
        if (trimmed.startsWith('## ')) {
            return <h2 key={index} className="text-3xl font-bold mt-12 mb-6 text-slate-800">{trimmed.replace('## ', '')}</h2>;
        }
        if (trimmed.startsWith('### ')) {
            return <h3 key={index} className="text-2xl font-bold mt-8 mb-4 text-slate-700">{trimmed.replace('### ', '')}</h3>;
        }
        if (trimmed.startsWith('* ')) {
            return <li key={index} className="list-disc ml-6 my-2 text-slate-600">{trimmed.replace('* ', '')}</li>;
        }
        if (trimmed.match(/^\d+\./)) {
            return <li key={index} className="list-decimal ml-6 my-2 text-slate-600">{trimmed.replace(/^\d+\./, '').trim()}</li>;
        }
        if (trimmed === '') {
            return <div key={index} className="h-4" />;
        }
        return <p key={index} className="mb-4 leading-relaxed text-slate-600 text-lg">{line}</p>;
    });

    return (
        <article className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <div className="mb-12 text-center">
                <Link href="/blog" className="text-indigo-600 hover:text-indigo-800 font-medium mb-6 inline-block bg-indigo-50 px-4 py-2 rounded-full text-sm">
                    ← Tüm Yazılar
                </Link>
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">{post.title}</h1>
                <div className="flex items-center justify-center text-slate-500 text-sm gap-4">
                    <span className="flex items-center">
                        📅 {post.date}
                    </span>
                    <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                    <span>5 dk okuma süresi</span>
                </div>
            </div>

            <div className="aspect-video relative rounded-3xl overflow-hidden mb-12 shadow-xl bg-slate-100">
                <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium">
                    (Blog Kapak Görseli: {post.image})
                </div>
            </div>

            <div className="prose prose-lg prose-indigo mx-auto text-slate-700 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
                {content}
            </div>
        </article>
    );
}
