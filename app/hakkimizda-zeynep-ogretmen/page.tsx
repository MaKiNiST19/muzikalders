import Image from 'next/image';
import { generateLocalBusinessSchema } from '@/lib/schema';
import { constructMetadata } from '@/lib/seo';
import { CheckCircle, Music, Briefcase, GraduationCap, MapPin } from 'lucide-react';

export const metadata = constructMetadata({
    title: 'Zeynep Öğretmen Kimdir? | Eryaman Müzik Dersi',
    description: 'Ankara Müzik ve Güzel Sanatlar Üniversitesi mezunu, 7 yıllık deneyime sahip Zeynep Öğretmen ile tanışın.',
});

export default function AboutPage() {
    const teacherSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Zeynep Öğretmen",
        "jobTitle": "Müzik Öğretmeni",
        "alumniOf": "Ankara Müzik ve Güzel Sanatlar Üniversitesi",
        "description": "Profesyonel piyano, gitar ve yan flüt eğitmeni. Suzuki metodu uygulayıcısı.",
        "url": "https://www.muzikalders.com.tr/hakkimizda-zeynep-ogretmen",
        "image": "https://www.muzikalders.com.tr/zeynep-ogretmen.jpg", // Placeholder
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(teacherSchema) }}
            />

            <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left: Image & Quick Stats */}
                    <div className="space-y-8 sticky top-24">
                        <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl bg-indigo-50 group border-4 border-white">
                            <Image
                                src="/almila-zeynep-muzik-ogretmeni-eryaman.jpg"
                                alt="Almila Zeynep Müzik Öğretmeni"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                            <div className="absolute bottom-0 left-0 p-8 text-white">
                                <h1 className="text-3xl font-bold mb-2">Zeynep Öğretmen</h1>
                                <p className="text-indigo-200 font-medium">Müzik Eğitmeni & Eğitim Koçu</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center">
                                <div className="text-3xl font-bold text-rose-500 mb-1">20+</div>
                                <div className="text-sm text-slate-500">Aktif Öğrenci</div>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center">
                                <div className="text-3xl font-bold text-indigo-600 mb-1">%99</div>
                                <div className="text-sm text-slate-500">Sınav Başarısı</div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="space-y-12">

                        {/* Bio */}
                        <div>
                            <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-4">EĞİTİM & KARİYER</h2>
                            <div className="prose prose-lg text-slate-600">
                                <p className="lead text-xl text-slate-900 font-medium mb-6">
                                    12 yaşından beri müzikle iç içe bir yaşam...
                                </p>
                                <p className="mb-4">
                                    Ankara Müzik ve Güzel Sanatlar Üniversitesi Eğitim Fakültesi'nden 2023 yılında yan flüt ana sanat dalında mezun oldum. Müziğe olan tutkumu pedagojik formasyonumla birleştirerek, öğrencilerime sadece bir enstrüman çalmayı değil, müziği sevmeyi ve anlamayı öğretiyorum.
                                </p>
                                <p>
                                    3 yıldır kolej ve sanat merkezlerinde aktif öğretmenlik yapıyorum. Çağrı Koleji, Liderler Koleji, Beşgen VIP Anadolu Lisesi ve Artemona Sanat Merkezi gibi kurumlarda görev aldım. Şu anda Beşgen VIP'de müzik öğretmeni olarak çalışmaya ve özel ders vermeye devam ediyorum.
                                </p>
                            </div>
                        </div>

                        {/* Experience Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
                                <h3 className="flex items-center gap-2 font-bold text-slate-900 mb-4">
                                    <Briefcase className="h-5 w-5 text-indigo-600" />
                                    Deneyim
                                </h3>
                                <ul className="space-y-3 text-sm text-slate-700">
                                    <li>• 7 Yıl Piyano & Gitar Eğitimi</li>
                                    <li>• 5 Yıl Yan Flüt Eğitimi</li>
                                    <li>• Suzuki Metodu Uygulayıcısı</li>
                                    <li>• Bireysel & 2 Kişilik Şan Dersleri</li>
                                </ul>
                            </div>

                            <div className="bg-rose-50 p-6 rounded-2xl border border-rose-100">
                                <h3 className="flex items-center gap-2 font-bold text-slate-900 mb-4">
                                    <GraduationCap className="h-5 w-5 text-rose-600" />
                                    Başarılar
                                </h3>
                                <ul className="space-y-3 text-sm text-slate-700">
                                    <li>• Bilsem & Konservatuvar Hazırlık</li>
                                    <li>• Güzel Sanatlar Lisesi Hazırlık</li>
                                    <li>• Müzik Öğretmenliği Hazırlık</li>
                                    <li>• Yıl Sonu Konser Organizasyonları</li>
                                </ul>
                            </div>
                        </div>

                        {/* Approach */}
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Eğitim Yaklaşımım</h2>
                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 mt-1">
                                        <CheckCircle className="h-6 w-6 text-green-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Bireysel Odaklı</h4>
                                        <p className="text-slate-600">Her öğrencinin öğrenme hızı ve ilgi alanı farklıdır. Ezberci değil, kavrayıcı bir yöntem izliyorum.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 mt-1">
                                        <CheckCircle className="h-6 w-6 text-green-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Suzuki Metodu</h4>
                                        <p className="text-slate-600">"Yeteneğin eğitimi erken yaşta başlar" prensibiyle, duyarak ve taklit ederek öğrenmeyi destekliyorum.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 mt-1">
                                        <CheckCircle className="h-6 w-6 text-green-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Yaş Aralığı</h4>
                                        <p className="text-slate-600">6 yaşından 58 yaşına kadar geniş bir öğrenci yelpazem var. Öğrenmenin yaşı yoktur!</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="bg-slate-900 text-white p-8 rounded-3xl">
                            <div className="flex items-start gap-4">
                                <MapPin className="h-8 w-8 text-rose-400 mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Lokasyon</h3>
                                    <p className="text-slate-300 leading-relaxed mb-4">
                                        Dersler genellikle Ankara / Eryaman bölgesindeki stüdyomuzda veya anlaşmalı sanat merkezlerinde yapılmaktadır. Çevre ilçelerden (Etimesgut, Sincan, Yenimahalle) ulaşım kolaydır.
                                    </p>
                                    <p className="text-sm text-slate-400">
                                        * Talep üzerine online ders veya evde ders seçenekleri değerlendirilebilir.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </>
    );
}
