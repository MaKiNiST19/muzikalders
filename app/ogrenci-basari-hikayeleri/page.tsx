import Achievements from '@/components/Achievements';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
    title: 'Öğrenci Başarı Hikayeleri | Eryaman Müzik',
    description: 'Öğrencilerimizin kazandığı okullar, sınav başarıları ve konser performansları.',
});

export default function AchievementsPage() {
    return (
        <main className="pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
                <h1 className="text-4xl font-bold text-slate-900 mb-4">Başarı Hikayelerimiz</h1>
                <p className="text-slate-600 max-w-2xl mx-auto">
                    Gurur duyduğumuz öğrencilerimiz ve ulaştıkları hedefler.
                </p>
            </div>
            <Achievements />
            {/* Placeholder for more detailed stories list */}
            <div className="max-w-4xl mx-auto px-4 mt-12 p-8 bg-indigo-50 rounded-3xl text-center border border-indigo-100">
                <p className="text-indigo-700 font-medium">Daha fazla başarı hikayesi ve detaylı öğrenci röportajları çok yakında eklenecektir.</p>
            </div>
        </main>
    );
}
