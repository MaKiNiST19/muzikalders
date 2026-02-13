import Link from 'next/link';
import { blogPosts, BlogPost } from '@/lib/blog';
import { constructMetadata } from '@/lib/seo';
import { Calendar } from 'lucide-react';

export const metadata = constructMetadata({
    title: 'Müzik Eğitimi Blogu | Zeynep Öğretmen',
    description: 'Müzik eğitimi hakkında ebeveynlere ve öğrencilere faydalı bilgiler, ipuçları ve etkinlik haberleri.',
});

export default function BlogIndex() {
    return (
        <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-12 bg-slate-50 min-h-screen">
            <div className="max-w-[1440px] mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold text-slate-900 mb-4">Blog & Haberler</h1>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Müzik eğitimi üzerine yazılarımızı takip edin.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} className="group relative block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <div className="aspect-video bg-indigo-100 relative overflow-hidden">
                                {/* Placeholder Image */}
                                <div className="absolute inset-0 flex items-center justify-center bg-slate-200">
                                    <span className="text-slate-400 text-sm">Blog Görseli</span>
                                </div>
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                            </div>

                            <div className="p-6">
                                <div className="flex items-center text-xs text-slate-500 mb-3">
                                    <Calendar className="w-4 h-4 mr-1 text-slate-400" />
                                    {post.date}
                                </div>

                                <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2">
                                    {post.title}
                                </h2>

                                <p className="text-slate-600 text-sm line-clamp-3 mb-4">
                                    {post.excerpt}
                                </p>

                                <span className="text-rose-500 font-medium text-sm group-hover:underline decoration-2 underline-offset-4">
                                    Devamını Oku →
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
