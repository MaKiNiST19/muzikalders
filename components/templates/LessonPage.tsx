import Image from 'next/image';
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import { Check, Target, BookOpen, Clock } from 'lucide-react';

interface LessonPageProps {
    title: string;
    description: string;
    longDescription: string;
    audiences: string[];
    features: string[];
    program: { title: string; desc: string }[];
    faqs: { question: string; answer: string }[];
    slug: string;
}

export default function LessonPageTemplate({
    title,
    description,
    longDescription,
    audiences,
    features,
    program,
    faqs,
    slug,
}: LessonPageProps) {
    const faqSchema = generateFAQSchema(faqs);
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Ana Sayfa', item: 'https://www.muzikalders.com.tr' },
        { name: 'Dersler', item: 'https://www.muzikalders.com.tr/#dersler' },
        { name: title, item: `https://www.muzikalders.com.tr${slug}` },
    ]);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            <main className="pt-24 pb-0">
                {/* Hero Section */}
                <div className="bg-gradient-to-br from-indigo-50 to-rose-50 py-20 px-4 sm:px-6 lg:px-8 border-b border-indigo-100">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                            {title}
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                            {longDescription}
                        </p>
                        <div className="mt-8 flex justify-center gap-4">
                            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 font-medium text-sm shadow-sm">
                                <Target className="w-4 h-4 mr-2 text-rose-500" />
                                Birebir Eğitim
                            </span>
                            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 font-medium text-sm shadow-sm">
                                <Clock className="w-4 h-4 mr-2 text-indigo-500" />
                                Esnek Saatler
                            </span>
                        </div>
                    </div>
                </div>

                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-16">

                        {/* Audience Section */}
                        <div>
                            <h2 className="flex items-center text-2xl font-bold text-slate-900 mb-6">
                                <Target className="w-6 h-6 mr-3 text-rose-500" />
                                Kimler İçin Uygun?
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {audiences.map((item, i) => (
                                    <div key={i} className="flex items-start p-4 bg-slate-50 rounded-xl border border-slate-100">
                                        <Check className="w-5 h-5 mr-3 text-green-500 shrink-0 mt-0.5" />
                                        <span className="text-slate-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Content / Features Section */}
                        <div>
                            <h2 className="flex items-center text-2xl font-bold text-slate-900 mb-6">
                                <BookOpen className="w-6 h-6 mr-3 text-indigo-600" />
                                Ders İçeriği
                            </h2>
                            <ul className="space-y-4">
                                {features.map((feature, i) => (
                                    <li key={i} className="flex items-center text-slate-700">
                                        <span className="w-2 h-2 bg-indigo-400 rounded-full mr-4" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Program Section */}
                        <div>
                            <h2 className="flex items-center text-2xl font-bold text-slate-900 mb-6">
                                <Clock className="w-6 h-6 mr-3 text-amber-500" />
                                Program ve İlerleyiş
                            </h2>
                            <div className="relative border-l-2 border-slate-200 ml-3 space-y-8 pl-8 py-2">
                                {program.map((step, i) => (
                                    <div key={i} className="relative">
                                        <span className="absolute -left-[41px] top-1 w-6 h-6 bg-white border-2 border-indigo-500 rounded-full flex items-center justify-center text-xs font-bold text-indigo-700">
                                            {i + 1}
                                        </span>
                                        <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                                        <p className="text-slate-600 leading-relaxed text-sm">
                                            {step.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* FAQ Section (Specific) */}
                        <div>
                            <FAQ items={faqs} />
                        </div>

                    </div>

                    {/* Sidebar / CTA */}
                    <div className="relative">
                        <div className="sticky top-24 bg-white p-8 rounded-3xl border border-slate-100 shadow-xl text-center space-y-6">
                            <div className="w-16 h-16 bg-gradient-to-tr from-rose-400 to-orange-400 rounded-full mx-auto flex items-center justify-center text-white text-2xl shadow-lg animate-pulse">
                                📞
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900">
                                Hemen Başlayın
                            </h3>
                            <p className="text-slate-500">
                                İlk dersiniz benden! Ücretsiz tanışma dersi için randevu oluşturun.
                            </p>
                            <div className="space-y-4 pt-4">
                                <a
                                    href="/iletisim"
                                    className="bubble-btn block w-full py-4 bg-slate-900 text-white font-bold rounded-lg shadow-lg active:scale-95 transition-transform"
                                    style={{ '--bubble-color': '#0f172a' } as React.CSSProperties}
                                >
                                    Randevu Al
                                </a>
                                <a
                                    href="https://wa.me/905373392701"
                                    className="bubble-btn block w-full py-4 bg-green-500 text-white font-bold rounded-lg shadow-lg active:scale-95 transition-transform"
                                    style={{ '--bubble-color': '#22c55e' } as React.CSSProperties}
                                >
                                    WhatsApp
                                </a>
                            </div>
                            <div className="pt-6 border-t border-slate-100 text-xs text-slate-400">
                                * Kontenjanlarım sınırlıdır.
                            </div>
                        </div>
                    </div>

                </div>

                <CTA />
            </main>
        </>
    );
}
