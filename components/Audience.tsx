import Image from 'next/image';

const audiences = [
    {
        title: 'Çocuklar İçin Müzik',
        image: '/cocuklar.png',
        description: 'Küçük yaş grupları için oyun tabanlı öğrenme, ritim duygusu ve enstrüman sevgisi geliştirme.',
    },
    {
        title: 'Gençler ve Sınav Hazırlık',
        image: '/gencler.png',
        description: 'Güzel Sanatlar, Konservatuvar ve Müzik Öğretmenliği bölümlerine akademik düzeyde hazırlık.',
    },
    {
        title: 'Yetişkinler İçin Hobi',
        image: '/yetiskinler.png',
        description: 'İş hayatının stresinden uzaklaşmak ve hayalini kurduğunuz enstrümanı keyifle çalmak için.',
    },
    {
        title: 'İleri Seviye Müzisyenlik',
        image: '/ileri-seviye.png',
        description: 'Mevcut yeteneklerinizi profesyonel seviyeye taşımak için teknik ve teorik derinleşme.',
    }
];

export default function Audience() {
    return (
        <section className="py-24 bg-slate-50 relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-100 skew-x-12 transform origin-top-right opacity-50 pointer-events-none" />

            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 items-start">

                    <div className="lg:w-1/3 space-y-6 sticky top-24">
                        <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold tracking-wider uppercase">
                            HEDEF KİTLE
                        </span>
                        <h2 className="text-4xl font-bold text-slate-900 leading-tight">
                            Eğitimlerim <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-rose-500">
                                Kimler İçin Uygun?
                            </span>
                        </h2>
                        <p className="text-lg text-slate-600">
                            Müziğin yaşı ve sınırı yoktur. Her bireyin öğrenme hızına ve hedeflerine özel programlarla yanınızdayım.
                        </p>
                    </div>

                    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                        {audiences.map((item, index) => (
                            <div
                                key={index}
                                className={`relative group p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 mt-16`}
                            >
                                <div className="absolute -top-24 -right-12 w-64 h-64 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 pointer-events-none z-20">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <div className="relative z-10 pt-4">
                                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-500 leading-relaxed text-sm max-w-[200px]">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
