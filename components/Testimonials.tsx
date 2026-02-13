import { Quote } from 'lucide-react';

const testimonials = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    name: `Veli / Öğrenci ${i + 1}`,
    role: 'Veli',
    comment: 'Zeynep öğretmen ile tanıştığımızdan beri kızımızın müziğe ilgisi inanılmaz arttı. Piyano çalmayı çok seviyor ve ders günlerini iple çekiyor.',
    rating: 5,
}));

export default function Testimonials() {
    return (
        <section className="py-24 bg-slate-50 relative">
            <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-white to-transparent pointer-events-none" />

            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Mutlu Veliler & Öğrenciler</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Bana güvenen ve müziği benimle keşfeden yüzlerce ailenin deneyimleri.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {testimonials.map((t) => (
                        <div key={t.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow duration-300">
                            <Quote className="h-8 w-8 text-indigo-100 mb-4" />
                            <p className="text-slate-600 mb-6 italic leading-relaxed text-sm">
                                "{t.comment}"
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 font-bold shrink-0">
                                    {t.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-slate-900">{t.name}</h4>
                                    <div className="flex text-amber-400 text-xs">
                                        {'★'.repeat(t.rating)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
