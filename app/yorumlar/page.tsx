import Testimonials from '@/components/Testimonials';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
    title: 'Veli Yorumları | Müzikal Ders',
    description: 'Zeynep Öğretmen ve müzikal dersler hakkında velilerimizden ve öğrencilerimizden gelen gerçek yorumlar.',
});

export default function TestimonialsPage() {
    return (
        <main className="pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
                <h1 className="text-4xl font-bold text-slate-900 mb-4">Veli Yorumları</h1>
                <p className="text-slate-600 max-w-2xl mx-auto">
                    Bize güvenen yüzlerce ailenin deneyimleri.
                </p>
            </div>
            <Testimonials />
            {/* More Testimonials Placeholder */}
            <div className="max-w-4xl mx-auto px-4 mt-12 text-center text-slate-500">
                <p>+50'den fazla diğer mutlu yorum ve referans için Instagram hesabımızı ziyaret edin.</p>
            </div>
        </main>
    );
}
